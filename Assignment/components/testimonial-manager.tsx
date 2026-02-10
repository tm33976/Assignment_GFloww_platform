"use client"

import { useMemo, useState } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type UserTestimonial = {
  id: number
  name: string
  role: string
  content: string
  rating: number
}

const initialTestimonials: UserTestimonial[] = [
  {
    id: 1,
    name: "Priya",
    role: "UI Designer",
    content: "I found two long-term international clients within my first month.",
    rating: 5,
  },
  {
    id: 2,
    name: "Arun",
    role: "Frontend Developer",
    content: "The quality of projects and response time from clients is genuinely better.",
    rating: 4,
  },
]

export default function TestimonialManager() {
  const [items, setItems] = useState<UserTestimonial[]>(initialTestimonials)
  const [name, setName] = useState("")
  const [role, setRole] = useState("")
  const [content, setContent] = useState("")
  const [rating, setRating] = useState(5)
  const [error, setError] = useState("")

  const averageRating = useMemo(() => {
    const total = items.reduce((sum, item) => sum + item.rating, 0)
    return (total / items.length).toFixed(1)
  }, [items])

  const addTestimonial = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!name.trim() || !role.trim() || !content.trim()) {
      setError("Please fill all testimonial fields.")
      return
    }

    setError("")

    setItems((prev) => [
      {
        id: Date.now(),
        name: name.trim(),
        role: role.trim(),
        content: content.trim(),
        rating,
      },
      ...prev,
    ])

    setName("")
    setRole("")
    setContent("")
    setRating(5)
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900">Add your testimonial</h3>
        <p className="mt-1 text-sm text-slate-600">Share how GigFloww helped your freelance growth.</p>

        <form onSubmit={addTestimonial} className="mt-5 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="testimonialName">Your name</Label>
            <Input id="testimonialName" value={name} onChange={(event) => setName(event.target.value)} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="testimonialRole">Role</Label>
            <Input id="testimonialRole" value={role} onChange={(event) => setRole(event.target.value)} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="testimonialContent">Testimonial</Label>
            <Textarea
              id="testimonialContent"
              value={content}
              onChange={(event) => setContent(event.target.value)}
              placeholder="Describe your experience..."
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="testimonialRating">Rating (1-5)</Label>
            <Input
              id="testimonialRating"
              type="number"
              min={1}
              max={5}
              value={rating}
              onChange={(event) => setRating(Number(event.target.value) || 1)}
            />
          </div>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
            Add Testimonial
          </Button>
        </form>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-900">Community testimonials</h3>
          <div className="text-sm font-medium text-emerald-700">Avg {averageRating}/5</div>
        </div>

        <div className="mt-5 space-y-4">
          {items.map((item) => (
            <article key={item.id} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-slate-900">{item.name}</p>
                  <p className="text-sm text-slate-600">{item.role}</p>
                </div>
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-700">{item.content}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
