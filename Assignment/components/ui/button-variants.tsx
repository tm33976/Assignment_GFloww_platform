import type React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
  className?: string
  children: React.ReactNode
}

export function PrimaryButton({ className, ...props }: ButtonProps) {
  return <Button className={cn("bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm", className)} {...props} />
}

export function SecondaryButton({ className, ...props }: ButtonProps) {
  return (
    <Button
      variant="secondary"
      className={cn("bg-emerald-100 text-emerald-700 hover:bg-emerald-200 shadow-sm", className)}
      {...props}
    />
  )
}

export function OutlineButton({ className, ...props }: ButtonProps) {
  return (
    <Button
      variant="outline"
      className={cn("border-emerald-600 text-emerald-600 hover:bg-emerald-50", className)}
      {...props}
    />
  )
}

export function DisabledButton({ className, ...props }: ButtonProps) {
  return <Button disabled className={cn("bg-gray-100 text-gray-400 cursor-not-allowed", className)} {...props} />
}

export function ButtonShowcase() {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <PrimaryButton>Primary Button</PrimaryButton>
      <SecondaryButton>Secondary Button</SecondaryButton>
      <OutlineButton>Outline Button</OutlineButton>
      <DisabledButton>Disabled Button</DisabledButton>
    </div>
  )
}
