export interface Certification {
  id: string
  name: string
  issuer: string
  year: string
  credentialUrl?: string
  description?: string
}

export const certifications: Certification[] = [
  {
    id: 'mcp-70-563',
    name: 'Microsoft Certified Professional - Exam 70-563',
    issuer: 'Microsoft',
    year: 'Professional Certification',
    description: 'Designing and Developing Windows Applications.',
  },
  {
    id: 'foundational-generative-ai',
    name: 'Foundational Generative AI',
    issuer: 'iNeuron',
    year: '2024',
    description: 'Foundational Generative AI concepts and applied workflows.',
  },
  {
    id: 'aws-certification-series',
    name: 'AWS Certification Series',
    issuer: 'iNeuron',
    year: '2024',
    description: 'AWS cloud fundamentals and certification preparation.',
  },
  {
    id: 'machine-learning-python',
    name: 'Machine Learning with Python',
    issuer: 'Jovian',
    year: '2023',
    credentialUrl: 'https://jovian.com/certificate/MFQTQNBTG4',
    description: 'Applied machine learning using Python.',
  },
  {
    id: 'deep-learning-pytorch',
    name: 'Deep Learning with PyTorch',
    issuer: 'Jovian',
    year: '2023',
    credentialUrl: 'https://jovian.com/certificate/MFQTQNRYHE',
    description: 'Deep learning model development with PyTorch.',
  },
  {
    id: 'generative-ai-mastery',
    name: 'Generative AI Mastery With 15+ Real Time Projects',
    issuer: 'udemy',
    year: '2024',
    credentialUrl: 'https://www.udemy.com/certificate/UC-9d2f07ad-fffe-4993-bdf0-d2ce94e38b05',
    description: 'Generative AI Mastery With 15+ Real Time Projects',
  },
]
