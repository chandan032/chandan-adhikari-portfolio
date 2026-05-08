import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, Linkedin, Mail, Phone, ExternalLink, MapPin, 
  Code2, Server, Cloud, Shield, Database, Activity, Brain, 
  Monitor, Briefcase, GraduationCap, Award, Moon, Sun, Menu, X, FileText
} from 'lucide-react';

const EXPERIENCES = [
  {
    company: "MAYBANK",
    role: "Senior Software Developer",
    date: "Jun 2025 – Present",
    location: "Bengaluru",
    points: [
      "Developed interactive dashboards and frontend workflows using React, alongside backend services for SME loan workflows, reducing processing time by 25%.",
      "Built frontend and backend workflows for loan eligibility and AI-assisted decision systems.",
      "Engineered Generative AI features utilizing LLMs (GPT/Gemini/Claude APIs) and prompt engineering for automated insights and intelligent workflows.",
      "Led adoption of Docker and Kubernetes for scalable cloud-native deployments."
    ]
  },
  {
    company: "TRANSUNION",
    role: "Software Developer",
    date: "Feb 2022 – May 2025",
    location: "Bengaluru",
    points: [
      "Reconstructed a legacy website into a modern web app using Spring Boot and Angular, resulting in a 46% increase in performance.",
      "Migrated high-throughput legacy C++ systems to Java microservices handling 10K QPS and 100M+ daily queries.",
      "Developed Angular dashboards and frontend workflows integrated with backend microservices.",
      "Scaled backend services using Docker, Kubernetes (GKE), and GCP Load Balancers; improved throughput by 50%.",
      "Designed Spring Boot REST APIs with JWT and Spring Security; reduced latency by 40%.",
      "Integrated MFA/SSO using Azure AD into enterprise applications.",
      "Implemented observability using Prometheus, Grafana, and ELK Stack."
    ]
  },
  {
    company: "ACCENTURE",
    role: "Associate Software Developer",
    date: "Nov 2020 – Feb 2022",
    location: "Bengaluru",
    points: [
      "Developed enterprise applications for medical research workflows using Java and Angular.",
      "Worked on frontend integrations, backend services, and application enhancements."
    ]
  }
];

const PROJECTS = [
  {
    title: "ALGORITHMIC CODING & DSA PLATFORM",
    type: "Full Stack App",
    status: "Active Development",
    points: [
      "Architected a Dockerized microservices backend with a custom Alpine Linux sandboxed code execution engine.",
      "Built an interactive workspace featuring a WebCanvas for system diagrams, multimedia notes, and automated DSA URL ingestion via the Gemini API.",
      "Integrated LLM-powered AI personas to generate test cases, analyze solutions, and seamlessly append contextual insights directly into user notes."
    ]
  },
  {
    title: "AI-BASED AG-YIELD OPTIMIZATION",
    type: "ML DL Solution",
    status: "Final year project",
    points: [
      "Developed ML/DL crop recommendation and plant disease diagnosis solution.",
      "Tools: PyTorch, Scikit-Learn, Django, Docker.",
      "Published in Indian Journal of Science and Technology."
    ],
    link: "#"
  }
];

const SKILL_CATEGORIES = [
  {
    title: "BACKEND (5+ YRS)",
    icon: <Server className="w-5 h-5" />,
    skills: ["Java 8/17", "Spring Boot", "Microservices", "REST APIs", "JPA/Hibernate"]
  },
  {
    title: "FRONTEND (5 YRS)",
    icon: <Monitor className="w-5 h-5" />,
    skills: ["React", "Angular", "TypeScript", "JavaScript", "HTML/CSS"]
  },
  {
    title: "DATA & STREAMING (5 YRS)",
    icon: <Database className="w-5 h-5" />,
    skills: ["MySQL", "Oracle", "Kafka"]
  },
  {
    title: "CLOUD & DEVOPS (4+ YRS)",
    icon: <Cloud className="w-5 h-5" />,
    skills: ["Docker", "Kubernetes", "GCP", "AWS", "Jenkins", "Ansible"]
  },
  {
    title: "GENERATIVE AI (2 YRS)",
    icon: <Brain className="w-5 h-5" />,
    skills: ["LLMs (GPT/Gemini/Claude)", "Prompt Engineering", "AI APIs"]
  },
  {
    title: "SECURITY (3 YRS)",
    icon: <Shield className="w-5 h-5" />,
    skills: ["Spring Security", "JWT", "Azure AD", "MFA/SSO"]
  },
  {
    title: "MONITORING (2 YRS)",
    icon: <Activity className="w-5 h-5" />,
    skills: ["Prometheus", "Grafana", "ELK Stack"]
  }
];

