import { Skill } from '@/content/skills'
import { Code } from '@/components/icons'

interface SkillsCardProps {
  skill: Skill
  index: number
}

export default function SkillsCard({ skill }: SkillsCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700">
      {/* Icon and title */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
          <Code className="text-blue-600 dark:text-blue-400" size={24} />
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          {skill.category}
        </h3>
      </div>

      {/* Proficiency bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
            Proficiency
          </span>
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
            {skill.proficiency}%
          </span>
        </div>
        <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
            style={{ width: `${skill.proficiency}%` }}
          />
        </div>
      </div>

      {/* Skills list */}
      <div className="space-y-2">
        {skill.items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
          >
            <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
