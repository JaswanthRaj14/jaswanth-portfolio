export type CredentialType = 'Certification' | 'Course Certificate' | 'Badge'

export type Certification = {
  title: string
  type: CredentialType
  date: string
  issuer?: string
  details?: string[]
  credentialId?: string
  validUntil?: string
  verifyUrl?: string
  certificateUrl: string
}

export const certifications: Certification[] = [
  {
    title: 'Oracle Agentic AI Certified Foundations Associate',
    type: 'Certification',
    date: 'Oct 2026',
    issuer: 'Oracle',
    details: ['Exam 1Z0-1157-26'],
    credentialId: '332718016AAI26OFA',
    validUntil: 'Oct 2028',
    certificateUrl: '/certificates/oracle-agentic-ai.pdf',
  },
  {
    title: 'ISRO IIRS E-Learning Course Certificate',
    type: 'Course Certificate',
    date: 'Oct 2026',
    issuer: 'ISRO — Indian Institute of Remote Sensing',
    details: ['Verification code: 11PpbzugAs'],
    credentialId: '2026235039171',
    verifyUrl: 'https://isrolms.iirs.gov.in/mod/customcert/verify_certificate.php',
    certificateUrl: '/certificates/isro-iirs.pdf',
  },
  {
    title: 'Machine Learning I',
    type: 'Course Certificate',
    date: 'Jul 2026',
    credentialId: '190010618',
    certificateUrl: '/certificates/machine-learning-i.pdf',
  },
  {
    title: '5-Day AI Agents Intensive Course with Google',
    type: 'Badge',
    date: 'Dec 2025',
    issuer: 'Kaggle × Google',
    certificateUrl: '/certificates/kaggle-ai-agents-intensive.png',
  },
  {
    title: 'AWS Academy Graduate — Data Engineering',
    type: 'Badge',
    date: 'Mar 2025',
    issuer: 'Amazon Web Services (AWS Academy)',
    details: ['40 hours'],
    verifyUrl: 'https://www.credly.com/go/2B49KSmV',
    certificateUrl: '/certificates/aws-academy-data-engineering.pdf',
  },
  {
    title: 'Google AI Essentials',
    type: 'Course Certificate',
    date: 'Feb 2025',
    issuer: 'Google via Coursera',
    verifyUrl: 'https://coursera.org/verify/G44QEE6IJQKK',
    certificateUrl: '/certificates/google-ai-essentials.pdf',
  },
]
