import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <svg
      className={cn('text-primary-600', className)}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Leaf shape representing nature */}
      <path
        d="M20 2C20 2 8 8 8 20C8 28 12 32 20 32C28 32 32 28 32 20C32 8 20 2 20 2Z"
        fill="currentColor"
        fillOpacity="0.8"
      />
      {/* Tribal pattern inside */}
      <path
        d="M20 6C20 6 12 10 12 20C12 26 15 28 20 28C25 28 28 26 28 20C28 10 20 6 20 6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeOpacity="0.6"
      />
      {/* Center dot representing the heart of Jharkhand */}
      <circle
        cx="20"
        cy="20"
        r="3"
        fill="currentColor"
        fillOpacity="0.9"
      />
      {/* Small decorative elements */}
      <circle
        cx="20"
        cy="12"
        r="1"
        fill="currentColor"
        fillOpacity="0.7"
      />
      <circle
        cx="20"
        cy="28"
        r="1"
        fill="currentColor"
        fillOpacity="0.7"
      />
      <circle
        cx="12"
        cy="20"
        r="1"
        fill="currentColor"
        fillOpacity="0.7"
      />
      <circle
        cx="28"
        cy="20"
        r="1"
        fill="currentColor"
        fillOpacity="0.7"
      />
    </svg>
  )
}
