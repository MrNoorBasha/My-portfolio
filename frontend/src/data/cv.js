export const CV = {
  name: "Kotluru Noor Basha",
  first: "Noor",
  last: "Basha",
  initials: "NB",
  role: "Python Development Engineer",
  years: "4.5+",
  focus: "Python · AI & Automation",
  photo: "/profile.jpg",
  avatar: "/avatar.jpg",
  tagline:
    "I build the software that keeps enterprise workflows moving — from SAP HCM pay postings to LLM-powered automation across HR, Finance and Insurance.",
  location: "Bangalore, India",
  email: "noorbashakotluru@gmail.com",
  phone: "+91 88868 92680",
  cvUrl: "/Kotluru_NoorBasha.pdf",
  summary:
    "Results-driven Python Development Engineer with 4.5+ years of hands-on experience building enterprise-grade software solutions, automation frameworks and AI-powered workflows. Proven expertise in SAP HCM integrations, Django web development, N8N automation, LLM-powered workflow automation and cross-departmental technical leadership — translating complex business requirements into scalable, maintainable solutions.",
  stats: [
    { k: "4.5+", v: "Years building software" },
    { k: "5", v: "Business departments served" },
    { k: "4", v: "Key projects delivered" },
    { k: "8.0", v: "B.Tech GPA (CSE)" },
  ],
  industries: ["HR", "Finance", "Insurance", "Operations", "Banking / Cards"],
  manifesto: [
    {
      n: "01",
      title: "Automation first",
      body: "N8N pipelines and LLM APIs that classify, respond and route — so teams stop doing by hand what software can do for them.",
    },
    {
      n: "02",
      title: "Integrations that hold",
      body: "SAP HCM pay posting and SuccessFactors flows built to reconcile cleanly, with error handling and monitoring baked in.",
    },
    {
      n: "03",
      title: "Quality that ships",
      body: "Selenium, Pytest and Jenkins CI/CD from day one — tested, observable software, not just working demos.",
    },
  ],
  // How a typical agent of mine runs — shown as an animated pipeline.
  pipeline: [
    { k: "Trigger", d: "Email · webhook · schedule", icon: "⚡" },
    { k: "Understand", d: "LLM classifies & extracts", icon: "◎" },
    { k: "Act", d: "Tools: SAP HCM · SuccessFactors · DB", icon: "⚙" },
    { k: "Validate", d: "Rule-based guardrails", icon: "✓" },
    { k: "Deliver", d: "Reply · post · alert · log", icon: "➜" },
  ],
  agents: [
    {
      name: "Inbox Triage Agent",
      tag: "N8N · LLM APIs",
      body: "Reads incoming business email, classifies intent with an LLM, drafts responses and routes edge cases to the right team — cutting manual turnaround across business units.",
      tools: ["N8N AI Agent", "LLM classify", "SMTP", "REST"],
    },
    {
      name: "Claims Extraction Agent",
      tag: "Insurance · LLM + Rules",
      body: "Pulls structured data from medical insurance documents, then runs rule-based eligibility checks before a claim reaches a human reviewer.",
      tools: ["Document extraction", "Prompt engineering", "Rule engine", "Python"],
    },
    {
      name: "Pay Posting Agent",
      tag: "SAP HCM · Automation",
      body: "Moves payroll data from internal systems into SAP HCM, reconciles the result and surfaces mismatches on a live Django dashboard.",
      tools: ["SAP HCM", "Django", "Monitoring", "Error handling"],
    },
    {
      name: "HR Helpdesk Agent",
      tag: "SuccessFactors · Admin",
      body: "Handles routine access requests — provisioning, password resets and welcome emails — so HR and admin teams focus on the cases that need people.",
      tools: ["SuccessFactors", "Access provisioning", "Email engine", "Audit log"],
    },
  ],
  // Scripted runs played in the hero "agent console" (illustrative demo).
  consoleRuns: [
    [
      "$ agent run inbox-triage",
      "  → fetched new emails from shared inbox",
      "  → llm.classify(intent, priority)",
      "  → drafted replies · routed 3 escalations",
      "  ✓ completed · logged to dashboard",
    ],
    [
      "$ agent run claims-extract",
      "  → parsing medical insurance documents",
      "  → llm.extract(member, policy, amount)",
      "  → rules.check(eligibility) · passed",
      "  ✓ ready for claim review",
    ],
    [
      "$ agent run pay-posting",
      "  → reading payroll batch",
      "  → sap_hcm.post(pay_records)",
      "  → reconcile · 0 mismatches",
      "  ✓ posted · status email sent",
    ],
  ],
  projects: [
    {
      title: "Email Communication Engine & Monitoring Dashboard",
      kind: "Enterprise",
      body: "End-to-end email automation with a Django dashboard for real-time monitoring of email flows and pay postings across the organization.",
      stack: ["Python", "Django", "SMTP", "Monitoring"],
    },
    {
      title: "SAP HCM Pay Posting Integration",
      kind: "Enterprise",
      body: "Automated payroll integration between internal HR systems and SAP HCM — eliminating manual processing and ensuring accurate, timely pay postings.",
      stack: ["SAP HCM", "Python", "REST APIs"],
    },
    {
      title: "AI Medical Insurance Automation",
      kind: "AI · LLM",
      body: "LLM-based data extraction with automated eligibility verification and claim support, deployed across the Insurance department.",
      stack: ["LLM APIs", "N8N", "Rule engine"],
    },
    {
      title: "Class Representative Analytics System",
      kind: "Academic",
      body: "Full-stack Django app with authentication, catalog, inventory tracking and reporting — a 30% operational efficiency improvement.",
      stack: ["Django", "SQL", "HTML/CSS"],
    },
  ],
  experience: [
    {
      company: "TASC Business Solutions Pvt. Ltd.",
      place: "Bangalore",
      title: "Python Development Engineer",
      period: "Dec 2024 — Present",
      points: [
        "Designed and developed an enterprise Email Communication Engine with delivery tracking, error handling and status monitoring.",
        "Built and deployed a production-grade Django dashboard for real-time visibility into email and Pay Posting activity.",
        "Developed automated payroll data flows between internal systems and SAP HCM, cutting manual entry and reconciliation time.",
        "Designed N8N automation pipelines integrating LLM APIs for content classification and response generation across business units.",
        "Built an LLM-integrated medical insurance solution combining document/data extraction with rule-based eligibility and claim validation.",
        "Provided ongoing SAP SuccessFactors support — configuration issues, data discrepancies and integration challenges for HR teams.",
        "Managed user provisioning, password resets, welcome email automation and access control across enterprise platforms.",
        "Led software development initiatives across 5 business departments — automation, reporting and integration solutions.",
      ],
    },
    {
      company: "Cloud Collab Technologies Pvt. Ltd.",
      place: "Bangalore",
      title: "Software Development Engineer I",
      period: "Feb 2021 — Aug 2023",
      points: [
        "Developed end-to-end automated test scripts for web applications using Selenium WebDriver and Python.",
        "Built and maintained RESTful APIs using FastAPI and Django with a focus on scalable backend architecture.",
        "Integrated automated testing into Jenkins CI/CD pipelines for rapid feedback and seamless deployments.",
        "Streamlined bug tracking and resolution with JIRA, significantly reducing average resolution time.",
        "Conducted functional, regression, integration and API testing for network management software.",
      ],
    },
  ],
  skills: [
    {
      group: "Languages & Frameworks",
      items: ["Python", "Django", "FastAPI", "JavaScript · SQL", "Java · HTML · CSS"],
    },
    {
      group: "AI & Automation",
      items: ["LLM API Integration", "Prompt Engineering", "N8N AI Agent Nodes", "RAG & Embeddings", "Email Engine · SMTP"],
    },
    {
      group: "ERP / HCM & Integration",
      items: ["SAP HCM Pay Posting", "SAP SuccessFactors", "REST · SOAP APIs", "User & Access Provisioning", "Unix / Linux"],
    },
    {
      group: "Testing & DevOps",
      items: ["Selenium WebDriver", "Pytest", "Manual · Functional · Regression", "Git · Jenkins CI/CD", "JIRA · Confluence · TestRail", "Agile · Scrum"],
    },
  ],
  education: [
    {
      title: "B.Tech, Computer Science and Engineering",
      org: "KSRM College of Engineering, Andhra Pradesh",
      year: "2017 — 2021",
      note: "GPA 8.00 / 10.0 · Python, Java, SQL, Data Structures & Algorithms.",
    },
    {
      title: "Intermediate (M.P.C)",
      org: "Sri Vidya Darsini Junior College, Andhra Pradesh",
      year: "2015 — 2017",
      note: "Grade 925 / 1000.",
    },
  ],
  certifications: [
    "Python for Everybody — Coursera",
    "ChatGPT Guide: Prompt Engineering Basics — Udemy",
    "Programming in Java — NPTEL",
    "Amazon Web Services (AWS) — APSSDC",
    "Google Android Developer — APSSDC",
  ],
  languages: [],
  marquee: [
    "AI Agents", "Python", "Django", "FastAPI", "SAP HCM", "SuccessFactors", "RAG",
    "N8N Automation", "LLM APIs", "Prompt Engineering", "Selenium",
    "REST APIs", "Jenkins CI/CD",
  ],
};
