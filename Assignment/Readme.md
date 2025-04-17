### GigFloww - Freelance Marketplace Platform

## Table of Contents

- [Overview](#overview)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Features](#features)
- [Navigation System](#navigation-system)
- [Landing Page](#landing-page)
- [Service Categories](#service-categories)
- [Testimonial Slider](#testimonial-slider)
- [Sign-Up Form](#sign-up-form)
- [Contact System](#contact-system)
- [Interactive Map](#interactive-map)
- [Button Component Library](#button-component-library)
- [Dependencies](#dependencies)
- [Development Guidelines](#development-guidelines)
- [Contributing](#contributing)
- [License](#license)

## Overview

GigFloww is a modern freelance marketplace platform designed to connect creative professionals with clients worldwide. The platform focuses on four main service categories: Design & Creative, Web Development, Digital Marketing, and Content Writing. GigFloww provides a seamless user experience with responsive design, interactive components, and a clean, professional interface.

This project was developed using Next.js with the App Router, React, and Tailwind CSS, following modern web development practices and component-based architecture.

## Technologies

- **Frontend Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Component Library**: shadcn/ui
- **Icons**: Lucide React
- **TypeScript**: For type safety and better developer experience
- **Client-Side State Management**: React Hooks (useState, useEffect)

## Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm (v8.0.0 or higher) or yarn (v1.22.0 or higher)
- Git

### Installation

1. Clone the repository:

```shell
git clone https://github.com/tm33976/Assignment_GFloww_platform.git

```

2. Install dependencies:

```shell
npm install
# or
yarn install
```

3. Set up environment variables (if needed):
Create a `.env.local` file in the root directory and add any required environment variables.

### Running the Project

1. Start the development server:

```shell
npm run dev
# or
yarn dev
```

2. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```plaintext
gigfloww/
├── app/                      # Next.js App Router pages
│   ├── about/                # About page
│   ├── button-showcase/      # Button component showcase
│   ├── contact/              # Contact page
│   ├── services/             # Service category pages
│   │   ├── design/           # Design & Creative services
│   │   ├── development/      # Web Development services
│   │   ├── marketing/        # Digital Marketing services
│   │   └── writing/          # Content Writing services
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Home page
├── components/               # Reusable components
│   ├── map.tsx               # Interactive map component
│   ├── navbar.tsx            # Navigation bar component
│   ├── signup-form.tsx       # Sign-up form component
│   ├── testimonial-slider.tsx # Testimonial slider component
│   └── ui/                   # UI components
│       ├── button.tsx        # Button component
│       ├── button-variants.tsx # Custom button variants
│       ├── card.tsx          # Card component
│       ├── input.tsx         # Input component
│       ├── label.tsx         # Label component
│       ├── select.tsx        # Select component
│       └── textarea.tsx      # Textarea component
├── lib/                      # Utility functions
│   └── utils.ts              # Utility functions
├── public/                   # Static assets
├── styles/                   # Global styles
│   └── globals.css           # Global CSS
├── .eslintrc.json           # ESLint configuration
├── .gitignore               # Git ignore file
├── next.config.js           # Next.js configuration
├── package.json             # Project dependencies
├── README.md                # Project documentation
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Features

### Navigation System

#### Functionality

The navigation system provides a responsive menu with dropdown functionality for service categories, allowing users to navigate between different sections of the website.

#### Implementation Files

- `components/navbar.tsx`: Main navigation component
- `app/layout.tsx`: Root layout that includes the navbar on all pages

#### Workflow

1. The navbar is rendered at the top of every page through the root layout
2. On desktop, it displays a horizontal menu with a dropdown for Services
3. On mobile, it collapses into a hamburger menu that expands when clicked
4. The Services dropdown shows four categories: Design & Creative, Web Development, Digital Marketing, and Content Writing
5. Clicking on any navigation item takes the user to the corresponding page
6. The navbar includes login and signup buttons for user authentication

#### Key Implementation Details

\`\`\`typescript
// components/navbar.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from 'lucide-react'

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
          {/* Desktop Navigation */}
          {/* Mobile Menu Button */}
        </div>
        
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            {/* Mobile menu items */}
          </div>
        )}
      </div>
    </nav>
  )
}
\`\`\`

### Landing Page

#### Functionality

The landing page introduces users to the GigFloww platform, showcasing key features, benefits, and a call-to-action to join the platform.

#### Implementation Files

- `app/page.tsx`: Main landing page component

#### Workflow

1. Hero section with a headline, description, and call-to-action button
2. About section explaining the platform's purpose
3. Features section highlighting key benefits of using GigFloww
4. Testimonials section showcasing user feedback
5. Sign-up section with a form for new users to join
6. Footer with additional navigation and information

#### Key Implementation Details

\`\`\`typescript
// app/page.tsx
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import TestimonialSlider from "@/components/testimonial-slider"
import SignUpForm from "@/components/signup-form"
import { ArrowRight, Briefcase, Clock, Globe } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Hero content */}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          {/* About content */}
        </section>

        <section className="py-16 px-4">
          {/* Features content */}
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">What Our Users Say</h2>
            <TestimonialSlider />
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-gradient-to-r from-teal-500 to-emerald-600 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-lg">
                  <SignUpForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-12 px-4">
        {/* Footer content */}
      </footer>
    </div>
  )
}
\`\`\`

### Service Categories

#### Functionality

The service category pages provide detailed information about each type of service offered on the platform, including specific services, how the process works, and featured professionals.

#### Implementation Files

- `app/services/design/page.tsx`: Design & Creative services
- `app/services/development/page.tsx`: Web Development services
- `app/services/marketing/page.tsx`: Digital Marketing services
- `app/services/writing/page.tsx`: Content Writing services

#### Workflow

1. Hero section introducing the service category
2. Services section detailing specific offerings within the category
3. How It Works section explaining the process
4. Featured Professionals section showcasing top talent
5. Call-to-action section encouraging users to post a project or browse professionals