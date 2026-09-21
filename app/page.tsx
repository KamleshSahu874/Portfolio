"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Download,
  Menu,
  X,
  Mail,
  MapPin,
  GraduationCap,
  Award,
  ExternalLink,
  Phone,
  FileText,
  Sun,
  Moon,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const projects = [
  {
    number: "01",
    title: "My Portfolio",
    category: "Web Development",
    description:
      "A modern responsive developer portfolio built to showcase my skills, projects, certifications, education, and professional journey with smooth animations and a responsive user interface.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    icon: "💻",
    github: "https://github.com/KamleshSahu874/Portfolio",
  },
  {
    number: "02",
    title: "Hand Gesture Volume Controller",
    category: "Python • Computer Vision",
    description:
      "A real-time computer vision application that uses hand gestures to control the Windows system volume. The distance between the thumb and index finger determines the volume level.",
    tech: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    icon: "✋",
    github: "https://github.com/KamleshSahu874/HandGestureVolumeController",
  },
  {
    number: "03",
    title: "SmartBranch 360",
    category: "Networking • Python",
    description:
      "A Python-based network monitoring and validation tool integrated with Cisco Packet Tracer. It verifies VLANs, trunks, gateways, and network connectivity.",
    tech: ["Python", "Cisco", "Packet Tracer", "Networking"],
    icon: "🌐",
    github: "https://github.com/KamleshSahu874/smartbranch360",
  },
];

const certifications = [
  {
    number: "01",
    title: "Smart India Hackathon 2025",
    issuer: "Internal Institute Level",
    date: "2025",
    type: "Hackathon",
    icon: "🏆",
    certificate: "/certificates/sih-2025.jpg",
  },
  {
    number: "02",
    title: "Google Android Development",
    issuer: "EduSkills",
    date: "2024",
    type: "Training / Certification",
    icon: "📱",
    certificate: "/certificates/google-android.pdf",
  },
  {
    number: "03",
    title: "ServiceNow Virtual Internship Program",
    issuer: "SmartBridge / ServiceNow",
    date: "2026",
    type: "Virtual Internship",
    icon: "⚙️",
    certificate: "/certificates/servicenow.pdf",
    details:
      "ServiceNow learning and internship program covering ServiceNow Administration Fundamentals, Introduction to Flows, Reports, ATF Essentials, Introduction to Agentic AI, Micro Certification and CSA Exam Preparation.",
  },
  {
    number: "04",
    title: "Red Hat Application Development I: Programming in Java EE",
    issuer: "Red Hat",
    date: "2026",
    type: "Certificate",
    icon: "☕",
    certificate: "/certificates/redhat-java.pdf",
  },
  {
    number: "05",
    title: "Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    date: "2025",
    type: "Certification",
    icon: "📊",
    certificate: "/certificates/data-science.pdf",
  },
  {
    number: "06",
    title: "Computer Networks & Internet Protocol",
    issuer: "NPTEL",
    date: "2026",
    type: "NPTEL",
    icon: "🌐",
    certificate: "/certificates/computer-networks.pdf",
  },
];

