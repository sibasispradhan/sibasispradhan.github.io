export interface Experience {
  id: string
  company: string
  title: string
  period: string
  location: string
  description: string
  highlights: string[]
  technologies: string[]
  impact?: string
}

export const experiences: Experience[] = [
  {
    id: 'rivergo-febi-ai',
    company: 'Rivergo Automation Private Limited (Febi.ai)',
    title: 'Full Stack Tech Lead',
    period: 'September 2024 - Present',
    location: 'Gurugram, India',
    description:
      'Leading architecture, design, and development of an AI-powered bookkeeping and financial automation platform across backend services, frontend applications, enterprise integrations, cloud infrastructure, and AI-enabled workflows.',
    highlights: [
      'Architecting a cloud-native AI bookkeeping platform for accounting, taxation, reconciliation, and financial reporting automation.',
      'Designing scalable microservices with Python, FastAPI, and Node.js exposed through secure REST APIs.',
      'Building React.js, Next.js, and TypeScript applications for financial dashboards and analytics.',
      'Designing secure multi-tenant architecture with role-based access control, data isolation, and API security.',
      'Delivering GST, SAP, Microsoft Dynamics 365 Business Central, and ERPNext integrations for enterprise financial workflows.',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'Node.js',
      'React.js',
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'AWS',
      'SAP',
      'ERPNext',
      'Generative AI',
      'LLM Workflows',
    ],
    impact:
      'Architecting AI bookkeeping, OCR/document processing, LLM workflows, multi-tenant SaaS, and enterprise GST/SAP/ERP integrations.',
  },
  {
    id: '3s-logics',
    company: '3S Logics Private Limited',
    title: 'Team Leader - Product Development',
    period: 'January 2023 - August 2024',
    location: 'Gurugram, India',
    description:
      'Led enterprise product engineering for GST integration, BizNext ERP development, application modernization, and digital transformation while owning architecture, customer interactions, delivery, and team mentoring.',
    highlights: [
      'Led architecture, design, development, and delivery of BizNext Beyond ERP across web, desktop, and mobile applications.',
      'Directed ERP implementation lifecycles from requirement analysis and business process mapping through deployment, training, and support.',
      'Architected GST Portal integrations connecting custom business applications with enterprise tax workflows.',
      'Delivered manufacturing, inventory, procurement, finance, sales, CRM, quality control, and supply chain capabilities.',
      'Developed reusable middleware components for ERP, finance, and inventory data synchronization.',
    ],
    technologies: [
      'ASP.NET Core',
      '.NET Framework',
      'React.js',
      'JavaScript',
      'REST APIs',
      'MySQL',
      'AWS',
      'Git',
      'Jira',
    ],
    impact:
      'Delivered BizNext ERP, GST integration, production planning, finance automation, inventory, procurement, and reporting platforms.',
  },
  {
    id: 'sahaj-infotech',
    company: 'Sahaj Infotech Private Limited',
    title: 'Tech Lead / Chief Technology Officer (CTO)',
    period: 'October 2010 - December 2022',
    location: 'New Delhi, India',
    description:
      'Provided strategic technology leadership for enterprise software products while remaining hands-on in architecture, coding, solution design, customer consulting, delivery, engineering management, and product innovation.',
    highlights: [
      'Progressed from Senior Software Developer to Team Leader, .NET Lead, Tech Lead, and CTO.',
      'Architected and delivered 7+ flagship products across HRMS, payroll, manufacturing ERP, accounting, school ERP, CRM, inventory, and business automation.',
      'Designed scalable enterprise applications with ASP.NET MVC, ASP.NET Core, Python Flask, Web API, JavaScript, and SQL Server.',
      'Developed SAP Business One add-ons integrating finance, purchase, sales, inventory, and reporting.',
      'Modernized legacy desktop solutions into cloud-enabled platforms on Microsoft Azure and Google Cloud Platform.',
    ],
    technologies: [
      'ASP.NET MVC',
      'ASP.NET Core',
      'Python',
      'Flask',
      'C#',
      'JavaScript',
      'SQL Server',
      'MySQL',
      'Azure',
      'Google Cloud Platform',
      'SAP Business One',
      'IIS',
      'Git',
    ],
    impact:
      'Owned product strategy, architecture governance, performance optimization, cloud migration, SAP customization, CI/CD, hiring, and mentoring.',
  },
  {
    id: 'digisoft',
    company: 'Digisoft IT Solutions',
    title: 'Software Developer',
    period: 'January 2008 - September 2010',
    location: 'New Delhi, India',
    description:
      'Developed business applications for billing, inventory management, distribution management, real estate management, and MLM using VB6, VB.NET, ASP.NET, and SQL Server.',
    highlights: [
      'Participated in requirement analysis, application design, development, testing, deployment, and customer support.',
      'Designed business reports and database modules supporting finance, inventory, and sales operations.',
      'Optimized SQL Server database performance through query tuning and indexing.',
      'Built reusable software components and utilities to reduce repeated development effort.',
    ],
    technologies: ['VB6', 'VB.NET', 'ASP.NET', 'SQL Server'],
    impact:
      'Built early enterprise billing, inventory, distribution, real estate, and MLM applications.',
  },
]
