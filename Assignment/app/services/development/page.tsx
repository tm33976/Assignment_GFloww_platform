import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Globe, Server, Database, Smartphone, Cpu } from "lucide-react"

export default function DevelopmentPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">Web Development Services</h1>
                <p className="text-lg md:text-xl opacity-90">
                  Connect with skilled developers to build powerful, scalable web applications and websites.
                </p>
                <div className="pt-4">
                  <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold text-lg px-8">
                    Find a Developer
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://img.freepik.com/premium-vector/professional-male-avatar-profile-picture-employee-work_1322206-66590.jpg"
                  alt="Web development professionals at work"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Development Services</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                    <Globe className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Website Development</h3>
                  <p className="text-gray-600 mb-4">
                    Custom website development services to create responsive, user-friendly websites.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Business Websites
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> E-commerce Stores
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Landing Pages
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Portfolio Sites
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                    <Code className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Frontend Development</h3>
                  <p className="text-gray-600 mb-4">
                    Expert frontend development using modern frameworks and libraries.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> React.js
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Vue.js
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Angular
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Next.js
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                    <Server className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Backend Development</h3>
                  <p className="text-gray-600 mb-4">
                    Robust backend solutions to power your applications and handle complex business logic.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Node.js
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Python/Django
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Ruby on Rails
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> PHP/Laravel
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                    <Database className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Database Development</h3>
                  <p className="text-gray-600 mb-4">
                    Database design, optimization, and management services for efficient data storage.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> SQL Databases
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> NoSQL Databases
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Database Migration
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Performance Optimization
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                    <Smartphone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Mobile App Development</h3>
                  <p className="text-gray-600 mb-4">
                    Cross-platform and native mobile app development for iOS and Android.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> React Native
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Flutter
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Native iOS (Swift)
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Native Android (Kotlin)
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                    <Cpu className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">API Development</h3>
                  <p className="text-gray-600 mb-4">
                    Custom API development and integration services to connect your systems.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> RESTful APIs
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> GraphQL
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Third-party API Integration
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> API Documentation
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">How It Works</h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Post Your Project</h3>
                <p className="text-gray-600">
                  Describe your development needs, technical requirements, budget, and timeline.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Review Proposals</h3>
                <p className="text-gray-600">
                  Browse proposals from qualified developers and select the best match for your project.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Collaborate</h3>
                <p className="text-gray-600">
                  Work closely with your developer, provide feedback, and track progress through milestones.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Launch</h3>
                <p className="text-gray-600">
                  Receive your completed project, final code, and documentation for a successful launch.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button className="bg-emerald-600 hover:bg-emerald-700">Post a Development Project</Button>
            </div>
          </div>
        </section>

        {/* Featured Developers */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Featured Developers</h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <img
                  src="https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_hybrid&w=740
                  "
                  alt="Developer profile"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold mb-1 text-gray-800">Nakul</h3>
                <p className="text-emerald-600 mb-3">Full Stack Developer</p>
                <div className="flex justify-center space-x-1 mb-3">
                  <span className="text-yellow-400">★★★★★</span>
                </div>
                <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  View Profile
                </Button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <img
                  src="https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_hybrid&w=740"
                  alt="Developer profile"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold mb-1 text-gray-800">Rohit</h3>
                <p className="text-emerald-600 mb-3">Frontend Developer</p>
                <div className="flex justify-center space-x-1 mb-3">
                  <span className="text-yellow-400">★★★★★</span>
                </div>
                <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  View Profile
                </Button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <img
                  src="https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_hybrid&w=740"
                  alt="Developer profile"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold mb-1 text-gray-800">Albert</h3>
                <p className="text-emerald-600 mb-3">Backend Developer</p>
                <div className="flex justify-center space-x-1 mb-3">
                  <span className="text-yellow-400">★★★★★</span>
                </div>
                <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  View Profile
                </Button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <img
                  src="https://img.freepik.com/premium-vector/business-woman-character-vector-illustration_1133257-2432.jpg"
                  alt="Developer profile"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold mb-1 text-gray-800">Priya Patel</h3>
                <p className="text-emerald-600 mb-3">Mobile App Developer</p>
                <div className="flex justify-center space-x-1 mb-3">
                  <span className="text-yellow-400">★★★★★</span>
                </div>
                <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  View Profile
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-emerald-600 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Development Project?</h2>
            <p className="text-xl mb-8 opacity-90">
              Connect with talented developers and build your next digital solution today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                Post a Project
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-emerald-700">
                Browse Developers
              </Button>
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
