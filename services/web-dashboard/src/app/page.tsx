"use client"

import type React from "react"

import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { User, Lock } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

export default function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState("22673632")
  const [password, setPassword] = useState("Test@123")
  const [isLoading, setIsLoading] = useState(false)

  // Mock credentials for development
  const mockCredentials = {
    "22673632": "Test@123",
    "33456789": "Password@456",
    "44789012": "DevUser#789",
    ADMIN001: "Admin@2025",
    AGENT123: "Field$Agent1",
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call delay
    setTimeout(() => {
      if (mockCredentials[username] === password) {
        toast({
          title: "Login successful",
          description: "Redirecting to dashboard...",
        })
        router.push("/dashboard")
      } else {
        toast({
          title: "Login failed",
          description: "Invalid username or password. Try the mock credentials.",
          variant: "destructive",
        })
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-teal-50 to-teal-100">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src="/placeholder.svg?height=400&width=800"
          width={800}
          height={400}
          alt="County landscape"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-900/70 flex items-center justify-center">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4">
              <Image
                src="/placeholder.svg?height=80&width=80"
                width={80}
                height={80}
                alt="County Emblem"
                className="h-16 w-16"
              />
              <div className="text-white">
                <h1 className="text-3xl font-bold">COUNTY REVENUE</h1>
                <p className="text-sm font-medium">Digital Payment System</p>
              </div>
              <Image
                src="/placeholder.svg?height=80&width=80"
                width={80}
                height={80}
                alt="County Emblem"
                className="h-16 w-16"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-6 py-8">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">WELCOME</h2>
          <p className="mb-6 text-center text-sm text-gray-600">Enter your correct credentials to continue.</p>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium text-gray-700">
                Enter your ID No./User name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your ID or username"
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="pl-10"
                />
              </div>
            </div>

            <p className="text-xs text-gray-500">
              By using our services, you agree to the collection and processing of your data for the purpose of
              enhancing user experience, in accordance with our privacy policy and applicable regulations.
            </p>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg transition-colors"
            >
              {isLoading ? "LOGGING IN..." : "LOGIN"}
            </Button>
          </form>

          <div className="mt-6 text-center text-xs text-gray-500">
            <p>Version: 2.0.1</p>
            <p className="mt-2 text-teal-600">Use username: 22673632 and password: Test@123 for testing</p>
          </div>
        </div>
      </div>
    </div>
  )
}

