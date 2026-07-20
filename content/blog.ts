export interface BlogPost {
  id: string
  slug: string
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
    slug: "enterprise-apis",
    title: 'Building Scalable Enterprise REST APIs with FastAPI',
    excerpt:
        'Learn how to design and implement production-grade REST APIs using FastAPI with best practices for enterprise systems.',
    content: `FastAPI is a modern, fast (high-performance) web framework for building APIs with Python 3.7+ based on standard Python type hints. In this article, we will explore how to build scalable and maintainable REST APIs for enterprise applications using FastAPI. We will cover best practices, including project structure, dependency injection, authentication, and testing.`,
    date: '2025-07-15',
    readTime: '8 min read',
    tags: ['FastAPI', 'REST API', 'Architecture', 'Python'],
    featured: true,
    },
  {
    id: 'sap-odata',
    slug: "sap-odata",  
    title: 'SAP OData Integration Best Practices',
    excerpt: 'Effective strategies for integrating SAP systems with modern applications using OData protocols.',
    content: `SAP OData provides a standardized way to query SAP systems. Here are proven integration patterns...`,
    date: '2025-08-10',
    readTime: '10 min read',
    tags: ['SAP', 'Integration', 'Enterprise'],
  },
  {
    id: 'microservices-design',
    slug: "microservices-design",
    title: 'Designing Scalable Microservices Architecture',
    excerpt: 'Comprehensive guide to microservices design patterns, trade-offs, and real-world implementation strategies.',
    content: `Microservices architecture offers flexibility and scalability but comes with complexity. Let\'s explore...`,
    date: '2025-12-15',
    readTime: '12 min read',
    tags: ['Microservices', 'Architecture', 'DevOps'],
    featured: true,
  },
  {
    id: 'ai-accounting',
    slug: "ai-accounting",
    title: 'AI in Accounting Automation: A Practical Guide',
    excerpt: 'How machine learning is transforming accounting processes and automating routine financial tasks.',
    content: `Artificial intelligence is revolutionizing accounting. From invoice processing to anomaly detection...`,
    date: '2026-02-28',
    readTime: '9 min read',
    tags: ['AI', 'Accounting', 'Automation'],
  },
  {
    id: 'react-enterprise',
    slug: "react-enterprise",
    title: 'React Architecture for Enterprise Applications',
    excerpt: 'Building large-scale React applications with maintainability, performance, and scalability in mind.',
    content: `Enterprise React applications require different architectural approaches than smaller projects. Consider...`,
    date: '2026-06-20',
    readTime: '11 min read',
    tags: ['React', 'Architecture', 'Frontend'],
  },
]
