import type { BootcampConfig } from "@vizuara/ui";
import type { ShowcaseSectionConfig, CertificateSectionConfig } from "@vizuara/ui";
import {
  INSTRUCTOR_SREEDATH,
  INSTRUCTOR_RAJ,
  INSTRUCTOR_RAJAT,
  DEEPSEEK_BOOK,
} from "@vizuara/ui";

export const showcaseConfig: ShowcaseSectionConfig = {
  label: "Applications",
  title: "What You Can Build with ML and Deep Learning",
  subtitle:
    "From building neural networks from scratch to training production-grade classifiers, this bootcamp gives you the foundational skills to tackle any machine learning challenge.",
  items: [
    {
      src: "/ml-dl/ml-dl-hero.gif",
      alt: "ML-DL Research Bootcamp Overview",
      title: "ML-DL Research Projects",
    },
  ],
};

export const certificateConfig: CertificateSectionConfig = {
  label: "Credentials",
  title: "Learn from MIT PhD Researchers",
  subtitle:
    "Our lead instructor Dr. Sreedath Panat holds a PhD from MIT, where he conducted research in applied AI and scientific computing. Our team brings deep expertise in machine learning, neural networks, and applied AI research.",
  imageSrc: "/sciml/mit-certificate.jpeg",
  imageAlt: "MIT Certificate of Dr. Raj Dandekar",
};

