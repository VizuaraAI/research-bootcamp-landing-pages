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
  title: "What You Can Build with Generative AI",
  subtitle:
    "From RAG-powered chatbots to multimodal vision-language systems, this bootcamp equips you to build production-grade GenAI applications across industries.",
  items: [
    {
      src: "/genai/rag-chatbot.gif",
      alt: "RAG-powered Chatbot System",
      title: "RAG-Powered Chatbot",
    },
    {
      src: "/genai/agents.gif",
      alt: "LLM Agent with LangChain",
      title: "LLM Agents with LangChain",
    },
    {
      src: "/genai/genai-hero.gif",
      alt: "Generative AI Research Bootcamp Overview",
      title: "GenAI Research Projects",
    },
  ],
};

export const certificateConfig: CertificateSectionConfig = {
  label: "Credentials",
  title: "Learn from MIT PhD Researchers",
  subtitle:
    "Our lead instructor Dr. Raj Dandekar holds a PhD from MIT, where he conducted research at the Julia Lab under Prof. Alan Edelman and Chris Rackauckas. Our team brings deep expertise in LLMs, scientific computing, and applied AI research.",
  imageSrc: "/sciml/mit-certificate.jpeg",
  imageAlt: "MIT Certificate of Dr. Raj Dandekar",
};

