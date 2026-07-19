import Link from 'next/link'
import { Mail, Share2, Code } from '@/components/icons'
import { profile } from '@/content/profile'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">
              {profile.name}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              {profile.shortHeadline} with 18+ years of enterprise software experience.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/resume" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/architecture" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm">
                  Architecture
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email Sibasis Pradhan"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Mail size={20} />
              </a>
              <a
                href={profile.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Share2 size={20} />
              </a>
              <a
                href={profile.github.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Code size={20} />
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              {profile.location}
            </p>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Built with Next.js. Deployed on GitHub Pages.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
