import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, BookOpen, Newspaper, Megaphone, PenTool, MessageCircle } from "lucide-react"

export default function WritingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">Content Writing Services</h1>
                <p className="text-lg md:text-xl opacity-90">
                  Connect with professional writers to create compelling content that engages your audience and drives
                  results.
                </p>
                <div className="pt-4">
                  <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold text-lg px-8">
                    Find a Writer
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4858.jpg"
                  alt="Content writing professionals at work"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Writing Services</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                    <FileText className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Blog Writing</h3>
                  <p className="text-gray-600 mb-4">
                    Engaging blog content that attracts readers, builds authority, and drives organic traffic.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> SEO-Optimized Posts
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Industry Insights
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> How-to Guides
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Thought Leadership
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                    <BookOpen className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Website Content</h3>
                  <p className="text-gray-600 mb-4">
                    Compelling website copy that communicates your value proposition and converts visitors.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Homepage Copy
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> About Us Pages
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Service Descriptions
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Landing Pages
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                    <Megaphone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Marketing Copy</h3>
                  <p className="text-gray-600 mb-4">
                    Persuasive marketing content that drives engagement and conversions across channels.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Email Campaigns
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Ad Copy
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Sales Materials
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Product Descriptions
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                    <Newspaper className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Technical Writing</h3>
                  <p className="text-gray-600 mb-4">
                    Clear, concise technical documentation and content for complex products and services.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> User Manuals
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Technical Guides
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> API Documentation
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Knowledge Base Articles
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                    <PenTool className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Creative Writing</h3>
                  <p className="text-gray-600 mb-4">
                    Imaginative storytelling and creative content that captivates and inspires your audience.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Brand Stories
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Creative Narratives
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Scriptwriting
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Creative Campaigns
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                    <MessageCircle className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Copywriting</h3>
                  <p className="text-gray-600 mb-4">
                    Persuasive copy that drives action and converts prospects into customers.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Sales Pages
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Email Sequences
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Call-to-Actions
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Conversion Copy
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
                <h3 className="text-xl font-bold mb-3 text-gray-800">Brief Your Project</h3>
                <p className="text-gray-600">
                  Describe your content needs, target audience, and specific requirements in detail.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Match with Writers</h3>
                <p className="text-gray-600">
                  Review profiles and samples from qualified writers to find the perfect match.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Review Drafts</h3>
                <p className="text-gray-600">
                  Receive and review content drafts, providing feedback for any necessary revisions.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Publish & Succeed</h3>
                <p className="text-gray-600">
                  Receive your finalized content, ready to publish and drive results for your business.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button className="bg-emerald-600 hover:bg-emerald-700">Post a Writing Project</Button>
            </div>
          </div>
        </section>

        {/* Featured Writers */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Featured Writers</h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <img
                  src="https://img.freepik.com/premium-vector/actress-vector-character-illustration-flat-style_1033579-56640.jpg"
                  alt="Writer profile"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold mb-1 text-gray-800">Fatima</h3>
                <p className="text-emerald-600 mb-3">Content Strategist</p>
                <div className="flex justify-center space-x-1 mb-3">
                  <span className="text-yellow-400">★★★★★</span>
                </div>
                <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  View Profile
                </Button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYgpNGdcXbYNpg1tiSt40VHKeLzfQ6x--_s-h1VwAN2U-X-ZymHbSihblKSuCm10RM5V4&usqp=CAU"
                  alt="Writer profile"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold mb-1 text-gray-800">Dravind</h3>
                <p className="text-emerald-600 mb-3">Technical Writer</p>
                <div className="flex justify-center space-x-1 mb-3">
                  <span className="text-yellow-400">★★★★★</span>
                </div>
                <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  View Profile
                </Button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <img
                  src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4842.jpg?w=360"
                  alt="Writer profile"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold mb-1 text-gray-800">Vaibhav</h3>
                <p className="text-emerald-600 mb-3">Copywriter</p>
                <div className="flex justify-center space-x-1 mb-3">
                  <span className="text-yellow-400">★★★★★</span>
                </div>
                <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  View Profile
                </Button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <img
                  src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4856.jpg"
                  alt="Writer profile"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold mb-1 text-gray-800">Aman</h3>
                <p className="text-emerald-600 mb-3">Blog Writer</p>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Create Compelling Content?</h2>
            <p className="text-xl mb-8 opacity-90">
              Connect with professional writers and start producing content that resonates with your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                Post a Project
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-emerald-700">
                Browse Writers
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
