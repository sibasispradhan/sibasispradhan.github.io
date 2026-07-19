import { Metadata } from 'next'
import Link from 'next/link'
import { architectures } from '@/content/architecture'

export const metadata: Metadata = {
  title: 'Architecture',
  description: 'Enterprise architecture patterns from AI, ERP, SAP, GST, and cloud product delivery.',
}

export default function Architecture() {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            System Architecture
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl">
            Resume-backed architectural patterns for AI-powered bookkeeping, enterprise ERP, SAP/GST integrations, product suites, and SAP Business One extensions.
          </p>
        </div>
      </section>

      <section className="py-20 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {architectures.map((architecture) => (
              <div
                key={architecture.id}
                className="bg-white dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between gap-6 mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                      {architecture.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mt-2">
                      Pattern: {architecture.pattern}
                    </p>
                  </div>
                </div>

                <p className="text-slate-700 dark:text-slate-300 text-lg mb-6">
                  {architecture.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {architecture.keyFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                        <span className="text-green-800 dark:text-green-300 mt-1">-</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {architecture.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Need Architectural Guidance?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            I can help with system design, enterprise integration, cloud-native product architecture, and modernization strategy.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            Get Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
