// HAKX ED TECH Website Content Constants

export const SITE_CONFIG = {
  name: "HAKX ED TECH",
  tagline: "Building the Next Generation of Tech Professionals",
  description: "Learn practical, real-world cyber security skills designed for students who want careers — not just certificates.",
  url: "https://hakxedtech.com",
  email: "contact@hakxedtech.com",
};

export const FORM_URLS = {
  enrollment: "https://forms.google.com/hakx-enroll", // Replace with actual Google Form URL
  workshopEnquiry: "https://forms.google.com/hakx-workshop", // Replace with actual form URL
};

export const NAV_LINKS = [
  { label: "Programs", href: "#offerings" },
  { label: "Why HAKX", href: "#why-hakx" },
  { label: "Trainers", href: "#trainers" },
  { label: "Workshops", href: "#workshops" },
];

export const HERO_CONTENT = {
  headline: "Become a Cyber Security Professional",
  subheadline: "Learn practical, real-world cyber security skills designed for students who want careers — not just certificates.",
  badges: [
    "Industry-crafted programs",
    "Hands-on training",
    "Instant course access",
  ],
  ctaPrimary: "Enroll Now",
  ctaSecondary: "Partner With Us for Workshops",
};

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
    description: "A structured, end-to-end program covering fundamentals to advanced concepts.",
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
    description: "Industry-oriented workshops for educational institutions.",
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
    "Practical-first learning (not theory-heavy)",
    "Crafted syllabus for each academic stream",
    "Trainers with real-world cyber security experience",
    "Beginner-friendly yet industry-aligned",
    "Learn once, apply forever",
  ],
  statement: "We don't teach you what cyber security is.",
  emphasis: "We train you to think and work like a cyber security professional.",
};

export const TRAINERS = [
  {
    name: "Praveen Reddy Puli",
    title: "Cyber Security Trainer & Practitioner",
    experience: "4+ years of experience",
    description: "Conducted workshops for government agencies, police departments, and premier institutions.",
    image: "/trainers/praveen.jpg", // Placeholder
  },
  {
    name: "Roopak",
    title: "Cyber Security Trainer",
    experience: "",
    description: "Specializing in practical security concepts and hands-on learning methodologies.",
    image: "/trainers/roopak.jpg", // Placeholder
  },
];

export const CERTIFICATION = {
  title: "Industry-Recognized Certification",
  description: "Upon successful completion, learners receive a certification issued in collaboration with reputed academic and industry institutions, validating both knowledge and practical skills.",
};

export const WHO_SHOULD_JOIN = {
  title: "Who Should Join",
  subtitle: "No prior technical background required.",
  audiences: [
    { icon: "student", label: "Students (Any stream, after 8th grade)" },
    { icon: "curious", label: "Beginners curious about cyber security" },
    { icon: "college", label: "College students preparing for tech careers" },
    { icon: "institution", label: "Institutions seeking industry-aligned workshops" },
  ],
};

export const WORK_WITH_US = {
  title: "Work With Us",
  subtitle: "Looking to conduct a cyber security workshop at your institution?",
  institutions: ["Colleges", "Schools", "Universities", "Training Institutes"],
  note: "Custom pricing based on duration, audience, and syllabus",
  cta: "Workshop Enquiry Form",
};

export const FINAL_CTA = {
  headline: "Start your cyber security journey today.",
  subheadline: "Learn skills that matter. Build a career that lasts.",
  cta: "Enroll Now",
};

export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} HAKX ED TECH. All rights reserved.`,
  tagline: "Building the Next Generation of Tech Professionals",
};
