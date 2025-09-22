"use client"

import { useState, useEffect, useMemo } from "react"
import { useWallet } from "@jup-ag/wallet-adapter"
import { Connection } from "@solana/web3.js"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/Skeleton"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/Dialog"
import { toast } from "sonner"
import { Copy, Wallet, Coins, User, Eye, EyeOff, Plus, Edit, Save, X, ExternalLink } from "lucide-react"

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
  <div className="space-y-8">
    {/* Profile Header Skeleton */}
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-16 w-16 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
      <div className="text-right space-y-2">
        <Skeleton className="h-8 w-24" />
        <Skeleton className="h-4 w-16" />
      </div>
    </div>

    {/* Tabs Skeleton */}
    <div className="space-y-6">
      <div className="flex space-x-1 bg-neutral-900 border border-neutral-800 rounded-lg p-1">
        <Skeleton className="h-10 flex-1" />
        <Skeleton className="h-10 flex-1" />
      </div>


      {/* Holdings Section Skeleton */}
      <Card className="border-neutral-800 bg-neutral-900/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <Skeleton className="h-6 w-24" />
            <div className="text-right space-y-1">
              <Skeleton className="h-8 w-16" />
              <Skeleton className="h-4 w-20" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <Skeleton className="h-16 w-16 rounded-full mx-auto mb-4" />
            <Skeleton className="h-6 w-32 mx-auto mb-2" />
            <Skeleton className="h-4 w-48 mx-auto" />
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
)

