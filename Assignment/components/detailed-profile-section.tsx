"use client"

import { useMemo, useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type ProfileData = {
  headline: string
  location: string
  hourlyRate: string
  skills: string
  portfolio: string
  bio: string
}

const initialProfile: ProfileData = {
  headline: "Senior UI/UX Designer for SaaS",
  location: "Bengaluru, India",
  hourlyRate: "35",
  skills: "Figma, Framer, UX Research, Design Systems",
  portfolio: "https://portfolio.example.com",
  bio: "Product designer with 5+ years experience shipping B2B SaaS experiences.",
}

export default function DetailedProfileSection() {
  const [profile, setProfile] = useState<ProfileData>(initialProfile)
  const [saved, setSaved] = useState(false)

  const completion = useMemo(() => {
    const fields = Object.values(profile)
    const filled = fields.filter((field) => field.trim().length > 0).length
    return Math.round((filled / fields.length) * 100)
  }, [profile])

  const updateField = (key: keyof ProfileData, value: string) => {
    setSaved(false)
    setProfile((prev) => ({ ...prev, [key]: value }))
  }

  const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSaved(true)
  }

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Detailed Profile Builder</h2>
            <p className="mt-2 text-slate-600">Create a complete profile so clients can trust and shortlist you faster.</p>
          </div>
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
            Profile Completion: {completion}%
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <form onSubmit={handleSave} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="headline">Professional Headline</Label>
                <Input id="headline" value={profile.headline} onChange={(event) => updateField("headline", event.target.value)} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" value={profile.location} onChange={(event) => updateField("location", event.target.value)} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="hourlyRate">Hourly Rate (USD)</Label>
                <Input id="hourlyRate" value={profile.hourlyRate} onChange={(event) => updateField("hourlyRate", event.target.value)} />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="skills">Skills</Label>
                <Input id="skills" value={profile.skills} onChange={(event) => updateField("skills", event.target.value)} />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="portfolio">Portfolio URL</Label>
                <Input id="portfolio" value={profile.portfolio} onChange={(event) => updateField("portfolio", event.target.value)} />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="bio">Professional Bio</Label>
                <Textarea
                  id="bio"
                  value={profile.bio}
                  onChange={(event) => updateField("bio", event.target.value)}
                  className="min-h-[120px]"
                />
              </div>
            </div>

            <Button type="submit" className="mt-5 bg-emerald-600 hover:bg-emerald-700">
              Save Detailed Profile
            </Button>

            {saved ? (
              <p className="mt-4 inline-flex items-center gap-2 rounded-md bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
                <CheckCircle2 className="h-4 w-4" />
                Profile details saved successfully.
              </p>
            ) : null}
          </form>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">Profile Preview</h3>
            <p className="mt-1 text-sm text-slate-600">This is how clients will view your details.</p>

            <div className="mt-5 space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-lg font-semibold text-slate-900">{profile.headline || "Your headline"}</p>
              <p className="text-sm text-slate-600">{profile.location || "Location not set"}</p>
              <p className="text-sm font-medium text-emerald-700">${profile.hourlyRate || "0"}/hour</p>

              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">Skills</p>
                <p className="mt-1 text-sm text-slate-700">{profile.skills || "No skills added"}</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">Portfolio</p>
                <p className="mt-1 break-all text-sm text-slate-700">{profile.portfolio || "No portfolio URL"}</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">Bio</p>
                <p className="mt-1 text-sm text-slate-700">{profile.bio || "No bio yet"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
