import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'wouter';

/**
 * Global Navigation Component
 * Design: Neo-Classical Modernism with professional gold accents
 * Color Scheme: Warm white background (#fafaf8), sophisticated dark text (#2d2d2a), professional gold (#c9a961)
 */
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: 'ホーム', href: '/' },
    { label: '代表挨拶・メンバー', href: '/leadership-members' },
    { label: '活動理念', href: '/philosophy' },
    { label: '組織概要', href: '/organization' },
    { label: '活動内容', href: '/activities' },
    { label: '活動実績', href: '/achievements' },
    { label: 'プライバシーポリシー', href: '/privacy-policy' },
  ];

  const isActive = (href: string) => location === href;

  return (
    <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-[#e8e6e1]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-bold"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            <span className="text-[#2d2d2a]">エリート</span>
            <span className="text-[#c9a961]">学生団体</span>
          </motion.a>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden md:flex gap-8 text-sm"
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`transition-colors ${
                  isActive(item.href)
                    ? 'text-[#c9a961] font-semibold'
                    : 'text-[#3a3a37] hover:text-[#c9a961]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#2d2d2a]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-4 space-y-3 pb-4"
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block py-2 transition-colors ${
                  isActive(item.href)
                    ? 'text-[#c9a961] font-semibold'
                    : 'text-[#3a3a37] hover:text-[#c9a961]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}