const skills = [
  {
    title: "Programming",
    items: ["Java", "C++", "Python"],
  },
  {
    title: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Node.js"],
  },
  {
    title: "Database",
    items: ["MongoDB", "MySQL", "DBMS"],
  },
  {
    title: "Tools & Technologies",
    items: ["Git", "GitHub", "VS Code", "Cisco Packet Tracer"],
  },
  {
    title: "Core Concepts",
    items: [
      "DSA",
      "OOPS",
      "Computer Networks",
      "Operating Systems",
      "Machine Learning",
      "DBMS",
    ],
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const dark = !lightMode;

  return (
    <main
      className={`min-h-screen overflow-x-hidden transition-colors duration-500 ${
        dark
          ? "bg-[#050505] text-white"
          : "bg-[#f5f5f5] text-black"
      }`}
    >
      {/* NAVBAR */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-xl transition-colors duration-500 ${
          dark
            ? "border-white/10 bg-black/70"
            : "border-black/10 bg-white/80"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl font-bold tracking-tight"
          >
            K<span className="text-violet-500">.</span>
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {[
              "about",
              "skills",
              "projects",
              "education",
              "certifications",
              "contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm capitalize transition ${
                  dark
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {item}
              </button>
            ))}

            {/* THEME TOGGLE */}
            <button
              onClick={() => setLightMode(!lightMode)}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${
                dark
                  ? "border-white/20 hover:border-white/40"
                  : "border-black/20 hover:border-black/40"
              }`}
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
              {dark ? "Light" : "Dark"}
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className={`overflow-hidden border-t px-6 py-5 md:hidden ${
                dark
                  ? "border-white/10 bg-black/95"
                  : "border-black/10 bg-white/95"
              }`}
            >
              <div className="flex flex-col gap-5">
                {[
                  "about",
                  "skills",
                  "projects",
                  "education",
                  "certifications",
                  "contact",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`text-left capitalize ${
                      dark
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-black"
                    }`}
                  >
                    {item}
                  </button>
                ))}

                <button
                  onClick={() => setLightMode(!lightMode)}
                  className="flex items-center gap-2 text-left"
                >
                  {dark ? <Sun size={17} /> : <Moon size={17} />}
                  {dark ? "Light Mode" : "Black Mode"}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center px-6 pt-24 lg:px-10"
      >
        {/* Background glow kept subtle */}
        {dark && (
          <>
            <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-violet-600/10 blur-[130px]" />
            <div className="absolute bottom-10 right-1/4 h-72 w-72 rounded-full bg-blue-600/5 blur-[130px]" />
          </>
        )}

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{ opacity: 1, letterSpacing: "0.3em" }}
              transition={{ duration: 1 }}
              className="mb-5 text-sm font-medium uppercase text-violet-500"
            >
              B.Tech CSE Student • Java & Python Developer
            </motion.p>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
              Kamlesh
              <br />

              {/* More visible Kumar Sahu */}
              <span
                className={
                  dark
                    ? "bg-gradient-to-r from-violet-300 via-violet-500 to-purple-600 bg-clip-text text-transparent"
                    : "text-black"
                }
              >
                Kumar Sahu
              </span>
            </h1>

            <p
              className={`mt-7 max-w-2xl text-base leading-7 sm:text-lg ${
                dark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Computer Science Engineering student passionate about building
              modern applications, solving problems, and exploring networking,
              artificial intelligence, web development, and software
              engineering.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="group flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-violet-500"
              >
                View My Work
                <ArrowUpRight
                  size={18}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

              <a
                href="/resume.pdf"
                download="Kamlesh_Kumar_Sahu_Resume.pdf"
                className={`flex items-center gap-2 rounded-full border px-6 py-3 font-medium transition duration-300 hover:-translate-y-1 ${
                  dark
                    ? "border-white/15 text-white hover:border-violet-400 hover:bg-white/5"
                    : "border-black/15 text-black hover:border-violet-500 hover:bg-black/5"
                }`}
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>

            <div className="mt-8 flex items-center gap-5">
              <a
                href="https://github.com/KamleshSahu874"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition hover:text-violet-500 ${
                  dark ? "text-gray-400" : "text-gray-600"
                }`}
                aria-label="GitHub"
              >
                <FaGithub size={23} />
              </a>

              <a
                href="https://www.linkedin.com/in/kamlesh-kumar-sahu-9b361a309/"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition hover:text-violet-500 ${
                  dark ? "text-gray-400" : "text-gray-600"
                }`}
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={22} />
              </a>

              <a
                href="mailto:sahukamleshkumar404@gmail.com"
                className={`transition hover:text-violet-500 ${
                  dark ? "text-gray-400" : "text-gray-600"
                }`}
                aria-label="Email"
              >
                <Mail size={22} />
              </a>

              <a
                href="tel:+917869676237"
                className={`transition hover:text-violet-500 ${
                  dark ? "text-gray-400" : "text-gray-600"
                }`}
                aria-label="Phone"
              >
                <Phone size={22} />
              </a>
            </div>
          </motion.div>

          {/* PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="mx-auto w-full max-w-md"
          >
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className={`relative aspect-[4/5] overflow-hidden rounded-[2rem] border p-2 shadow-2xl ${
                dark
                  ? "border-white/10 bg-white/5 shadow-violet-900/10"
                  : "border-black/10 bg-black/5 shadow-black/10"
              }`}
            >
              {/* No purple overlay on image */}
              <img
                src="/profile.jpeg"
                alt="Kamlesh Kumar Sahu"
                className="h-full w-full rounded-[1.5rem] object-cover object-top transition duration-700 hover:scale-[1.02]"
                style={{
                  filter: "saturate(0.88) contrast(1.02)",
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className={`absolute bottom-8 left-1/2 hidden -translate-x-1/2 transition md:block ${
            dark
              ? "text-gray-500 hover:text-white"
              : "text-gray-500 hover:text-black"
          }`}
          aria-label="Scroll down"
        >
          <ArrowDown className="animate-bounce" />
        </button>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className={`border-t px-6 py-24 lg:px-10 ${
          dark ? "border-white/10" : "border-black/10"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-violet-500">
                About Me
              </p>

              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                Building with
                <br />
                <span className={dark ? "text-gray-500" : "text-gray-400"}>
                  purpose.
                </span>
              </h2>
            </div>

            <div>
              <p
                className={`text-lg leading-8 ${
                  dark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                I am a Computer Science Engineering student at Baderia Global
                Institute of Engineering and Management, Jabalpur, affiliated
                with Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal.
              </p>

              <p
                className={`mt-6 leading-7 ${
                  dark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                I enjoy developing software applications and working with
                technologies such as Java, Python, React.js, Next.js, Node.js,
                MongoDB, and networking tools. I am continuously improving my
                technical skills through projects, problem solving, and
                hands-on learning.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-violet-500">
              Skills
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              My technical toolkit
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className={`rounded-2xl border p-7 backdrop-blur-xl transition ${
                  dark
                    ? "border-white/10 bg-white/[0.03] hover:border-violet-400/30"
                    : "border-black/10 bg-black/[0.03] hover:border-violet-500/30"
                }`}
              >
                <h3 className="text-xl font-semibold">{skill.title}</h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className={`rounded-full border px-3 py-1.5 text-sm ${
                        dark
                          ? "border-white/10 bg-white/5 text-gray-300"
                          : "border-black/10 bg-black/5 text-gray-700"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className={`border-t px-6 py-24 lg:px-10 ${
          dark ? "border-white/10" : "border-black/10"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-violet-500">
              Selected Work
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Projects I&apos;ve built
            </h2>
          </motion.div>

          {/* Large project cards */}
          <div className="mt-12 grid gap-7 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.6,
                }}
                whileHover={{ y: -10 }}
                className={`group flex min-h-[500px] flex-col overflow-hidden rounded-3xl border backdrop-blur-xl transition duration-500 ${
                  dark
                    ? "border-white/10 bg-white/[0.03] hover:border-violet-400/30"
                    : "border-black/10 bg-black/[0.03] hover:border-violet-500/30"
                }`}
              >
                <div
                  className={`relative flex h-56 items-center justify-center overflow-hidden border-b ${
                    dark
                      ? "border-white/10 bg-white/[0.02]"
                      : "border-black/10 bg-black/[0.02]"
                  }`}
                >
                  <span
                    className={`absolute left-6 top-5 text-xs font-medium tracking-[0.2em] ${
                      dark ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    PROJECT {project.number}
                  </span>

                  <motion.span
                    whileHover={{ scale: 1.2, rotate: 4 }}
                    className="text-7xl"
                  >
                    {project.icon}
                  </motion.span>
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <p className="text-sm text-violet-500">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p
                    className={`mt-4 flex-1 text-sm leading-7 ${
                      dark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className={`rounded-full px-3 py-1.5 text-xs ${
                          dark
                            ? "bg-white/5 text-gray-300"
                            : "bg-black/5 text-gray-700"
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 flex items-center gap-2 text-sm font-medium transition hover:text-violet-500"
                  >
                    <FaGithub size={18} />
                    View on GitHub
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-violet-500">
              Education
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Academic journey
            </h2>
          </motion.div>

          <div
            className={`relative mt-14 border-l pl-8 ${
              dark ? "border-white/10" : "border-black/10"
            }`}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className={`absolute -left-[43px] top-1 flex h-7 w-7 items-center justify-center rounded-full border ${
                  dark
                    ? "border-violet-400/40 bg-[#050505]"
                    : "border-violet-400/40 bg-[#f5f5f5]"
                }`}
              >
                <GraduationCap size={15} className="text-violet-500" />
              </div>

              <p className="text-sm text-violet-500">2023 – Present</p>

              <h3 className="mt-2 text-2xl font-bold">
                Bachelor of Technology in Computer Science and Engineering
              </h3>

              <p
                className={`mt-2 ${
                  dark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Baderia Global Institute of Engineering and Management,
                Jabalpur (M.P.)
              </p>

              <p
                className={`mt-2 text-sm ${
                  dark ? "text-gray-500" : "text-gray-500"
                }`}
              >
                Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal
              </p>

              <p
                className={`mt-4 inline-block rounded-full px-4 py-2 text-sm ${
                  dark
                    ? "bg-white/5 text-gray-300"
                    : "bg-black/5 text-gray-700"
                }`}
              >
                CGPA: 7.88
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative mt-16"
            >
              <div
                className={`absolute -left-[43px] top-1 flex h-7 w-7 items-center justify-center rounded-full border ${
                  dark
                    ? "border-white/20 bg-[#050505]"
                    : "border-black/20 bg-[#f5f5f5]"
                }`}
              >
                <Award size={15} className="text-gray-500" />
              </div>

              <p className="text-sm text-gray-500">2022 – 2023</p>

              <h3 className="mt-2 text-2xl font-bold">
                Higher Secondary Certification
              </h3>

              <p className="mt-2 text-gray-500">Central Academy School</p>

              <p className="mt-3 text-gray-500">MP Board • 87%</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative mt-16"
            >
              <div
                className={`absolute -left-[43px] top-1 flex h-7 w-7 items-center justify-center rounded-full border ${
                  dark
                    ? "border-white/20 bg-[#050505]"
                    : "border-black/20 bg-[#f5f5f5]"
                }`}
              >
                <Award size={15} className="text-gray-500" />
              </div>

              <p className="text-sm text-gray-500">2020 – 2021</p>

              <h3 className="mt-2 text-2xl font-bold">
                Secondary School Certification
              </h3>

              <p className="mt-2 text-gray-500">Spring Dales School</p>

              <p className="mt-3 text-gray-500">MP Board • 85.4%</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section
        id="certifications"
        className={`border-t px-6 py-24 lg:px-10 ${
          dark ? "border-white/10" : "border-black/10"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-violet-500">
              Certifications & Training
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Learning beyond academics
            </h2>

            <p
              className={`mt-5 max-w-2xl leading-7 ${
                dark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Certifications, training programs, and achievements that
              complement my academic and technical experience.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className={`rounded-2xl border p-6 backdrop-blur-xl transition ${
                  dark
                    ? "border-white/10 bg-white/[0.03] hover:border-violet-400/30"
                    : "border-black/10 bg-black/[0.03] hover:border-violet-500/30"
                }`}
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl ${
                        dark ? "bg-white/5" : "bg-black/5"
                      }`}
                    >
                      {cert.icon}
                    </div>

                    <div>
                      <p className="text-xs tracking-[0.2em] text-gray-500">
                        CERTIFICATE {cert.number}
                      </p>

                      <h3 className="mt-1 text-lg font-semibold leading-6">
                        {cert.title}
                      </h3>

                      <p className="mt-2 text-sm text-violet-500">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-xs ${
                      dark
                        ? "bg-white/5 text-gray-400"
                        : "bg-black/5 text-gray-500"
                    }`}
                  >
                    {cert.date}
                  </span>
                </div>

                <div
                  className={`mt-5 flex items-center justify-between border-t pt-5 ${
                    dark ? "border-white/10" : "border-black/10"
                  }`}
                >
                  <span className="text-sm text-gray-500">
                    {cert.type}
                  </span>

                  <a
                    href={cert.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium transition hover:text-violet-500"
                  >
                    <FileText size={16} />
                    View Certificate
                    <ExternalLink size={15} />
                  </a>
                </div>

                {cert.details && (
                  <p
                    className={`mt-4 border-t pt-4 text-sm leading-6 ${
                      dark
                        ? "border-white/5 text-gray-500"
                        : "border-black/5 text-gray-500"
                    }`}
                  >
                    {cert.details}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className={`border-t px-6 py-24 lg:px-10 ${
          dark ? "border-white/10" : "border-black/10"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-12 lg:grid-cols-2"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-violet-500">
                Contact
              </p>

              <h2 className="mt-4 text-5xl font-bold leading-tight sm:text-6xl">
                Let&apos;s build
                <br />
                something.
              </h2>

              <p
                className={`mt-6 max-w-lg leading-7 ${
                  dark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                I&apos;m open to opportunities, internships, collaborations,
                and interesting software development projects.
              </p>
            </div>

            <div className="space-y-4">
              {/* EMAIL */}
              <div
                className={`flex items-center gap-4 rounded-2xl border p-5 transition hover:-translate-y-1 ${
                  dark
                    ? "border-white/10 bg-white/[0.03]"
                    : "border-black/10 bg-black/[0.03]"
                }`}
              >
                <Mail className="text-violet-500" />

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Email
                  </p>

                  <a
                    href="mailto:sahukamleshkumar404@gmail.com"
                    className="mt-1 block text-sm transition hover:text-violet-500"
                  >
                    sahukamleshkumar404@gmail.com
                  </a>
                </div>
              </div>

              {/* PHONE */}
              <div
                className={`flex items-center gap-4 rounded-2xl border p-5 transition hover:-translate-y-1 ${
                  dark
                    ? "border-white/10 bg-white/[0.03]"
                    : "border-black/10 bg-black/[0.03]"
                }`}
              >
                <Phone className="text-violet-500" />

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Phone
                  </p>

                  <a
                    href="tel:+917869676237"
                    className="mt-1 block text-sm transition hover:text-violet-500"
                  >
                    +91 7869676237
                  </a>
                </div>
              </div>

              {/* LOCATION */}
              <div
                className={`flex items-center gap-4 rounded-2xl border p-5 transition hover:-translate-y-1 ${
                  dark
                    ? "border-white/10 bg-white/[0.03]"
                    : "border-black/10 bg-black/[0.03]"
                }`}
              >
                <MapPin className="text-violet-500" />

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Location
                  </p>

                  <p className="mt-1 text-sm">
                    Madhya Pradesh, India
                  </p>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-3 pt-3">
                <a
                  href="mailto:sahukamleshkumar404@gmail.com"
                  className="flex items-center gap-2 rounded-full bg-violet-600 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-1 hover:bg-violet-500"
                >
                  <Mail size={17} />
                  Email Me
                </a>

                <a
                  href="tel:+917869676237"
                  className={`flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition hover:-translate-y-1 ${
                    dark
                      ? "border-white/15 hover:border-violet-400"
                      : "border-black/15 hover:border-violet-500"
                  }`}
                >
                  <Phone size={17} />
                  Call Me
                </a>

                <a
                  href="https://www.linkedin.com/in/kamlesh-kumar-sahu-9b361a309/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition hover:-translate-y-1 ${
                    dark
                      ? "border-white/15 hover:border-violet-400"
                      : "border-black/15 hover:border-violet-500"
                  }`}
                >
                  <FaLinkedinIn size={17} />
                  LinkedIn
                </a>

                <a
                  href="https://github.com/KamleshSahu874"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition hover:-translate-y-1 ${
                    dark
                      ? "border-white/15 hover:border-violet-400"
                      : "border-black/15 hover:border-violet-500"
                  }`}
                >
                  <FaGithub size={17} />
                  GitHub
                </a>

                <a
                  href="/resume.pdf"
                  download="Kamlesh_Kumar_Sahu_Resume.pdf"
                  className={`flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition hover:-translate-y-1 ${
                    dark
                      ? "border-white/15 hover:border-violet-400"
                      : "border-black/15 hover:border-violet-500"
                  }`}
                >
                  <Download size={17} />
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className={`border-t px-6 py-8 lg:px-10 ${
          dark ? "border-white/10" : "border-black/10"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Kamlesh Kumar Sahu. All rights
            reserved.
          </p>

          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 text-sm text-gray-500 transition hover:text-violet-500"
          >
            Back to top
            <ArrowUp size={16} />
          </button>
        </div>
      </footer>
    </main>
  );
}