const CERTIFICATIONS = [
  "Azure Fundamentals",
  "Azure AI Fundamentals",
  "Spring Cloud & Microservices",
  "HackerRank Problem Solving"
];

const EDUCATION = [
  {
    degree: "B.E. IN COMPUTER SCIENCE",
    school: "JSS ACADEMY OF TECH ED",
    date: "Oct 2020",
    location: "Bengaluru, KA",
    score: "GPA: 7.27 / 10"
  },
  {
    degree: "Intermediate (XII)",
    school: "THE PENTECOSTAL ASSEMBLY SCHOOL",
    date: "April 2015",
    location: "Bokaro, JH",
    score: "Percentage : 90/100"
  }
];


const SectionHeading = ({ children, icon: Icon }: { children: React.ReactNode, icon?: any }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="flex items-center gap-3 mb-10"
  >
    {Icon && <div className="p-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-lg"><Icon className="w-6 h-6" /></div>}
    <h2 className="text-3xl font-display font-bold">{children}</h2>
  </motion.div>
);

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDarkMode = () => setIsDark(!isDark);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <div className="min-h-screen bg-transparent selection:bg-primary-200 dark:selection:bg-primary-900/50 selection:text-primary-900 dark:selection:text-primary-100">
      
      {/* Navigation (Sticky) */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-50/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <span className="font-display font-bold text-xl tracking-tight text-primary-600 dark:text-primary-500">CA.</span>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="#about" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Skills</a>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={toggleDarkMode} 
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a href="#contact" className="hidden md:inline-block px-4 py-2 bg-primary-600 text-white rounded-md text-sm font-medium hover:bg-primary-700 transition-colors">
              Get in touch
            </a>
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800"
            >
              <div className="flex flex-col px-4 py-4 space-y-4 text-sm font-medium text-slate-600 dark:text-slate-300">
                <a href="#about" onClick={toggleMobileMenu} className="hover:text-primary-600 dark:hover:text-primary-400">About</a>
                <a href="#experience" onClick={toggleMobileMenu} className="hover:text-primary-600 dark:hover:text-primary-400">Experience</a>
                <a href="#projects" onClick={toggleMobileMenu} className="hover:text-primary-600 dark:hover:text-primary-400">Projects</a>
                <a href="#skills" onClick={toggleMobileMenu} className="hover:text-primary-600 dark:hover:text-primary-400">Skills</a>
                <a href="#contact" onClick={toggleMobileMenu} className="w-full text-center px-4 py-2 bg-primary-600 text-white rounded-md font-medium hover:bg-primary-700 transition-colors">
                  Get in touch
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-24 space-y-24 md:space-y-32">
        
        {/* Hero Section */}
        <section id="about" className="pt-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Chandan Adhikari
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              Backend-focused <span className="font-semibold text-slate-900 dark:text-white">full stack engineer</span> with 5.5 years of experience building scalable distributed systems and cloud-native platforms.
            </p>
            
            <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm font-medium text-slate-600 dark:text-slate-300 pt-4">
              <a href={`${import.meta.env.BASE_URL}resume.pdf`} download="Chandan_Adhikari_Resume.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors bg-primary-600 text-white hover:bg-primary-700 px-4 py-2 rounded-full border border-primary-600 shadow-sm">
                <FileText className="w-4 h-4" /> Download Resume
              </a>
              <a href="mailto:chandan.adhikari08@gmail.com" className="flex items-center gap-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
                <Mail className="w-4 h-4" /> chandan.adhikari08@gmail.com
              </a>
              <a href="tel:+919983301437" className="flex items-center gap-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
                <Phone className="w-4 h-4" /> +91-9983301437
              </a>
              <a href="https://github.com/chandan032" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href="https://linkedin.com/in/chandan-adhikari" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
            
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
              Specialized in <strong className="text-slate-800 dark:text-slate-200 font-semibold">Java, Spring Boot, React, and Kubernetes</strong>, with proven expertise in integrating <strong className="text-slate-800 dark:text-slate-200 font-semibold">Generative AI (LLMs)</strong> into thoughtful developer workflows.
            </p>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <SectionHeading icon={Briefcase}>Experience</SectionHeading>
          <div className="space-y-12 md:space-y-16">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative pl-6 md:pl-0"
              >
                {/* Desktop timeline line */}
                <div className="hidden md:block absolute left-[12.5rem] top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 -z-10" />
                
                {/* Mobile timeline line */}
                <div className="md:hidden absolute left-0 top-2 bottom-0 w-px bg-slate-200 dark:bg-slate-800 -z-10" />
                
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start relative">
                  <div className="hidden md:block w-48 shrink-0 text-right pt-1">
                    <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{exp.date}</span>
                    <div className="text-sm text-slate-400 dark:text-slate-500 flex items-center justify-end gap-1 mt-1">
                      <MapPin className="w-3 h-3" /> {exp.location}
                    </div>
                  </div>
                  
                  {/* Timeline dots */}
                  <div className="hidden md:block absolute left-[12.5rem] top-2.5 w-3 h-3 bg-primary-500 rounded-full -translate-x-1.5 border-4 border-slate-50 dark:border-slate-900" />
                  <div className="md:hidden absolute left-0 top-2 w-2 h-2 bg-primary-500 rounded-full -translate-x-1 border border-slate-50 dark:border-slate-900" />
                  
                  <div className="md:hidden">
                    <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider">{exp.date}</span>
                  </div>

                  <div className="flex-1 bg-white dark:bg-slate-800 p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                    <div className="text-primary-600 dark:text-primary-400 font-medium mb-4">{exp.company}</div>
                    <ul className="space-y-3">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                          <span className="block mt-2 w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 shrink-0" />
                          <span dangerouslySetInnerHTML={{__html: point.replace(/(React|Docker|Kubernetes|Generative AI|Spring Boot|Angular|Java|Spring Security|JWT|GCP|Prometheus|Grafana|ELK Stack|Azure AD|LLMs)/g, '<strong class="text-slate-800 dark:text-slate-100">$1</strong>')}} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <SectionHeading icon={Code2}>Projects</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group flex flex-col bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors w-11/12 leading-tight mb-2">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <span className="text-xs font-medium px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md">
                        {project.type}
                      </span>
                      <span className="text-xs font-medium px-2.5 py-1 bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 rounded-md">
                        {project.status}
                      </span>
                    </div>
                  </div>
                  {project.link && (
                    <a href={project.link} className="p-2 text-slate-400 dark:text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-lg transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                <ul className="space-y-3 mt-4 flex-1">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      <span className="block mt-1.5 w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <SectionHeading icon={Brain}>Skills & Technologies</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white dark:bg-slate-800 p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4 text-slate-800 dark:text-slate-200">
                  <div className="p-2 bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg border border-slate-100 dark:border-slate-600">
                    {cat.icon}
                  </div>
                  <h3 className="font-bold text-sm tracking-wide">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <span key={i} className="px-2.5 py-1 bg-slate-50 dark:bg-slate-700/50 border border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs sm:text-sm rounded-md font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education & Certs */}
        <section id="education" className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <SectionHeading icon={GraduationCap}>Education</SectionHeading>
            <div className="space-y-6 md:space-y-8">
              {EDUCATION.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white">{edu.school}</h3>
                  <div className="text-primary-600 dark:text-primary-400 font-medium mb-1 text-sm md:text-base">{edu.degree}</div>
                  <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-slate-500 dark:text-slate-400">
                    <span>{edu.date}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                    <span>{edu.location}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{edu.score}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <SectionHeading icon={Award}>Certifications</SectionHeading>
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 md:p-6 shadow-sm">
              <ul className="space-y-3 text-sm md:text-base">
                {CERTIFICATIONS.map((cert, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium"
                  >
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary-500 rounded-full" />
                    {cert}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-12 mt-12 md:mt-16">
        <div className="max-w-5xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-display font-bold text-slate-900 dark:text-white mb-2">Let's build something great.</h2>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400">Currently open for new opportunities.</p>
          </div>
          
          <div className="flex gap-4">
            <a href="mailto:chandan.adhikari08@gmail.com" className="p-3 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-slate-700 rounded-xl transition-all">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/chandan-adhikari" target="_blank" rel="noreferrer" className="p-3 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-slate-700 rounded-xl transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/chandan032" target="_blank" rel="noreferrer" className="p-3 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-slate-700 rounded-xl transition-all">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-4 md:px-6 mt-10 md:mt-12 pt-6 md:pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs md:text-sm text-slate-400 dark:text-slate-500">
          <p className="text-center md:text-left">© {new Date().getFullYear()} Chandan Adhikari. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
             <span>Bengaluru, India</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
