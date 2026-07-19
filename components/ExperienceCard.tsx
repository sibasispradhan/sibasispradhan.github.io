import { Experience } from '@/content/experience'
import { ChevronRight } from '@/components/icons'

interface ExperienceCardProps {
  experience: Experience
  index: number
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const isEven = index % 2 === 0

  return (
    <div className="relative pb-20">
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
        <div className="w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-slate-950" />
      </div>

      <div className={`md:w-1/2 ${isEven ? 'md:mr-auto md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'}`}>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {experience.title}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mt-1">
                {experience.company}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                {experience.period} | {experience.location}
              </p>
            </div>
          </div>

          <p className="text-slate-700 dark:text-slate-300 mt-4">
            {experience.description}
          </p>

          <ul className="mt-4 space-y-2">
            {experience.highlights.slice(0, 3).map((highlight) => (
              <li key={highlight} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                <ChevronRight size={16} className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mt-4">
            {experience.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded"
              >
                {tech}
              </span>
            ))}
            {experience.technologies.length > 5 && (
              <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded">
                +{experience.technologies.length - 5} more
              </span>
            )}
          </div>

          {experience.impact && (
            <p className="mt-4 text-sm font-semibold text-green-800 dark:text-green-300">
              Impact: {experience.impact}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
