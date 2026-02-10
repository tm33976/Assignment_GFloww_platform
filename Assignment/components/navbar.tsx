"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    if (isOpen) {
      setIsServicesOpen(false)
    }
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  const closeMenus = () => {
    setIsOpen(false)
    setIsServicesOpen(false)
  }

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center" onClick={closeMenus}>
              <span className="text-emerald-600 font-bold text-2xl">GigFloww</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-emerald-600 font-medium">
              Home
            </Link>
            <div className="relative">
              <button
                onClick={toggleServices}
                className="text-gray-700 hover:text-emerald-600 font-medium flex items-center"
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-20">
                  <Link
                    href="/services/design"
                    className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Design & Creative
                  </Link>
                  <Link
                    href="/services/development"
                    className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Web Development
                  </Link>
                  <Link
                    href="/services/marketing"
                    className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Digital Marketing
                  </Link>
                  <Link
                    href="/services/writing"
                    className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Content Writing
                  </Link>
                </div>
              )}
            </div>
            <Link href="/about" className="text-gray-700 hover:text-emerald-600 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-emerald-600 font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-emerald-600 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-emerald-600 font-medium py-2" onClick={closeMenus}>
                Home
              </Link>
              <div>
                <button
                  onClick={toggleServices}
                  className="text-gray-700 hover:text-emerald-600 font-medium flex items-center py-2"
                >
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isServicesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link
                      href="/services/design"
                      className="block py-2 text-gray-700 hover:text-emerald-600"
                      onClick={closeMenus}
                    >
                      Design & Creative
                    </Link>
                    <Link
                      href="/services/development"
                      className="block py-2 text-gray-700 hover:text-emerald-600"
                      onClick={closeMenus}
                    >
                      Web Development
                    </Link>
                    <Link
                      href="/services/marketing"
                      className="block py-2 text-gray-700 hover:text-emerald-600"
                      onClick={closeMenus}
                    >
                      Digital Marketing
                    </Link>
                    <Link
                      href="/services/writing"
                      className="block py-2 text-gray-700 hover:text-emerald-600"
                      onClick={closeMenus}
                    >
                      Content Writing
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="/about"
                className="text-gray-700 hover:text-emerald-600 font-medium py-2"
                onClick={closeMenus}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-emerald-600 font-medium py-2"
                onClick={closeMenus}
              >
                Contact
              </Link>
              <div className="pt-4 flex flex-col space-y-3">
                <Button asChild variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 w-full">
                  <Link href="/login" onClick={closeMenus}>Log In</Link>
                </Button>
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700 w-full">
                  <Link href="/signup" onClick={closeMenus}>Sign Up</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
