import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import TestimonialSlider from "@/components/testimonial-slider"
import SignUpForm from "@/components/signup-form"
import { ArrowRight, Briefcase, Clock, Globe } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">Your Creative Gig Journey Starts Here</h1>
                <p className="text-lg md:text-xl opacity-90">
                  Connect with clients, showcase your talents, and grow your freelance career on the platform built for
                  creative professionals.
                </p>
                <div className="pt-4">
                  <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold text-lg px-8">
                    Join Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://media.istockphoto.com/id/1404931955/photo/gold-capital-letter-g.jpg?s=612x612&w=0&k=20&c=elG1xlT-ghWmO6qGvHT2oULEIiQvB1OJqOOkGu4YBBs="
                  alt="Creative professionals collaborating"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">About GigFloww</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              GigFloww is the premier platform connecting creative professionals with clients worldwide. Our mission is
              to streamline the gig economy experience, making it easier for talented individuals to find work and for
              businesses to discover exceptional talent.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Why Choose GigFloww</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                  <Globe className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Global Reach</h3>
                <p className="text-gray-600">
                  Connect with clients from around the world and expand your professional network beyond geographical
                  boundaries.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                  <Briefcase className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Diverse Opportunities</h3>
                <p className="text-gray-600">
                  Find projects that match your skills and interests, from one-time gigs to long-term collaborations.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                  <Clock className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Flexible Schedule</h3>
                <p className="text-gray-600">
                  Work on your own terms and create a schedule that fits your lifestyle and professional goals.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                Learn More About Our Features
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">What Our Users Say</h2>
            <TestimonialSlider />
          </div>
        </section>

        {/* Sign Up Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-gradient-to-r from-teal-500 to-emerald-600 rounded-2xl p-8 md:p-12">
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
                <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-lg">
                  <SignUpForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">GigFloww</h3>
              <p className="text-gray-300 max-w-xs">Empowering creative professionals to thrive in the gig economy.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3">Platform</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>How it Works</li>
                  <li>Pricing</li>
                  <li>FAQ</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">Company</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>Blog</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">Legal</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                  <li>Cookie Policy</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} GigFloww. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