export default function Profile() {
  const { publicKey } = useWallet()
  const address = useMemo(() => publicKey?.toBase58(), [publicKey])
  const [userData, setUserData] = useState<any>(null)
  const [balance, setBalance] = useState(0)
  const [loading, setLoading] = useState(true)
  const [balanceVisible, setBalanceVisible] = useState(true)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [editName, setEditName] = useState("")
  const [updating, setUpdating] = useState(false)
  const [holdings, setHoldings] = useState<any[]>([])
  const [holdingsLoading, setHoldingsLoading] = useState(false)
  const [createdTokens, setCreatedTokens] = useState<any[]>([])
  const [createdTokensLoading, setCreatedTokensLoading] = useState(false)

  useEffect(() => {
    if (address) {
      fetchUserData()
      fetchBalance()
      fetchHoldings()
      fetchCreatedTokens()
    }
  }, [address])

  const fetchUserData = async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/user?address=${address}`)
      if (!res.ok) throw new Error("Failed to fetch user")
      const data = await res.json()
      setUserData(data)
      setEditName(data.name || "")
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

  const fetchHoldings = async () => {
    setHoldingsLoading(true)
    try {
      const res = await fetch(`/api/user-holdings?address=${address}`)
      if (!res.ok) throw new Error("Failed to fetch holdings")
      const data = await res.json()
      setHoldings(data.holdings || [])
    } catch (error) {
      console.error("Error fetching holdings:", error)
      toast.error("Failed to fetch token holdings")
    } finally {
      setHoldingsLoading(false)
    }
  }

  const fetchCreatedTokens = async () => {
    setCreatedTokensLoading(true)
    try {
      const res = await fetch(`/api/user?address=${address}`)
      if (!res.ok) throw new Error("Failed to fetch created tokens")
      const data = await res.json()
      setCreatedTokens(data.launchedTokens || [])
    } catch (error) {
      console.error("Error fetching created tokens:", error)
      toast.error("Failed to fetch created tokens")
    } finally {
      setCreatedTokensLoading(false)
    }
  }

  const updateName = async () => {
    if (!editName.trim()) {
      toast.error("Name cannot be empty")
      return
    }

    setUpdating(true)
    try {
      const res = await fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address, name: editName.trim() }),
      })
      if (!res.ok) throw new Error("Failed to update name")
      toast.success("Name updated successfully")
      setUserData({ ...userData, name: editName.trim() })
      setIsEditOpen(false)
    } catch (error) {
      console.error(error)
      toast.error("Failed to update name")
    } finally {
      setUpdating(false)
    }
  }


  if (!address) {
    return (
      <div className="min-h-screen bg-black">
        <main className="container mx-auto px-4 py-10">
          <Card className="max-w-md mx-auto text-center border-neutral-800 bg-neutral-900/50">
            <CardContent className="pt-6">
              <Wallet className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-xl font-semibold mb-2 text-white">Connect Your Wallet</h2>
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
    <div className="min-h-screen bg-black">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {loading ? (
          <ProfileSkeleton />
        ) : (
          <div className="space-y-8">
            {/* Profile Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16 border-2 border-neutral-700">
                  <AvatarImage src="https://gorbagana.wtf/images/GOR-HD.avif" alt="Profile" />
                  <AvatarFallback className="bg-neutral-800">
                    <User className="h-8 w-8 text-neutral-400" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold text-white">{userData?.name || "Paahaad"}</h1>
                    <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 bg-transparent hover:bg-neutral-800"
                        >
                          <Edit className="h-4 w-4 text-neutral-400" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md bg-neutral-900 border-neutral-800">
                        <DialogHeader>
                          <DialogTitle className="text-white">Edit Username</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <label className="text-sm text-neutral-400 mb-2 block">Username</label>
                            <Input
                              value={editName}
                              onChange={(e) => setEditName(e.target.value)}
                              placeholder="Enter your username"
                              className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500"
                            />
                          </div>
                          <div className="flex justify-end space-x-2">
                            <Button
                              variant="outline"
                              onClick={() => setIsEditOpen(false)}
                              className="border-neutral-700 text-neutral-300 hover:bg-neutral-800"
                            >
                              <X className="h-4 w-4 mr-2" />
                              Cancel
                            </Button>
                            <Button
                              onClick={updateName}
                              disabled={updating || !editName.trim()}
                              className="bg-blue-600 hover:bg-blue-700 text-white"
                            >
                              {updating ? (
                                <div className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent" />
                              ) : (
                                <Save className="h-4 w-4 mr-2" />
                              )}
                              {updating ? "Saving..." : "Save"}
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-400">
                    <code className="bg-neutral-800 px-2 py-1 rounded text-xs">{truncateAddress(address)}</code>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(address)}
                      className="h-6 w-6 p-0 bg-transparent hover:bg-neutral-800"
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-white">
                    {balanceVisible ? `$${balance.toFixed(2)}` : "••••••"}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setBalanceVisible(!balanceVisible)}
                    className="h-8 w-8 p-0 bg-transparent hover:bg-neutral-800"
                  >
                    {balanceVisible ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                  </Button>
                </div>
                <p className="text-sm text-neutral-400">~{balance.toFixed(4)} SOL</p>
              </div>
            </div>

            {/* Tabs Section */}
            <Tabs defaultValue="portfolio" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-neutral-900 border border-neutral-800">
                <TabsTrigger value="portfolio" className="data-[state=active]:bg-neutral-800 data-[state=active]:text-white">
                  Holdings
                </TabsTrigger>
                <TabsTrigger value="activity" className="data-[state=active]:bg-neutral-800 data-[state=active]:text-white">
                  Token Created
                </TabsTrigger>
              </TabsList>

              <TabsContent value="portfolio" className="space-y-6 mt-6">
                {/* Holdings Section */}
                <Card className="border-neutral-800 bg-neutral-900/50">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white">
                        Holdings ({holdings.length})
                      </CardTitle>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-white">
                          {holdingsLoading ? "..." : `${holdings.length} tokens`}
                        </p>
                        <p className="text-sm text-neutral-400">Total Tokens</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {holdingsLoading ? (
                      <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center space-x-4 p-4 bg-neutral-800/50 rounded-lg">
                            <Skeleton className="h-10 w-10 rounded-full" />
                            <div className="flex-1 space-y-2">
                              <Skeleton className="h-4 w-32" />
                              <Skeleton className="h-3 w-20" />
                            </div>
                            <Skeleton className="h-6 w-16" />
                          </div>
                        ))}
                      </div>
                    ) : holdings.length === 0 ? (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 mx-auto mb-4 bg-neutral-800 rounded-full flex items-center justify-center">
                          <Coins className="h-8 w-8 text-neutral-400" />
                        </div>
                        <h3 className="text-lg font-medium text-white mb-2">No Holdings</h3>
                        <p className="text-neutral-400 text-sm">
                          You don't have any tokens in your portfolio yet.
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {holdings.map((holding, index) => (
                          <div key={index} className="flex items-center justify-between p-4 bg-neutral-800/50 rounded-lg hover:bg-neutral-800/70 transition-colors">
                            <div className="flex items-center space-x-4">
                              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                {holding.imageUrl ? (
                                  <img 
                                    src={holding.imageUrl} 
                                    alt={holding.name || holding.symbol || 'Token'}
                                    className="w-10 h-10 rounded-full object-cover"
                                  />
                                ) : (
                                  <Coins className="h-5 w-5 text-white" />
                                )}
                              </div>
                              <div>
                                <p className="text-white font-medium">
                                  {holding.name || holding.symbol || truncateAddress(holding.mintAddress, 8)}
                                </p>
                                <p className="text-sm text-neutral-400">
                                  {holding.symbol && holding.name ? `${holding.symbol} • ` : ''}
                                  {holding.balance.toLocaleString()} tokens
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="text-right">
                                <p className="text-white font-medium">
                                  {holding.balance.toLocaleString()}
                                </p>
                                <p className="text-xs text-neutral-400">
                                  {holding.symbol || 'tokens'}
                                </p>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copyToClipboard(holding.mintAddress)}
                                className="h-6 w-6 p-0 bg-transparent hover:bg-neutral-700"
                              >
                                <Copy className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="activity" className="space-y-6 mt-6">
                <Card className="border-neutral-800 bg-neutral-900/50">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white">
                        Tokens Created ({createdTokens.length})
                      </CardTitle>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-white">
                          {createdTokensLoading ? "..." : `${createdTokens.length} tokens`}
                        </p>
                        <p className="text-sm text-neutral-400">Total Created</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {createdTokensLoading ? (
                      <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center space-x-4 p-4 bg-neutral-800/50 rounded-lg">
                            <Skeleton className="h-10 w-10 rounded-full" />
                            <div className="flex-1 space-y-2">
                              <Skeleton className="h-4 w-32" />
                              <Skeleton className="h-3 w-20" />
                            </div>
                            <Skeleton className="h-6 w-16" />
                          </div>
                        ))}
                      </div>
                    ) : createdTokens.length === 0 ? (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 mx-auto mb-4 bg-neutral-800 rounded-full flex items-center justify-center">
                          <Plus className="h-8 w-8 text-neutral-400" />
                        </div>
                        <h3 className="text-lg font-medium text-white mb-2">No Tokens Created</h3>
                        <p className="text-neutral-400 text-sm">
                          You haven't created any tokens yet. Start building your first token!
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {createdTokens.map((token, index) => (
                          <div key={index} className="flex items-center justify-between p-4 bg-neutral-800/50 rounded-lg hover:bg-neutral-800/70 transition-colors">
                            <div className="flex items-center space-x-4">
                              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                                {token.imageUrl ? (
                                  <img 
                                    src={token.imageUrl} 
                                    alt={token.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                  />
                                ) : (
                                  <Plus className="h-5 w-5 text-white" />
                                )}
                              </div>
                              <div>
                                <p className="text-white font-medium">{token.name}</p>
                                <p className="text-sm text-neutral-400">
                                  {token.symbol} • {new Date(token.createdAt).toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copyToClipboard(token.mintAddress)}
                                className="h-6 w-6 p-0 bg-transparent hover:bg-neutral-700"
                              >
                                <Copy className="h-3 w-3" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => window.open(`https://explorer.solana.com/address/${token.mintAddress}`, '_blank')}
                                className="h-6 w-6 p-0 bg-transparent hover:bg-neutral-700"
                              >
                                <ExternalLink className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </main>
    </div>
  )
}
