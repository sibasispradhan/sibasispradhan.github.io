import { Metadata } from 'next'
import PrintButton from '@/components/PrintButton'
import Link from 'next/link'
import { certifications } from '@/content/certifications'
import { education } from '@/content/education'
import { experiences } from '@/content/experience'
import { projects } from '@/content/projects'
import { skills } from '@/content/skills'
import { coreCompetencies, profile } from '@/content/profile'

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Complete resume for Sibasis Pradhan.',
}

export default function Resume() {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-950 border-b border-slate-200 dark:border-slate-800 print:hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                Resume
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
                A resume-mapped view of experience, skills, projects, education, and certifications.
              </p>
            </div>

            <PrintButton />
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-slate-200 dark:border-slate-800 print:py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700 print:border-0 print:p-0">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
              {profile.name}
            </h2>
            <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mt-2">
              {profile.headline}
            </p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-slate-600 dark:text-slate-400">
              <span>{profile.location}</span>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={profile.linkedin.url}>{profile.linkedin.label}</a>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700 print:border-0 print:p-0">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Professional Summary
            </h3>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              {profile.summary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700 print:border-0 print:p-0">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Career Snapshot
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {profile.stats.map((stat) => (
                <div key={stat.label} className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {stat.value}
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700 print:border-0 print:p-0">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Core Competencies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {coreCompetencies.map((competency) => (
                <span
                  key={competency}
                  className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded text-slate-900 dark:text-white text-sm font-medium"
                >
                  {competency}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700 print:border-0 print:p-0">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((experience) => (
                <article key={experience.id}>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    {experience.title}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">
                    {experience.company}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {experience.period} | {experience.location}
                  </p>
                  <p className="mt-3 text-slate-700 dark:text-slate-300">
                    {experience.description}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <span>-</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                    <span className="font-semibold">Technology stack:</span>{' '}
                    {experience.technologies.join(', ')}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700 print:border-0 print:p-0">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Major Projects
            </h3>
            <div className="grid gap-5">
              {projects.slice(0, 6).map((project) => (
                <article key={project.id}>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    {project.shortDescription}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {project.technologies.join(', ')}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700 print:border-0 print:p-0">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Technical Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.category}>
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      {skill.category}
                    </h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      {skill.items.join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700 print:border-0 print:p-0">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Education
                </h3>
                <div className="space-y-4">
                  {education.map((edu) => (
                    <div key={edu.id}>
                      <h4 className="font-semibold text-slate-900 dark:text-white">
                        {edu.degree} - {edu.field}
                      </h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        {edu.institution} | {edu.year}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700 print:border-0 print:p-0">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Certifications
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <div key={cert.id}>
                      <h4 className="font-semibold text-slate-900 dark:text-white">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        {cert.issuer} | {cert.year}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700 print:border-0 print:p-0">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Key Achievements
            </h3>
            <ul className="space-y-2">
              {profile.achievements.map((achievement) => (
                <li key={achievement} className="flex gap-2 text-slate-700 dark:text-slate-300">
                  <span>-</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900/50 print:hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Interested in Working Together?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
