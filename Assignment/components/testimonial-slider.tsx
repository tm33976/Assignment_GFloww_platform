"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John",
    role: "Graphic Designer",
    company: "Freelance",
    content:
      "GigFloww has transformed my freelance career. I've connected with amazing clients and doubled my income in just 6 months!",
    rating: 5,
    avatar: "https://static.vecteezy.com/system/resources/previews/024/183/502/non_2x/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg",
  },
  {
    id: 2,
    name: "Tushar",
    role: "Web Developer",
    company: "CodeCraft Studios",
    content:
      "The platform is intuitive and the client matching algorithm is spot on. I've found consistent work that aligns perfectly with my skills.",
    rating: 5,
    avatar: "data:image/jpeg;base64,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",
  },
  {
    id: 3,
    name: "Ateef",
    role: "Content Writer",
    company: "WordSmith Media",
    content:
      "As someone new to freelancing, GigFloww made it easy to establish myself. The support team is incredibly helpful and responsive.",
    rating: 4,
    avatar: "https://static.vecteezy.com/system/resources/previews/024/183/525/non_2x/avatar-of-a-man-portrait-of-a-young-guy-illustration-of-male-character-in-modern-color-style-vector.jpg",
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }, [])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoPlaying, nextSlide])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mb-4 object-cover"
                    />
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white border border-gray-200 shadow-md hover:bg-gray-50 z-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white border border-gray-200 shadow-md hover:bg-gray-50 z-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-emerald-600" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
