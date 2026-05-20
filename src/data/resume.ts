export type Language = "zh" | "en";
export type SectionId =
  | "profile"
  | "strengths"
  | "experience"
  | "projects"
  | "skills"
  | "education"
  | "contact";

const sharedProfile = {
  name: "Christine",
  nameZh: "陈怡轩",
  location: "Boston, MA",
  email: "christinecyx2002@gmail.com",
  phone: "",
  links: [
    { label: "LinkedIn", href: "http://www.linkedin.com/in/cccyx07", icon: "linkedin" },
  ],
  avatar: "/avatar.png",
};

export const languageLabels = {
  zh: "中文",
  en: "English",
} as const;

export const resumeContent = {
  zh: {
    profile: {
      ...sharedProfile,
      title: "应用商业分析硕士 / 数据分析师",
      tagline: "融合数据叙事、市场研究与增长分析能力的商业分析候选人。",
    },
    labels: {
      eyebrow: "商业分析 · 数据策略 · 市场研究",
      metrics: "关键成果",
      profile: "个人定位",
      strengths: "个人优势",
      experience: "工作经历",
      projects: "项目亮点",
      skills: "技能与工具",
      education: "教育背景",
      contact: "联系我",
      certification: "认证",
      contactText: "欢迎通过邮件或 LinkedIn 联系。也可直接发送邮件至",
      phone: "电话",
      detailButton: "查看详情",
      close: "关闭",
      detailHighlights: "具体成果",
    },
    about: `我目前就读于 Boston University 应用商业分析硕士项目，具备数据分析、统计建模、市场研究与商业策略经验。
我擅长使用 Python、SQL、Excel、Tableau 与 Power BI 处理业务问题，并将数据洞察转化为可执行的增长、运营与产品策略。`,
    summaryCards: [
      {
        value: "200万+",
        label: "用户数据分析",
        description: "在 Sharp Network 基于大规模用户行为数据建立客户画像，提炼增长洞察。",
      },
      {
        value: "3万+",
        label: "社媒关注增长",
        description: "通过数据分析与内容运营策略，推动 X 平台新增关注者。",
      },
      {
        value: "20%",
        label: "用户参与提升",
        description: "使用 AARRR 漏斗分析评估转化阶段，优化营销策略。",
      },
      {
        value: "10+",
        label: "竞品基准研究",
        description: "对远程医疗竞品进行功能、客户、技术与财务维度分析。",
      },
    ],
    strengths: [
      {
        title: "数据驱动的商业分析",
        description:
          "能够从结构化数据、用户行为与公开市场数据中识别问题，使用 SQL、Python、Excel 与 BI 工具形成可执行洞察。",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        keywords: ["SQL", "Python", "Dashboard", "Customer Segmentation"],
      },
      {
        title: "市场研究与增长策略",
        description:
          "熟悉竞品分析、AARRR 漏斗、SWOT / PESTEL 与商业模式评估，可将研究结果转化为产品功能选择和增长建议。",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        keywords: ["AARRR", "Benchmarking", "SWOT", "PESTEL"],
      },
      {
        title: "数据可视化与沟通",
        description:
          "具备将复杂分析结果整理为仪表板、策略报告和展示材料的经验，能面向跨部门团队和管理层讲清业务含义。",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
        keywords: ["Tableau", "Power BI", "Storytelling", "Reporting"],
      },
    ],
    experience: [
      {
        company: "The Convenience App LLC.",
        role: "数据处理与数据管理实习生",
        period: "2025.11 — 至今",
        location: "美国，波士顿",
        focus: "数据运营 / 客户数据管理",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
        highlights: [
          "协助合作商店上架与更新商品信息，监控并核对价格、UPC、库存与分类，提高商品数据准确性。",
          "维护客户资料、反馈与订单历史，整理沟通流程并进行客户数据分层，支持精准营销与会员体系分析。",
          "维护结构化数据集用于仪表板分析，跨部门共享洞察，并协助自动化数据录入与报告流程。",
        ],
      },
      {
        company: "The Convenience App LLC.",
        role: "商业与市场研究分析实习生",
        period: "2025.11 — 至今",
        location: "美国，波士顿",
        focus: "竞品研究 / 市场画像",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
        highlights: [
          "开展竞争对手分析，支持新产品功能选择，并从功能性与商业模式角度评估 Marketplace 类别。",
          "使用 Excel 对 10+ 家远程医疗竞争者进行基准分析，评估客户类型、技术能力与财务表现，向管理层呈现战略洞察。",
          "收集公共健康数据并构建慢性病患者市场画像，分析人口结构、行为模式与医疗需求，制作洞察报告与市场策略幻灯片。",
        ],
      },
      {
        company: "Sharp Network",
        role: "市场分析师 & 内容运营 / 推广协调员",
        period: "2023.5 — 2023.8",
        location: "中国，深圳",
        focus: "增长分析 / 内容运营",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
        highlights: [
          "使用 AARRR 模型建立营销漏斗分析，评估各阶段转化率并对标竞争对手，通过优化策略提升用户参与度 20%。",
          "基于 200 万+ 用户数据开展客户画像分析，使用 SQL 提取数据、Python 分析行为特征，推动 X 平台新增 3 万+ 关注者。",
          "构建 SQL / Python 自动化数据管道生成月度内容营销报告，并协作构建 Tableau KPI 仪表板追踪曝光、互动、CTR 与 ROI。",
        ],
      },
    ],
    projects: [
      {
        name: "自营微型啤酒厂商业战略与财务分析",
        role: "项目负责人",
        period: "2024.9 — 2024.12",
        description:
          "围绕微型啤酒厂商业可行性开展完整策略与财务分析，覆盖市场进入、运营、人力与营销规划。",
        highlights: [
          "完成市场研究、SWOT / PESTEL、盈亏平衡模型与投资回报预测。",
          "提出自动化与成本控制策略，预计利润提升 10%。",
        ],
        image: "https://images.unsplash.com/photo-1518176258769-f227c798150e?auto=format&fit=crop&w=1200&q=80",
        tech: ["Market Research", "Financial Modeling", "SWOT", "PESTEL"],
        link: null,
      },
      {
        name: "商业分析、数据科学与机器学习趋势研究",
        role: "数据与 NLP 分析员",
        period: "2025.1 — 2025.5",
        description:
          "使用 NLP 与数据挖掘技术分析就业市场，识别高需求岗位、热门技能与职业发展路径。",
        highlights: [
          "提取并分析岗位趋势，输出面向数据科学职业规划的研究洞察。",
          "构建交互式职业策略网站，以可视化和博客式内容展示研究成果。",
        ],
        image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?auto=format&fit=crop&w=1200&q=80",
        tech: ["NLP", "Data Mining", "Career Analytics", "Interactive Website"],
        link: null,
      },
    ],
    skillGroups: [
      {
        category: "编程与数据处理",
        items: ["Python", "Pandas", "NumPy", "Matplotlib", "R", "SQL"],
      },
      {
        category: "分析与建模",
        items: ["统计建模", "优化分析", "数据挖掘", "Excel 财务建模", "商业分析"],
      },
      {
        category: "BI 与云工具",
        items: ["Power BI", "Tableau", "AWS", "Snowflake", "GitHub"],
      },
      {
        category: "商业研究",
        items: ["市场研究", "竞品分析", "客户分层", "AARRR 漏斗"],
      },
    ],
    certifications: ["AWS Academy Cloud Foundations"],
    education: [
      {
        school: "Boston University",
        degree: "应用商业分析理学硕士（STEM）",
        period: "2026 届",
        location: "美国，波士顿",
        image: "/bu-logo.svg",
        details: [
          "GPA: 3.6 / 4.0",
          "相关课程：Python 数据分析、数据库（SQL）、数据挖掘、运营管理",
        ],
      },
      {
        school: "University of Toronto",
        degree: "荣誉理学学士 · 管理经济学与数学双主修，统计学辅修",
        period: "2020.9 — 2024.6",
        location: "加拿大，多伦多",
        image: "/utoronto-logo.svg",
        details: [
          "GPA: 3.3 / 4.0",
          "入学奖学金：University of Toronto Scarborough Entrance Scholarship",
          "相关课程：回归分析、统计学、Excel 财务建模、宏观经济学",
        ],
      },
    ],
    navItems: [
      { id: "profile", label: "定位" },
      { id: "strengths", label: "优势" },
      { id: "experience", label: "经历" },
      { id: "projects", label: "项目" },
      { id: "skills", label: "技能" },
      { id: "education", label: "教育" },
      { id: "contact", label: "联系" },
    ],
  },
  en: {
    profile: {
      ...sharedProfile,
      title: "MS in Applied Business Analytics / Data Analyst",
      tagline: "Business analytics candidate with strengths in data storytelling, market research, and growth analysis.",
    },
    labels: {
      eyebrow: "Business Analytics · Data Strategy · Market Research",
      metrics: "Key outcomes",
      profile: "Profile",
      strengths: "Strengths",
      experience: "Experience",
      projects: "Project Highlights",
      skills: "Skills & Tools",
      education: "Education",
      contact: "Contact",
      certification: "Certification",
      contactText: "Feel free to reach out by email or LinkedIn. You can email me at",
      phone: "Phone",
      detailButton: "View Details",
      close: "Close",
      detailHighlights: "Detailed outcomes",
    },
    about:
      "I am pursuing an MS in Applied Business Analytics at Boston University, with experience across data analysis, statistical modeling, market research, and business strategy. I use Python, SQL, Excel, Tableau, and Power BI to translate business questions into actionable insights for growth, operations, and product decisions.",
    summaryCards: [
      {
        value: "2M+",
        label: "User Records Analyzed",
        description: "Built customer insights from large-scale user behavior data at Sharp Network.",
      },
      {
        value: "30K+",
        label: "Social Followers Gained",
        description: "Supported X platform audience growth through analytics-informed content operations.",
      },
      {
        value: "20%",
        label: "Engagement Lift",
        description: "Applied AARRR funnel analysis to evaluate conversion stages and optimize marketing tactics.",
      },
      {
        value: "10+",
        label: "Competitors Benchmarked",
        description: "Assessed telehealth competitors across product, customer, technology, and financial dimensions.",
      },
    ],
    strengths: [
      {
        title: "Data-Driven Business Analysis",
        description:
          "Identify business problems from structured datasets, user behavior, and public market data, then turn analysis into clear, actionable recommendations.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        keywords: ["SQL", "Python", "Dashboard", "Customer Segmentation"],
      },
      {
        title: "Market Research & Growth Strategy",
        description:
          "Use competitive analysis, AARRR funnels, SWOT / PESTEL, and business model evaluation to inform product choices and growth strategy.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        keywords: ["AARRR", "Benchmarking", "SWOT", "PESTEL"],
      },
      {
        title: "Data Visualization & Communication",
        description:
          "Translate complex findings into dashboards, strategy reports, and executive-ready presentations for cross-functional audiences.",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
        keywords: ["Tableau", "Power BI", "Storytelling", "Reporting"],
      },
    ],
    experience: [
      {
        company: "The Convenience App LLC.",
        role: "Data Processing & Data Management Intern",
        period: "Nov 2025 — Present",
        location: "Boston, MA",
        focus: "Data Operations / Customer Data Management",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
        highlights: [
          "Assisted partner stores with product listing and updates, monitoring prices, UPCs, inventory, and categorization to improve data accuracy.",
          "Maintained customer profiles, feedback, and order histories while organizing communication workflows and customer segmentation for targeted marketing and membership analysis.",
          "Maintained structured datasets for dashboard analysis, shared insights cross-functionally, and supported automation of data entry and reporting workflows.",
        ],
      },
      {
        company: "The Convenience App LLC.",
        role: "Business & Market Research Analyst Intern",
        period: "Nov 2025 — Present",
        location: "Boston, MA",
        focus: "Competitive Research / Market Profiling",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
        highlights: [
          "Conducted competitor analysis to support new product feature selection and evaluate marketplace categories from functionality and business model perspectives.",
          "Used Excel to benchmark 10+ telehealth competitors across customer segments, technical capabilities, and financial performance; presented strategic insights to leadership.",
          "Collected public health data to build market profiles for chronic disease patients, analyzing demographics, behavior patterns, and healthcare needs for strategy reporting.",
        ],
      },
      {
        company: "Sharp Network",
        role: "Market Analyst & Content Operations / Promotion Coordinator",
        period: "May 2023 — Aug 2023",
        location: "Shenzhen, China",
        focus: "Growth Analytics / Content Operations",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
        highlights: [
          "Built AARRR funnel analysis to assess stage-by-stage conversion and benchmark competitors, contributing to a 20% increase in user engagement.",
          "Analyzed 2M+ user records with SQL and Python to develop customer profiles and behavior insights, supporting 30K+ new followers on X.",
          "Built SQL / Python data pipelines for monthly content marketing reports and collaborated on Tableau KPI dashboards tracking impressions, engagement, CTR, and ROI.",
        ],
      },
    ],
    projects: [
      {
        name: "Microbrewery Business Strategy & Financial Analysis",
        role: "Project Lead",
        period: "Sep 2024 — Dec 2024",
        description:
          "Led a feasibility and strategy project for a self-operated microbrewery, covering market entry, operations, staffing, marketing, and financial planning.",
        highlights: [
          "Completed market research, SWOT / PESTEL analysis, break-even modeling, and ROI forecasting.",
          "Recommended automation and cost-control strategies with a projected 10% profit improvement.",
        ],
        image: "https://images.unsplash.com/photo-1518176258769-f227c798150e?auto=format&fit=crop&w=1200&q=80",
        tech: ["Market Research", "Financial Modeling", "SWOT", "PESTEL"],
        link: null,
      },
      {
        name: "Business Analytics, Data Science & Machine Learning Trends Research",
        role: "Data & NLP Analyst",
        period: "Jan 2025 — May 2025",
        description:
          "Applied NLP and data mining techniques to analyze the job market and identify high-demand roles, skill trends, and career pathways.",
        highlights: [
          "Extracted job market trends and produced career planning insights for data science roles.",
          "Built an interactive career strategy website to present findings through visualizations and blog-style content.",
        ],
        image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?auto=format&fit=crop&w=1200&q=80",
        tech: ["NLP", "Data Mining", "Career Analytics", "Interactive Website"],
        link: null,
      },
    ],
    skillGroups: [
      {
        category: "Programming & Data",
        items: ["Python", "Pandas", "NumPy", "Matplotlib", "R", "SQL"],
      },
      {
        category: "Analytics & Modeling",
        items: [
          "Statistical Modeling",
          "Optimization Analytics",
          "Data Mining",
          "Excel Financial Modeling",
          "Business Analytics",
        ],
      },
      {
        category: "BI & Cloud Tools",
        items: ["Power BI", "Tableau", "AWS", "Snowflake", "GitHub"],
      },
      {
        category: "Business Research",
        items: ["Market Research", "Competitor Analysis", "Customer Segmentation", "AARRR Funnel"],
      },
    ],
    certifications: ["AWS Academy Cloud Foundations"],
    education: [
      {
        school: "Boston University",
        degree: "Master of Science in Applied Business Analytics (STEM)",
        period: "Class of 2026",
        location: "Boston, MA",
        image: "/bu-logo.svg",
        details: [
          "GPA: 3.6 / 4.0",
          "Relevant coursework: Python Data Analytics, Database (SQL), Data Mining, Operations Management",
        ],
      },
      {
        school: "University of Toronto",
        degree: "Honours Bachelor of Science · Management Economics & Mathematics, Minor in Statistics",
        period: "Sep 2020 — Jun 2024",
        location: "Toronto, Canada",
        image: "/utoronto-logo.svg",
        details: [
          "GPA: 3.3 / 4.0",
          "University of Toronto Scarborough Entrance Scholarship recipient",
          "Relevant coursework: Regression Analysis, Statistics, Excel Financial Modeling, Macroeconomics",
        ],
      },
    ],
    navItems: [
      { id: "profile", label: "Profile" },
      { id: "strengths", label: "Strengths" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "skills", label: "Skills" },
      { id: "education", label: "Education" },
      { id: "contact", label: "Contact" },
    ],
  },
} as const;

export type ResumeContent = (typeof resumeContent)[Language];
