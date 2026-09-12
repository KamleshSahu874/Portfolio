"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const projects = [
  {
    number: "01",
    title: "SmartBranch 360",
    category: "Networking",
    description:
      "A Python-based network monitoring and validation tool integrated with Cisco Packet Tracer. It verifies VLANs, trunks, gateways, and network connectivity.",
    tech: ["Python", "Cisco", "Packet Tracer", "Networking"],
    icon: "🌐",
    github: "https://github.com/KamleshSahu874/smartbranch360",
  },
  {
    number: "02",
    title: "Hand Gesture Volume Controller",
    category: "Python • Computer Vision",
    description:
      "A real-time computer vision application that uses hand gestures to control the system volume. The distance between the thumb and index finger determines the volume level.",
    tech: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    icon: "✋",
    github: "https://github.com/KamleshSahu874/HandGestureVolumeController",
  },
  {
    number: "03",
    title: "Ucab – Cab Booking System",
    category: "Web Development",
    description:
      "A full-stack cab booking web application enabling users to book rides, manage profiles, and track bookings with RESTful APIs, authentication, real-time data handling, and MVC architecture.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    icon: "🚕",
    github: "https://github.com/KamleshSahu874/Ucab-Mern-Stack-Project",
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
    isImage: true,
  },
  {
    number: "02",
    title: "Google Android Development",
    issuer: "EduSkills",
    date: "2024",
    type: "Training / Certification",
    icon: "📱",
    certificate: "/certificates/google-android.pdf",
    isImage: false,
  },
  {
    number: "03",
    title: "ServiceNow Virtual Internship Program",
    issuer: "SmartBridge / ServiceNow",
    date: "2026",
    type: "Virtual Internship",
    icon: "⚙️",
    certificate: "/certificates/servicenow.pdf",
    isImage: false,
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
    isImage: false,
  },
  {
    number: "05",
    title: "Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    date: "2025",
    type: "Certification",
    icon: "📊",
    certificate: "/certificates/data-science.pdf",
    isImage: false,
  },
  {
    number: "06",
    title: "Computer Networks & Internet Protocol",
    issuer: "NPTEL",
    date: "2026",
    type: "NPTEL",
    icon: "🌐",
    certificate: "/certificates/computer-networks.pdf",
    isImage: false,
  },
];

