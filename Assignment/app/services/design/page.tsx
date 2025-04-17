import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Palette, ImageIcon, Layout, Figma, PenTool, Layers } from "lucide-react"

export default function DesignPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">Design & Creative Services</h1>
                <p className="text-lg md:text-xl opacity-90">
                  Connect with talented designers and creative professionals to bring your vision to life.
                </p>
                <div className="pt-4">
                  <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold text-lg px-8">
                    Find a Designer
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/024/183/525/non_2x/avatar-of-a-man-portrait-of-a-young-guy-illustration-of-male-character-in-modern-color-style-vector.jpg"
                  alt="Design professionals at work"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Design Services</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                    <Palette className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Graphic Design</h3>
                  <p className="text-gray-600 mb-4">
                    Professional graphic design services for logos, branding, marketing materials, and more.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Logo Design
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Brand Identity
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Marketing Materials
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Social Media Graphics
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                    <Layout className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">UI/UX Design</h3>
                  <p className="text-gray-600 mb-4">
                    User-centered design services to create intuitive and engaging digital experiences.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> User Interface Design
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> User Experience Design
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Wireframing & Prototyping
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Usability Testing
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                    <ImageIcon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Illustration</h3>
                  <p className="text-gray-600 mb-4">
                    Custom illustrations to enhance your brand storytelling and visual communication.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Digital Illustration
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Character Design
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Editorial Illustration
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Icon Design
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                    <Figma className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Web Design</h3>
                  <p className="text-gray-600 mb-4">
                    Beautiful, responsive website designs that engage visitors and drive conversions.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Website Design
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Landing Page Design
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Responsive Design
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Design Systems
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                    <PenTool className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Print Design</h3>
                  <p className="text-gray-600 mb-4">
                    Professional print design services for all your physical marketing needs.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Business Cards
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Brochures & Flyers
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Packaging Design
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Signage & Banners
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                    <Layers className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Motion Graphics</h3>
                  <p className="text-gray-600 mb-4">
                    Engaging motion graphics and animations to bring your brand to life.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Animated Logos
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Explainer Videos
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Social Media Animations
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> UI Animations
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

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Post Your Project</h3>
                <p className="text-gray-600">
                  Describe your design needs, budget, and timeline. Be as specific as possible to attract the right
                  talent.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Review Proposals</h3>
                <p className="text-gray-600">
                  Browse proposals from qualified designers, review portfolios, and select the perfect match for your
                  project.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Get Results</h3>
                <p className="text-gray-600">
                  Collaborate with your chosen designer, provide feedback, and receive your completed design assets.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button className="bg-emerald-600 hover:bg-emerald-700">Post a Design Project</Button>
            </div>
          </div>
        </section>

        {/* Featured Designers */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Featured Designers</h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/024/183/525/non_2x/avatar-of-a-man-portrait-of-a-young-guy-illustration-of-male-character-in-modern-color-style-vector.jpg"
                  alt="Designer profile"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold mb-1 text-gray-800">Rishi</h3>
                <p className="text-emerald-600 mb-3">UI/UX Designer</p>
                <div className="flex justify-center space-x-1 mb-3">
                  <span className="text-yellow-400">★★★★★</span>
                </div>
                <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  View Profile
                </Button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <img
                  src="https://t4.ftcdn.net/jpg/06/43/68/65/360_F_643686558_Efl6HB1ITw98bx1PdAd1wy56QpUTMh47.jpg"
                  alt="Designer profile"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold mb-1 text-gray-800">Alia</h3>
                <p className="text-emerald-600 mb-3">Graphic Designer</p>
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
                  alt="Designer profile"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold mb-1 text-gray-800">Nakul</h3>
                <p className="text-emerald-600 mb-3">Illustrator</p>
                <div className="flex justify-center space-x-1 mb-3">
                  <span className="text-yellow-400">★★★★★</span>
                </div>
                <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  View Profile
                </Button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <img
                  src="https://png.pngtree.com/png-vector/20230903/ourmid/pngtree-man-avatar-isolated-png-image_9935819.png"
                  alt="Designer profile"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold mb-1 text-gray-800">Mukund</h3>
                <p className="text-emerald-600 mb-3">Motion Designer</p>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Design Project?</h2>
            <p className="text-xl mb-8 opacity-90">
              Connect with talented designers and bring your creative vision to life today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                Post a Project
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-emerald-700">
                Browse Designers
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
