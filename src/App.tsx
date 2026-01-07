import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Layout, Server, FolderGit2, MessageSquare, Terminal, ChevronRight } from 'lucide-react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';

import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import { AnimatedText } from './components/ui/animated-text';
import { Spotlight } from './components/ui/spotlight';
import ProgressRing from './components/ProgressRing';

const TechHeading = ({ text }: { text: string }) => (
  <div className="relative mb-8 sm:mb-16">
    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[160px] sm:w-[240px] h-[1px] bg-gradient-to-r from-transparent via-cyber-blue to-transparent" />
    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[80px] sm:w-[120px] h-[1px] bg-gradient-to-r from-transparent via-cyber-blue to-transparent animate-pulse" />
    <h2 className="text-3xl sm:text-5xl font-bold text-center relative">
      <span className="bg-cyber-darker px-4 sm:px-8 relative">
        <span className="text-cyber-blue">&lt;</span>
        <span className="relative">
          {text}
          <div className="absolute -top-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyber-blue/50 to-transparent" />
          <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyber-blue/50 to-transparent" />
        </span>
        <span className="text-cyber-blue">/&gt;</span>
      </span>
    </h2>
    <div className="flex justify-center gap-1 sm:gap-2 mt-2">
      <div className="w-1.5 h-1.5 bg-cyber-blue/50 rounded-full animate-pulse" />
      <div className="w-1.5 h-1.5 bg-cyber-blue/50 rounded-full animate-pulse delay-100" />
      <div className="w-1.5 h-1.5 bg-cyber-blue/50 rounded-full animate-pulse delay-200" />
    </div>
  </div>
);

