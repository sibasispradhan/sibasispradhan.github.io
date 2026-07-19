'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

export default function ProfileHoverCard() {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/profile.png"
          alt="Sibasis Pradhan"
          width={44}
          height={44}
          priority
          className="rounded-full border-2 border-blue-600 object-cover shadow-lg transition-transform duration-300 hover:scale-110"
        />

        <span className="hidden md:block font-bold text-xl">
          SP
        </span>
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="absolute left-0 top-14 z-50"
          >
            <div className="w-80 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-2xl">

              {/* Header */}
              <div className="h-24 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 relative">

                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute -bottom-12 left-1/2 -translate-x-1/2"
                >
                  <div className="rounded-full p-1 bg-gradient-to-r from-cyan-400 to-blue-500">
                    <Image
                      src="/profile.png"
                      alt="Sibasis Pradhan"
                      width={96}
                      height={96}
                      className="rounded-full border-4 border-white dark:border-slate-900 object-cover"
                    />
                  </div>
                </motion.div>
              </div>

              <div className="pt-16 pb-6 px-6 text-center">

                <h2 className="text-xl font-bold">
                  Sibasis Pradhan
                </h2>

                <p className="text-blue-600 dark:text-cyan-400 font-medium mt-1">
                  Full Stack Tech Lead
                </p>

                <div className="flex flex-wrap justify-center gap-2 mt-5">

                  {[
                    'Node.js',
                    'Python',
                    'SQL',
                    //'ERPNext',
                    'AWS',
                    'AI',
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-blue-100 dark:bg-blue-900/40 px-3 py-1 text-xs font-medium"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                <div className="mt-6 space-y-1 text-sm text-slate-500 dark:text-slate-400">
                  <p>📍 India</p>
                  <p>📧 sibasis.pr@gmail.com</p>
                </div>

                <Link
                  href="/about"
                  className="mt-6 inline-flex rounded-lg bg-blue-600 px-5 py-2 text-white font-medium hover:bg-blue-700 transition-colors"
                >
                  View Profile
                </Link>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}