// ─── Portfolio data — sourced from resume ──────────────────────────────────
// Items marked [PLACEHOLDER] need to be updated before deployment.

export const personalInfo = {
  name: 'Molleti Venkata Arun Prasad',
  shortName: 'Arun Prasad',
  firstName: 'Arun',
  initials: 'AP',
  title: 'Software Developer',
  roles: [
    'Software Developer',
    'Flutter Developer',
    'Full-Stack Developer',
    'UI/UX Enthusiast',
  ],
  tagline: 'Building scalable mobile, web & backend experiences.',
  location: 'Visakhapatnam, India',
  email: 'arunfrnds80@gmail.com',
  phone: '+91 8340888770',
  linkedin: 'https://www.linkedin.com/in/arun-prasad-b6ab071aa/',
  github: 'https://github.com/arun8340', // [PLACEHOLDER — add your GitHub profile URL]
  summary:
    'Software Developer with 5+ years of experience, having completed my MCA, specializing in mobile, web, and backend application development. Strong experience in building cross-platform mobile applications using Flutter and Dart, and web applications using React.js and Next.js, with backend development using LoopBack 4, TypeScript, and MongoDB. Along with development, I have hands-on experience in UI/UX design. Experienced in working within Agile teams, collaborating with product, QA, and design stakeholders to deliver scalable, high-performance, and user-friendly applications.',
  resumeUrl: '/resume.pdf', // [PLACEHOLDER — link to hosted PDF resume]
};

