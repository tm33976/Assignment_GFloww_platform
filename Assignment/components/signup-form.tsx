"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Check, AlertCircle } from "lucide-react"

interface FormData {
  name: string
  email: string
  skillCategory: string
  portfolioLink: string
}

interface FormErrors {
  name?: string
  email?: string
  skillCategory?: string
  portfolioLink?: string
}

export default function SignUpForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    skillCategory: "",
    portfolioLink: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.skillCategory) {
      newErrors.skillCategory = "Skill category is required"
    }

    if (
      formData.portfolioLink &&
      !/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(formData.portfolioLink)
    ) {
      newErrors.portfolioLink = "Portfolio link is invalid"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, skillCategory: value }))

    // Clear error when user selects
    if (errors.skillCategory) {
      setErrors((prev) => ({ ...prev, skillCategory: undefined }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)

        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            name: "",
            email: "",
            skillCategory: "",
            portfolioLink: "",
          })
        }, 3000)
      }, 1500)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="bg-green-100 rounded-full p-3 mx-auto w-fit mb-4">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h3>
        <p className="text-gray-600">Your application has been submitted successfully. We'll be in touch soon!</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Sign Up as a Gig Worker</h3>

      <div className="space-y-2">
        <Label htmlFor="name">
          Full Name <span className="text-red-500">*</span>
        </Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className={errors.name ? "border-red-500" : ""}
        />
        {errors.name && (
          <p className="text-red-500 text-sm flex items-center mt-1">
            <AlertCircle className="h-4 w-4 mr-1" /> {errors.name}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">
          Email Address <span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className={errors.email ? "border-red-500" : ""}
        />
        {errors.email && (
          <p className="text-red-500 text-sm flex items-center mt-1">
            <AlertCircle className="h-4 w-4 mr-1" /> {errors.email}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="skillCategory">
          Skill Category <span className="text-red-500">*</span>
        </Label>
        <Select value={formData.skillCategory} onValueChange={handleSelectChange}>
          <SelectTrigger className={errors.skillCategory ? "border-red-500" : ""}>
            <SelectValue placeholder="Select your primary skill" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="design">Design & Creative</SelectItem>
            <SelectItem value="development">Web Development</SelectItem>
            <SelectItem value="marketing">Digital Marketing</SelectItem>
            <SelectItem value="writing">Content Writing</SelectItem>
            <SelectItem value="video">Video Production</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        {errors.skillCategory && (
          <p className="text-red-500 text-sm flex items-center mt-1">
            <AlertCircle className="h-4 w-4 mr-1" /> {errors.skillCategory}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="portfolioLink">Portfolio Link (Optional)</Label>
        <Input
          id="portfolioLink"
          name="portfolioLink"
          value={formData.portfolioLink}
          onChange={handleChange}
          placeholder="https://yourportfolio.com"
          className={errors.portfolioLink ? "border-red-500" : ""}
        />
        {errors.portfolioLink && (
          <p className="text-red-500 text-sm flex items-center mt-1">
            <AlertCircle className="h-4 w-4 mr-1" /> {errors.portfolioLink}
          </p>
        )}
      </div>

      <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 mt-6" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Join GigFloww"}
      </Button>

      <p className="text-xs text-gray-500 text-center mt-4">
        By signing up, you agree to our Terms of Service and Privacy Policy.
      </p>
    </form>
  )
}
