import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Users, Award, Clock, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About GigFloww</h1>
              <p className="text-lg md:text-xl opacity-90">
                Empowering creative professionals to thrive in the gig economy through meaningful connections and
                opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Eo_circle_green_letter-g.svg/2048px-Eo_circle_green_letter-g.svg.png" alt="GigFloww team" className="rounded-lg shadow-xl" />
              </div>
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
                <p className="text-gray-600">
                  GigFloww was founded in 2020 with a simple mission: to create a platform that truly understands and
                  serves the needs of creative professionals in the gig economy.
                </p>
                <p className="text-gray-600">
                  Our founders, having experienced the challenges of freelancing firsthand, recognized the need for a
                  more supportive, transparent, and efficient marketplace that prioritizes fair compensation and
                  meaningful connections between talent and clients.
                </p>
                <p className="text-gray-600">
                  Today, GigFloww has grown into a thriving community of designers, developers, writers, marketers, and
                  other creative professionals from around the world, all connected through our innovative platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Values</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Community First</h3>
                <p className="text-gray-600">
                  We believe in the power of community and prioritize creating a supportive environment for all our
                  users.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                  <Award className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Quality Work</h3>
                <p className="text-gray-600">
                  We're committed to maintaining high standards and celebrating excellence in creative work.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                  <Clock className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Work-Life Balance</h3>
                <p className="text-gray-600">
                  We promote flexibility and respect for personal time, understanding that balance leads to better
                  creativity.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                  <Globe className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Global Perspective</h3>
                <p className="text-gray-600">
                  We embrace diversity and believe in creating opportunities for creative professionals worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Meet Our Team</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/female-avatar-illustration-download-in-svg-png-gif-file-formats--young-woman-girl-portraits-pack-people-illustrations-6590630.png"
                  alt="Sarah Johnson"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold mb-1 text-gray-800">Sneha</h3>
                <p className="text-emerald-600 mb-3">Co-Founder & CEO</p>
                <p className="text-gray-600">
                  Former freelance designer with a passion for creating better opportunities for creative professionals.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <img
                  src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197908.png"
                  alt="Michael Chen"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold mb-1 text-gray-800">Abhishek</h3>
                <p className="text-emerald-600 mb-3">Co-Founder & CTO</p>
                <p className="text-gray-600">
                  Tech entrepreneur with experience building platforms that connect people and create opportunities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <img
                  src=" https://static.vecteezy.com/system/resources/previews/024/183/535/non_2x/male-avatar-portrait-of-a-young-man-with-glasses-illustration-of-male-character-in-modern-color-style-vector.jpg
                  "
                  alt="Jessica Williams"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold mb-1 text-gray-800">Rohan</h3>
                <p className="text-emerald-600 mb-3">Head of Community</p>
                <p className="text-gray-600">
                  Community builder with a background in content creation and freelance management.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button className="bg-emerald-600 hover:bg-emerald-700">Join Our Team</Button>
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
