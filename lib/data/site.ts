export const siteConfig = {
  name: 'Jaswanth Raj',
  fullName: 'Ramjaaly Jaswanth Raj',
  initials: 'JR',
  url: 'https://jaswanth-gilt.vercel.app',
  headline: 'Aspiring Data Scientist | AI Engineer | Machine Learning Enthusiast',
  tagline:
    'Learning by building with data, machine learning, and AI. I work on hands-on projects across data analysis, predictive modeling, and AI-powered applications.',
  badge: 'B.Tech CSE · Class of 2026',
  email: 'ramjaalyjaswanthraj@gmail.com',
  resume: '/resume/jaswanth-raj-resume.pdf',
  github: { handle: 'JaswanthRaj14', url: 'https://github.com/JaswanthRaj14' },
  linkedin: {
    handle: 'jaswanthrajramjaaly',
    url: 'https://www.linkedin.com/in/jaswanthrajramjaaly',
  },
} as const

export type NavItem = { href: string; label: string }

export const navItems: NavItem[] = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/currently-building', label: 'Currently Building' },
  { href: '/skills', label: 'Skills' },
  { href: '/certifications', label: 'Certifications' },
  { href: '/achievements', label: 'Achievements' },
  { href: '/learning-journey', label: 'Learning Journey' },
  { href: '/contact', label: 'Contact' },
]

export const about = {
  heading: 'Turning curiosity about data into working projects',
  paragraphs: [
    "I'm Jaswanth Raj, a Computer Science and Engineering student building toward a career in data science, machine learning, and AI engineering. I enjoy working with data, exploring patterns, building predictive models, and learning how AI systems can solve practical problems.",
    'My approach is to learn by building. Each project is a chance to practice the full workflow — framing a question, cleaning and analyzing data, modeling, and communicating what I found — while steadily moving toward deep learning, LLM applications, and AI agents.',
  ],
  education: {
    degree: 'B.Tech in Computer Science and Engineering',
    graduation: 'Expected graduation: 2026',
  },
  interests: [
    'Data Science and Machine Learning',
    'Deep Learning and AI Engineering',
    'Large Language Models (LLMs)',
    'Retrieval-Augmented Generation (RAG)',
    'AI agents and intelligent applications',
    'Data analytics and data engineering',
  ],
}

export type SkillGroup = { title: string; skills: string[]; learning?: boolean }

export const skillGroups: SkillGroup[] = [
  { title: 'Programming & Data', skills: ['Python', 'SQL', 'R'] },
  {
    title: 'Data Manipulation & Visualization',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Power BI', 'Excel', 'Tableau'],
  },
  {
    title: 'Machine Learning',
    skills: [
      'Scikit-learn',
      'Regression',
      'Classification',
      'Clustering',
      'Model evaluation',
      'Feature engineering',
    ],
  },
  { title: 'Databases & Platforms', skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'BigQuery'] },
  {
    title: 'Currently Learning',
    learning: true,
    skills: [
      'Deep Learning',
      'FastAPI',
      'AI Engineering',
      'Large Language Models',
      'RAG systems',
      'AI agents',
    ],
  },
]

export type LearningStage = 'Building with' | 'Actively learning' | 'Up next'

export const learningJourney: { title: string; stage: LearningStage; description: string }[] = [
  {
    title: 'Machine Learning',
    stage: 'Building with',
    description:
      'Applying supervised learning, feature engineering, and model evaluation in hands-on projects.',
  },
  {
    title: 'Deep Learning',
    stage: 'Actively learning',
    description: 'Understanding neural network fundamentals, training dynamics, and common architectures.',
  },
  {
    title: 'FastAPI & Backend Development',
    stage: 'Actively learning',
    description: 'Learning to serve models and data through clean, well-structured Python APIs.',
  },
  {
    title: 'AI Engineering Fundamentals',
    stage: 'Actively learning',
    description: 'Studying how to design, evaluate, and ship reliable AI-powered applications.',
  },
  {
    title: 'LLM Applications, RAG & AI Agents',
    stage: 'Up next',
    description:
      'Exploring retrieval-augmented generation and agentic workflows, building on recent Agentic AI coursework.',
  },
]

export type BuildingProject = {
  title: string
  status: 'Planning' | 'In Progress'
  description: string
  objectives: string[]
  milestones: { label: string; done: boolean }[]
  stack: string[]
  slug?: string
}

export const currentlyBuilding: BuildingProject[] = [
  {
    title: 'SignalScout',
    status: 'Planning',
    description:
      'A career-growth project intended to demonstrate practical engineering and AI skills. Detailed scope and stack will be shared as implementation takes shape.',
    objectives: [
      'Define the core problem and target users',
      'Outline the initial feature set and architecture',
    ],
    milestones: [
  { label: 'Problem definition', done: true },
  { label: 'Requirements and scope', done: false },
  { label: 'Data sources and research', done: false },
  { label: 'Architecture and stack selection', done: false },
  { label: 'First working prototype', done: false },
  { label: 'Testing and evaluation', done: false },
  { label: 'Public release', done: false },
],
    stack: [],
  },
  
{
  title: 'FIFA 20 Player Analytics',
  slug: 'fifa20-player-analytics',
  status: 'Planning',
  description:
    'Exploring FIFA 20 player data to uncover performance patterns, compare player attributes, and identify opportunities for machine learning applications.',
  objectives: [
    'Inspect the FIFA 20 dataset and understand its structure',
    'Identify important player attributes and potential analysis directions',
  ],
  milestones: [
    { label: 'Dataset loading and initial inspection', done: false },
    { label: 'Data quality assessment', done: false },
    { label: 'Data cleaning and preprocessing', done: false },
    { label: 'Exploratory data analysis (EDA)', done: false },
    { label: 'Feature engineering', done: false },
    { label: 'Project scope and problem definition', done: false },
    { label: 'Model development', done: false },
    { label: 'Evaluation and documentation', done: false },
  ],
  stack: [
    'Python',
    'Pandas',
    'NumPy',
    'Matplotlib',
    'Seaborn',
    'Scikit-learn',
  ],
},
]
