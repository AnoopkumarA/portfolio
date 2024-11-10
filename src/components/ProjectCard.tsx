import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Terminal } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  sourceLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, tags, demoLink, sourceLink }) => {
  return (
    <motion.div 
      className="relative group overflow-hidden rounded-lg bg-cyber-darker border border-cyber-blue/20"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Tech corner decorations with animated borders */}
      <div className="absolute -top-1 -left-1 w-6 h-6">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyber-blue/50 to-transparent" />
        <div className="absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-cyber-blue/50 to-transparent" />
      </div>
      <div className="absolute -top-1 -right-1 w-6 h-6">
        <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-l from-cyber-blue/50 to-transparent" />
        <div className="absolute top-0 right-0 h-full w-2 bg-gradient-to-b from-cyber-blue/50 to-transparent" />
      </div>
      <div className="absolute -bottom-1 -left-1 w-6 h-6">
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-cyber-blue/50 to-transparent" />
        <div className="absolute bottom-0 left-0 h-full w-2 bg-gradient-to-t from-cyber-blue/50 to-transparent" />
      </div>
      <div className="absolute -bottom-1 -right-1 w-6 h-6">
        <div className="absolute bottom-0 right-0 w-full h-2 bg-gradient-to-l from-cyber-blue/50 to-transparent" />
        <div className="absolute bottom-0 right-0 h-full w-2 bg-gradient-to-t from-cyber-blue/50 to-transparent" />
      </div>

      {/* Image container with enhanced effects */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-cyber-blue/10 mix-blend-overlay" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Enhanced overlay effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker via-cyber-darker/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,246,255,0.1),transparent_70%)]" />
        
        {/* Tech status bar */}
        <div className="absolute top-2 left-2 right-2 flex items-center gap-2">
          <div className="flex items-center gap-1 bg-cyber-darker/80 px-2 py-1 rounded-full border border-cyber-blue/30 text-xs font-mono">
            <Code className="w-3 h-3 text-cyber-blue" />
            <span className="text-cyber-blue/80">Project::Active</span>
          </div>
          <div className="flex-1 h-px bg-cyber-blue/20" />
        </div>

        {/* Animated scan line */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-blue to-transparent"
          animate={{
            y: [0, 192, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Content with enhanced styling */}
      <div className="p-6 relative">
        {/* Title with enhanced tech decoration */}
        <div className="mb-4 font-mono relative">
          <div className="text-cyber-blue/70 text-xs flex items-center gap-2">
            <Terminal className="w-3 h-3" />
            &lt;project class="featured"&gt;
          </div>
          <h3 className="text-xl font-semibold text-cyber-blue group-hover:text-white transition-colors my-2">
            {title}
          </h3>
          <div className="text-cyber-blue/70 text-xs">&lt;/project&gt;</div>
        </div>

        {/* Description with tech style */}
        <div className="relative mb-4">
          <div className="text-gray-300 bg-cyber-darker/50 p-3 rounded border border-cyber-blue/10">
            <div className="text-xs text-cyber-blue/50 mb-1">// Description</div>
            {description}
          </div>
        </div>

        {/* Enhanced tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <motion.span 
              key={index}
              className="px-3 py-1 text-xs font-mono rounded-full border border-cyber-blue/30 text-cyber-blue/80 bg-cyber-blue/5 flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
            >
              <Code className="w-3 h-3" />
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Enhanced links as buttons without borders */}
        <div className="flex gap-4 mt-auto pt-4 border-t border-cyber-blue/20">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 rounded-lg transition-all duration-300 group cursor-pointer hover:bg-cyber-blue/10"
              onClick={(e) => {
                e.preventDefault();
                window.open(demoLink, '_blank', 'noopener,noreferrer');
              }}
            >
              <div className="relative overflow-hidden">
                <div className="relative z-10 flex items-center justify-center gap-2 text-cyber-blue transition-transform duration-300 group-hover:scale-105">
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm font-mono">Live Demo</span>
                </div>
              </div>
            </a>
          )}
          
          {sourceLink && (
            <a
              href={sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 rounded-lg transition-all duration-300 group cursor-pointer hover:bg-cyber-blue/10"
              onClick={(e) => {
                e.preventDefault();
                window.open(sourceLink, '_blank', 'noopener,noreferrer');
              }}
            >
              <div className="relative overflow-hidden">
                <div className="relative z-10 flex items-center justify-center gap-2 text-cyber-blue transition-transform duration-300 group-hover:scale-105">
                  <Github className="w-4 h-4" />
                  <span className="text-sm font-mono">Source Code</span>
                </div>
              </div>
            </a>
          )}
        </div>
      </div>

      {/* Enhanced hover effects */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker/90 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,246,255,0.1),transparent_70%)]" />
      </div>
      
      {/* Tech grid overlay */}
      <div className="absolute inset-0 bg-[url('/hex-grid.png')] opacity-5 mix-blend-overlay" />
    </motion.div>
  );
};

export default ProjectCard;