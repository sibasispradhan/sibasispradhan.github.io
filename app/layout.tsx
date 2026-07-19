import type { Metadata } from 'next'
import Script from 'next/script'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { profile } from '@/content/profile'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})
/*
export const metadata: Metadata = {
  title: {
    default: `${profile.name} - ${profile.shortHeadline}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.heroSummary,
  keywords: [
    'Full Stack Tech Lead',
    'Enterprise Solution Architect',
    'AI Integration Specialist',
    'ERP Integration',
    'SAP Integration',
    'FastAPI',
    'Next.js',
    'React.js',
    'Cloud Architecture',
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: profile.siteUrl,
    siteName: profile.name,
    title: `${profile.name} - ${profile.shortHeadline}`,
    description: profile.heroSummary,
    images: [
      {
        url: `${profile.siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: profile.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} - ${profile.shortHeadline}`,
    description: profile.heroSummary,
    images: [`${profile.siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
}
*/
export const metadata: Metadata = {
  title: {
    default: `${profile.name} - ${profile.shortHeadline}`,
    template: `%s | ${profile.name}`,
  },

  description: profile.heroSummary,

  keywords: [
    'Full Stack Tech Lead',
    'Enterprise Solution Architect',
    'AI Integration Specialist',
    'ERP Integration',
    'SAP Integration',
    'FastAPI',
    'Next.js',
    'React.js',
    'Cloud Architecture',
  ],

  authors: [{ name: profile.name }],
  creator: profile.name,

  metadataBase: new URL(profile.siteUrl),

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: profile.siteUrl,
    siteName: profile.name,
    title: `${profile.name} - ${profile.shortHeadline}`,
    description: profile.heroSummary,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: profile.name,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} - ${profile.shortHeadline}`,
    description: profile.heroSummary,
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        <link rel="canonical" href={profile.siteUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" role="main" className="flex-1">
          {children}
        </main>
        <Footer />
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <Script
            async
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/plausible.js"
            strategy="afterInteractive"
          />
        )}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { page_path: window.location.pathname, anonymize_ip: true });`,
              }}
            />
          </>
        )}
        <Script
          id="jsonld-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: profile.name,
              url: profile.siteUrl,
              sameAs: [profile.linkedin.url, profile.github.url],
              jobTitle: profile.shortHeadline,
              description: profile.heroSummary,
              email: `mailto:${profile.email}`,
              telephone: profile.phone,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'New Delhi',
                addressCountry: 'India',
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
