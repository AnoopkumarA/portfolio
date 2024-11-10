import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Menu, X, ChevronRight, Code, Monitor } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: targetId === 'home' ? 0 : offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', href: '#home', icon: <Monitor className="w-4 h-4" /> },
    { name: 'About', href: '#about', icon: <Code className="w-4 h-4" /> },
    { name: 'Skills', href: '#skills', icon: <Terminal className="w-4 h-4" /> },
    { name: 'Projects', href: '#projects', icon: <Code className="w-4 h-4" /> },
    { name: 'Contact', href: '#contact', icon: <Terminal className="w-4 h-4" /> },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-cyber-darker/80 backdrop-blur-md' : ''
        }`}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,246,255,0.05),transparent_70%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-16">
            {/* Enhanced Tech Logo */}
            <motion.div 
              className="flex items-center gap-2 text-cyber-blue relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative flex items-center">
                {/* Main container */}
                <div className="relative z-10 px-4 py-2">
                  {/* Logo Frame */}
                  <div className="relative border-2 border-cyber-blue/30 bg-cyber-darker/80 rounded-lg p-2">
                    {/* Animated background effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/5 to-transparent animate-pulse" />
                    <motion.div
                      className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,246,255,0.15),transparent_50%)]"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />

                    {/* Logo Letters Container */}
                    <a href="/">
                    <div className="relative flex items-center gap-1" >
                      {/* A Letter */}
                     
                      <div className="relative">
                        <motion.div
                          className="text-3xl font-bold font-mono text-cyber-blue relative z-10"
                          animate={{ textShadow: ['0 0 10px #00f6ff', '0 0 20px #00f6ff', '0 0 10px #00f6ff'] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          A
                        </motion.div>
                        {/* Circuit lines for A */}
                        <div className="absolute -top-1 left-0 w-full h-[2px] bg-gradient-to-r from-cyber-blue/50 to-transparent" />
                        <div className="absolute bottom-0 right-0 w-[2px] h-full bg-gradient-to-b from-cyber-blue/50 to-transparent" />
                      </div>

                      {/* K Letter */}
                      <div className="relative">
                        <motion.div
                          className="text-3xl font-bold font-mono text-cyber-blue relative z-10"
                          animate={{ textShadow: ['0 0 10px #00f6ff', '0 0 20px #00f6ff', '0 0 10px #00f6ff'] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        >
                          K
                        </motion.div>
                        {/* Circuit lines for K */}
                        <div className="absolute -top-1 right-0 w-full h-[2px] bg-gradient-to-l from-cyber-blue/50 to-transparent" />
                        <div className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-cyber-blue/50 to-transparent" />
                      </div>

                      {/* Connecting circuit line */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 h-[2px] bg-cyber-blue/30"
                        animate={{ width: ['0%', '80%', '0%'] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                    </a>

                    {/* Corner Decorations */}
                    <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-cyber-blue" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-cyber-blue" />
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-cyber-blue" />
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-cyber-blue" />

                    {/* Animated scan line */}
                    <motion.div
                      className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyber-blue to-transparent"
                      animate={{ top: ['0%', '100%', '0%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                </div>

                {/* Status indicator */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-cyber-darker/80 px-2 rounded-full border border-cyber-blue/20">
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-cyber-blue"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                
                </div>
              </div>
            </motion.div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href.replace('#', ''))}
                  className={`relative px-4 py-2 text-sm font-mono group ${
                    activeSection === item.name.toLowerCase() ? 'text-cyber-blue' : 'text-gray-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  custom={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-cyber-blue/70">{item.icon}</span>
                    <span className="relative">
                      {item.name}
                      <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </div>
                  
                  {/* Active indicator */}
                  {activeSection === item.name.toLowerCase() && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-cyber-blue/10 rounded"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative p-2 text-cyber-blue hover:bg-cyber-blue/10 rounded-lg group"
            >
              <div className="relative z-10">
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </div>
              <div className="absolute inset-0 bg-cyber-blue/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </div>
        </div>

        {/* Tech decoration */}
        {isScrolled && (
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-blue/20 to-transparent" />
        )}
      </motion.nav>

      {/* Enhanced Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : '100%' }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-y-0 right-0 w-[250px] bg-cyber-darker/95 backdrop-blur-lg border-l border-cyber-blue/20 z-40 md:hidden ${
          isMobileMenuOpen ? '' : 'pointer-events-none'
        }`}
        style={{ maxWidth: '90vw' }}
      >
        <div className="p-4 space-y-4 h-full relative overflow-y-auto">
          <div className="text-xs font-mono text-cyber-blue/50 px-4 py-2">// Navigation</div>
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href.replace('#', ''))}
              className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-cyber-blue font-mono text-sm group w-full"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-cyber-blue/70">{item.icon}</span>
              <span className="whitespace-nowrap">{item.name}</span>
              <div className="flex-1 h-px bg-cyber-blue/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.a>
          ))}
          
          {/* Tech decoration for mobile menu */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="text-xs font-mono text-cyber-blue/30">system.navigation.active</div>
            <div className="mt-2 h-px bg-gradient-to-r from-transparent via-cyber-blue/20 to-transparent" />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar; 
