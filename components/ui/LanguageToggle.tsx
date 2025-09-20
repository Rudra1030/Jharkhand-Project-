'use client'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'
import { Globe, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
]

export function LanguageToggle() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()
  
  const selectedLang = languages.find(lang => lang.code === locale) || languages[0]

  const handleLanguageChange = (lang: typeof languages[0]) => {
    setIsOpen(false)
    
    // Remove the current locale from the pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'
    
    // Navigate to the new locale
    router.push(`/${lang.code}${pathWithoutLocale}`)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200',
          'text-neutral-700 hover:text-primary-600 hover:bg-neutral-50'
        )}
      >
        <Globe className="h-4 w-4" />
        <span>{selectedLang.flag}</span>
        <span className="hidden sm:inline">{selectedLang.name}</span>
        <ChevronDown className="h-3 w-3" />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-lg border border-neutral-200 z-20">
            <div className="py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang)}
                  className={cn(
                    'w-full flex items-center space-x-3 px-4 py-2 text-sm text-left transition-colors duration-200',
                    selectedLang.code === lang.code
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-neutral-700 hover:bg-neutral-50'
                  )}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span>{lang.name}</span>
                  {selectedLang.code === lang.code && (
                    <div className="ml-auto w-2 h-2 bg-primary-600 rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
