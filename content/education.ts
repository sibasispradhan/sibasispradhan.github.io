export interface Education {
  id: string
  degree: string
  institution: string
  field: string
  year: string
  details?: string
  highlights?: string[]
}

export const education: Education[] = [
  {
    id: 'mtech-dse',
    degree: 'M.Tech',
    institution: 'BITS Pilani',
    field: 'Data Science Engineering',
    year: '2024',
    details: 'Focused on data science engineering, machine learning, deep learning, big data, and cloud computing.',
    highlights: ['Data Science Engineering', 'Machine Learning', 'Deep Learning', 'Big Data', 'Cloud Platforms'],
  },
  {
    id: 'mba-it',
    degree: 'MBA',
    institution: 'Sikkim Manipal University',
    field: 'Information Technology',
    year: '2011',
    highlights: ['Information Technology', 'Enterprise Systems', 'Business Management'],
  },
  {
    id: 'mca',
    degree: 'Master of Computer Applications',
    institution: 'Maharshi Dayanand University, Rohtak',
    field: 'Computer Applications',
    year: '2007',
    highlights: ['Software Engineering', 'Database Design', 'Application Development'],
  },
]
