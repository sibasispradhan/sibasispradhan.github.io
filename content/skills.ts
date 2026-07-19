export interface Skill {
  category: string
  icon: string
  items: string[]
  proficiency: number
}

export const skills: Skill[] = [
  {
    category: 'Programming Languages',
    icon: 'code',
    items: ['Python', 'C#', 'JavaScript', 'TypeScript', 'SQL', 'VB.NET'],
    proficiency: 95,
  },
  {
    category: 'Backend Technologies',
    icon: 'server',
    items: [
      'FastAPI',
      'Flask',
      'ASP.NET Core',
      'ASP.NET MVC',
      'Web API',
      'Node.js',
      'Express.js',
    ],
    proficiency: 95,
  },
  {
    category: 'Frontend Technologies',
    icon: 'layout',
    items: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS'],
    proficiency: 90,
  },
  {
    category: 'Databases',
    icon: 'database',
    items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB'],
    proficiency: 90,
  },
  {
    category: 'Cloud Platforms',
    icon: 'cloud',
    items: ['AWS', 'Microsoft Azure', 'Google Cloud Platform'],
    proficiency: 88,
  },
  {
    category: 'ERP and Enterprise Integration',
    icon: 'briefcase',
    items: [
      'GST Integration',
      'SAP REST APIs',
      'SAP OData',
      'SAP IDoc',
      'SAP Business One',
      'Microsoft Dynamics 365 Business Central',
      'ERPNext',
      'Middleware Development',
    ],
    proficiency: 94,
  },
  {
    category: 'DevOps and Tools',
    icon: 'git',
    items: ['Git', 'Bitbucket', 'GitHub', 'Jira', 'CI/CD', 'IIS'],
    proficiency: 88,
  },
  {
    category: 'AI and Data Science',
    icon: 'brain',
    items: [
      'Generative AI',
      'LLM Workflows',
      'Machine Learning',
      'Deep Learning',
      'PyTorch',
      'TensorFlow',
    ],
    proficiency: 86,
  },
]