export const bootcampConfig: BootcampConfig = {
  meta: {
    title: "Machine Learning and Deep Learning Research Bootcamp | Vizuara AI Labs",
    description:
      "Master Machine Learning and Deep Learning in a 6-week research bootcamp. Learn Python for ML, regression, decision trees, neural networks from scratch, backpropagation, and optimization. Work on impactful research projects and publish papers. Taught by MIT and Purdue AI PhDs.",
    keywords: [
      "machine learning",
      "deep learning",
      "neural networks",
      "backpropagation",
      "gradient descent",
      "decision trees",
      "regression",
      "Python for ML",
      "NumPy",
      "scikit-learn",
      "research bootcamp",
      "Vizuara AI Labs",
    ],
    ogTitle: "Machine Learning and Deep Learning Research Bootcamp | Vizuara AI Labs",
    ogDescription:
      "Master ML and DL foundations. Build neural networks from scratch, train classifiers, and publish research with MIT and Purdue PhDs.",
  },

  navbar: {
    links: [
      { label: "Why ML-DL", href: "#why" },
      { label: "Curriculum", href: "#curriculum" },
      { label: "Research", href: "#research" },
      { label: "Instructors", href: "#instructors" },
      { label: "Pricing", href: "#pricing" },
    ],
    ctaLabel: "Enroll Now",
    ctaHref: "#pricing",
  },

  hero: {
    badge: "ML-DL Research Bootcamp",
    headline: "ML and DL",
    headlineHighlight: "Research Bootcamp",
    headlineSuffix: "",
    subtitle:
      "Work on impactful ML/DL research. Present at top-tier conferences. Publish impactful research papers. Build neural networks from scratch using Python, NumPy, and scikit-learn.",
    scheduleItems: [
      { iconName: "Clock", text: "30 Topics", color: "text-secondary" },
      { iconName: "Code2", text: "Python", color: "text-primary" },
      { iconName: "Brain", text: "Research Projects", color: "text-secondary" },
    ],
    ctaPrimary: { label: "Enroll Now", href: "#pricing" },
    ctaSecondary: { label: "Watch Intro", href: "#video" },
    universityLogos: [
      { src: "/logos/mit-logo.png", alt: "MIT", width: 80 },
      { src: "/logos/iitmadras-logo.png", alt: "IIT Madras", width: 120 },
      { src: "/logos/purdue-logo.png", alt: "Purdue University", width: 100 },
    ],
    universityLabel: "Instructors from",
  },

  video: {
    badge: "Hear From Our Co-Founder",
    badgeIconName: "Play",
    label: "Watch",
    heading: "Hear From",
    headingHighlight: "Dr. Sreedath Panat",
    headingSuffix: "(MIT PhD)",
    youtubeUrl: "https://www.youtube.com/embed/QYPvx3nXY94",
    youtubeTitle: "Hear From Our Co-Founder Dr. Sreedath Panat (MIT PhD)",
  },

  why: {
    label: "Three Core Objectives",
    title: "The Foundations of ML and Deep Learning",
    subtitle:
      "We teach three interconnected objectives that take you from Python fundamentals to building and training neural networks from scratch. Each builds on the previous, creating a rigorous foundation for ML research.",
    items: [
      {
        iconName: "Code2",
        title: "Python Foundations for ML",
        description:
          "Start with Python fundamentals tailored for machine learning: variables, data types, matrix multiplication from scratch, object-oriented programming, and data visualization with Matplotlib, Seaborn, and Plotly. Build a solid coding foundation using NumPy and Pandas.",
        color: "text-primary",
      },
      {
        iconName: "BarChart3",
        title: "Classical Machine Learning",
        description:
          "Master the core algorithms that power modern ML: linear classifiers, the perceptron, logistic regression with cross-entropy loss, gradient descent optimization, L1/L2 regularization, and decision trees with Gini impurity. Build every algorithm from scratch before using scikit-learn.",
        color: "text-secondary",
      },
      {
        iconName: "Brain",
        title: "Neural Networks from Scratch",
        description:
          "Build neural networks layer by layer using only NumPy: code neurons, forward passes, activation functions, cross-entropy loss, and full backpropagation. Master optimizers (SGD, RMSProp, Adam), regularization (dropout, K-fold CV), and train on real datasets like MNIST Fashion and California Housing.",
        color: "text-primary",
      },
      {
        iconName: "TrendingUp",
        title: "Optimization and Training",
        description:
          "Understand gradient descent at a deep mathematical level: the chain rule, matrix gradients, and how weights are updated during backpropagation. Learn to diagnose overfitting, apply regularization strategies, and build complete training pipelines.",
        color: "text-secondary",
      },
      {
        iconName: "Target",
        title: "Hands-on Projects and Interviews",
        description:
          "Each module includes hands-on projects and interview-oriented recaps. Build classifiers, regression models, decision trees, and neural networks on real datasets. The bootcamp is designed to prepare you for both research and industry ML roles.",
        color: "text-primary",
      },
      {
        iconName: "Layers",
        title: "Research and Publication",
        description:
          "Work on industry-level ML/DL research projects aimed at publication. Learn to formulate research problems, design experiments, validate hypotheses, and write scientific papers for conferences and journals.",
        color: "text-secondary",
      },
    ],
  },

  diagrams: {
    label: "Visual Framework",
    title: "How Machine Learning and Deep Learning Work",
    subtitle:
      "Publication-quality diagrams illustrating the core algorithms and architectures you will master in this bootcamp.",
    diagrams: [
      {
        src: "/diagrams/ml-dl-landscape.png",
        alt: "ML-DL curriculum landscape showing Python foundations, classical ML algorithms, and neural networks",
        title: "The ML-DL Landscape",
        description:
          "A high-level overview of the bootcamp curriculum: from Python foundations and data visualization, through classical ML algorithms (regression, decision trees), to building neural networks from scratch with backpropagation and optimizers.",
      },
      {
        src: "/diagrams/neural-network-training.png",
        alt: "Neural network training pipeline with forward pass, backpropagation, and optimizer comparison",
        title: "Neural Network Training Pipeline",
        description:
          "The complete training loop: forward pass through multiple layers with activation functions, cross-entropy loss computation, backward pass with gradient propagation via the chain rule, and weight updates using SGD, RMSProp, or Adam optimizers.",
      },
      {
        src: "/diagrams/decision-tree-construction.png",
        alt: "Decision tree construction with Gini impurity and decision boundaries",
        title: "Decision Tree Construction",
        description:
          "Decision tree construction using Gini impurity for feature selection, recursive binary splitting, pruning strategies, and the resulting rectangular decision boundaries for classification and regression tasks.",
      },
    ],
  },

  audience: {
    label: "Who Is This For",
    title: "Designed for Beginners, Engineers, and Researchers",
    subtitle:
      "Whether you are new to programming or an experienced developer looking to build a rigorous ML foundation, this bootcamp teaches you to implement every algorithm from scratch before using libraries.",
    items: [
      {
        iconName: "GraduationCap",
        title: "Students and Beginners",
        description:
          "Undergraduate and graduate students who want a rigorous, ground-up understanding of machine learning and deep learning. No prior ML experience required: we start from Python basics.",
        tags: ["Undergrads", "Graduate Students", "Career Changers"],
      },
      {
        iconName: "Wrench",
        title: "Software Engineers",
        description:
          "Developers looking to transition into ML/AI roles. Build every algorithm from scratch before using frameworks, giving you the deep understanding that separates ML engineers from API callers.",
        tags: ["Backend Engineers", "Full-Stack Developers", "DevOps"],
      },
      {
        iconName: "BarChart3",
        title: "Data Scientists",
        description:
          "Analysts and data practitioners who use ML libraries but want to understand what happens under the hood. Master the mathematics and implementation behind regression, trees, and neural networks.",
        tags: ["Data Analysts", "Business Analysts", "Applied Scientists"],
      },
      {
        iconName: "BookOpen",
        title: "Aspiring Researchers",
        description:
          "Students aiming for graduate programs or research careers in AI. The research project component and publication pathway strengthen applications to top PhD programs.",
        tags: ["PhD Aspirants", "Research Scholars", "Academic Professionals"],
      },
    ],
  },

  curriculum: {
    label: "Curriculum",
    title: "A Guided Journey from Python to Neural Networks",
    subtitle:
      "30 topics across 6 weeks, covering Python foundations, machine learning algorithms, and deep learning from scratch. Phase 1 (Weeks 1 through 6) is entirely self-paced: all lectures are pre-recorded and available for lifetime access, so you learn at your own speed.",
    days: [
      // Week 1: Python Foundations
      {
        day: 1,
        week: 1,
        title: "Python Basics, Variables, Data Types",
        iconName: "Code2",
        topics: [
          "Python fundamentals for machine learning: variables, data types, control flow, and functions",
        ],
        exercise: "Write basic Python programs for data manipulation",
        instructor: "",
      },
      {
        day: 2,
        week: 1,
        title: "Matrix Multiplication from Scratch",
        iconName: "Layers",
        topics: [
          "Implementing matrix multiplication using pure Python, understanding computational foundations of ML",
        ],
        exercise: "Build matrix multiplication without NumPy",
        instructor: "",
      },
      {
        day: 3,
        week: 1,
        title: "Classes and Objects in ML",
        iconName: "Wrench",
        topics: [
          "Object-oriented programming patterns used in ML codebases: classes, inheritance, and encapsulation",
        ],
        exercise: "Build a reusable ML model class structure",
        instructor: "",
      },
      {
        day: 4,
        week: 1,
        title: "Intro to NumPy and Pandas",
        iconName: "Database",
        topics: [
          "NumPy arrays, vectorized operations, broadcasting, and Pandas DataFrames for data loading and exploration",
        ],
        exercise: "Load, clean, and explore a real-world dataset",
        instructor: "",
      },
      {
        day: 5,
        week: 1,
        title: "Data Visualization: Matplotlib, Seaborn, Plotly",
        iconName: "BarChart3",
        topics: [
          "Creating publication-quality visualizations: line plots, histograms, scatter plots, heatmaps, and interactive charts",
        ],
        exercise: "Visualize dataset distributions and correlations",
        instructor: "",
      },
      // Week 2: ML Foundations
      {
        day: 6,
        week: 2,
        title: "What is ML, Types of ML Models",
        iconName: "BookOpen",
        topics: [
          "Supervised, unsupervised, and reinforcement learning paradigms, with real-world examples of each",
        ],
        exercise: "Classify ML problems by type from real-world scenarios",
        instructor: "",
      },
      {
        day: 7,
        week: 2,
        title: "The 6 Steps of an ML Project",
        iconName: "Target",
        topics: [
          "End-to-end ML workflow: data collection, preprocessing, feature engineering, model selection, training, and evaluation",
        ],
        exercise: "Design an ML pipeline for a given problem statement",
        instructor: "",
      },
      {
        day: 8,
        week: 2,
        title: "Linear Classifiers and the Perceptron",
        iconName: "Zap",
        topics: [
          "Decision boundaries, the perceptron algorithm, convergence theorem, and limitations of linear classifiers",
        ],
        exercise: "Implement the perceptron from scratch on a 2D dataset",
        instructor: "",
      },
      {
        day: 9,
        week: 2,
        title: "NumPy, Scikit-learn, Jupyter",
        iconName: "Code2",
        topics: [
          "Setting up the ML development environment: Jupyter notebooks, scikit-learn API patterns, and NumPy for computation",
        ],
        exercise: "Train a scikit-learn model end-to-end in a Jupyter notebook",
        instructor: "",
      },
      {
        day: 10,
        week: 2,
        title: "Build Random Linear Classifier",
        iconName: "Layers",
        topics: [
          "Building a random linear classifier from scratch, understanding decision boundaries and classification accuracy",
        ],
        exercise: "Implement and visualize a random linear classifier",
        instructor: "",
      },
      // Week 3: Regression
      {
        day: 11,
        week: 3,
        title: "Logistic Regression Intuition and Coding",
        iconName: "TrendingUp",
        topics: [
          "Sigmoid function, probability interpretation, decision boundaries, and implementing logistic regression from scratch",
        ],
        exercise: "Build logistic regression from scratch with gradient descent",
        instructor: "",
      },
      {
        day: 12,
        week: 3,
        title: "Cross Entropy Loss and Gradient Descent",
        iconName: "Zap",
        topics: [
          "Deriving cross-entropy loss, gradient computation, learning rate selection, and convergence analysis",
        ],
        exercise: "Implement gradient descent optimization step by step",
        instructor: "",
      },
      {
        day: 13,
        week: 3,
        title: "Regularization: L1/L2",
        iconName: "Shield",
        topics: [
          "Lasso (L1) and Ridge (L2) regularization: mathematical formulation, effect on weights, and preventing overfitting",
        ],
        exercise: "Compare L1 and L2 regularization on an overfitting dataset",
        instructor: "",
      },
      {
        day: 14,
        week: 3,
        title: "Linear and Ridge Regression",
        iconName: "BarChart3",
        topics: [
          "Ordinary least squares, closed-form solution, Ridge regression with regularization, and model evaluation metrics",
        ],
        exercise: "Implement linear and Ridge regression from scratch",
        instructor: "",
      },
      {
        day: 15,
        week: 3,
        title: "Interview-Oriented Recap",
        iconName: "MessageSquare",
        topics: [
          "Comprehensive review of regression concepts with ML interview-style questions and problem-solving strategies",
        ],
        exercise: "Solve ML interview problems on regression topics",
        instructor: "",
      },
      // Week 4: Decision Trees
      {
        day: 16,
        week: 4,
        title: "Gini Impurity and Tree Construction",
        iconName: "GitBranch",
        topics: [
          "Gini impurity measure, information gain, recursive tree construction, and feature selection for splits",
        ],
        exercise: "Compute Gini impurity by hand and implement tree splitting",
        instructor: "",
      },
      {
        day: 17,
        week: 4,
        title: "Pruning Trees, Full Code Walkthrough",
        iconName: "Scissors",
        topics: [
          "Pre-pruning and post-pruning strategies, cost-complexity pruning, and complete decision tree implementation",
        ],
        exercise: "Build a pruned decision tree from scratch",
        instructor: "",
      },
      {
        day: 18,
        week: 4,
        title: "Regression Trees with Multiple Features",
        iconName: "BarChart3",
        topics: [
          "Extending decision trees to regression problems, handling continuous features, and multi-feature splitting",
        ],
        exercise: "Build a regression tree for a multi-feature dataset",
        instructor: "",
      },
      {
        day: 19,
        week: 4,
        title: "Hands-on: Build Regression and Classification Trees",
        iconName: "Code2",
        topics: [
          "End-to-end project building both regression and classification trees on real-world datasets",
        ],
        exercise: "Train and evaluate trees on real datasets",
        instructor: "",
      },
      {
        day: 20,
        week: 4,
        title: "Interview Prep: Trees Summary",
        iconName: "MessageSquare",
        topics: [
          "Decision tree interview questions, comparison with other algorithms, and when to use trees vs. other methods",
        ],
        exercise: "Solve ML interview problems on tree-based methods",
        instructor: "",
      },
      // Week 5: Neural Networks Part I
      {
        day: 21,
        week: 5,
        title: "Coding Neurons and Layers using NumPy",
        iconName: "Brain",
        topics: [
          "Implementing single neurons, dense layers, and multi-layer architectures using only NumPy arrays",
        ],
        exercise: "Build a 2-layer neural network from scratch",
        instructor: "",
      },
      {
        day: 22,
        week: 5,
        title: "Forward Pass, Activation Functions",
        iconName: "Zap",
        topics: [
          "Computing forward passes through layers, ReLU, sigmoid, tanh, and softmax activation functions",
        ],
        exercise: "Implement and visualize different activation functions",
        instructor: "",
      },
      {
        day: 23,
        week: 5,
        title: "Loss Functions: Cross Entropy",
        iconName: "Target",
        topics: [
          "Binary and categorical cross-entropy, MSE loss, and choosing the right loss function for your problem",
        ],
        exercise: "Implement multiple loss functions and compare gradients",
        instructor: "",
      },
      {
        day: 24,
        week: 5,
        title: "Backpropagation (Single Neuron + Full Layer)",
        iconName: "ArrowUpDown",
        topics: [
          "Deriving backpropagation for a single neuron, extending to full layers, and computing weight gradients",
        ],
        exercise: "Implement backpropagation step by step on a toy network",
        instructor: "",
      },
      {
        day: 25,
        week: 5,
        title: "Chain Rule and Matrix Gradients",
        iconName: "Layers",
        topics: [
          "The chain rule for composite functions, Jacobian matrices, and efficient matrix gradient computation for deep networks",
        ],
        exercise: "Derive and verify gradients using numerical differentiation",
        instructor: "",
      },
      // Week 6: Neural Networks Part II
      {
        day: 26,
        week: 6,
        title: "Complete Backprop Pipeline",
        iconName: "Zap",
        topics: [
          "Assembling the full training loop: forward pass, loss computation, backward pass, and weight update in a unified pipeline",
        ],
        exercise: "Build an end-to-end training loop for a multi-layer network",
        instructor: "",
      },
      {
        day: 27,
        week: 6,
        title: "Optimizers: GD, RMSProp, Adam",
        iconName: "TrendingUp",
        topics: [
          "Vanilla gradient descent, momentum, RMSProp adaptive learning rates, and Adam optimizer implementation",
        ],
        exercise: "Implement and compare three optimizers on the same dataset",
        instructor: "",
      },
      {
        day: 28,
        week: 6,
        title: "Overfitting: Dropout, Regularization, K-fold CV",
        iconName: "Shield",
        topics: [
          "Diagnosing overfitting with learning curves, dropout regularization, weight decay, and K-fold cross-validation",
        ],
        exercise: "Apply dropout and K-fold CV to reduce overfitting on a real dataset",
        instructor: "",
      },
      {
        day: 29,
        week: 6,
        title: "Projects: MNIST Fashion + California Housing",
        iconName: "FlaskConical",
        mega: true,
        accentColor: "amber",
        topics: [
          "End-to-end classification on Fashion MNIST using your neural network from scratch",
          "Regression on the California Housing dataset with your custom training pipeline",
          "Model evaluation, hyperparameter tuning, and results visualization",
        ],
        exercise: "Train and evaluate neural networks on both datasets",
        instructor: "",
      },
      {
        day: 30,
        week: 6,
        title: "Final Recap: Neural Network in 100 Minutes",
        iconName: "Flag",
        mega: true,
        accentColor: "violet",
        topics: [
          "Comprehensive review: from a single neuron to a full deep network",
          "Key concepts consolidated: forward pass, loss, backprop, optimizers, regularization",
          "Interview preparation and next steps for advanced deep learning",
        ],
        exercise: "Build a complete neural network from scratch in one session",
        instructor: "",
      },
    ],
    weekLabels: {
      1: { label: "Python Foundations", sessions: "Topics 1-5" },
      2: { label: "ML Foundations", sessions: "Topics 6-10" },
      3: { label: "Regression", sessions: "Topics 11-15" },
      4: { label: "Decision Trees", sessions: "Topics 16-20" },
      5: { label: "Neural Networks: Part I", sessions: "Topics 21-25" },
      6: { label: "Neural Networks: Part II", sessions: "Topics 26-30" },
    },
  },

  deliverables: {
    label: "What You Get",
    title: "Research-Grade Deliverables",
    subtitle:
      "Everything you need to go from ML beginner to building neural networks from scratch and publishing research.",
    items: [
      {
        iconName: "Code2",
        title: "Complete Python Codebase",
        description:
          "Production-ready Python code for every session, including from-scratch implementations of every algorithm: regression, decision trees, and neural networks.",
        features: [
          "All lecture code files and Jupyter notebooks",
          "Homework assignments with solutions",
          "Research project starter templates",
          "Fully documented ML pipelines",
        ],
        gradient: "from-primary/20 to-secondary/20",
      },
      {
        iconName: "FileText",
        title: "Lecture Notes and Videos",
        description:
          "Lifetime access to all session recordings and comprehensive lecture notes covering every ML and DL concept from Python basics to neural networks.",
        features: [
          "HD video recordings of all sessions",
          "Detailed lecture notes in PDF format",
          "Annotated code walkthroughs",
          "Reference material and reading lists",
        ],
        gradient: "from-secondary/20 to-primary/20",
      },
      {
        iconName: "FlaskConical",
        title: "Research Project Portfolio",
        description:
          "Industry-level ML/DL projects including neural network classifiers, regression models, and decision tree systems ready for your portfolio or publication.",
        features: [
          "Neural network trained on Fashion MNIST",
          "Regression pipeline for California Housing",
          "Decision tree classifier implementation",
          "Publication-ready research results",
        ],
        gradient: "from-primary/20 to-secondary/20",
      },
      {
        iconName: "MessageSquare",
        title: "Community and Mentorship",
        description:
          "Join the Vizuara ML-DL community on Discord for ongoing collaboration, doubt clearance, and research partnerships.",
        features: [
          "Discord community access",
          "Student collaboration opportunities",
          "Assignment checking and doubt clearance",
          "Free access to all ML webinars",
        ],
        gradient: "from-secondary/20 to-primary/20",
      },
    ],
  },

  instructors: {
    label: "Your Instructors",
    title: "Learn from MIT and Purdue AI PhDs",
    subtitle:
      "Our instructors are co-founders of Vizuara AI Labs and published researchers in Machine Learning and Deep Learning, with expertise spanning neural networks, optimization, and applied ML.",
    items: [
      {
        ...INSTRUCTOR_SREEDATH,
        session: "Python Foundations, Neural Network Training, Optimizers, and Regularization",
      },
      {
        ...INSTRUCTOR_RAJ,
        session: "ML Foundations, Linear Classifiers, Decision Trees, and Interview Prep",
      },
      {
        ...INSTRUCTOR_RAJAT,
        session: "Regression, Backpropagation, Neural Network Architecture, and Loss Functions",
      },
    ],
    bookCallout: DEEPSEEK_BOOK,
  },

  researchPapers: {
    label: "Our Research",
    title: "Sample Papers From Our Research",
    subtitle:
      "A selected few papers from our research over the past years. Students in the Industry Professional plan work on similar projects aimed at publication.",
    papers: [
      {
        title: "Bayesian Neural Ordinary Differential Equations",
        authors:
          "Raj Dandekar, Vaibhav Dixit, Mohamed Tarek, Aslan Garcia-Valadez, Chris Rackauckas",
        venue: "Languages for Inference (LAF1)",
        year: 2021,
        abstract:
          "Integrates Bayesian learning frameworks with Neural ODEs to robustly quantify uncertainty. Demonstrates probabilistic identification of model specification in partially-described dynamical systems using universal ordinary differential equations.",
        arxivUrl: "https://arxiv.org/abs/2012.07244",
        thumbnail: "/papers/cbeval.png",
        tags: ["Neural Networks", "Bayesian ML", "Uncertainty"],
      },
      {
        title:
          "A Machine Learning Aided Global Diagnostic and Comparative Tool to Assess Effect of Quarantine Control in COVID-19 Spread",
        authors:
          "Raj Dandekar, Chris Rackauckas, George Barbastathis",
        venue: "Cell Patterns",
        year: 2020,
        abstract:
          "Developed a globally applicable diagnostic model by augmenting classical epidemiological models with a neural network module. All parameters were optimized via machine learning algorithms, creating a hybrid physics-ML approach to pandemic modeling.",
        arxivUrl: "https://arxiv.org/abs/2003.14077",
        tags: ["Neural Networks", "Applied ML", "Healthcare"],
      },
      {
        title: "Latent Multi-Head Attention for Small Language Models",
        authors:
          "Vizuara AI Labs Research Team",
        venue: "arXiv",
        year: 2025,
        abstract:
          "Investigates latent multi-head attention mechanisms for Small Language Models, enabling efficient inference while maintaining strong performance on downstream tasks.",
        arxivUrl: "https://arxiv.org/abs/2501.17781",
        thumbnail: "/papers/latent-attention.png",
        tags: ["Deep Learning", "Attention", "Efficiency"],
      },
      {
        title: "Decoders Laugh as Loud as Encoders",
        authors:
          "Vizuara AI Labs Research Team",
        venue: "arXiv",
        year: 2025,
        abstract:
          "A comparative study of encoder and decoder architectures for text classification tasks, demonstrating that modern decoder-only models can match encoder performance with appropriate fine-tuning strategies.",
        thumbnail: "/papers/decoders.png",
        tags: ["Deep Learning", "Classification", "Architecture"],
      },
      {
        title:
          "Modeling Chaotic Lorenz ODE System Using Scientific Machine Learning",
        authors:
          "Sameera S Kashyap, Raj Abhijit Dandekar, Rajat Dandekar, Sreedath Panat",
        venue: "arXiv",
        year: 2024,
        abstract:
          "Applies ML methods to foundational weather models. Demonstrates that combining neural networks with physics-informed modeling enables high accuracy with reduced data in climate applications.",
        arxivUrl: "https://arxiv.org/abs/2410.06452",
        thumbnail: "/papers/lorenz.png",
        tags: ["Neural Networks", "Applied ML", "Climate"],
      },
    ],
  },

  testimonials: {
    label: "Student Testimonials",
    title: "What Our Students Say",
    subtitle:
      "Hear from students, engineers, and researchers who built a rigorous ML foundation with this bootcamp.",
    items: [
      {
        quote:
          "Building neural networks from scratch in NumPy changed how I think about deep learning. I actually understand what PyTorch does under the hood now, and it shows in my interviews.",
        name: "Arjun Nair",
        role: "ML Engineer, AI Startup",
      },
      {
        quote:
          "The from-scratch approach is what sets this bootcamp apart. Implementing backpropagation by hand gave me an intuition that no course using only frameworks can provide.",
        name: "Kavitha Ramesh",
        role: "PhD Student, Machine Learning",
      },
      {
        quote:
          "I came with zero ML knowledge and left building neural networks. The Python foundations week made the transition smooth, and the decision tree section was the best explanation I have encountered.",
        name: "Amit Patel",
        role: "Software Engineer, FinTech",
      },
      {
        quote:
          "The interview prep sections after each module were incredibly valuable. I used the regression and decision tree recaps directly in my ML interviews and got the offer.",
        name: "Neha Gupta",
        role: "Data Scientist, E-commerce",
      },
      {
        quote:
          "As a physics student, I appreciated the mathematical rigor. The chain rule and matrix gradients session connected my math background to ML in a way that finally clicked.",
        name: "Rohit Sharma",
        role: "MS Student, Applied Mathematics",
      },
      {
        quote:
          "The MNIST Fashion and California Housing projects gave me concrete portfolio pieces. My GitHub showcases neural networks I built from scratch, and recruiters notice.",
        name: "Priyanka Das",
        role: "Junior Data Scientist, Consulting",
      },
    ],
  },

  pricing: {
    label: "Pricing",
    title: "Enroll in the Bootcamp",
    subtitle:
      "Choose the plan that matches your goals, from self-paced learning to intensive research mentorship with MIT PhDs.",
    plans: [
      {
        name: "Researcher Plan",
        price: "Rs 95,000",
        description:
          "Save 24%. Originally Rs 1,25,000. MIT and Purdue PhDs as your research mentors.",
        features: [
          "Lifetime access to all videos, code files, and homework assignments",
          "Access to bootcamp community on Discord",
          "Assignment checking and doubt clearance",
          "Free access to all ML webinars throughout the year",
          "Access to open list of research problems in ML/DL",
          "4-month personalized guidance in doing research",
          "Publishing the research in conferences/journals",
          "How ML and DL can be applied to real-world industries",
        ],
        href: "https://vizuara.ai/courses/ml-dl-research",
        cta: "Enroll Now",
        popular: true,
        variant: "primary",
      },
    ],
  },

  faq: {
    label: "FAQ",
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about the ML-DL Research Bootcamp.",
    items: [
      {
        question: "What programming language is used in this bootcamp?",
        answer:
          "The bootcamp uses Python exclusively. You will implement algorithms from scratch using NumPy and then use scikit-learn for production workflows. We also use Matplotlib, Seaborn, and Plotly for visualization. No prior Python experience is required.",
      },
      {
        question: "Do I need prior experience with machine learning?",
        answer:
          "No prior knowledge is needed. This bootcamp starts from Python basics and builds up systematically. It is designed for students, researchers, and working professionals who want a rigorous, ground-up understanding of ML and deep learning.",
      },
      {
        question: "What makes this different from other ML courses?",
        answer:
          "Three things set this bootcamp apart: you implement every algorithm from scratch before using libraries, the curriculum is taught by MIT and Purdue PhDs with research-grade depth, and the Industry Professional plan includes personalized research mentorship aimed at publishing in conferences and journals.",
      },
      {
        question: "What are the hands-on projects?",
        answer:
          "You will build multiple projects: matrix multiplication from scratch, a perceptron classifier, logistic regression with gradient descent, decision trees with pruning, and a complete neural network trained on Fashion MNIST and California Housing datasets. Every algorithm is implemented from scratch before using any library.",
      },
      {
        question: "How is the bootcamp structured?",
        answer:
          "The bootcamp covers 30 topics across 6 weeks: Python Foundations, ML Foundations, Regression, Decision Trees, Neural Networks Part I (architecture and backprop), and Neural Networks Part II (optimization and projects). All lecture material is available for lifetime access.",
      },
      {
        question: "Will this prepare me for ML interviews?",
        answer:
          "Yes. Each module includes interview-oriented recap sessions covering the most common ML interview questions for that topic. The from-scratch approach gives you the deep understanding that interviewers test for, going beyond what framework-only courses provide.",
      },
      {
        question: "Do I get a certificate?",
        answer:
          "Yes. Students who complete the bootcamp and submit all assignments receive a certificate of completion from Vizuara AI Labs.",
      },
      {
        question: "What is the refund policy?",
        answer:
          "We do not offer refunds. Please review the curriculum, watch the free introduction video, and explore the Student Plan before purchasing a paid plan to ensure the bootcamp is right for you.",
      },
    ],
  },

  cta: {
    heading: "Ready to Master",
    headingHighlight: "Machine Learning",
    headingSuffix: "?",
    subtitle:
      "Join hundreds of students and engineers who have built neural networks from scratch and launched ML research careers. Start building every algorithm from the ground up.",
    ctaPrimary: { label: "Enroll Now", href: "#pricing" },
    ctaSecondary: { label: "Watch Video", href: "#video" },
  },

  footer: {
    tagline:
      "Vizuara AI Labs: Making AI accessible through research-grade education. Founded by MIT and Purdue AI PhDs.",
    email: "sreedath@vizuara.ai",
    socialLinks: [
      {
        iconName: "Linkedin",
        href: "https://www.linkedin.com/company/vizuara",
        label: "LinkedIn",
      },
      {
        iconName: "Github",
        href: "https://github.com/vizuara",
        label: "GitHub",
      },
      {
        iconName: "Mail",
        href: "mailto:sreedath@vizuara.ai",
        label: "Email",
      },
    ],
  },
};
