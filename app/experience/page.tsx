import { Metadata } from 'next'
import { experiences } from '@/content/experience'
import { profile } from '@/content/profile'
import ExperienceCard from '@/components/ExperienceCard'

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Professional experience across AI bookkeeping, ERP, GST, SAP integrations, enterprise products, and technical leadership.',
}

export default function Experience() {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
            {profile.shortHeadline}
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Professional Experience
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl">
            18+ years building enterprise software, leading engineering teams, and architecting scalable platforms across AI, ERP, finance, retail, healthcare, manufacturing, HRMS, supply chain, and cloud ecosystems.
          </p>
        </div>
      </section>

      <section className="py-20 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-cyan-400 opacity-30" />

          <div className="space-y-0 relative">
            {experiences.map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Career Summary
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {profile.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 text-center"
              >
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.value}
                </div>
                <p className="text-slate-700 dark:text-slate-300 font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