const skills = [
  {
    title: "Programming",
    items: ["Java", "C++", "Python"],
  },
  {
    title: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "React.js", "Node.js"],
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
    items: ["DSA", "OOPS", "Computer Networks"],
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl font-bold tracking-tight"
          >
            K<span className="text-violet-400">.</span>
          </button>

          <div className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-gray-300 transition hover:text-white"
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm text-gray-300 transition hover:text-white"
            >
              Skills
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm text-gray-300 transition hover:text-white"
            >
              Projects
            </button>

            <button
              onClick={() => scrollToSection("education")}
              className="text-sm text-gray-300 transition hover:text-white"
            >
              Education
            </button>

            <button
              onClick={() => scrollToSection("certifications")}
              className="text-sm text-gray-300 transition hover:text-white"
            >
              Certifications
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="rounded-full border border-white/20 px-5 py-2 text-sm transition hover:border-violet-400 hover:text-violet-300"
            >
              Contact
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

        {menuOpen && (
          <div className="border-t border-white/10 bg-black/95 px-6 py-5 md:hidden">
            <div className="flex flex-col gap-5">
              {["about", "skills", "projects", "education", "certifications", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-left text-gray-300 capitalize hover:text-white"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center px-6 pt-24 lg:px-10"
      >
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute bottom-10 right-1/4 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
              B.Tech CSE Student • Java & Python Developer
            </p>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
              Kamlesh
              <br />
              <span className="bg-gradient-to-r from-white via-violet-200 to-violet-500 bg-clip-text text-transparent">
                Kumar Sahu
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
              Computer Science Engineering student passionate about building
              modern applications, solving problems, and exploring networking,
              web development, and software engineering.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-violet-300"
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
                className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:border-violet-400 hover:bg-white/5"
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
                className="text-gray-400 transition hover:text-white"
                aria-label="GitHub"
              >
                <FaGithub size={23} />
              </a>

              <a
                href="https://www.linkedin.com/in/kamlesh-kumar-sahu-9b361a309/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={22} />
              </a>

              <a
                href="mailto:sahukamleshkumar404@gmail.com"
                className="text-gray-400 transition hover:text-white"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>
          </motion.div>

          {/* PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mx-auto w-full max-w-md"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-2xl shadow-violet-900/20">
              <div className="absolute inset-0 bg-gradient-to-t from-violet-600/20 to-transparent" />

              <img
                src="/profile.jpeg"
                alt="Kamlesh Kumar Sahu"
                className="h-full w-full rounded-[1.5rem] object-cover object-top transition duration-700 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-gray-500 transition hover:text-white md:block"
          aria-label="Scroll down"
        >
          <ArrowDown className="animate-bounce" />
        </button>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-white/10 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
                About Me
              </p>

              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                Building with
                <br />
                <span className="text-gray-500">purpose.</span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-gray-300">
                I am a Computer Science Engineering student at Baderia Global
                Institute of Engineering and Management, Jabalpur, affiliated
                with Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal.
              </p>

              <p className="mt-6 leading-7 text-gray-400">
                I enjoy developing software applications and working with
                technologies such as Java, Python, React.js, Node.js, MongoDB,
                and networking tools. I am continuously improving my technical
                skills through projects, problem solving, and hands-on
                learning.
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
            <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
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
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-400/30"
              >
                <h3 className="text-xl font-semibold">{skill.title}</h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-300"
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
        className="border-t border-white/10 px-6 py-24 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
              Selected Work
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Projects I&apos;ve built
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-violet-400/30"
              >
                <div className="relative flex h-52 items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-violet-500/10 to-blue-500/5">
                  <span className="absolute left-6 top-5 text-xs font-medium tracking-[0.2em] text-gray-500">
                    PROJECT {project.number}
                  </span>

                  <span className="text-7xl transition duration-500 group-hover:scale-110">
                    {project.icon}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <p className="text-sm text-violet-400">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-6 text-gray-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 flex items-center gap-2 text-sm font-medium transition hover:text-violet-300"
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
            <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
              Education
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Academic journey
            </h2>
          </motion.div>

          <div className="relative mt-14 border-l border-white/10 pl-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-[43px] top-1 flex h-7 w-7 items-center justify-center rounded-full border border-violet-400/40 bg-[#050505]">
                <GraduationCap size={15} className="text-violet-400" />
              </div>

              <p className="text-sm text-violet-400">2023 – Present</p>

              <h3 className="mt-2 text-2xl font-bold">
                Bachelor of Technology in Computer Science and Engineering
              </h3>

              <p className="mt-2 text-gray-300">
                Baderia Global Institute of Engineering and Management,
                Jabalpur (M.P.)
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal
              </p>

              <p className="mt-4 inline-block rounded-full bg-white/5 px-4 py-2 text-sm text-gray-300">
                CGPA: 7.88
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative mt-16"
            >
              <div className="absolute -left-[43px] top-1 flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-[#050505]">
                <Award size={15} className="text-gray-400" />
              </div>

              <p className="text-sm text-gray-500">2022 – 2023</p>

              <h3 className="mt-2 text-2xl font-bold">
                Higher Secondary Certification
              </h3>

              <p className="mt-2 text-gray-300">
                Central Academy School
              </p>

              <p className="mt-3 text-gray-400">
                MP Board • 87%
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative mt-16"
            >
              <div className="absolute -left-[43px] top-1 flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-[#050505]">
                <Award size={15} className="text-gray-400" />
              </div>

              <p className="text-sm text-gray-500">2020 – 2021</p>

              <h3 className="mt-2 text-2xl font-bold">
                Secondary School Certification
              </h3>

              <p className="mt-2 text-gray-300">
                Spring Dales School
              </p>

              <p className="mt-3 text-gray-400">
                MP Board • 85.4%
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section
        id="certifications"
        className="border-t border-white/10 px-6 py-24 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
              Certifications & Training
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Learning beyond academics
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-gray-400">
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
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-violet-400/30"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-2xl">
                      {cert.icon}
                    </div>

                    <div>
                      <p className="text-xs tracking-[0.2em] text-gray-600">
                        CERTIFICATE {cert.number}
                      </p>

                      <h3 className="mt-1 text-lg font-semibold leading-6">
                        {cert.title}
                      </h3>

                      <p className="mt-2 text-sm text-violet-400">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <span className="shrink-0 rounded-full bg-white/5 px-3 py-1 text-xs text-gray-400">
                    {cert.date}
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-sm text-gray-500">
                    {cert.type}
                  </span>

                  <a
                    href={cert.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-300 transition hover:text-violet-300"
                  >
                    <FileText size={16} />
                    View Certificate
                    <ExternalLink size={15} />
                  </a>
                </div>

                {cert.details && (
                  <p className="mt-4 border-t border-white/5 pt-4 text-sm leading-6 text-gray-500">
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
        className="border-t border-white/10 px-6 py-24 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-12 lg:grid-cols-2"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
                Contact
              </p>

              <h2 className="mt-4 text-5xl font-bold leading-tight sm:text-6xl">
                Let&apos;s build
                <br />
                something.
              </h2>

              <p className="mt-6 max-w-lg leading-7 text-gray-400">
                I&apos;m open to opportunities, internships, collaborations,
                and interesting software development projects.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <Mail className="text-violet-400" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Email
                  </p>
                  <a
                    href="mailto:sahukamleshkumar404@gmail.com"
                    className="mt-1 block text-sm text-gray-200 hover:text-violet-300"
                  >
                    sahukamleshkumar404@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <Phone className="text-violet-400" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Phone
                  </p>
                  <a
                    href="tel:+917869676237"
                    className="mt-1 block text-sm text-gray-200 hover:text-violet-300"
                  >
                    +91 7869676237
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <MapPin className="text-violet-400" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Location
                  </p>
                  <p className="mt-1 text-sm text-gray-200">
                    Madhya Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-3">
                <a
                  href="mailto:sahukamleshkumar404@gmail.com"
                  className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-violet-300"
                >
                  <Mail size={17} />
                  Email Me
                </a>

                <a
                  href="tel:+917869676237"
                  className="flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium transition hover:border-violet-400"
                >
                  <Phone size={17} />
                  Call Me
                </a>

                <a
                  href="https://www.linkedin.com/in/kamlesh-kumar-sahu-9b361a309/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium transition hover:border-violet-400"
                >
                  <FaLinkedinIn size={17} />
                  LinkedIn
                </a>

                <a
                  href="https://github.com/KamleshSahu874"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium transition hover:border-violet-400"
                >
                  <FaGithub size={17} />
                  GitHub
                </a>

                <a
                  href="/resume.pdf"
                  download="Kamlesh_Kumar_Sahu_Resume.pdf"
                  className="flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium transition hover:border-violet-400"
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
      <footer className="border-t border-white/10 px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Kamlesh Kumar Sahu. All rights
            reserved.
          </p>

          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
          >
            Back to top
            <ArrowUp size={16} />
          </button>
        </div>
      </footer>
    </main>
  );
}