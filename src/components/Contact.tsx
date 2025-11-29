import React, { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [step]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      setStep(step + 1);
    } else {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 2000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  if (isSuccess) {
    return (
      <div className="h-full flex flex-col items-center justify-center font-mono text-terminal-green">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          <CheckCircle size={64} className="mb-4" />
        </motion.div>
        <h2 className="text-2xl mb-2">Transmission Successful</h2>
        <p className="text-gray-400">We will be in touch shortly.</p>
        <button
          onClick={() => {
            setIsSuccess(false);
            setStep(0);
            setForm({ name: '', email: '', message: '' });
          }}
          className="mt-8 text-sm underline hover:text-white"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto font-mono">
      <div className="mb-8 border-b border-gray-800 pb-4">
        <h2 className="text-xl text-white flex items-center">
          <span className="text-terminal-green mr-2">root@portfolio:~/contact#</span>
          <span className="animate-pulse">_</span>
        </h2>
        <div className="mt-4 text-sm text-gray-500">
          <p>Direct Transmission Line: <span className="text-gray-300">+263 787 062 575</span></p>
          <p>Secure Protocol: <span className="text-gray-300">ngalondemarvin@gmail.com</span></p>
          <p>Location: <span className="text-gray-300">Harare, Zimbabwe</span></p>
          <p>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-terminal-blue hover:text-terminal-green transition-colors">github.com/yourusername</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-terminal-blue hover:text-terminal-green transition-colors">linkedin.com/in/yourprofile</a></p>
        </div>
      </div>

      <div className="space-y-6">
        {/* History */}
        <div className="space-y-4 text-gray-400">
          {step > 0 && (
            <div>
              <div className="flex items-center mb-1">
                <span className="text-terminal-green mr-2">?</span>
                <span>What is your name?</span>
              </div>
              <div className="text-white pl-6">{form.name}</div>
            </div>
          )}
          {step > 1 && (
            <div>
              <div className="flex items-center mb-1">
                <span className="text-terminal-green mr-2">?</span>
                <span>Enter your email address:</span>
              </div>
              <div className="text-white pl-6">{form.email}</div>
            </div>
          )}
        </div>

        {/* Active Input */}
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <div className="flex items-center mb-2 text-white">
              <span className="text-terminal-green mr-2">?</span>
              <label htmlFor="current-input">
                {step === 0 && "What is your name?"}
                {step === 1 && "Enter your email address:"}
                {step === 2 && "Write your message:"}
              </label>
            </div>

            <div className="flex items-start">
              <span className="text-terminal-blue mr-2 mt-1">❯</span>
              {step === 2 ? (
                <textarea
                  ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                  id="current-input"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-none focus:ring-0 text-white resize-none h-32 p-0"
                  placeholder="Type here..."
                  required
                />
              ) : (
                <input
                  ref={inputRef as React.RefObject<HTMLInputElement>}
                  id="current-input"
                  name={step === 0 ? "name" : "email"}
                  type={step === 1 ? "email" : "text"}
                  value={step === 0 ? form.name : form.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-none focus:ring-0 text-white p-0"
                  placeholder="Type here..."
                  autoComplete="off"
                  required
                />
              )}
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex items-center px-6 py-2 border border-gray-700 bg-[#1f2428] text-white hover:border-terminal-green hover:text-terminal-green transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>{step === 2 ? 'Transmit' : 'Next'}</span>
                  <Send size={14} className="ml-2" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
