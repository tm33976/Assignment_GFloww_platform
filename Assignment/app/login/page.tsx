"use client"

import { useState } from "react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!email || !password) {
      setError("Please enter your email and password.")
      return
    }

    setError("")
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      alert("Login successful! You can now continue to your dashboard.")
    }, 800)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="container mx-auto max-w-md px-4 py-20">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900">Log In to GigFloww</h1>
          <p className="mt-2 text-sm text-slate-600">Welcome back! Continue managing your gigs and projects.</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="••••••••"
              />
            </div>

            {error ? <p className="text-sm text-red-600">{error}</p> : null}

            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={loading}>
              {loading ? "Logging in..." : "Log In"}
            </Button>
          </form>

          <p className="mt-6 text-sm text-slate-600">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="font-semibold text-emerald-700 hover:text-emerald-800">
              Create one
            </Link>
          </p>
        </div>
      </main>
    </div>
  )
}
