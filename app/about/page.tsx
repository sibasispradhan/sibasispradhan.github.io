import { Metadata } from 'next'
import { education } from '@/content/education'
import { certifications } from '@/content/certifications'
import { skills } from '@/content/skills'
import { coreCompetencies, profile } from '@/content/profile'
import SkillsCard from '@/components/SkillsCard'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Background, education, certifications, and technical expertise for Sibasis Pradhan.',
}

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
            {profile.headline}
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            About Me
          </h1>
          <div className="space-y-4 text-xl text-slate-600 dark:text-slate-300 max-w-4xl">
            {profile.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-10">
            Career Snapshot
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {profile.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700"
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

      <section className="py-20 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12">
            Core Competencies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreCompetencies.map((competency) => (
              <div
                key={competency}
                className="px-5 py-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-medium"
              >
                {competency}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12">
            Education
          </h2>

          <div className="grid gap-6">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mt-1">
                  {edu.institution}
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                  {edu.field} | {edu.year}
                </p>
                {edu.details && (
                  <p className="text-slate-700 dark:text-slate-300 mt-4">{edu.details}</p>
                )}
                {edu.highlights && (
                  <ul className="mt-4 space-y-2">
                    {edu.highlights.map((highlight) => (
                      <li key={highlight} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">-</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12">
            Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {cert.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mt-2">
                  {cert.issuer}
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                  {cert.year}
                </p>
                {cert.description && (
                  <p className="text-slate-700 dark:text-slate-300 mt-3 text-sm">
                    {cert.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <SkillsCard key={skill.category} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">
            Professional Philosophy
          </h2>
          <p className="text-xl text-slate-700 dark:text-slate-300 max-w-4xl">
            {profile.philosophy}
          </p>
        </div>
      </section>
    </div>
  )
}
