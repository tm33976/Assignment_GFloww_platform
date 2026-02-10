import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import TestimonialSlider from "@/components/testimonial-slider"
import TestimonialManager from "@/components/testimonial-manager"
import DetailedProfileSection from "@/components/detailed-profile-section"
import SignUpForm from "@/components/signup-form"

import {
  ArrowRight,
  Briefcase,
  Clock,
  Globe,
  ShieldCheck,
  Sparkles,
  WandSparkles,
  Zap,
} from "lucide-react"

const stats = [
  { label: "Creative freelancers", value: "40K+" },
  { label: "Projects posted monthly", value: "12K" },
  { label: "Countries represented", value: "120+" },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-emerald-600 to-cyan-700 text-white px-4 py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.3),_transparent_45%)]" />
          <div className="absolute -top-16 -left-16 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
          <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

          <div className="relative container mx-auto max-w-6xl">
            <div className="grid items-center gap-14 md:grid-cols-2">
              {/* LEFT COLUMN */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
                  <Sparkles className="h-4 w-4" />
                  New: Portfolio-first profiles for faster hiring
                </div>

                <div className="space-y-5">
                  <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                    Your Creative Gig Journey Starts Here
                  </h1>
                  <p className="max-w-xl text-lg text-emerald-50 md:text-xl">
                    Connect with clients, showcase your talents, and grow your freelance career on the platform built
                    for modern creative professionals.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    size="lg"
                    className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold text-base px-8"
                  >
                    Join Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/60 text-white hover:bg-white/10 hover:text-white bg-transparent"
                  >
                    Explore Services
                  </Button>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {stats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-white/25 bg-white/10 px-4 py-3 backdrop-blur-sm"
                    >
                      <p className="text-2xl font-bold leading-none">{item.value}</p>
                      <p className="mt-1 text-sm text-emerald-50">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* ↑↑↑ THIS DIV WAS MISSING BEFORE */}

              {/* RIGHT COLUMN */}
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-white/20 blur-2xl" />
                <img
                  src="https://media.istockphoto.com/id/1404931955/photo/gold-capital-letter-g.jpg?s=612x612&w=0&k=20&c=elG1xlT-ghWmO6qGvHT2oULEIiQvB1OJqOOkGu4YBBs="
                  alt="Creative professionals collaborating"
                  className="relative w-full rounded-[2rem] border border-white/40 object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">About GigFloww</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
              GigFloww is the premier platform connecting creative professionals with clients worldwide.
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">
              What Our Users Say
            </h2>
            <TestimonialSlider />
            <div className="mt-12">
              <TestimonialManager />
            </div>
          </div>
        </section>

        <DetailedProfileSection />

        {/* Sign Up */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-3xl bg-gradient-to-r from-teal-600 to-emerald-600 p-8 md:p-12 shadow-xl">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    Join Our Community Today
                  </h2>
                  <p className="text-white text-lg opacity-90 mb-6">
                    Take the first step toward a more flexible and rewarding career.
                  </p>
                </div>
                <div className="md:w-1/2 rounded-2xl bg-white p-6 shadow-2xl">
                  <SignUpForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
