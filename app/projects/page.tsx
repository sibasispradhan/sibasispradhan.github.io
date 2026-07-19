import { Metadata } from 'next'
import Link from 'next/link'
import { projects } from '@/content/projects'
import { profile } from '@/content/profile'
import ProjectCard from '@/components/ProjectCard'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Enterprise systems, AI bookkeeping, ERP platforms, and SAP/GST/ERP integration projects.',
}

export default function Projects() {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
            {profile.stats[2].value} {profile.stats[2].label}
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Projects and Portfolio
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl">
            Resume-backed enterprise systems across AI-powered bookkeeping, BizNext ERP, SAP/GST/ERP integrations, HRMS, payroll, manufacturing, accounting, and inventory management.
          </p>
        </div>
      </section>

      <section className="py-20 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Need Enterprise Architecture or Integration Help?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            I work across architecture design, full-stack implementation, ERP integration, and technical leadership.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            Let&apos;s Connect
          </Link>
        </div>
      </section>
    </div>
  )
}