export const bootcampConfig: BootcampConfig = {
  meta: {
    title: "Generative AI Research Bootcamp | Vizuara AI Labs",
    description:
      "Master Generative AI and LLMs in a 6-week research bootcamp. Learn LLM foundations, prompt engineering, RAG systems, LangChain agents, and multimodal models. Work on industry-level projects and publish LLM research papers. Taught by MIT and Purdue AI PhDs.",
    keywords: [
      "generative AI",
      "large language models",
      "LLMs",
      "transformers",
      "RAG",
      "retrieval augmented generation",
      "LangChain",
      "prompt engineering",
      "BERT",
      "fine-tuning",
      "multimodal AI",
      "vision transformers",
      "research bootcamp",
      "Vizuara AI Labs",
    ],
    ogTitle: "Generative AI Research Bootcamp | Vizuara AI Labs",
    ogDescription:
      "Master LLMs, RAG, prompt engineering, and multimodal AI. Build industry-level projects and publish research with MIT and Purdue PhDs.",
  },

  navbar: {
    links: [
      { label: "Why GenAI", href: "#why" },
      { label: "Diagrams", href: "#diagrams" },
      { label: "Curriculum", href: "#curriculum" },
      { label: "Research", href: "#research" },
      { label: "Instructors", href: "#instructors" },
      { label: "Pricing", href: "#pricing" },
    ],
    ctaLabel: "Enroll Now",
    ctaHref: "#pricing",
  },

  hero: {
    badge: "Generative AI Professional Bootcamp",
    headline: "Generative AI",
    headlineHighlight: "Research Bootcamp",
    headlineSuffix: "",
    subtitle:
      "Master Generative AI and LLMs. Work on industry-level LLM projects. Publish LLM research papers. From foundations to RAG systems and multimodal models, build production-grade AI with Python and LangChain.",
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
    badge: "Tour the GenAI Bootcamp",
    badgeIconName: "Play",
    label: "Watch",
    heading: "Tour the",
    headingHighlight: "GenAI Bootcamp",
    headingSuffix: "",
    youtubeUrl: "https://www.youtube.com/embed/vb5z1Y0cHFw",
    youtubeTitle: "Tour the GenAI Professional Bootcamp",
  },

  why: {
    label: "Four Core Pillars",
    title: "The Foundations of Generative AI",
    subtitle:
      "We teach four interconnected pillars that form the foundation of modern Generative AI. Each represents a critical capability for building, deploying, and researching LLM-powered systems.",
    items: [
      {
        iconName: "Brain",
        title: "LLM Foundations and Fine-Tuning",
        description:
          "Understand the full LLM evolutionary tree, from BERT to GPT to Flan-T5. Learn to fine-tune models for classification, sentiment analysis, and topic modeling. Deploy models locally using Hugging Face and build practical pipelines with the ChatGPT API.",
        color: "text-primary",
      },
      {
        iconName: "MessageSquare",
        title: "Prompt Engineering and LangChain",
        description:
          "Master prompting fundamentals through advanced methods: in-context learning, Chain-of-Thought, and Tree-of-Thought reasoning. Build complex LLM applications using LangChain chains, memory modules, guardrails, and autonomous agents from scratch.",
        color: "text-secondary",
      },
      {
        iconName: "Search",
        title: "Semantic Search and RAG Systems",
        description:
          "Build end-to-end Retrieval Augmented Generation pipelines. Learn dense retrieval with LLM embeddings, chunking strategies, reranking methods, and evaluation metrics (MAP/nDCG). Create robust, production-grade RAG chatbots for real-world use cases.",
        color: "text-primary",
      },
      {
        iconName: "Eye",
        title: "Multimodal Language Models",
        description:
          "Explore Vision Transformers (ViTs), understand how they differ from CNNs, and learn vision-language models including CLIP, BLIP-2, and LLaVA. Build multimodal AI systems that bridge text, images, and structured data.",
        color: "text-secondary",
      },
      {
        iconName: "Shield",
        title: "LLM Safety and Guardrails",
        description:
          "Learn to set constraints and safety measures for LLM outputs. Implement guardrails for quality control, understand model quantization (8/4-bit, GPTQ/AWQ) for efficient deployment, and build responsible AI systems.",
        color: "text-primary",
      },
      {
        iconName: "Layers",
        title: "Research and Publication",
        description:
          "Work on industry-level LLM research projects aimed at publication. Learn to formulate research problems, design experiments, validate hypotheses, and write scientific papers for conferences and journals.",
        color: "text-secondary",
      },
    ],
  },

  diagrams: {
    label: "Visual Framework",
    title: "How Generative AI Works",
    subtitle:
      "Publication-quality diagrams illustrating the core systems you will master in this bootcamp.",
    diagrams: [
      {
        src: "/diagrams/genai-landscape.png",
        alt: "Generative AI landscape showing LLM foundations, prompt engineering, RAG, and multimodal models",
        title: "The GenAI Landscape",
        description:
          "A high-level overview of the four core pillars: LLM Foundations and Fine-Tuning, Prompt Engineering with LangChain, Semantic Search and RAG Systems, and Multimodal Language Models.",
      },
      {
        src: "/diagrams/rag-pipeline.png",
        alt: "RAG pipeline architecture from document ingestion to answer generation",
        title: "RAG Pipeline Architecture",
        description:
          "The complete Retrieval-Augmented Generation pipeline: document ingestion, chunking, embedding, vector storage, dense retrieval with cross-encoder reranking, and LLM-based answer generation.",
      },
      {
        src: "/diagrams/llm-agent.png",
        alt: "LLM Agent architecture with tools, memory, and reasoning loop",
        title: "LLM Agent Architecture",
        description:
          "An LLM Agent built with LangChain showing the central reasoning engine, tool calling, short-term and long-term memory, chain orchestration, and the Observe-Think-Act reasoning loop.",
      },
    ],
  },

  audience: {
    label: "Who Is This For",
    title: "Designed for Researchers, Engineers, and Professionals",
    subtitle:
      "Whether you come from computer science, engineering, data science, or any other field, this bootcamp teaches you to build and research with the latest Generative AI tools and techniques.",
    items: [
      {
        iconName: "GraduationCap",
        title: "Graduate Researchers",
        description:
          "PhD students and postdocs who want to apply LLMs to their research domain, build RAG systems for literature analysis, or publish papers on Generative AI topics.",
        tags: ["PhD Students", "Postdocs", "Research Scholars"],
      },
      {
        iconName: "Wrench",
        title: "Software Engineers",
        description:
          "Developers looking to integrate LLMs, RAG pipelines, and AI agents into production applications using LangChain, Hugging Face, and modern LLM APIs.",
        tags: ["Backend Engineers", "ML Engineers", "Full-Stack Developers"],
      },
      {
        iconName: "BarChart3",
        title: "Data Scientists",
        description:
          "ML practitioners who want to move beyond traditional models and build LLM-powered systems for text clustering, topic modeling, semantic search, and content generation.",
        tags: ["ML Engineers", "NLP Specialists", "Applied Scientists"],
      },
      {
        iconName: "BookOpen",
        title: "Industry Professionals",
        description:
          "Business leaders, product managers, and consultants who want to understand and leverage Generative AI for strategic decision-making and product development.",
        tags: ["Product Managers", "Consultants", "Technical Leaders"],
      },
    ],
  },

  curriculum: {
    label: "Curriculum",
    title: "A Guided Journey from Foundations to Research",
    subtitle:
      "30 topics spanning LLM foundations, prompt engineering, RAG systems, LangChain agents, and multimodal models.",
    days: [
      // Tab 1: LLM Foundations & Hands-on Projects (Topics 1-9)
      {
        day: 1,
        week: 1,
        title: "Hands-on LLMs: Series Intro",
        iconName: "BookOpen",
        topics: [
          "Overview of LLMs, applications, course structure",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 2,
        week: 1,
        title: "The LLM Evolutionary Tree",
        iconName: "Brain",
        topics: [
          "History, milestones, architecture evolution",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 3,
        week: 1,
        title: "Running Microsoft Phi-3 using Hugging Face",
        iconName: "Code2",
        topics: [
          "Practical deployment of Microsoft Phi-3 model locally using Hugging Face APIs",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 4,
        week: 1,
        title: "Fine-tune BERT (Sentiment)",
        iconName: "Layers",
        topics: [
          "Hands-on session on fine-tuning BERT to perform sentiment analysis",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 5,
        week: 1,
        title: "Flan-T5 for Classification",
        iconName: "Zap",
        topics: [
          "Prompt formatting, generative vs discriminative",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 6,
        week: 1,
        title: "Using ChatGPT API for Movie Review Classification",
        iconName: "MessageSquare",
        topics: [
          "Utilize OpenAI's ChatGPT API to build a practical sentiment classification pipeline",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 7,
        week: 1,
        title: "Text Clustering using Sentence-Transformers",
        iconName: "Target",
        topics: [
          "Implementing text clustering techniques on ArXiv research papers",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 8,
        week: 1,
        title: "Topic Modeling with BERTopic",
        iconName: "BarChart3",
        topics: [
          "Hands-on project applying BERTopic to identify themes from ArXiv research papers",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 9,
        week: 1,
        title: "LLMs for Text Clustering and Topic Modeling",
        iconName: "Brain",
        topics: [
          "Identification on textual datasets, LLM-assisted clustering",
        ],
        exercise: "",
        instructor: "",
      },
      // Tab 2: Prompt Engineering & LangChain (Topics 10-17)
      {
        day: 10,
        week: 2,
        title: "Intro to Prompt Engineering",
        iconName: "MessageSquare",
        topics: [
          "Fundamentals of crafting effective prompts for maximizing LLM outputs",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 11,
        week: 2,
        title: "Advanced Prompt Engineering",
        iconName: "Zap",
        topics: [
          "Deep dive into in-context learning, Chain-of-Thought, and Tree-of-Thought methods",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 12,
        week: 2,
        title: "LLM Guardrails",
        iconName: "Shield",
        topics: [
          "Techniques to set constraints, safety measures",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 13,
        week: 2,
        title: "LangChain & Agents (Intro)",
        iconName: "Layers",
        topics: [
          "Intro to building complex LLM applications and Agents using LangChain",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 14,
        week: 2,
        title: "LLM Quantization",
        iconName: "Cpu",
        topics: [
          "Understanding model quantization methods for efficient deployments of LLMs",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 15,
        week: 2,
        title: "Coding Chains (LangChain)",
        iconName: "Code2",
        topics: [
          "Hands on demonstration of creating coding chains using LangChain",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 16,
        week: 2,
        title: "How to give Memory to LLMs",
        iconName: "Database",
        topics: [
          "Techniques for implementing short-term and long-term memory in LLM applications",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 17,
        week: 2,
        title: "Code your First LLM Agent using LangChain",
        iconName: "Bot",
        topics: [
          "Step-by-step project to build a functioning LLM-powered agent",
        ],
        exercise: "",
        instructor: "",
      },
      // Tab 3: Semantic Search & RAG (Topics 18-25)
      {
        day: 18,
        week: 3,
        title: "Semantic Search & RAG",
        iconName: "Search",
        topics: [
          "Basics of semantic search and RAG concepts",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 19,
        week: 3,
        title: "Coding an LLM Dense Retrieval System",
        iconName: "Code2",
        topics: [
          "Build a practical dense retrieval system using LLM embeddings",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 20,
        week: 3,
        title: "Chunking Strategies for LLM",
        iconName: "Scissors",
        topics: [
          "Effective strategies for breaking down text into meaningful chunks for retrieval and processing",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 21,
        week: 3,
        title: "Reranking for Semantic Search",
        iconName: "ArrowUpDown",
        topics: [
          "Understand and implement reranking methods",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 22,
        week: 3,
        title: "Evaluating Retrieval Systems",
        iconName: "BarChart3",
        topics: [
          "Measure retrieval effectiveness using MAP and nDCG",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 23,
        week: 3,
        title: "RAG: Intro & Coding",
        iconName: "FileSearch",
        topics: [
          "Hands-on implementation of basic RAG systems",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 24,
        week: 3,
        title: "Advanced RAG",
        iconName: "Zap",
        topics: [
          "Explore and apply advanced methodologies in RAG for improving accuracy and context management",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 25,
        week: 3,
        title: "Evaluating RAG Systems",
        iconName: "CheckCircle",
        topics: [
          "Best practices and metrics for assessing the performance of RAGs",
        ],
        exercise: "",
        instructor: "",
      },
      // Tab 4: Multimodal Language Models (Topics 26-30)
      {
        day: 26,
        week: 4,
        title: "Vision Transformers: How and Why They Work?",
        iconName: "Eye",
        topics: [
          "Understand ViTs, how they differ from CNNs",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 27,
        week: 4,
        title: "Intro to CLIP",
        iconName: "Link",
        topics: [
          "Explore how CLIP bridges vision and language",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 28,
        week: 4,
        title: "Intro to BLIP",
        iconName: "ImageIcon",
        topics: [
          "Learn how BLIP enhances text generation",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 29,
        week: 4,
        title: "Multimodal LLMs: 30-Minute Summary",
        iconName: "Sparkles",
        topics: [
          "A concise overview of Multimodal LLMs",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 30,
        week: 4,
        title: "Series Summary",
        iconName: "Flag",
        topics: [
          "Reviewing the concepts covered, key takeaways",
        ],
        exercise: "",
        instructor: "",
      },
    ],
    weekLabels: {
      1: { label: "LLM Foundations & Hands-on Projects", sessions: "Topics 1-9" },
      2: { label: "Prompt Engineering & LangChain", sessions: "Topics 10-17" },
      3: { label: "Semantic Search & RAG", sessions: "Lectures 18-25" },
      4: { label: "Multimodal Language Models", sessions: "Lectures 26-30" },
    },
  },

  deliverables: {
    label: "What You Get",
    title: "Research-Grade Deliverables",
    subtitle:
      "Everything you need to go from GenAI beginner to building production-grade LLM systems and publishing research.",
    items: [
      {
        iconName: "Code2",
        title: "Complete Python Codebase",
        description:
          "Production-ready Python code for every session, including LLM fine-tuning, RAG pipelines, LangChain agents, and multimodal applications.",
        features: [
          "All lecture code files and Jupyter notebooks",
          "Homework assignments with solutions",
          "Research project starter templates",
          "Fully documented LLM pipelines",
        ],
        gradient: "from-primary/20 to-secondary/20",
      },
      {
        iconName: "FileText",
        title: "Lecture Notes and Videos",
        description:
          "Lifetime access to all session recordings and comprehensive lecture notes covering every Generative AI concept.",
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
          "Industry-level GenAI projects including RAG systems, LLM agents, and multimodal applications ready for your portfolio or publication.",
        features: [
          "End-to-end RAG chatbot system",
          "LLM agent with tool calling",
          "Multimodal AI application",
          "Publication-ready research results",
        ],
        gradient: "from-primary/20 to-secondary/20",
      },
      {
        iconName: "MessageSquare",
        title: "Community and Mentorship",
        description:
          "Join the Vizuara GenAI community on Discord for ongoing collaboration, doubt clearance, and research partnerships.",
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
      "Our instructors are co-founders of Vizuara AI Labs and published researchers in AI and Machine Learning, with expertise spanning LLMs, scientific computing, and applied Generative AI.",
    items: [
      {
        ...INSTRUCTOR_RAJ,
        session: "LLM Foundations, RAG Systems, LangChain Agents, and Advanced Prompt Engineering",
      },
      {
        ...INSTRUCTOR_RAJAT,
        session: "Fine-Tuning, LLM Quantization, Vision Transformers, and Multimodal Models",
      },
      {
        ...INSTRUCTOR_SREEDATH,
        session: "SLM Deployment, Semantic Search, Coding Chains, and CLIP",
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
        title: "Latent Multi-Head Attention for Small Language Models",
        authors:
          "Vizuara AI Labs Research Team",
        venue: "arXiv",
        year: 2025,
        abstract:
          "Investigates latent multi-head attention mechanisms for Small Language Models, enabling efficient inference while maintaining strong performance on downstream tasks.",
        arxivUrl: "https://arxiv.org/abs/2501.17781",
        thumbnail: "/papers/latent-attention.png",
        tags: ["SLMs", "Attention", "Efficiency"],
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
        tags: ["LLMs", "Classification", "Architecture"],
      },
      {
        title: "NanoVLMs: How Small Can We Go and Still Make Coherent Vision Language Models?",
        authors:
          "Vizuara AI Labs Research Team",
        venue: "arXiv",
        year: 2025,
        abstract:
          "Explores the minimum viable scale for Vision Language Models, demonstrating that coherent multimodal understanding can be achieved at significantly smaller parameter counts than previously assumed.",
        thumbnail: "/papers/nanovlms.png",
        tags: ["VLMs", "Multimodal", "Efficiency"],
      },
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
    ],
  },

  testimonials: {
    label: "Student Testimonials",
    title: "What Our Students Say",
    subtitle:
      "Hear from researchers, engineers, and professionals who have transformed their careers with Generative AI expertise.",
    items: [
      {
        quote:
          "This bootcamp took me from zero LLM knowledge to building production-grade RAG systems in just six weeks. The hands-on projects with real ArXiv data made every concept stick.",
        name: "Ananya Mehta",
        role: "ML Engineer, Tech Startup",
      },
      {
        quote:
          "The LangChain and agents section was exactly what I needed. I now build autonomous AI tools for my team, and the prompt engineering techniques have saved us thousands in API costs.",
        name: "Vikram Patel",
        role: "Senior Software Engineer, Enterprise AI",
      },
      {
        quote:
          "As a PhD student in NLP, I found the RAG and multimodal sections research-grade. The instructors bring genuine MIT-level depth, and the research project guidance led to my first paper submission.",
        name: "Sarah Chen",
        role: "PhD Student, Computational Linguistics",
      },
      {
        quote:
          "The fine-tuning sessions on BERT and Flan-T5 gave me practical skills I use daily. The bootcamp bridges the gap between reading papers and actually implementing them.",
        name: "Rahul Krishnan",
        role: "Data Scientist, Financial Services",
      },
      {
        quote:
          "I attended the GenAI bootcamp to understand LLMs for product decisions. The Vision Transformers and CLIP sessions opened my eyes to multimodal possibilities we are now building into our platform.",
        name: "Lisa Park",
        role: "Product Manager, AI Platform",
      },
      {
        quote:
          "The semantic search and evaluation metrics sections were exactly what our team needed. We implemented the RAG architecture from the bootcamp and improved our search relevance by 40%.",
        name: "Deepak Sharma",
        role: "Lead Engineer, Search Infrastructure",
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
        name: "Student Plan",
        price: "Rs 30,000",
        description:
          "Save 25%. Originally Rs 40,000.",
        features: [
          "Lifetime access to all videos, code files, and homework assignments",
        ],
        href: "https://vizuara.ai/courses/genai-student-plan",
        cta: "Enroll Now",
        popular: false,
        variant: "secondary",
      },
      {
        name: "Industry Professional",
        price: "Rs 1,25,000",
        description:
          "Save 17%. Originally Rs 1,50,000. MIT and Purdue PhDs as your research mentors.",
        features: [
          "Lifetime access to all videos, code files, and homework assignments",
          "Access to bootcamp community on Discord",
          "Assignment checking and doubt clearance",
          "Free access to all ML webinars throughout the year",
          "Access to open list of research problems in GenAI",
          "4-month personalized guidance in doing research",
          "Publishing the research in conferences/journals",
          "How GenAI and LLMs can be integrated in industries",
        ],
        href: "https://vizuara.ai/courses/genai-industry-professional-plan",
        cta: "Enroll Now",
        popular: true,
        variant: "primary",
      },
    ],
  },

  faq: {
    label: "FAQ",
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about the Generative AI Research Bootcamp.",
    items: [
      {
        question: "What programming language is used in this bootcamp?",
        answer:
          "The bootcamp uses Python exclusively. All projects use standard Python libraries including Hugging Face Transformers, LangChain, Sentence Transformers, and the OpenAI API. No prior deep learning framework experience is required.",
      },
      {
        question: "Do I need prior experience with machine learning?",
        answer:
          "No prior knowledge is needed. This course starts right from the basics. It is made for students, researchers, and working professionals. We cover LLM foundations from the ground up before moving to advanced topics like RAG and multimodal models.",
      },
      {
        question: "What makes this different from other GenAI courses?",
        answer:
          "Three things set this bootcamp apart: research-grade depth taught by MIT and Purdue PhDs, hands-on projects using real datasets (ArXiv papers, production APIs), and a clear path from learning to publication. The Industry Professional plan includes personalized research mentorship aimed at publishing in conferences and journals.",
      },
      {
        question: "What are the hands-on projects?",
        answer:
          "You will build multiple industry-level projects: fine-tuning BERT and Flan-T5 for classification, building text clustering pipelines on ArXiv papers, creating LangChain agents with memory and tool use, constructing end-to-end RAG chatbots, and implementing multimodal AI with CLIP and BLIP-2.",
      },
      {
        question: "How is the bootcamp structured?",
        answer:
          "The bootcamp covers 30 pre-recorded topics across four pillars: LLM Foundations, Prompt Engineering and LangChain, Semantic Search and RAG, and Multimodal Language Models. All lecture material is available for lifetime access.",
      },
      {
        question: "Can I use these skills in my own domain?",
        answer:
          "Absolutely. The techniques taught in this bootcamp, including RAG systems, fine-tuning, semantic search, and LLM agents, are domain-agnostic. Students have applied them to healthcare, finance, legal tech, education, scientific research, and more.",
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
    headingHighlight: "Generative AI",
    headingSuffix: "?",
    subtitle:
      "Join hundreds of researchers and engineers who have built production-grade LLM systems and published AI research. Start building with the latest Generative AI tools and techniques.",
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
