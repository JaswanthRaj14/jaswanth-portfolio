export type ProjectCategory =
  | 'Data Science'
  | 'Machine Learning'
  | 'Data Analytics'
  | 'AI Engineering'
  | 'SQL'

export const projectCategories: ProjectCategory[] = [
  'Data Science',
  'Machine Learning',
  'Data Analytics',
  'AI Engineering',
  'SQL',
]

export type ProjectStatus = 'Completed' | 'In Progress'

export type ResultTable = {
  caption: string
  columns: string[]
  rows: string[][]
}

export type Project = {
  slug: string
  title: string
  categories: ProjectCategory[]
  status: ProjectStatus
  featured: boolean
  summary: string
  problem: string
  objectives: string[]
  dataset?: { name: string; description?: string[]; url?: string }
  preprocessing: string[]
  methodology: string[]
  cardTags: string[]
  tools: string[]
  metrics?: { label: string; value: string }[]
  resultTables?: ResultTable[]
  findings?: string[]
  resultsNote?: string
  lessons: string[]
  repoUrl: string
  repoIsProfile?: boolean
  demoUrl?: string
}

export const projects: Project[] = [
  {
    slug: 'forest-cover-prediction',
    title: 'Forest Cover Prediction',
    categories: ['Machine Learning'],
    status: 'Completed',
    featured: true,
    summary:
      'A machine learning project focused on predicting forest cover types from environmental and cartographic features such as elevation, slope, soil type, and distance to hydrology.',
    problem:
      'Can the dominant forest cover type of an area be predicted from its environmental and cartographic features?',
    objectives: [
      'Develop a multiclass classification model for forest cover prediction.',
      'Explore terrain, hydrological, soil, and wilderness-area features.',
      'Evaluate model performance using accuracy and macro F1-score.',
      'Build an interactive web interface for generating predictions.',
      'Deploy the application for public access.',
    ],
    dataset: {
      name: 'Covertype (Forest Cover Type) — UCI Machine Learning Repository',
      url: 'https://archive.ics.uci.edu/dataset/31/covertype',
      description: [
        'Forest cover types in the Roosevelt National Forest region of northern Colorado.',
        '52 input features: 10 terrain features, 4 wilderness-area indicators, and 38 soil-type indicators.',
        'Seven target classes: Spruce/Fir, Lodgepole Pine, Ponderosa Pine, Cottonwood/Willow, Aspen, Douglas-fir, and Krummholz.',
      ],
    },
    preprocessing: [
      'Examined the dataset and prepared the features required for classification.',
      "Retained the 52 features used by the trained model's feature set.",
    ],
    methodology: [
      'Trained an Extra Trees Classifier with 100 trees for multiclass classification.',
      'Evaluated the model on a holdout split using accuracy and macro F1-score.',
      'Serialized the trained model with Joblib.',
      'Built a Streamlit interface for entering terrain measurements, wilderness area, and soil type.',
      'Model is downloaded from Google Drive at runtime and cached during the application session.',
      'Deployed publicly on Streamlit Community Cloud; a FastAPI prediction backend is also retained in the repository.',
    ],
    cardTags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
    tools: [
      'Python',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Scikit-learn',
      'Joblib',
      'Streamlit',
      'FastAPI',
      'Git & GitHub',
    ],
    metrics: [
      { label: 'Holdout accuracy', value: '86.08%' },
      { label: 'Macro F1-score', value: '0.8591' },
      { label: 'Classes', value: '7' },
      { label: 'Input features', value: '52' },
    ],
    resultsNote:
      'Results were obtained on a holdout split from the same underlying dataset used during development and should not be interpreted as performance on a fully independent external dataset.',
    lessons: [
      'Generalization still needs to be evaluated on a genuinely independent dataset.',
      'The ~123 MB model is too large for the repository, so it is stored separately and downloaded at runtime — deployment reliability and loading feedback are areas to improve.',
      'Planned next steps: feature-importance visualizations, better input validation, and more detailed prediction explanations.',
    ],
    repoUrl: 'https://github.com/JaswanthRaj14/Forest-Cover-Prediction',
    demoUrl: 'https://forest-cover-prediction-dm3gypgxmgmbpwnyeozxnv.streamlit.app/',
  },
  {
    slug: 'flight-fare-prediction',
    title: 'Flight Fare Analysis and Prediction',
    categories: ['Data Science', 'Machine Learning'],
    status: 'In Progress',
    featured: true,
    summary:
      'An ongoing project involving flight fare data exploration, data cleaning, route analysis, feature engineering, and predictive modeling.',
    problem:
      'What drives flight ticket prices, and how well can fares be estimated from route and booking characteristics?',
    objectives: [
      'Explore the dataset and understand fare distributions.',
      'Clean the data and prepare it for analysis.',
      'Engineer features from route and booking characteristics.',
      'Train and evaluate a model to estimate fares.',
    ],
    preprocessing: ['Data cleaning is a planned milestone and has not been completed yet.'],
    methodology: [
      'Planned workflow: data exploration → data cleaning → feature engineering → model training → evaluation → deployment.',
    ],
    cardTags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
    resultsNote: 'This project is in progress. Results will be published once evaluation is complete.',
    lessons: [],
    repoUrl: 'https://github.com/JaswanthRaj14',
    repoIsProfile: true,
  },
  {
    slug: 'healthcare-readmission-analysis',
    title: 'Healthcare Readmission Risk Analysis',
    categories: ['SQL', 'Data Analytics'],
    status: 'Completed',
    featured: true,
    summary:
      'A healthcare data analysis project using SQL to explore patient encounters, readmission patterns, and relationships among hospital admission characteristics.',
    problem:
      'Which patient and admission characteristics are associated with hospital readmissions for diabetic patients?',
    objectives: [
      'Identify utilization, clinical, hospitalization, and treatment factors associated with higher observed 30-day readmission rates.',
      'Investigate whether a simple, interpretable risk-scoring framework can separate encounters into groups with meaningfully different readmission rates.',
    ],
    dataset: {
      name: 'Diabetes 130-US Hospitals for Years 1999–2008',
      description: [
        'Approximately 100,100 hospital encounters involving patients with diabetes across multiple U.S. hospitals.',
        'The original readmitted field (<30, >30, NO) was converted into a binary 30-day readmission target.',
      ],
    },
    preprocessing: [
      'Validated the total number of encounters and checked for duplicate encounter IDs.',
      'Created a working analysis table to keep the raw data untouched.',
      'Removed the weight column because of its extremely high proportion of unknown values.',
      'Replaced "?" values with "Unknown" in selected categorical fields and standardized invalid gender values.',
      'Kept repeated patient encounters, since prior inpatient and emergency visits are important to the analysis.',
    ],
    methodology: [
      'Baseline readmission analysis, followed by factor-by-factor comparison of observed readmission rates.',
      'Ranked risk factors by the difference between their lowest and highest observed readmission rates.',
      'Built a transparent rule-based score (max 11 points) from prior inpatient visits, prior emergency visits, number of diagnoses, and hospital stay.',
      'Segmented encounters into Low (0–3), Moderate (4–7), and High (8–11) risk and compared each with the baseline.',
      'SQL techniques: CASE WHEN, conditional aggregation, subqueries, GROUP BY, ALTER TABLE / UPDATE.',
    ],
    cardTags: ['SQL', 'MySQL', 'PostgreSQL'],
    tools: ['SQL', 'MySQL', 'PostgreSQL', 'Git & GitHub'],
    metrics: [
      { label: 'Encounters analyzed', value: '100,100' },
      { label: 'Baseline 30-day rate', value: '11.07%' },
      { label: 'High-risk segment rate', value: '31.43%' },
      { label: 'High risk vs baseline', value: '2.84×' },
    ],
    resultTables: [
      {
        caption: 'Observed 30-day readmission by risk segment',
        columns: ['Segment', 'Encounters', 'Readmissions', 'Rate'],
        rows: [
          ['Low Risk', '49,612', '3,913', '7.89%'],
          ['Moderate Risk', '49,298', '6,799', '13.79%'],
          ['High Risk', '1,190', '374', '31.43%'],
        ],
      },
    ],
    findings: [
      'Previous inpatient utilization showed the strongest observed difference: 8.43% (0 visits) vs 35.98% (5+ visits), a 27.55 pp gap.',
      'Previous emergency utilization followed a similar pattern, with a 16.62 pp gap between 0 and 5+ visits.',
      'Number of diagnoses, hospital stay, insulin, and maximum glucose serum showed smaller but consistent differences.',
    ],
    resultsNote:
      'These are observational associations in historical data. The risk score is an analytical framework, not a clinically validated prediction model.',
    lessons: [
      'The dataset covers 1999–2008, so practices and populations may differ from current clinical environments.',
      'Repeated encounters mean observations are not fully independent.',
      'Some subgroups are small, making their observed rates unstable.',
      'No multivariable or causal adjustment was applied — a natural next step for the analysis.',
    ],
    repoUrl: 'https://github.com/JaswanthRaj14/-Healthcare-Readmission-Risk-Analysis',
  },
  {
    slug: 'credit-card-fraud-detection',
    title: 'Credit Card Fraud Detection',
    categories: ['Machine Learning'],
    status: 'Completed',
    featured: true,
    summary:
      'A classification project exploring fraudulent transaction detection using a Random Forest model, served through an interactive Streamlit application.',
    problem: 'How can fraudulent card transactions be flagged in a heavily imbalanced dataset?',
    objectives: [
      'Build a reliable machine learning model for fraud detection.',
      'Handle real-world transaction data through preprocessing.',
      'Predict whether a transaction is fraudulent or legitimate.',
      'Provide an easy-to-use web interface for batch prediction.',
      'Demonstrate an end-to-end machine learning workflow.',
    ],
    dataset: {
      name: 'Credit Card Fraud Detection Dataset (Kaggle)',
      url: 'https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud',
      description: [
        'Not included in the repository because of its size and licensing considerations.',
      ],
    },
    preprocessing: [
      'Loaded the transaction dataset, then performed preprocessing and cleaning.',
      'Prepared the dataset for model training.',
      'The deployed app applies the same preprocessing before generating predictions.',
    ],
    methodology: [
      'Trained a Random Forest Classifier and evaluated it on unseen data.',
      'Saved the trained model with Joblib.',
      'Deployed a Streamlit app where users upload a CSV of transactions for batch prediction.',
      'The app labels each transaction as legitimate or fraudulent and shows a summary of totals.',
    ],
    cardTags: ['Python', 'Pandas', 'Scikit-learn', 'Random Forest', 'Streamlit'],
    tools: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Random Forest',
      'Matplotlib',
      'Seaborn',
      'Joblib',
      'Streamlit',
    ],
    lessons: [
      'Fraud data is heavily imbalanced, which makes reliable detection harder than plain accuracy suggests.',
      'Planned improvements: compare XGBoost, LightGBM, and CatBoost, explore deep learning, and support real-time predictions through an API.',
    ],
    repoUrl: 'https://github.com/JaswanthRaj14/Credit_Card_Fraud_Detection',
  },
  {
    slug: 'nba-performance-analytics',
    title: 'NBA Performance Analytics Dashboard',
    categories: ['Data Analytics'],
    status: 'Completed',
    featured: false,
    summary:
      'A sports analytics project exploring NBA performance data through data processing, SQL, and dashboard visualization.',
    problem:
      'How can player and team performance data be organized into clear, explorable insights?',
    objectives: [
      'Transform raw NBA data into a clean and structured format.',
      'Improve data accuracy and consistency.',
      'Prepare the dataset for analytical insights and visualization.',
      'Apply real-world data preprocessing techniques.',
    ],
    dataset: {
      name: 'NBA games details dataset',
      description: [
        'The raw dataset is hosted externally because of GitHub file size limitations.',
      ],
    },
    preprocessing: [
      'Removed missing and null values and handled duplicate records.',
      'Standardized column names and formats, and converted data types for numerical analysis.',
      'Detected and treated outliers.',
      'Applied feature selection and filtering, then exported the cleaned dataset.',
    ],
    methodology: [
      'Cleaned and preprocessed the raw data in Python with Pandas and NumPy.',
      'Used SQL and dashboard visualization to explore player and team performance.',
    ],
    cardTags: ['Python', 'PostgreSQL', 'Power BI'],
    tools: ['Python', 'Pandas', 'NumPy', 'Jupyter Notebook', 'PostgreSQL', 'Power BI'],
    findings: [
      'Produced a cleaned, analysis-ready NBA dataset with improved reliability and consistency.',
      'Prepared structured data for dashboard creation and reporting.',
    ],
    lessons: [],
    repoUrl: 'https://github.com/JaswanthRaj14/NBA_Data_Analysis',
  },
  {
    slug: 'election-analysis',
    title: 'Election Analysis Dashboard',
    categories: ['Data Analytics'],
    status: 'Completed',
    featured: false,
    summary:
      'A data analytics project involving election-related data exploration, SQL, and interactive dashboard reporting.',
    problem: 'How can election results be explored interactively across regions and parties?',
    objectives: [
      'Identify low-performing constituencies.',
      'Detect declining and volatile turnout trends.',
      'Analyse structural drivers of participation.',
      'Develop a composite risk score model.',
      'Enable data-driven intervention prioritisation.',
    ],
    dataset: {
      name: 'Constituency-level Assembly Election Data',
      description: [
        '4,261 aggregated constituency-election records across multiple election cycles.',
        'Attributes include voter turnout %, total electors, candidate count, margin of victory, and participation change.',
      ],
    },
    preprocessing: [
      'Aggregated candidate-level records to the constituency level in Python.',
      'Calculated turnout trends and volatility (standard deviation).',
    ],
    methodology: [
      'Linear regression slope per constituency to flag negative future turnout trends.',
      'Composite risk score from declining trend, high volatility, below-state-average turnout, large electorate, and negative slope.',
      'SQL analysis in PostgreSQL: state-wise turnout, risk segmentation, top high-risk constituencies, and window functions for ranking.',
      'Power BI dashboard with KPIs, participation trends, structural drivers, and risk prioritisation views.',
    ],
    cardTags: ['Python', 'PostgreSQL', 'Power BI'],
    tools: ['Python', 'Pandas', 'NumPy', 'PostgreSQL', 'SQL', 'Power BI', 'DAX'],
    metrics: [
      { label: 'Records analyzed', value: '4,261' },
      { label: 'Declining turnout trend', value: '43%' },
      { label: 'High-risk constituencies', value: '2,000+' },
    ],
    findings: [
      '43% of constituencies show declining turnout trends.',
      'Large electorates do not guarantee high participation.',
      'High volatility acts as an early-warning indicator.',
      'Risk-based prioritisation supports more efficient resource allocation.',
    ],
    lessons: [],
    repoUrl: 'https://github.com/JaswanthRaj14/Electoral-Participation-Risk-Intelligence-Analysis',
  },
  {
    slug: 'f1-performance-analytics',
    title: 'F1 Performance Analytics Dashboard',
    categories: ['Data Analytics'],
    status: 'Completed',
    featured: false,
    summary:
      'A motorsport analytics project exploring Formula 1 performance through dashboard-based analysis.',
    problem: 'How do drivers and constructors compare across Formula 1 seasons and races?',
    objectives: [
      'Clean and preprocess raw Formula 1 datasets.',
      'Analyze driver and constructor performance.',
      'Identify race trends and season patterns.',
      'Build interactive dashboards for visualization.',
    ],
    dataset: {
      name: 'Historical Formula 1 race data',
      description: [
        'Driver and constructor details, race results and positions, points, circuits, seasons, and lap statistics.',
      ],
    },
    preprocessing: [
      'Used Power BI Power Query Editor to remove null values and duplicate records.',
      'Standardized column names and formats, and converted data types.',
      'Filtered invalid entries and created calculated and derived columns.',
    ],
    methodology: [
      'Followed an ETL (Extract, Transform, Load) workflow before reporting.',
      'Analyzed driver performance, constructor rankings, points distribution, and season-wise trends.',
      'Built interactive Power BI dashboards with standings, race metrics, and year- and circuit-based trends.',
    ],
    cardTags: ['Power BI'],
    tools: ['Power BI', 'Python', 'Pandas', 'NumPy', 'Jupyter Notebook'],
    lessons: [],
    repoUrl: 'https://github.com/JaswanthRaj14/F1-Analysis',
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export const featuredProjects = projects.filter((project) => project.featured)
