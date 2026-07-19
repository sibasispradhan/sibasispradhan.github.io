export interface EnterpriseCustomer {
  id: string
  name: string
  industry: string
  logo?: string
  description: string
  solutions: string[]
  impact: string
}

export const customers: EnterpriseCustomer[] = [
  {
    id: 'nykaa',
    name: 'Nykaa',
    industry: 'Retail and E-Commerce',
    description: 'Enterprise retail and e-commerce customer portfolio experience.',
    solutions: ['ERP Integration', 'Business Process Automation'],
    impact: 'Supported enterprise retail workflows and integrations.',
  },
  {
    id: 'fabindia',
    name: 'FabIndia',
    industry: 'Retail and E-Commerce',
    description: 'Retail enterprise customer across ERP and operational workflows.',
    solutions: ['ERP', 'Inventory', 'Finance Integration'],
    impact: 'Supported retail process automation and enterprise systems.',
  },
  {
    id: 'apparel-group',
    name: 'Apparel Group',
    industry: 'Retail and E-Commerce',
    description: 'Enterprise retail customer portfolio experience.',
    solutions: ['ERP', 'Integration', 'Reporting'],
    impact: 'Supported retail operations through enterprise software delivery.',
  },
  {
    id: 'eazydiner',
    name: 'EazyDiner',
    industry: 'Retail and E-Commerce',
    description: 'Digital commerce and service industry customer experience.',
    solutions: ['Business Automation', 'Integration'],
    impact: 'Supported enterprise integration and business workflows.',
  },
  {
    id: 'lenskart',
    name: 'Lenskart',
    industry: 'Retail and E-Commerce',
    description: 'Retail and e-commerce customer portfolio experience.',
    solutions: ['ERP Integration', 'Business Automation'],
    impact: 'Supported retail enterprise systems and integration workflows.',
  },
  {
    id: 'asg-eye-hospital',
    name: 'ASG Eye Hospital',
    industry: 'Healthcare and Medical',
    description: 'Healthcare enterprise customer portfolio experience.',
    solutions: ['Enterprise Applications', 'Reporting', 'Integration'],
    impact: 'Supported healthcare business systems and operations.',
  },
  {
    id: 'philips',
    name: 'Philips',
    industry: 'Healthcare and Medical',
    description: 'Healthcare and industrial enterprise customer portfolio experience.',
    solutions: ['ERP Integration', 'Business Process Automation'],
    impact: 'Supported enterprise integration and operational workflows.',
  },
  {
    id: 'karl-storz',
    name: 'KARL STORZ',
    industry: 'Healthcare and Medical',
    description: 'Medical technology enterprise customer portfolio experience.',
    solutions: ['ERP', 'Integration', 'Reporting'],
    impact: 'Supported healthcare and medical enterprise workflows.',
  },
  {
    id: 'peoplestrong',
    name: 'PeopleStrong',
    industry: 'HR and Professional Services',
    description: 'HR technology customer portfolio experience.',
    solutions: ['HRMS', 'Payroll', 'Enterprise Integration'],
    impact: 'Supported HRMS and professional services workflows.',
  },
  {
    id: 'kpmg',
    name: 'KPMG',
    industry: 'HR and Professional Services',
    description: 'Professional services customer for payroll and enterprise systems.',
    solutions: ['Payroll Management System', 'HRMS Integration'],
    impact: 'Delivered enterprise payroll management workflows.',
  },
  {
    id: 'halonix',
    name: 'Halonix',
    industry: 'Manufacturing and Industrial',
    description: 'Manufacturing customer portfolio experience.',
    solutions: ['Manufacturing ERP', 'Inventory', 'Procurement'],
    impact: 'Supported manufacturing and industrial business operations.',
  },
  {
    id: 'birla-century',
    name: 'Birla Century',
    industry: 'Manufacturing and Industrial',
    description: 'Manufacturing and industrial customer portfolio experience.',
    solutions: ['ERP', 'Production Planning', 'Inventory'],
    impact: 'Supported enterprise manufacturing workflows.',
  },
  {
    id: 'smartivity',
    name: 'Smartivity',
    industry: 'Manufacturing and Education',
    description: 'Enterprise customer across manufacturing and education domains.',
    solutions: ['ERP', 'Inventory', 'Business Automation'],
    impact: 'Supported cross-functional enterprise workflows.',
  },
  {
    id: 'srm-enterprises',
    name: 'SRM Enterprises',
    industry: 'Manufacturing and Industrial',
    description: 'Industrial customer portfolio experience.',
    solutions: ['ERP', 'Inventory', 'Finance Integration'],
    impact: 'Supported enterprise business automation and integration.',
  },
]
