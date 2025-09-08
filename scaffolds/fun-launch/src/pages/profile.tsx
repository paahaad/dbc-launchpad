"use client"

import { useState, useEffect, useMemo } from "react"
import { useWallet } from "@jup-ag/wallet-adapter"
import { Connection } from "@solana/web3.js"
import { Header } from "../components/Header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/Skeleton"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toast } from "sonner"
import { Copy, ExternalLink, Wallet, Coins, User, RefreshCw } from "lucide-react"

const RPC_URL = process.env.RPC_URL || "https://rpc.gorbagana.wtf"

const truncateAddress = (address: string, chars = 4) => {
  return `${address.slice(0, chars)}...${address.slice(-chars)}`
}

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    toast.success("Copied to clipboard")
  } catch (error) {
    toast.error("Failed to copy")
  }
}

const ProfileSkeleton = () => (
  <div className="space-y-6">
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col items-center space-y-4">
          <Skeleton className="h-24 w-24 rounded-full" />
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-10 w-40" />
        </div>
      </CardContent>
    </Card>

    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-32" />
        </CardHeader>
        <CardContent className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-8 w-24" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-32" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 w-full" />
        </CardContent>
      </Card>
    </div>
  </div>
)

export default function Profile() {
  const { publicKey } = useWallet()
  const address = useMemo(() => publicKey?.toBase58(), [publicKey])
  const [userData, setUserData] = useState<any>(null)
  const [name, setName] = useState("")
  const [balance, setBalance] = useState(0)
  const [loading, setLoading] = useState(true)
  const [updating, setUpdating] = useState(false)
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    if (address) {
      fetchUserData()
      fetchBalance()
    }
  }, [address])

  const fetchUserData = async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/user?address=${address}`)
      if (!res.ok) throw new Error("Failed to fetch user")
      const data = await res.json()
      setUserData(data)
      setName(data.name || "")
    } catch (error) {
      console.error(error)
      toast.error("Failed to load user data")
    } finally {
      setLoading(false)
    }
  }

  const fetchBalance = async () => {
    try {
      const connection = new Connection(RPC_URL, "confirmed")
      const lamports = await connection.getBalance(publicKey!)
      setBalance(lamports / 1e9) // Convert to SOL
    } catch (error) {
      console.error("Error fetching balance:", error)
      toast.error("Failed to fetch balance")
    }
  }

  const updateName = async () => {
    if (!name.trim()) {
      toast.error("Name cannot be empty")
      return
    }

    setUpdating(true)
    try {
      const res = await fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address, name: name.trim() }),
      })
      if (!res.ok) throw new Error("Failed to update name")
      toast.success("Name updated successfully")
      fetchUserData()
    } catch (error) {
      console.error(error)
      toast.error("Failed to update name")
    } finally {
      setUpdating(false)
    }
  }

  const handleRefresh = async () => {
    setRefreshing(true)
    await Promise.all([fetchUserData(), fetchBalance()])
    setRefreshing(false)
    toast.success("Profile refreshed")
  }

  if (!address) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-10">
          <Card className="max-w-md mx-auto text-center">
            <CardContent className="pt-6">
              <Wallet className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-xl font-semibold mb-2">Connect Your Wallet</h2>
              <p className="text-muted-foreground mb-4">
                Please connect your wallet to view your profile and manage your tokens.
              </p>
            </CardContent>
          </Card>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-balance">Hey Gorbagio!</h1>
            <p className="text-muted-foreground">Launch your next trash and see it becoming something great</p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleRefresh}
            disabled={refreshing}
            className="gap-2 bg-transparent"
          >
            <RefreshCw className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>

        {loading ? (
          <ProfileSkeleton />
        ) : (
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="https://gorbagana.wtf/images/GOR-HD.avif" alt="Profile" />
                    <AvatarFallback>
                      <User className="h-12 w-12" />
                    </AvatarFallback>
                  </Avatar>

                  <div className="text-center space-y-2">
                    <h2 className="text-xl font-semibold">{userData?.name || "Anonymous User"}</h2>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <code className="bg-muted px-2 py-1 rounded text-xs">{truncateAddress(address)}</code>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(address)}
                        className="h-6 w-6 p-0 bg-transparent hover:bg-muted/50"
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full max-w-sm">
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="flex-1 bg-transparent border-muted text-foreground placeholder:text-muted-foreground"
                    />
                    <Button size="sm" onClick={updateName} disabled={updating || !name.trim()} className="gap-2 bg-green-600 hover:bg-green-700 text-white">
                      {updating ? <RefreshCw className="h-4 w-4 animate-spin" /> : "Update"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Wallet className="h-4 w-4" />
                    Wallet Balance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{balance.toFixed(4)} SOL</div>
                  <p className="text-xs text-muted-foreground mt-1">Current wallet balance</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Wallet Address</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <code className="text-sm bg-muted px-2 py-1 rounded flex-1 mr-2">
                      {truncateAddress(address, 8)}
                    </code>
                    <div className="flex">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(address)}
                        className="h-8 w-8 p-0 bg-transparent hover:bg-muted/50"
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => window.open(`https://trashscan.xyz/address/${address}`, '_blank')}
                        className="h-8 w-8 p-0 bg-transparent hover:bg-muted/50"
                      >
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Coins className="h-5 w-5" />
                  Created Tokens
                </CardTitle>
                <Badge variant="secondary" className="ml-auto">
                  {userData?.launchedTokens?.length || 0}
                </Badge>
              </CardHeader>
              <CardContent>
                {userData?.launchedTokens?.length > 0 ? (
                  <div className="space-y-3">
                    {userData.launchedTokens.map((token: any) => (
                      <div
                        key={token.id}
                        className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{token.name}</span>
                            <Badge variant="outline" className="text-xs">
                              {token.symbol}
                            </Badge>
                          </div>
                          <code className="text-xs text-muted-foreground">{truncateAddress(token.mintAddress, 6)}</code>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(token.mintAddress)}
                          className="h-8 w-8 p-0 bg-transparent hover:bg-muted/50"
                        >
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Coins className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg font-medium mb-2">No Tokens Created</h3>
                    <p className="text-muted-foreground text-sm">
                      You haven't created any tokens yet. Start building your first token!
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  )
}
