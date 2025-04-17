import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart, TrendingUp, Target, Share2, LineChart, MessageSquare } from "lucide-react"

export default function MarketingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">Digital Marketing Services</h1>
                <p className="text-lg md:text-xl opacity-90">
                  Connect with expert marketers to grow your brand, increase traffic, and drive conversions.
                </p>
                <div className="pt-4">
                  <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold text-lg px-8">
                    Find a Marketer
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_hybrid&w=740"
                  alt="Digital marketing professionals at work"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Marketing Services</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                    <TrendingUp className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">SEO & SEM</h3>
                  <p className="text-gray-600 mb-4">
                    Improve your search engine visibility and drive targeted traffic to your website.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Keyword Research
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> On-Page SEO
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Link Building
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Google Ads Management
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                    <Share2 className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Social Media Marketing</h3>
                  <p className="text-gray-600 mb-4">
                    Build your brand presence and engage with your audience across social platforms.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Social Media Strategy
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Content Creation
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Community Management
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Paid Social Campaigns
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                    <MessageSquare className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Content Marketing</h3>
                  <p className="text-gray-600 mb-4">
                    Create valuable content that attracts, engages, and converts your target audience.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Content Strategy
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Blog Writing
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Ebooks & Whitepapers
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Content Distribution
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                    <Target className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">PPC Advertising</h3>
                  <p className="text-gray-600 mb-4">
                    Drive immediate traffic and conversions with targeted pay-per-click campaigns.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Campaign Strategy
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Ad Creation
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Bid Management
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
                    <BarChart className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Analytics & Reporting</h3>
                  <p className="text-gray-600 mb-4">
                    Track, analyze, and optimize your marketing performance with data-driven insights.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> KPI Tracking
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Custom Dashboards
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Conversion Analysis
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> ROI Reporting
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                    <LineChart className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Growth Marketing</h3>
                  <p className="text-gray-600 mb-4">
                    Accelerate your business growth with data-driven, experimental marketing approaches.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Growth Strategy
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> A/B Testing
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Funnel Optimization
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-emerald-600">✓</span> Retention Marketing
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
                <h3 className="text-xl font-bold mb-3 text-gray-800">Define Your Goals</h3>
                <p className="text-gray-600">
                  Clearly outline your marketing objectives, target audience, and desired outcomes.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Connect with Marketers</h3>
                <p className="text-gray-600">
                  Browse profiles of experienced marketers and select the best match for your needs.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Execute Strategy</h3>
                <p className="text-gray-600">
                  Work with your marketer to implement campaigns and track performance metrics.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Measure & Optimize</h3>
                <p className="text-gray-600">
                  Analyze results, refine your approach, and scale successful marketing initiatives.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button className="bg-emerald-600 hover:bg-emerald-700">Post a Marketing Project</Button>
            </div>
          </div>
        </section>

        {/* Featured Marketers */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Featured Marketers</h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <img
                  src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-173524.jpg"
                  alt="Marketer profile"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold mb-1 text-gray-800">Rahul</h3>
                <p className="text-emerald-600 mb-3">SEO Specialist</p>
                <div className="flex justify-center space-x-1 mb-3">
                  <span className="text-yellow-400">★★★★★</span>
                </div>
                <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  View Profile
                </Button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <img
                  src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4866.jpg?semt=ais_hybrid&w=740"
                  alt="Marketer profile"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold mb-1 text-gray-800">Mark</h3>
                <p className="text-emerald-600 mb-3">Social Media Manager</p>
                <div className="flex justify-center space-x-1 mb-3">
                  <span className="text-yellow-400">★★★★★</span>
                </div>
                <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  View Profile
                </Button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <img
                  src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4861.jpg"
                  alt="Marketer profile"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold mb-1 text-gray-800">Salman </h3>
                <p className="text-emerald-600 mb-3">PPC Specialist</p>
                <div className="flex justify-center space-x-1 mb-3">
                  <span className="text-yellow-400">★★★★★</span>
                </div>
                <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  View Profile
                </Button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <img
                  src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4858.jpg"
                  alt="Marketer profile"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold mb-1 text-gray-800">Raveen</h3>
                <p className="text-emerald-600 mb-3">Content Strategist</p>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Business?</h2>
            <p className="text-xl mb-8 opacity-90">
              Connect with expert marketers and start driving real results for your brand today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                Post a Project
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-emerald-700">
                Browse Marketers
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
