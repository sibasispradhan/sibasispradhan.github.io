export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  tags: string[]
  featured?: boolean
}

export const blogs: BlogPost[] = [
  {
    id: 'enterprise-apis',
    title: 'Building Scalable Enterprise REST APIs with FastAPI',
    excerpt: 'Learn how to design and implement production-grade REST APIs using FastAPI with best practices for enterprise systems.',
    content: `Enterprise REST APIs require careful planning, security considerations, and scalability patterns. This guide covers...`,
    date: '2024-07-15',
    readTime: '8 min read',
    tags: ['FastAPI', 'REST API', 'Architecture', 'Python'],
    featured: true,
  },
  {
    id: 'sap-odata',
    title: 'SAP OData Integration Best Practices',
    excerpt: 'Effective strategies for integrating SAP systems with modern applications using OData protocols.',
    content: `SAP OData provides a standardized way to query SAP systems. Here are proven integration patterns...`,
    date: '2024-07-10',
    readTime: '10 min read',
    tags: ['SAP', 'Integration', 'Enterprise'],
  },
  {
    id: 'microservices-design',
    title: 'Designing Scalable Microservices Architecture',
    excerpt: 'Comprehensive guide to microservices design patterns, trade-offs, and real-world implementation strategies.',
    content: `Microservices architecture offers flexibility and scalability but comes with complexity. Let\'s explore...`,
    date: '2024-07-05',
    readTime: '12 min read',
    tags: ['Microservices', 'Architecture', 'DevOps'],
    featured: true,
  },
  {
    id: 'ai-accounting',
    title: 'AI in Accounting Automation: A Practical Guide',
    excerpt: 'How machine learning is transforming accounting processes and automating routine financial tasks.',
    content: `Artificial intelligence is revolutionizing accounting. From invoice processing to anomaly detection...`,
    date: '2024-06-28',
    readTime: '9 min read',
    tags: ['AI', 'Accounting', 'Automation'],
  },
  {
    id: 'react-enterprise',
    title: 'React Architecture for Enterprise Applications',
    excerpt: 'Building large-scale React applications with maintainability, performance, and scalability in mind.',
    content: `Enterprise React applications require different architectural approaches than smaller projects. Consider...`,
    date: '2024-06-20',
    readTime: '11 min read',
    tags: ['React', 'Architecture', 'Frontend'],
  },
]
