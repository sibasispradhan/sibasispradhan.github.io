export interface Project {
  id: string
  title: string
  description: string
  shortDescription: string
  role: string
  impact: string
  technologies: string[]
  highlights: string[]
  link?: string
  github?: string
}

export const projects: Project[] = [
  {
    id: 'ai-bookkeeping-platform',
    title: 'AI Bookkeeping Platform',
    shortDescription: 'AI-powered bookkeeping and financial automation SaaS',
    description:
      'Cloud-native platform automating accounting, taxation, reconciliation, financial reporting, document processing, and enterprise financial integrations with AI-assisted workflows.',
    role: 'Full Stack Tech Lead / Solution Architect',
    impact:
      'Powers intelligent bookkeeping, ledger automation, GST workflows, reconciliation, and financial analytics.',
    technologies: [
      'Python',
      'FastAPI',
      'React.js',
      'Next.js',
      'Node.js',
      'PostgreSQL',
      'MongoDB',
      'AWS',
      'Generative AI',
      'LLM Workflows',
    ],
    highlights: [
      'AI-powered bookkeeping engine with OCR/document processing.',
      'Multi-tenant SaaS architecture with role-based access control.',
      'GST, SAP, Microsoft Dynamics 365 Business Central, and ERPNext integration frameworks.',
      'Financial analytics dashboards and real-time accounting synchronization.',
    ],
    link: 'https://febi.ai',
  },
  {
    id: 'io-security',
    title: 'IoT/IIoT Attack Detection System',
    shortDescription: 'ML-based security system for industrial networks',
    description:
      'Machine learning system for detecting anomalies and attacks in IoT and Industrial IoT networks. Deployed on AWS with real-time monitoring capabilities.',
    role: 'Lead Developer / Researcher',
    impact: 'Research & Dissertation on IoT security and anomaly detection with ML.',
    technologies: [
      'Python',
      'TensorFlow',
      'Flask',
      'AWS',
      'Streamlit',
      'MLOps',
      'Docker',
    ],
    highlights: [
      'Achieved 94% attack detection accuracy',
      'Built real-time monitoring dashboard',
      'Implemented MLOps pipeline with MLFlow',
      'Research on IoT security',
    ],
  },
  {
    id: 'biznext-beyond-erp',
    title: 'BizNext Beyond ERP',
    shortDescription: 'Integrated enterprise ERP platform for web, desktop, and mobile',
    description:
      'Enterprise platform covering manufacturing, inventory, procurement, finance, sales, CRM, quality control, production planning, and supply chain workflows.',
    role: 'Team Leader / Product Architect',
    impact:
      'Delivered ERP implementation lifecycles across requirement analysis, customization, deployment, training, and support.',
    technologies: ['ASP.NET Core', '.NET Framework', 'React.js', 'JavaScript', 'REST APIs', 'MySQL', 'AWS'],
    highlights: [
      'Manufacturing, inventory, procurement, finance, sales, and CRM modules.',
      'Production planning, quality control, and supply chain capabilities.',
      'Customer workshops, requirement gathering, and implementation delivery.',
      'Enterprise reporting dashboards and reusable integration middleware.',
    ],
  },
  {
    id: 'sap-erp-integration-platform',
    title: 'SAP, GST, and ERP Integration Platform',
    shortDescription: 'Enterprise integration framework for finance and operations data',
    description:
      'Integration framework connecting GST Portal, SAP, Microsoft Dynamics 365 Business Central, and ERPNext ecosystems for finance, inventory, procurement, manufacturing, and accounting synchronization.',
    role: 'Solution Architect / Integration Lead',
    impact:
      'Delivered financial ledger synchronization, order integration, inventory sync, master data sync, and automated journal posting.',
    technologies: [
      'SAP REST APIs',
      'SAP OData',
      'SAP IDoc',
      'ERPNext REST APIs',
      'Microsoft Dynamics 365 Business Central',
      'Python',
      'FastAPI',
      'REST APIs',
    ],
    highlights: [
      'GST Portal and custom business application integration.',
      'Purchase order, sales order, inventory, customer, and vendor synchronization.',
      'Automated journal posting and real-time accounting synchronization.',
      'Middleware components for enterprise finance and inventory workflows.',
    ],
  },
  {
    id: 'online-hrms',
    title: 'Online HRMS',
    shortDescription: 'Enterprise human resource management platform',
    description:
      'Flagship HRMS product supporting employee lifecycle workflows, HR operations, reporting, and enterprise process automation.',
    role: 'Tech Lead / CTO',
    impact:
      'Delivered as part of a portfolio of enterprise HRMS, payroll, CRM, accounting, and business automation products.',
    technologies: ['ASP.NET MVC', 'ASP.NET Core', 'C#', 'JavaScript', 'SQL Server', 'IIS'],
    highlights: [
      'Employee lifecycle and HR operations workflows.',
      'Enterprise reporting and role-based access control.',
      'Architecture governance, code reviews, release management, and production support.',
    ],
  },
  {
    id: 'kpmg-payroll-management-system',
    title: 'KPMG Payroll Management System',
    shortDescription: 'Enterprise payroll and statutory reporting platform',
    description:
      'Payroll management system supporting enterprise payroll processing, accounting workflows, reporting, and operational controls.',
    role: 'Tech Lead / Solution Architect',
    impact: 'Delivered payroll automation as a flagship enterprise software product.',
    technologies: ['ASP.NET', 'ASP.NET MVC', 'C#', 'SQL Server', 'JavaScript', 'IIS'],
    highlights: [
      'Payroll processing and reporting workflows.',
      'Secure enterprise authentication and authorization.',
      'SQL Server performance tuning with indexing, stored procedures, and query optimization.',
    ],
  },
  {
    id: 'accounting-finance-system',
    title: 'Accounting and Finance Management System',
    shortDescription: 'Finance, accounting, and business automation platform',
    description:
      'Enterprise accounting and finance platform for reporting, ledger workflows, business automation, and operational finance processes.',
    role: 'Tech Lead / Product Architect',
    impact: 'Delivered accounting and finance automation as part of flagship enterprise products.',
    technologies: ['ASP.NET MVC', 'C#', 'SQL Server', 'MySQL', 'JavaScript'],
    highlights: [
      'Accounting and financial reporting workflows.',
      'Business automation and reusable software frameworks.',
      'Performance optimization for enterprise SQL workloads.',
    ],
  },
  {
    id: 'school-erp',
    title: 'Sahaj School ERP',
    shortDescription: 'Comprehensive school management system',
    description:
      'Complete educational institution management system deployed in 100+ schools. Manages admissions, academics, fees, transport, and student information.',
    role: 'Tech Lead',
    impact: 'Deployed in 100+ schools managing 50,000+ students',
    technologies: ['ASP.NET', 'C#', 'SQL Server', 'React'],
    highlights: [
      'Developed student information management system',
      'Built online admission portal',
      'Implemented parent communication module',
      'Created comprehensive reporting system',
    ],
  },
  {
    id: 'manufacturing-erp',
    title: 'Philps Manufacturing/AMC ERP',
    shortDescription: 'Manufacturing, production planning, quality control platform, and AMC management system',
    description:
      'ERP capabilities covering manufacturing operations, production planning, inventory, procurement, quality control, supply chain processes and AMC management.',
    role: 'Enterprise Architect / Tech Lead',
    impact: 'Supported enterprise manufacturing and industrial business operations.',
    technologies: ['ASP.NET Core', '.NET Framework', 'React.js', 'MySQL', 'SQL Server', 'REST APIs'],
    highlights: [
      'Production planning and quality control workflows.',
      'Inventory and procurement automation.',
      'Enterprise reporting and business process mapping.',
    ],
  },
]