// ─── Skills ───────────────────────────────────────────────────────────────
export const skillCategories = [
  {
    category: 'Mobile Development',
    icon: '📱',
    colorClass: 'from-violet-500 to-purple-600',
    bgClass: 'bg-violet-500/10',
    textClass: 'text-violet-400',
    skills: ['Flutter', 'Dart', 'Android', 'iOS'],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    colorClass: 'from-cyan-500 to-blue-600',
    bgClass: 'bg-cyan-500/10',
    textClass: 'text-cyan-400',
    skills: [
      'React.js',
      'Next.js',
      'JavaScript',
      'HTML',
      'CSS',
      'Bootstrap',
      'jQuery',
      'GSAP',
      'Framer Motion',
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    colorClass: 'from-emerald-500 to-teal-600',
    bgClass: 'bg-emerald-500/10',
    textClass: 'text-emerald-400',
    skills: [
      'LoopBack 4',
      'Node.js',
      'Express.js',
      'TypeScript',
      'REST APIs',
      'GraphQL',
    ],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    colorClass: 'from-orange-500 to-amber-600',
    bgClass: 'bg-orange-500/10',
    textClass: 'text-orange-400',
    skills: ['MongoDB', 'SQL Server'],
  },
  {
    category: 'CMS & E-Commerce',
    icon: '🛒',
    colorClass: 'from-rose-500 to-pink-600',
    bgClass: 'bg-rose-500/10',
    textClass: 'text-rose-400',
    skills: ['WordPress', 'Shopify'],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    colorClass: 'from-sky-500 to-indigo-600',
    bgClass: 'bg-sky-500/10',
    textClass: 'text-sky-400',
    skills: ['Docker', 'AWS', 'CI/CD'],
  },
  {
    category: 'Testing',
    icon: '🧪',
    colorClass: 'from-lime-500 to-green-600',
    bgClass: 'bg-lime-500/10',
    textClass: 'text-lime-400',
    skills: ['Manual Testing', 'Selenium'],
  },
  {
    category: 'Tools & Methods',
    icon: '🛠️',
    colorClass: 'from-fuchsia-500 to-violet-600',
    bgClass: 'bg-fuchsia-500/10',
    textClass: 'text-fuchsia-400',
    skills: ['Git', 'GitHub', 'Bitbucket', 'Agile', 'Scrum'],
  },
];

// ─── Experience ────────────────────────────────────────────────────────────
export const experiences = [
  {
    id: 1,
    role: 'Software Developer',
    company: 'Alessa Software Pvt. Ltd.',
    companyNote: 'formerly IMedical Works Pvt. Ltd.',
    period: 'May 2025 – Present',
    isCurrent: true,
    location: 'Visakhapatnam',
    description: [
      'Continuing development of cross-platform mobile and web applications with enhanced features.',
      'Building and maintaining scalable backend services with improved architecture.',
      'Collaborating with product and design teams in fast-paced Agile environment.',
      'Contributing to UI/UX design improvements and code quality initiatives.',
    ],
    tech: ['Flutter', 'React.js', 'LoopBack 4', 'MongoDB', 'TypeScript'],
  },
  {
    id: 2,
    role: 'Software Developer',
    company: 'IMedical Works Pvt. Ltd.',
    companyNote: '',
    period: 'May 2022 – April 2025',
    isCurrent: false,
    location: 'Visakhapatnam',
    description: [
      'Developed and maintained cross-platform mobile applications using Flutter and Dart for Android and iOS.',
      'Built and maintained backend services and RESTful APIs using LoopBack 4 and TypeScript.',
      'Designed, managed, and optimized MongoDB databases ensuring scalability and performance.',
      'Developed web applications using React.js, Next.js, Node.js, HTML, CSS, and MongoDB.',
      'Contributed to UI/UX design by enhancing multiple application screens based on business needs.',
      'Worked closely with product owners to convert requirements and UI ideas into functional features.',
      'Fixed bugs, improved performance, and refactored code for clean and stable codebases.',
      'Wrote and executed unit and integration tests to reduce production issues.',
      'Actively participated in Agile/Scrum: stand-ups, sprint planning, and code reviews.',
    ],
    tech: [
      'Flutter',
      'Dart',
      'React.js',
      'Next.js',
      'LoopBack 4',
      'TypeScript',
      'MongoDB',
      'Node.js',
    ],
  },
  {
    id: 3,
    role: 'Manual Tester',
    company: 'IMedical Works Pvt. Ltd.',
    companyNote: '',
    period: 'May 2020 – May 2022',
    isCurrent: false,
    location: 'Visakhapatnam',
    description: [
      'Performed manual testing for web and mobile applications ensuring functional correctness and usability.',
      'Prepared and executed test cases and scenarios based on business requirements.',
      'Identified, documented, and tracked defects, working closely with developers for resolution.',
      'Conducted functional, regression, and smoke testing before production releases.',
      'Maintained QA documentation and supported improvements in testing processes.',
    ],
    tech: ['Manual Testing', 'Selenium', 'Test Cases', 'Bug Tracking'],
  },
];

// ─── Projects ──────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: 'ArkaDevelopers — Real Estate Company Site',
    description:
      "A design-driven corporate website for a real estate development firm, built with Next.js, showcasing architectural projects, services, and the company's philosophy.",
    longDescription:
      "Developed using Next.js with a modular component architecture, this site presents Arka Developers — a real estate firm specializing in architectural design, sustainable innovation, and project execution. Features include a responsive layout, smooth navigation, project showcases, and service sections that reflect the brand's quality-first ethos.",
    tech: ['Next.js', 'React', 'CSS', 'JavaScript'],
    category: 'Full-Stack',
    gradient: 'from-slate-600 via-blue-700 to-indigo-700',
    liveUrl: 'https://thearkadevelopers.com',
    githubUrl: '#', // [PLACEHOLDER]
    featured: true,
    isPlaceholder: false,
  },
  {
    id: 2,
    title: 'ArkenElements — Home & Workspace Design Site',
    description:
      'A premium WordPress website for a home and workspace design company offering interior solutions, home automation, and innovative lifestyle products.',
    longDescription:
      'Built on WordPress with Elementor Pro, this site represents ArkenElements — a multidisciplinary brand combining interior architecture, home automation, water purification, and designer appliances. Features curated product pages, service sections, sustainability highlights, and consultation call-to-actions, all styled to reflect a premium and innovative brand identity.',
    tech: ['WordPress', 'Elementor', 'PHP', 'CSS', 'JavaScript'],
    category: 'CMS',
    gradient: 'from-teal-600 via-cyan-600 to-sky-600',
    liveUrl: 'https://arkenelements.com',
    githubUrl: '#', // [PLACEHOLDER]
    featured: true,
    isPlaceholder: false,
  },
  {
    id: 3,
    title: 'AnimaWeb — GSAP Experience',
    description:
      'A visually rich website featuring advanced page transition animations, scroll-based storytelling effects, and interactive UI components built with GSAP and custom JavaScript.',
    longDescription:
      'Crafted with pure HTML, CSS, and JavaScript, this site showcases mastery over GSAP\'s ScrollTrigger plugin. Features include custom cursor effects, pinned scroll sections, staggered text reveals, SVG morphing, and buttery-smooth page transitions.',
    tech: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    category: 'Frontend',
    gradient: 'from-violet-600 via-purple-600 to-indigo-600',
    liveUrl: '#', // [PLACEHOLDER]
    githubUrl: '#', // [PLACEHOLDER]
    featured: true,
    isPlaceholder: false,
  },
  {
    id: 4,
    title: 'HealthSync — Flutter Mobile App',
    description:
      '[Professional project] Cross-platform mobile application for the healthcare domain with real-time data, offline support, and intuitive UX across Android & iOS.',
    longDescription:
      'Built with Flutter and Dart, consuming LoopBack 4 REST APIs. Features include patient data management, appointment scheduling, offline-first architecture using local database caching, and push notifications.',
    tech: ['Flutter', 'Dart', 'LoopBack 4', 'MongoDB', 'REST API'],
    category: 'Mobile',
    gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
    liveUrl: '#', // [PLACEHOLDER]
    githubUrl: '#', // [PLACEHOLDER]
    featured: false,
    isPlaceholder: true, // Marks as professional project / placeholder
  },
  {
    id: 5,
    title: 'FlowApp — Next.js Web Application',
    description:
      'A modern web application built with Next.js and Framer Motion delivering smooth page transitions, micro-interactions, and an exceptional user experience.',
    longDescription:
      'Built using the Next.js App Router with React Server Components for optimal performance. Implements Framer Motion\'s layout animations and shared element transitions. Features include animated dashboards, skeleton loaders, and gesture-driven interactions.',
    tech: ['Next.js', 'React', 'Framer Motion', 'Tailwind CSS'],
    category: 'Full-Stack',
    gradient: 'from-cyan-600 via-blue-600 to-indigo-700',
    liveUrl: '#', // [PLACEHOLDER]
    githubUrl: '#', // [PLACEHOLDER]
    featured: false,
    isPlaceholder: false,
  },
  {
    id: 6,
    title: 'NimbusStore — Shopify E-Commerce',
    description:
      'A fully configured Shopify e-commerce store with custom theme, product catalogues, payment gateway integration, and store optimization.',
    longDescription:
      'Complete Shopify store setup including custom Liquid theme development, product variant configuration, Stripe & PayPal payment gateway integration, metafield customizations, and SEO optimization for improved discoverability.',
    tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
    category: 'E-Commerce',
    gradient: 'from-orange-600 via-amber-600 to-yellow-600',
    liveUrl: '#', // [PLACEHOLDER]
    githubUrl: '#', // [PLACEHOLDER]
    featured: false,
    isPlaceholder: false,
  },
];

