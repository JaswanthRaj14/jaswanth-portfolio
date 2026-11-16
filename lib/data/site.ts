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
  title: 'Bank GoodCredit – Credit Risk Prediction',
  slug: 'bankcore-credit-risk-prediction',
  status: 'Planning',
  description:
    'Developing a credit-risk prediction solution to assess existing credit-card customers’ creditworthiness and identify customers with a higher risk of default.',
  objectives: [
    'Understand the business problem and define the target variable.',
    'Explore customer, account, enquiry, and demographic datasets.',
    'Extract and combine relevant customer information using SQL.',
    'Perform exploratory data analysis and data preprocessing.',
    'Develop meaningful features for credit-risk assessment.',
    'Build and compare machine learning classification models.',
    'Evaluate model performance and perform risk segmentation.',
  ],
  milestones: [
    { label: 'Problem definition', done: true },
    { label: 'Requirements and scope', done: false },
    { label: 'Data sources and research', done: false },
    { label: 'Dataset understanding and inspection', done: false },
    { label: 'SQL data extraction and table joins', done: false },
    { label: 'Exploratory data analysis', done: false },
    { label: 'Data preprocessing', done: false },
    { label: 'Feature engineering and selection', done: false },
    { label: 'Model development', done: false },
    { label: 'Model evaluation using Gini and ROC-AUC', done: false },
    { label: 'Risk ranking and decile analysis', done: false },
    { label: 'Documentation and deployment', done: false },
  ],
  stack: [
    'Python',
    'SQL',
    'Pandas',
    'NumPy',
    'Matplotlib',
    'Seaborn',
    'Scikit-learn',
    'XGBoost',
    'LightGBM',
  ],
},

{
  title: 'Handwritten Digits Recognition',
  slug: 'handwritten-digits-recognition',
  status: 'In Progress',
  description:
    'Build a machine learning application that recognizes handwritten digits from 0 to 9 using the MNIST dataset.',
  objectives: [
    'Understand image representation, pixel values, and digit labels.',
    'Load and inspect the MNIST dataset.',
    'Apply data preprocessing and visualize handwritten digits.',
    'Implement KNN and SVM classification models.',
    'Develop ANN and CNN models for digit recognition.',
    'Evaluate and compare model performance.',
    'Build and deploy an interactive digit recognition application.',
  ],
  milestones: [
    { label: 'Dataset selection and problem definition', done: true },
    { label: 'Understand flattening and train/test concepts', done: true },
    { label: 'Load and inspect the MNIST dataset', done: true },
    { label: 'Data preprocessing and visualization', done: true },
    { label: 'KNN and SVM implementation', done: false },
    { label: 'ANN and CNN development', done: false },
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
    'TensorFlow/Keras',
  ],
},

]