function App() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true });
  const [contactRef, contactInView] = useInView({ triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true });

  const skills = [
    { name: 'Web Development', value: 90, icon: <Layout className="w-6 h-6" /> },
    { name: 'Web Design', value: 85, icon: <Server className="w-6 h-6" /> },
    { name: 'AI Projects', value: 75, icon: <Database className="w-6 h-6" /> },
    { name: 'AI Prompting', value: 90, icon: <Code className="w-6 h-6" /> },
  ];

  const projects = [
    {
      title: 'ChromaRide 3D ',
      description: 'This is a fun experiment using Three.js and OpenCV.js to detect the color of a persons outfit in front of a camera and apply that color to a 3D car model.',
      image: 'https://thumbs.dreamstime.com/b/artificial-intelligence-ai-holographic-theme-technology-abstract-background-image-concept-wallpaper-334253471.jpg',
      tags: ['React', 'Three.js', 'Typescript','TailwindCSS'],
      demoLink: 'https://chroma-ride3d.vercel.app/', target:'_blank',
      sourceLink: 'https://github.com/AnoopkumarA/ChromaRide_3D'
    },
    {
      title: 'Skysaver Website',
      description: 'A responsive web platform showcasing affordable flight services with a clean, student-friendly interface.',
      image: 'https://www.shutterstock.com/image-vector/airplane-taking-off-passport-location-600nw-2414108467.jpg',
      tags: ['React', 'Tailwind CSS', 'JavaScript'],
      demoLink: 'https://skysaver.vercel.app/', target:'_blank',
      sourceLink: 'https://github.com/AnoopkumarA/skysaver'
    },
    {
      title: 'Rome Mariya Website',
      description: 'Designed and developed a modern, responsive website for an interior design business. Focused on clean UI, smooth navigation, and mobile-first design to effectively showcase services and design work.',
      image: '/li.jpeg',
      tags: ['React', 'Typescript','TailwindCSS',' Node.js'],
      demoLink: 'https://rome-maria.vercel.app/', target:'_blank',
      sourceLink: 'https://github.com/AnoopkumarA/Rome-maria'
    },
    {
      title: 'MovieVault Website',
      description: 'I developed Movievault, a responsive movie review web application that allows users to explore and discover movies through a clean and user-friendly interface. The website displays detailed movie information.',
      image: '/movie.png',
      tags: ['React', 'TailwindCSS', 'JavaScript','API',],
      demoLink: 'https://movievault.info/', target:'_blank',
      sourceLink: 'https://github.com/AnoopkumarA/Movie-review'
    },
    {
      title: 'Echoes Home Design Website',
      description: 'I developed Echoes Within, a visually appealing and user-friendly website for a home interior design startup. The website focuses on showcasing interior services and design aesthetics, and responsive design ',
      image: '/echos.png',
      tags: ['HTML', 'CSS', 'JavaScript'],
      demoLink: 'https://echoeswithin.vercel.app/', target:'_blank',
      sourceLink: 'https://github.com/AnoopkumarA/echoes-website'
    },
    {
      title: 'AI Consultation Assistant ',
      description: 'Built an AI-driven Electronic Health Record (EHR) Summarization System. Utilized NLP and Deep Learning togenerate concise EHR summaries for doctors.',
      image: 'data:image/jpeg;base64,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',
      tags: ['Python', 'NLP', 'React', 'Deep Learning', 'Typescript','TailwindCSS'],
      demoLink: '',
      sourceLink: 'https://github.com/AnoopkumarA/AI-Consultation-Assistant-using-NLP-and-DeepLearning.'
    },

    {
      title: 'Disease Detection AI',
      description: 'Developed an AI-powered system for disease prediction and medical recommendations using AI and ML.',
      image: 'data:image/jpeg;base64,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',
      tags: ['Naive Bayes Classifier', 'HTML', 'TailwindCSS', 'JavaScript'],
      demoLink: 'https://movievault.info/', target:'_blank',
      sourceLink: 'https://github.com/AnoopkumarA/Disease-Detection-and-Health-Recommendation-System'
    },
    {
      title: 'Echoes Home Design Website',
      description: 'I developed Echoes Within, a visually appealing and user-friendly website for a home interior design startup. The website focuses on showcasing interior services and design aesthetics, and responsive design ',
      image: '/echos.png',
      tags: ['HTML', 'CSS', 'JavaScript'],
      demoLink: 'https://echoeswithin.vercel.app/', target:'_blank',
      sourceLink: 'https://github.com/AnoopkumarA/echoes-website'
    },
    {
      title: 'AI Consultation Assistant ',
      description: 'Built an AI-driven Electronic Health Record (EHR) Summarization System. Utilized NLP and Deep Learning togenerate concise EHR summaries for doctors.',
      image: 'data:image/jpeg;base64,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',
      tags: ['Python', 'NLP', 'React', 'Deep Learning', 'Typescript','TailwindCSS'],
      demoLink: '',
      sourceLink: 'https://github.com/AnoopkumarA/AI-Consultation-Assistant-using-NLP-and-DeepLearning.'
    }
  ];

  return (
    <div className="min-h-screen bg-cyber-darker text-gray-100 scrollbar-hide overflow-x-hidden ">
      <Navbar />
      <ParticleBackground />
      
      {/* Hero Section */}
      <Spotlight className="min-h-screen">
        <motion.section
          ref={heroRef}
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative min-h-screen flex items-center justify-center px-4"
          id="home"
        >
          <div className="text-center z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-8xl font-bold mb-6 relative">
                <motion.span
                  className="text-white relative z-10"
                  animate={{
                    textShadow: [
                      "0 0 25px rgba(0,246,255,0.5), 0 0 45px rgba(0,246,255,0.4), 0 0 65px rgba(0,246,255,0.3)",
                      "0 0 35px rgba(0,246,255,0.6), 0 0 55px rgba(0,246,255,0.5), 0 0 75px rgba(0,246,255,0.4)",
                      "0 0 25px rgba(0,246,255,0.5), 0 0 45px rgba(0,246,255,0.4), 0 0 65px rgba(0,246,255,0.3)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  Anoop Kumar
                </motion.span>
                
                {/* Enhanced glow effect */}
                <motion.div
                  className="absolute inset-0 bg-cyber-blue/20 filter blur-2xl"
                  animate={{
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                />
              </h1>
            </motion.div>

            <div className="relative inline-block">
              <AnimatedText
                text="Front-End Developer & AI Enthusiast"
                className="text-lg md:text-2xl mb-8 font-mono relative z-10 bg-gradient-to-r from-cyber-blue via-white to-cyber-blue bg-clip-text text-transparent"
              />
              {/* Tech decoration lines */}
              <div className="absolute -left-4 top-1/2 w-3 h-[1px] bg-cyber-blue/50" />
              <div className="absolute -right-4 top-1/2 w-3 h-[1px] bg-cyber-blue/50" />
              
              {/* Glitch effect */}
              <motion.div
                className="absolute inset-0 bg-cyber-blue/20"
                animate={{ 
                  opacity: [0, 0.2, 0],
                  x: [-2, 0, 2]
                }}
                transition={{ 
                  duration: 0.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  times: [0, 0.5, 1]
                }}
              />
            </div>
            <div className="flex flex-row gap-4 justify-center mb-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="cyber-button px-3 sm:px-6 py-2 sm:py-3 rounded-full border-2 border-cyber-blue flex items-center gap-1 sm:gap-2 hover:shadow-[0_0_15px_rgba(0,246,255,0.5)] transition-shadow text-xs sm:text-base whitespace-nowrap"
              >
                <FolderGit2 className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>View Projects</span>
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="cyber-button px-3 sm:px-6 py-2 sm:py-3 rounded-full border-2 border-cyber-blue flex items-center gap-1 sm:gap-2 hover:shadow-[0_0_15px_rgba(0,246,255,0.5)] transition-shadow text-xs sm:text-base whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Contact Me</span>
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.a>
            </div>
            <div className="flex gap-6 justify-center">
              <motion.a
                whileHover={{ scale: 1.2, color: '#00f6ff' }}
                href="https://github.com/AnoopkumarA" target='_blank'
                className="cursor-pointer"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: '#00f6ff' }}
                href="https://www.linkedin.com/in/anoop-kumar-a-26a6941b9/" target='_blank'
                className="cursor-pointer"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: '#00f6ff' }}
                href="mailto:anoopadraja@gmail.com"
                className="cursor-pointer"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </motion.section>
      </Spotlight>

      {/* About Me Section */}
      
      <motion.section
        ref={aboutRef}
        initial={{ opacity: 0, y: 20 }}
        animate={aboutInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 relative"
        id="about"
      >
        <TechHeading text="About Me" />
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="w-[320px] h-[320px] mx-auto relative">
              {/* Animated tech rings */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-cyber-blue/20 animate-spin-slow" />
              <div className="absolute inset-0 rounded-full border-2 border-cyber-blue/30 animate-spin-slow-reverse" />
              <div className="absolute inset-[-10px] rounded-full border border-cyber-blue/10 animate-pulse" />
              
              {/* Decorative corner elements */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-cyber-blue/50" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-cyber-blue/50" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-cyber-blue/50" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-cyber-blue/50" />
              
              {/* Main image container with hexagonal overlay */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-cyber-blue bg-cyber-darker">
                <img
                  src="/mypic.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full scale-[0.85] transition-transform duration-500 group-hover:scale-[0.9]"
                />
                
                {/* Hexagonal grid overlay */}
                <div className="absolute inset-0 bg-[url('/hex-grid.png')] opacity-30 mix-blend-overlay" />
                
                {/* Tech overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker/90 via-cyber-darker/20 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,246,255,0.15),transparent_70%)]" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_50%_50%,rgba(0,246,255,0.3),transparent_60%)]" />
                
                {/* Scan line effect */}
                <div className="absolute inset-0 bg-scan-lines opacity-20" />
              </div>

              {/* Status indicator with enhanced tech feel */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-max">
                <div className="px-4 py-1 bg-cyber-darker/90 rounded-full border border-cyber-blue/30 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-sm font-mono text-cyber-blue">
                    <div className="w-2 h-2 rounded-full bg-cyber-blue animate-pulse" />
                    <Terminal className="w-3 h-3" />
                    <span className="text-xs tracking-wider">[STATUS::ONLINE]</span>
                  </div>
                </div>
              </div>

              {/* Tech decoration dots with glow */}
              <div className="absolute -inset-4 rotate-45 pointer-events-none">
                <div className="w-2 h-2 absolute top-0 left-1/2 -translate-x-1/2 bg-cyber-blue/30 shadow-glow" />
                <div className="w-2 h-2 absolute bottom-0 left-1/2 -translate-x-1/2 bg-cyber-blue/30 shadow-glow" />
                <div className="w-2 h-2 absolute left-0 top-1/2 -translate-y-1/2 bg-cyber-blue/30 shadow-glow" />
                <div className="w-2 h-2 absolute right-0 top-1/2 -translate-y-1/2 bg-cyber-blue/30 shadow-glow" />
              </div>

              {/* Data stream effects */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-cyber-blue/50 to-transparent animate-scan" />
                <div className="absolute top-1/2 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyber-blue/50 to-transparent animate-scan-horizontal" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="cyber-card p-6 space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-cyber-blue">
                <ChevronRight className="w-4 h-4" />
                <code className="font-mono">const aboutMe = {`{`}</code>
              </div>
              <div className="pl-6">
                <p className="text-gray-300 leading-relaxed">
                Hi, I’m Anoop Kumar.
                 I’m a B.Tech graduate student specializing in Artificial Intelligence & Data Science, with hands-on experience in web development.
                </p>
                <div className="h-4"></div>
                <p className="text-gray-300 leading-relaxed">
                I build responsive, user-friendly web applications using React and JavaScript, and I also work with AI tools to integrate intelligent features into real-world projects.

                  I enjoy turning ideas into practical, reliable solutions that combine clean design with smart functionality.

                </p>
              </div>
              <code className="font-mono text-cyber-blue">{`}`}</code>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-cyber-blue/30">
              <div>
                <div className="text-cyber-blue font-mono text-sm">Location</div>
                <div className="text-gray-300"> Kerala, India</div>
              </div>
              <div>
                <div className="text-cyber-blue font-mono text-sm">Education</div>
                <div className="text-gray-300">B.Tech in AI & DS</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Update the download CV button section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 flex justify-center flex-col items-center"
        >
          <motion.a
            href="/Resume.pdf"
            download="Anoop_Resume.pdf"
            className="inline-flex items-center gap-2 cyber-button group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button content */}
            <span className="relative z-10 flex items-center gap-2">
              <Code className="w-5 h-5" />
              <span className="font-mono">Download CV</span>
              <motion.div
                className="w-4 h-4 border-t-2 border-r-2 border-cyber-blue rotate-45 group-hover:translate-x-1 transition-transform"
              />
            </span>

            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-cyber-blue/20"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 2, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />

            {/* Tech decoration */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-blue/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-blue/50 to-transparent" />
          </motion.a>

          {/* Download status - now directly below the button */}
          <div className="mt-2 text-xs font-mono text-cyber-blue/50 flex items-center gap-2">
            <div className="w-1 h-1 bg-cyber-blue/50 rounded-full animate-pulse" />
            <span>resume.latest_version</span>
          </div>
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        ref={skillsRef}
        initial={{ opacity: 0, y: 20 }}
        animate={skillsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 relative"
        id="skills"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,246,255,0.05),transparent_70%)]" />
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyber-blue/30 to-transparent top-0" />
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyber-blue/30 to-transparent bottom-0" />
        </div>

        <TechHeading text="Technical Skills" />
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="cyber-card relative group backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/0 via-cyber-blue/30 to-cyber-blue/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Corner decorations */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-cyber-blue/50" />
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-cyber-blue/50" />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-cyber-blue/50" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-cyber-blue/50" />
              
              <div className="relative z-10 flex flex-col items-center p-6">
                {/* Icon container with glow effect */}
                <motion.div
                  className="relative p-3 bg-cyber-darker rounded-full mb-4 border border-cyber-blue/30"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="absolute inset-0 bg-cyber-blue/10 rounded-full filter blur-md" />
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-2 border-dashed border-cyber-blue/20"
                  />
                  {skill.icon}
                </motion.div>

                {/* Skill name with tech decoration */}
                <div className="relative">
                  <h3 className="text-xl font-semibold mb-4 font-mono">
                    <span className="text-cyber-blue">&lt;</span>
                    {skill.name}
                    <span className="text-cyber-blue">/&gt;</span>
                  </h3>
                </div>

                {/* Enhanced ProgressRing */}
                <div className="relative">
                  <ProgressRing percentage={skill.value} />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-mono text-cyber-blue">
                    {skill.value}%
                  </div>
                </div>

                {/* Tech details */}
                <div className="mt-4 w-full pt-4 border-t border-cyber-blue/20">
                  <div className="text-xs font-mono text-cyber-blue/70 flex justify-between">
                    <span>efficiency</span>
                    <span>{skill.value}/100</span>
                  </div>
                </div>
              </div>

              {/* Scan line effect */}
              <div className="absolute inset-0 bg-scan-lines opacity-10" />
            </motion.div>
          ))}
        </div>
            <div className="mt-2 text-xs font-mono text-cyber-blue/50 flex items-center gap-2">
            <div className="w-1 h-1 bg-cyber-blue/50 rounded-full animate-pulse" />
            <span>Technical.latest_skills</span>
          </div>
       
      </motion.section>

      {/* Projects Section */}
      <motion.section
        ref={projectsRef}
        initial={{ opacity: 0, y: 20 }}
        animate={projectsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 relative"
        id="projects"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,246,255,0.05),transparent_70%)]" />
        
        <TechHeading text="Featured Projects" />
        
        <div className="max-w-6xl mx-auto space-y-20">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(3, 6).map((project, index) => (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, y: 20 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech decoration */}
        
      </motion.section>

      {/* Contact Section */}
      <motion.section
        ref={contactRef}
        initial={{ opacity: 0, y: 20 }}
        animate={contactInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        id="contact"
        className="py-20 px-4"
      >
        <TechHeading text="Get in Touch" />
        <ContactForm />
      </motion.section>
    
    </div>
    
  );
}

export default App;