// ─── Education ─────────────────────────────────────────────────────────────
export const education = [
  {
    degree: 'MCA (Master of Computer Applications)',
    institution: 'Dr. L. Bullaya College',
    location: 'Visakhapatnam',
    year: '2024',
  },
  {
    degree: 'B.Sc. in Computers',
    institution: 'Dr. L. Bullaya College',
    location: 'Visakhapatnam',
    year: '2020',
  },
  {
    degree: 'Intermediate — MPC',
    institution: 'Sri Gayatri College',
    location: '',
    year: '2017',
  },
  {
    degree: 'SSC (10th Standard)',
    institution: 'P.E.N School',
    location: '',
    year: '2015',
  },
];

// ─── Certifications ────────────────────────────────────────────────────────
export const certifications = [
  {
    title: 'MERN Stack Certification',
    issuer: 'Udemy',
    icon: '🎓',
    color: 'from-orange-500 to-amber-500',
  },
  {
    title: 'SEO II Certification',
    issuer: 'HubSpot',
    icon: '🏆',
    color: 'from-rose-500 to-pink-500',
  },
];

// ─── Key stats ─────────────────────────────────────────────────────────────
export const stats = [
  { label: 'Years Experience', value: '5+', icon: '⚡' },
  { label: 'Projects Delivered', value: '15+', icon: '🚀' },
  { label: 'Technologies', value: '20+', icon: '🛠️' },
  { label: 'Certifications', value: '2', icon: '🏅' },
];

// ─── Nav links ─────────────────────────────────────────────────────────────
export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
