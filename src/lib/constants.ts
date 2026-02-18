// HAKX ED TECH Website Content Constants

export const SITE_CONFIG = {
  name: "HAKX ED TECH",
  tagline: "Building the Next Generation of Cyber Security Professionals",
  description: "Learn practical, real-world cyber security skills designed for students who want careers — not just certificates.",
  url: "https://hakxedtech.com",
  email: "contact@hakxedtech.com",
  phone: "+91 98765 43210",
};

export const FORM_URLS = {
  enrollment: "https://forms.google.com/hakx-enroll",
  workshopEnquiry: "https://forms.google.com/hakx-workshop",
};

export const NAV_LINKS = [
  { label: "Programs", href: "#offerings" },
  { label: "Why HAKX", href: "#why-hakx" },
  { label: "Trainers", href: "#trainers" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Workshops", href: "#workshops" },
];

export const HERO_CONTENT = {
  headline: "Master cyber security skills today",
  highlightWord: "cyber security",
  subheadline: "Learn with India's leading cyber security upskilling platform. Industry-crafted programs designed for students who want careers — not just certificates.",
  badges: [
    "Industry-crafted programs",
    "Hands-on training",
    "Instant course access",
    "Job-ready skills",
  ],
  ctaPrimary: "Explore Programs",
  ctaSecondary: "Partner With Us",
};

export const TRUST_PARTNERS = [
  "Government Agencies",
  "Law Enforcement",
  "IIT & NIT Colleges",
  "Top Universities",
  "Private Institutions",
  "Corporate Training",
];

export const TRUST_ITEMS = [
  {
    icon: "shield",
    title: "Government & Law Enforcement",
    description: "Conducted workshops for Government & Law Enforcement Agencies",
  },
  {
    icon: "building",
    title: "50+ Workshops",
    description: "Delivered 50+ workshops across colleges and institutions",
  },
  {
    icon: "users",
    title: "Premier Institutions",
    description: "Trusted by students from premier institutions across India",
  },
  {
    icon: "certificate",
    title: "Industry Certification",
    description: "Certification in collaboration with reputed academic and industry institutions",
  },
];

export const OFFERINGS = [
  {
    id: "full-program",
    icon: "lock",
    title: "Full Cyber Security Program",
    tag: "Most Popular",
    description: "A structured, end-to-end program covering fundamentals to advanced concepts with real-world labs.",
    details: {
      duration: "45–90 Days",
      level: "Beginner to Advanced",
      mode: "Recorded (Instant Access)",
      focus: "Real tools, real attacks, real defense",
    },
    outcome: "Job-ready skills, strong foundations, and practical confidence.",
  },
  {
    id: "mini-courses",
    icon: "gear",
    title: "Skill Booster Mini Courses",
    tag: "Quick Start",
    description: "Short, focused courses designed to master one tool or technique at a time.",
    examples: [
      "Nmap Explained",
      "Recon & OSINT Basics",
      "Web Application Testing Foundations",
    ],
    perfectFor: [
      "Quick upskilling",
      "College students",
      "Beginners exploring cyber security",
    ],
  },
  {
    id: "workshops",
    icon: "school",
    title: "Cyber Security Workshops",
    tag: "For Institutions",
    description: "Industry-oriented workshops tailored for educational institutions and organizations.",
    audiences: [
      "Colleges & Universities",
      "Schools (8th class and above)",
      "Intermediate & Diploma Institutions",
    ],
    duration: "2–3 Days (Customizable)",
    includes: [
      "Customized syllabus per branch/stream",
      "Live demonstrations",
      "Cybercrime awareness + practical exposure",
      "Certification & participation reports",
    ],
  },
];

export const WHY_HAKX = {
  points: [
    {
      title: "Practical-First Learning",
      description: "Hands-on labs and real-world scenarios — not theory-heavy slides.",
      icon: "code",
    },
    {
      title: "Customized for Every Stream",
      description: "Crafted syllabus tailored for each academic stream and skill level.",
      icon: "customize",
    },
    {
      title: "Industry-Experienced Trainers",
      description: "Learn from professionals with real cyber security field experience.",
      icon: "expert",
    },
    {
      title: "Beginner-Friendly Approach",
      description: "Start from zero and build up to industry-aligned competency.",
      icon: "beginner",
    },
  ],
  statement: "We don't teach you what cyber security is.",
  emphasis: "We train you to think and work like a cyber security professional.",
};

export const TRAINERS = [
  {
    name: "Praveen Reddy Puli",
    title: "Cyber Security Trainer & Practitioner",
    experience: "4+ years of experience",
    description: "Conducted workshops for government agencies, police departments, and premier institutions across India.",
    image: "/trainers/praveen.jpg",
    specializations: ["Penetration Testing", "Digital Forensics", "Network Security"],
  },
  {
    name: "Roopak",
    title: "Cyber Security Trainer",
    experience: "Specialist in practical security",
    description: "Specializing in practical security concepts, hands-on learning methodologies, and threat analysis.",
    image: "/trainers/roopak.jpg",
    specializations: ["Web Security", "OSINT", "Malware Analysis"],
  },
];

export const CERTIFICATION = {
  title: "Industry-Recognized Certification",
  description: "Upon successful completion, learners receive a certification issued in collaboration with reputed academic and industry institutions, validating both knowledge and practical skills.",
  features: [
    "Verified digital certificate",
    "Industry-recognized credential",
    "Shareable on LinkedIn",
    "Validates practical skills",
  ],
};

export const WHO_SHOULD_JOIN = {
  title: "Who Should Join",
  subtitle: "No prior technical background required. Our programs are designed for everyone.",
  audiences: [
    { icon: "student", label: "Students", description: "Any stream, after 8th grade" },
    { icon: "curious", label: "Beginners", description: "Curious about cyber security" },
    { icon: "college", label: "College Students", description: "Preparing for tech careers" },
    { icon: "institution", label: "Institutions", description: "Seeking industry-aligned workshops" },
  ],
};

export const WORK_WITH_US = {
  title: "Empower Your Institution",
  subtitle: "Looking to conduct a cyber security workshop at your institution? We customize every engagement.",
  institutions: ["Colleges", "Schools", "Universities", "Training Institutes"],
  note: "Custom pricing based on duration, audience, and syllabus",
  cta: "Workshop Enquiry Form",
  features: [
    "Customized curriculum per branch",
    "Hands-on live demonstrations",
    "Certification for all participants",
    "Post-workshop support & resources",
  ],
};

export const FINAL_CTA = {
  headline: "Start your cyber security journey today",
  subheadline: "Learn skills that matter. Build a career that lasts.",
  cta: "Enroll Now",
};

export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} HAKX ED TECH. All rights reserved.`,
  tagline: "Building the Next Generation of Cyber Security Professionals",
  links: {
    programs: [
      { label: "Full Cyber Security Program", href: "#offerings" },
      { label: "Skill Booster Courses", href: "#offerings" },
      { label: "Workshops for Institutions", href: "#workshops" },
      { label: "Free Resources", href: "#" },
    ],
    company: [
      { label: "About Us", href: "#why-hakx" },
      { label: "Our Trainers", href: "#trainers" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact Us", href: "#workshops" },
    ],
    resources: [
      { label: "Blog", href: "#" },
      { label: "Career Guide", href: "#" },
      { label: "Certifications", href: "#certification" },
      { label: "FAQs", href: "#" },
    ],
  },
};
