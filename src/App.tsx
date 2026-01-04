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
    { name: 'Frontend', value: 90, icon: <Layout className="w-6 h-6" /> },
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
      description: 'Developed SkySaver is a web-based flight assistance platform designed to help users find affordable flight options quickly and efficiently. The platform focuses on providing a simple and user-friendly experience budget-conscious travellers',
      image: 'data:image/png;base64,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',
      tags: ['React', 'Tailwind CSS', 'JavaScript'],
      demoLink: 'skysaver.vercel.app', target:'_blank',
      sourceLink: 'https://github.com/AnoopkumarA/ASME'
    },
    {
      title: 'Library Management System',
      description: 'A simple, web-based Library Management System built with React. This project allows users to manage a library’s core functions, including book inventory, member records.',
      image: '/li.jpeg',
      tags: ['React', 'Typescript','TailwindCSS'],
      demoLink: 'https://library-managment-system-self.vercel.app/', target:'_blank',
      sourceLink: 'https://github.com/AnoopkumarA/Library_Managment_System'
    },
    {
      title: 'OliaxStore Website',
      description: 'OliaxStore is an online shopping platform that offers a wide range of clothing, shoes, and accessories for men and women, With a user-friendly interface.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2QjGkLA_E8mtFCFF0ayP-3MeK0iOfkQF5qg&s',
      tags: ['HTML', 'Bootstrap', 'JavaScript'],
      demoLink: 'https://oliax.vercel.app/', target:'_blank',
      sourceLink: 'https://github.com/AnoopkumarA/OliaxStore'
    },
    {
      title: 'DenNDen Website',
      description: 'I designed and developed the website for DEN N DEN SUSTAINABLE SOLUTIONS PRIVATE LIMITED, a company focused on providing innovative, eco-friendly solutions. ',
      image: 'https://playitgreen.com/wp-content/uploads/2024/04/Making-a-website-sustainble-You-should-consider-inclusivity-and-accessibility-when-making-your-website-sustainable-768x512.jpg',
      tags: ['HTML', 'CSS', 'JavaScript'],
      demoLink: 'https://dennden.in/', target:'_blank',
      sourceLink: 'https://github.com/AnoopkumarA/denden'
    },
    {
      title: 'NASA_Space_Apps_Challenge_2024',
      description: 'This project is a 3D visualization of the solar system built using modern web technologies.',
      image: '/solar.jpeg',
      tags: ['Node.js', 'Three.js', 'React','TailwindCSS'],
      demoLink: '',
      sourceLink: 'https://github.com/AnoopkumarA/NASA_Space_Apps_Challenge_2024'
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
                Hello! I'm a passionate web developer with a love for creating websites that are as beautiful as they are functional.Currently, I'm pursuing a B.Tech in Artificial Intelligence and Data Science at St. Joseph College,where I’m learning how to combine technology and creativity. 
                </p>
                <div className="h-4"></div>
                <p className="text-gray-300 leading-relaxed">
                I’m proficient in front-end development with expertise in HTML, CSS, JavaScript, and React, and I enjoy working with UI/UX frameworks to create seamless user experiences. I’m also familiar with modern web tools and libraries, including TypeScript, Tailwind CSS, which help me build interactive web applications. Skilled
                    in developing innovative AI solutions and predictive models. Seeking to leverage technical expertise in a dynamic
                    organization.

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
