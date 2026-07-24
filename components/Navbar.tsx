'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Moon, Sun } from '@/components/icons'
import { useState, useSyncExternalStore } from 'react'
import Image from "next/image";
import ProfileHoverCard from "@/components/ProfileHoverCard";

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Architecture', href: '/architecture' },
  { label: 'Blog', href: '/blog' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
]

const themeChangeEvent = 'themechange'

function getThemeSnapshot() {
  if (typeof document === 'undefined') {
    return false
  }

  return document.documentElement.classList.contains('dark')
}

function subscribeToThemeChanges(callback: () => void) {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  window.addEventListener('storage', callback)
  window.addEventListener(themeChangeEvent, callback)
  mediaQuery.addEventListener('change', callback)

  return () => {
    window.removeEventListener('storage', callback)
    window.removeEventListener(themeChangeEvent, callback)
    mediaQuery.removeEventListener('change', callback)
  }
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const isDark = useSyncExternalStore(subscribeToThemeChanges, getThemeSnapshot, () => false)
  const pathname = usePathname()

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    }

    window.dispatchEvent(new Event(themeChangeEvent))
  }

  return (
    <nav aria-label="Primary navigation" className="print:hidden sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
            <ProfileHoverCard />
          {/*
          <Link href="/" className="font-bold text-xl text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            SP
          </Link>
          */}
          {/* Profile Hover Card 
            <div className="relative group">
                <Link href="/" className="flex items-center gap-3">
                    <Image
                    src="/profile.png"
                    alt="Sibasis Pradhan"
                    width={44}
                    height={44}
                    priority
                    className="rounded-full border-2 border-blue-600 object-cover transition-transform duration-300 group-hover:scale-110 shadow-lg"
                    />

                    <span className="hidden md:block font-bold text-xl text-slate-900 dark:text-white">
                    SP
                    </span>
                </Link>

                //Profile Card
                <div
                    className="
                    invisible opacity-0 scale-95
                    group-hover:visible group-hover:opacity-100 group-hover:scale-100
                    transition-all duration-300
                    absolute top-14 left-0 z-50
                    "
                >
                    <div className="w-72 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden">

                    <div className="h-20 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600" />

                    <div className="-mt-12 flex justify-center">
                        <Image
                        src="/profile.png"
                        alt="Sibasis Pradhan"
                        width={96}
                        height={96}
                        className="rounded-full border-4 border-white dark:border-slate-900 shadow-xl object-cover"
                        />
                    </div>

                    <div className="p-5 text-center">

                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        Sibasis Pradhan
                        </h3>

                        <p className="text-blue-600 dark:text-cyan-400 font-medium mt-1">
                        Full Stack Tech Lead
                        </p>

                        <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs">

                        <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                            Node.js
                        </span>

                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">
                            Python
                        </span>

                        <span className="px-2 py-1 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">
                            SQL
                        </span>
                        
                        //<span className="px-2 py-1 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
                        //    ERPNext
                        //</span>
                        
                        <span className="px-2 py-1 rounded-full bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300">
                            AWS
                        </span>

                        <span className="px-2 py-1 rounded-full bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300">
                            AI
                        </span>

                        </div>

                        <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">
                        📍 India
                        </p>
                        <p>📧 sibasis.pr@gmail.com</p>
                    </div>

                    </div>
                </div>
            </div>
            */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === item.href
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsOpen((current) => !current)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div id="mobile-menu" className="md:hidden border-t border-slate-200 dark:border-slate-800 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 rounded-md transition-colors ${
                  pathname === item.href
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
