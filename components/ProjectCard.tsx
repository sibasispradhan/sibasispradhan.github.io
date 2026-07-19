import { Project } from '@/content/projects'
import { ExternalLink, LinkIcon } from '@/components/icons'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700">
      <div className="h-32 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-80" />

      <div className="relative px-6 pb-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-4">
          {project.title}
        </h3>
        <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mt-2">
          {project.role}
        </p>

        <p className="text-slate-700 dark:text-slate-300 mt-3">
          {project.shortDescription}
        </p>

        <ul className="mt-4 space-y-1">
          {project.highlights.slice(0, 3).map((highlight) => (
            <li key={highlight} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 mt-1">-</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="mt-4 text-sm font-semibold text-green-800 dark:text-green-300">
          Impact: {project.impact}
        </p>

        <div className="flex gap-2 mt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
              aria-label={`${project.title} repository`}
            >
              <LinkIcon size={18} />
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
              aria-label={`${project.title} link`}
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
