import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Mail, MessageSquare, Terminal, Code } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await emailjs.sendForm(
        'service_njuxdyl',    // Replace with your Service ID
        'template_3q68hex',   // Replace with your Template ID
        form.current!,
        'ZPAkS02AK-HnVyJnB'     // Replace with your Public Key
      );

      if (result.text === 'OK') {
        setSubmitStatus('success');
        setFormState({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 }
  };

  const iconVariants = {
    unfocused: { scale: 1 },
    focused: { scale: 1.2 }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto relative"
    >
      {/* Tech decoration */}
      

      <form ref={form} onSubmit={handleSubmit} className="space-y-6 bg-cyber-darker/50 p-8 rounded-lg border border-cyber-blue/20 backdrop-blur-sm">
        {/* Tech corner decorations */}
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

        <AnimatePresence>
          {['name', 'email', 'message'].map((field, index) => (
            <motion.div
              key={field}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={inputVariants}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Field header */}
              <div className="text-xs text-cyber-blue/70 mb-1 font-mono flex items-center gap-2">
                <Terminal className="w-3 h-3" />
                <span>input.{field}</span>
              </div>

              <label
                htmlFor={field}
                className={`absolute left-3 transition-all duration-200 ${
                  focusedField === field || formState[field as keyof typeof formState]
                    ? '-top-2.5 text-xs bg-cyber-dark px-2 text-cyber-blue'
                    : 'top-3 text-sm text-gray-400'
                }`}
              >
                <div className="flex items-center gap-2">
                  <motion.span
                    variants={iconVariants}
                    animate={focusedField === field ? 'focused' : 'unfocused'}
                  >
                    {field === 'name' && <User className="w-4 h-4" />}
                    {field === 'email' && <Mail className="w-4 h-4" />}
                    {field === 'message' && <MessageSquare className="w-4 h-4" />}
                  </motion.span>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </div>
              </label>

              {field === 'message' ? (
                <textarea
                  id={field}
                  name={field}
                  value={formState[field as keyof typeof formState]}
                  onChange={(e) => setFormState({ ...formState, [field]: e.target.value })}
                  onFocus={() => setFocusedField(field)}
                  onBlur={() => setFocusedField(null)}
                  rows={5}
                  className="w-full px-4 py-3 bg-cyber-dark/50 border border-cyber-blue/30 rounded-lg focus:border-cyber-blue focus:ring-2 focus:ring-cyber-blue/50 outline-none transition-all duration-300 resize-none font-mono"
                  required
                />
              ) : (
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  id={field}
                  name={field}
                  value={formState[field as keyof typeof formState]}
                  onChange={(e) => setFormState({ ...formState, [field]: e.target.value })}
                  onFocus={() => setFocusedField(field)}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 bg-cyber-dark/50 border border-cyber-blue/30 rounded-lg focus:border-cyber-blue focus:ring-2 focus:ring-cyber-blue/50 outline-none transition-all duration-300 font-mono"
                  required
                />
              )}

              {/* Field status indicator */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${formState[field as keyof typeof formState] ? 'bg-cyber-blue' : 'bg-cyber-blue/30'}`} />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {/* Submit status message */}
        <AnimatePresence>
          {submitStatus !== 'idle' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`text-sm font-mono ${submitStatus === 'success' ? 'text-green-400' : 'text-red-400'}`}
            >
              {submitStatus === 'success' ? '// Message sent successfully!' : '// Failed to send message. Please try again.'}
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className="cyber-button px-16 flex items-center justify-center gap-2 relative overflow-hidden group disabled:opacity-50 left-16 md:left-[10rem]"
        >
          <span className="relative z-10 flex items-center gap-2">
            {isSubmitting ? 'Sending...' : 'Send Message'}
            <motion.span
              animate={isSubmitting ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 1, repeat: isSubmitting ? Infinity : 0 }}
            >
              <Send className="w-4 h-4" />
            </motion.span>
          </span>
          <motion.div
            className="absolute inset-0 bg-cyber-blue/20"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 2, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.button>

        {/* Tech decoration */}
        <div className="absolute -bottom-6 right-0 text-cyber-blue/30 font-mono text-sm">
          <Code className="inline-block w-4 h-4 mr-2" />
          <span>awaiting_user_input...</span>
        </div>
      </form>

      {/* Scan line effect */}
      <div className="absolute inset-0 bg-scan-lines opacity-10 pointer-events-none" />
    </motion.div>
  );
};

export default ContactForm;