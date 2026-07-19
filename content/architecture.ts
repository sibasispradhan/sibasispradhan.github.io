export interface Architecture {
  id: string
  title: string
  description: string
  pattern: string
  technologies: string[]
  keyFeatures: string[]
  diagram?: string
}

export const architectures: Architecture[] = [
  {
    id: 'ai-bookkeeping-saas',
    title: 'AI-Powered Bookkeeping SaaS Architecture',
    description:
      'Cloud-native multi-tenant architecture for accounting automation, taxation, reconciliation, financial analytics, OCR/document processing, and LLM-assisted bookkeeping workflows.',
    pattern: 'Multi-Tenant SaaS with AI Workflow Orchestration',
    technologies: ['Python', 'FastAPI', 'Node.js', 'React.js', 'Next.js', 'PostgreSQL', 'MongoDB', 'AWS', 'Generative AI'],
    keyFeatures: [
      'Secure multi-tenant data isolation.',
      'AI-assisted bookkeeping and document processing.',
      'Role-based access control and API security.',
      'Financial analytics dashboards and real-time reporting.',
      'Cloud deployment strategy for enterprise workloads.',
    ],
  },
  {
    id: 'enterprise-integration-hub',
    title: 'Enterprise GST, SAP, and ERP Integration Hub',
    description:
      'Integration framework connecting GST Portal, SAP, Microsoft Dynamics 365 Business Central, ERPNext, and custom business applications across finance, inventory, procurement, manufacturing, and accounting.',
    pattern: 'Integration Hub with Reusable Middleware',
    technologies: ['SAP REST APIs', 'SAP OData', 'SAP IDoc', 'ERPNext REST APIs', 'Microsoft Dynamics 365 Business Central', 'Python', 'FastAPI', 'REST APIs'],
    keyFeatures: [
      'Financial ledger synchronization.',
      'Purchase order and sales order integration.',
      'Inventory, customer, and vendor master synchronization.',
      'Automated journal posting and accounting sync.',
      'Retry, audit, and operational monitoring patterns.',
    ],
  },
  {
    id: 'biznext-erp-platform',
    title: 'BizNext Beyond ERP Platform Architecture',
    description:
      'Enterprise ERP architecture for web, desktop, and mobile applications across manufacturing, inventory, procurement, finance, sales, CRM, quality control, and supply chain workflows.',
    pattern: 'Modular ERP with Service-Oriented Integration',
    technologies: ['ASP.NET Core', '.NET Framework', 'React.js', 'REST APIs', 'MySQL', 'AWS', 'Git', 'Jira'],
    keyFeatures: [
      'ERP implementation lifecycle support.',
      'Manufacturing, finance, inventory, procurement, and sales modules.',
      'Reusable middleware for data synchronization.',
      'Enterprise reporting dashboards.',
      'Customer workshops, training, deployment, and production support.',
    ],
  },
  {
    id: 'enterprise-product-suite',
    title: 'Enterprise Product Suite Architecture',
    description:
      'Architecture for flagship products across HRMS, payroll, manufacturing ERP, accounting, school ERP, CRM, inventory management, and business automation.',
    pattern: 'Shared Frameworks with Product-Specific Modules',
    technologies: ['ASP.NET MVC', 'ASP.NET Core', 'Python Flask', 'C#', 'JavaScript', 'SQL Server', 'Azure', 'Google Cloud Platform'],
    keyFeatures: [
      'Reusable frameworks and common libraries.',
      'Role-based authentication and authorization.',
      'SQL Server performance optimization.',
      'Cloud-enabled modernization of legacy desktop solutions.',
      'Release management, code reviews, and architecture governance.',
    ],
  },
  {
    id: 'sap-business-one-addons',
    title: 'SAP Business One Add-On Architecture',
    description:
      'Custom SAP Business One extensions integrating finance, purchase, sales, inventory, and reporting workflows with enterprise applications.',
    pattern: 'ERP Extension and Add-On Pattern',
    technologies: ['SAP Business One', 'C#', 'SQL Server', 'REST APIs', 'IIS', 'Git'],
    keyFeatures: [
      'Finance, purchase, sales, and inventory integration.',
      'Operational and financial reporting extensions.',
      'Secure enterprise data access patterns.',
      'Customer-specific customization workflows.',
      'Production support and performance tuning.',
    ],
  },
]
