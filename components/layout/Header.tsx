'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, MapPin, Calendar, Users, BookOpen, Phone, Globe } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { LanguageToggle } from '@/components/ui/LanguageToggle'
import { SearchBar } from '@/components/ui/SearchBar'

const navigation = [
  { name: 'Home', href: '/', icon: null },
  { name: 'Explore', href: '/explore', icon: MapPin },
  { name: 'Destinations', href: '/destinations', icon: null },
  { name: 'Itineraries', href: '/itineraries', icon: Calendar },
  { name: 'Artisans', href: '/artisans', icon: Users },
  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'Contact', href: '/contact', icon: Phone },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Logo className="h-8 w-8 lg:h-10 lg:w-10" />
            <span className="text-xl lg:text-2xl font-bold text-primary-600">
              Jharkhand Tourism
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-neutral-700 hover:text-primary-600 hover:bg-neutral-50'
                  }`}
                >
                  {item.icon && <item.icon className="h-4 w-4" />}
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <SearchBar />
            <LanguageToggle />
            <Link href="/bookings" className="btn-primary">
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-neutral-700 hover:text-primary-600 hover:bg-neutral-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-neutral-200 bg-white/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-2">
              <SearchBar className="mb-4" />
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-2 px-3 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-neutral-700 hover:text-primary-600 hover:bg-neutral-50'
                    }`}
                  >
                    {item.icon && <item.icon className="h-5 w-5" />}
                    <span>{item.name}</span>
                  </Link>
                )
              })}
              <div className="pt-4 border-t border-neutral-200">
                <div className="flex items-center justify-between">
                  <LanguageToggle />
                  <Link href="/bookings" className="btn-primary">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
