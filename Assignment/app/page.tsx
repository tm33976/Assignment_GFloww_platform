import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import TestimonialSlider from "@/components/testimonial-slider"
import TestimonialManager from "@/components/testimonial-manager"
import DetailedProfileSection from "@/components/detailed-profile-section"
import SignUpForm from "@/components/signup-form"

import { ArrowRight, Briefcase, Clock, Globe, ShieldCheck, Sparkles, WandSparkles, Zap } from "lucide-react"




const stats = [
  { label: "Creative freelancers", value: "40K+" },
  { label: "Projects posted monthly", value: "12K" },
  { label: "Countries represented", value: "120+" },
]


const featureHighlights = [
  {
    icon: WandSparkles,
    title: "AI Talent Match",
    description:
      "Smart recommendations pair clients with top-fit freelancers based on project goals, past delivery, and style.",
  },
  {
    icon: Zap,
    title: "Real-Time Availability",
    description:
      "Instantly see who is available this week so you can book experts quickly and reduce project kickoff delays.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Payments",
    description:
      "Milestone-based protection and transparent payouts ensure safer collaboration for both freelancers and clients.",
  },
]

const productUpdates = ["AI brief assistant", "One-click portfolio import", "Milestone escrow", "Verified creator profiles"]


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
                  <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold text-base px-8">
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
                    <div key={item.label} className="rounded-xl border border-white/25 bg-white/10 px-4 py-3 backdrop-blur-sm">
                      <p className="text-2xl font-bold leading-none">{item.value}</p>
                      <p className="mt-1 text-sm text-emerald-50">{item.label}</p>
                    </div>
                  ))}
                </div>

               


              


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
              GigFloww is the premier platform connecting creative professionals with clients worldwide. Our mission is
              to streamline the gig economy experience, making it easier for talented individuals to find work and for
              businesses to discover exceptional talent.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">Why Choose GigFloww</h2>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="group rounded-2xl border border-emerald-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-4 w-fit rounded-full bg-emerald-100 p-3 transition-colors group-hover:bg-emerald-200">
                  <Globe className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Global Reach</h3>
                <p className="text-slate-600">
                  Connect with clients from around the world and expand your professional network beyond geographical
                  boundaries.
                </p>
              </div>

              <div className="group rounded-2xl border border-emerald-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-4 w-fit rounded-full bg-emerald-100 p-3 transition-colors group-hover:bg-emerald-200">
                  <Briefcase className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Diverse Opportunities</h3>
                <p className="text-slate-600">
                  Find projects that match your skills and interests, from one-time gigs to long-term collaborations.
                </p>
              </div>

              <div className="group rounded-2xl border border-emerald-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-4 w-fit rounded-full bg-emerald-100 p-3 transition-colors group-hover:bg-emerald-200">
                  <Clock className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Flexible Schedule</h3>
                <p className="text-slate-600">
                  Work on your own terms and create a schedule that fits your lifestyle and professional goals.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" className="border-emerald-600 text-emerald-700 hover:bg-emerald-50">
                Learn More About Our Features
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">What Our Users Say</h2>
            <TestimonialSlider />
            <div className="mt-12">
              <TestimonialManager />
            </div>
          </div>
        </section>

        <DetailedProfileSection />

        {/* Sign Up Section */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="container mx-auto max-w-6xl">
            <div className="rounded-3xl bg-gradient-to-r from-teal-600 to-emerald-600 p-8 md:p-12 shadow-xl">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4 text-white">Join Our Community Today</h2>
                  <p className="text-white text-lg opacity-90 mb-6">
                    Take the first step toward a more flexible and rewarding career. Sign up now to start exploring
                    opportunities.
                  </p>
                  <ul className="text-white space-y-2">
                    <li className="flex items-center">
                      <span className="mr-2">✓</span> Free account creation
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span> Build your professional profile
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span> Connect with potential clients
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 rounded-2xl bg-white p-6 shadow-2xl">
                  <SignUpForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">GigFloww</h3>
              <p className="text-slate-300 max-w-xs">Empowering creative professionals to thrive in the gig economy.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3">Platform</h4>
                <ul className="space-y-2 text-slate-300">
                  <li>How it Works</li>
                  <li>Pricing</li>
                  <li>FAQ</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">Company</h4>
                <ul className="space-y-2 text-slate-300">
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>Blog</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">Legal</h4>
                <ul className="space-y-2 text-slate-300">
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                  <li>Cookie Policy</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
            <p>© {new Date().getFullYear()} GigFloww. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
