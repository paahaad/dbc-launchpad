"use client"

import Page from '@/components/ui/Page/Page'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  CheckCircleIcon
} from '@heroicons/react/24/outline'
export default function Support() {

  return (
    <Page>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Help & Support</h1>
        </div>

        {/* Contact Support & Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-transparent border-white">
            <CardHeader>
              <CardTitle className="text-2xl">Contact Support</CardTitle>
              <p className="text-gray-300">
                Need help? Get in touch with our support team.
              </p>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:dev@gorbagana.wtf"
                className="inline-flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white rounded-lg p-3 transition-colors font-medium"
              >
                📧 Report an Issue
              </a>
              <p className="text-sm text-gray-400 mt-2 text-center">
                dev@gorbagana.wtf
              </p>
            </CardContent>
          </Card>

          <Card className="bg-transparent border-white">
            <CardHeader>
              <CardTitle className="text-2xl">Connect With Us</CardTitle>
              <p className="text-gray-300">
                Join our community and stay updated.
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <a
                  href="https://x.com/Gorbagana_chain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-blue-400">𝕏</span>
                    <span>Twitter</span>
                  </div>
                  <span className="text-gray-400 text-sm">@Gorbagana_chain</span>
                </a>
                
                <a
                  href="https://github.com/gorbagana-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-gray-300">⚡</span>
                    <span>GitHub</span>
                  </div>
                  <span className="text-gray-400 text-sm">@gorbagana-dev</span>
                </a>
                
                <a
                  href="https://t.me/gorbagana_portal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-blue-400">✈️</span>
                    <span>Telegram</span>
                  </div>
                  <span className="text-gray-400 text-sm">@gorbagana_portal</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Status & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-transparent border-white">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-green-400" />
                System Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Platform</span>
                  <Badge className="bg-green-500">Operational</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Trading</span>
                  <Badge className="bg-green-500">Operational</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Wallet Connection</span>
                  <Badge className="bg-green-500">Operational</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-transparent border-white">
            <CardHeader>
              <CardTitle className="text-lg">Useful Links</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <a href="#" className="block text-blue-400 hover:text-blue-300 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="block text-blue-400 hover:text-blue-300 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block text-blue-400 hover:text-blue-300 transition-colors">
                  Trading Guidelines
                </a>
                <a href="#" className="block text-blue-400 hover:text-blue-300 transition-colors">
                  Security Best Practices
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Page>
  )
}
