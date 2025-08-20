'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  // UI state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState<'home' | 'skills' | 'projects' | 'about' | 'contact'>('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  // Refs
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Navigation model (future-proof: supports both anchors and page routes)
  const navItems: Array<{ name: string; href: string; section?: 'home' | 'skills' | 'projects' | 'about' | 'contact' }> = [
    { name: '🏛 Home', href: '/', section: 'home' },
    { name: '📌 Skills', href: '#skills', section: 'skills' },
    { name: '📚 Projects', href: '#projects', section: 'projects' },
    { name: '📢 About', href: '#about', section: 'about' },
    { name: '📮 Contact', href: '#contact', section: 'contact' },
  ];

  // Smooth scroll to anchors; navigate for page routes
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
      return;
    }
    // For home route '/', scroll to top smoothly without full reload
    if (href === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setCurrentSection('home');
      setIsMenuOpen(false);
    }
  };

  // Scroll listeners: navbar background + current section detection
  useEffect(() => {
    const HEADER_BUFFER = 72; // approx header height including spacing
    const onScroll = () => {
      const y = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setIsScrolled(y > 50);
      setScrollProgress(docHeight > 0 ? (y / docHeight) * 100 : 0);

      // Near the top: force Home active
      if (y <= HEADER_BUFFER) {
        setCurrentSection('home');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // IntersectionObserver for reliable section detection (skills/projects/about/contact)
  useEffect(() => {
    const headerHeight = 72;
    const ids: Array<typeof currentSection> = ['skills', 'projects', 'about', 'contact'];
    const elements = ids
      .map((id) => ({ id, el: document.getElementById(id) }))
      .filter((x): x is { id: typeof currentSection; el: HTMLElement } => x.el !== null);

    if (!elements.length) return;

    let current: typeof currentSection = currentSection;
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with highest intersection ratio
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));
        if (visible.length) {
          const entry = visible[0];
          const id = entry.target.getAttribute('id') as typeof currentSection | null;
          if (id && id !== current) {
            current = id;
            setCurrentSection(id);
          }
        }
      },
      {
        root: null,
        // Offset the top by header height; bottom margin helps transition earlier
        rootMargin: `-${headerHeight}px 0px -50% 0px`,
        threshold: [0.15, 0.35, 0.55, 0.75],
      }
    );

    elements.forEach(({ el }) => observer.observe(el));
    return () => observer.disconnect();
  }, [currentSection]);

  // Accessibility: close menu on Escape, click outside, and lock body scroll
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    const onClickOutside = (e: MouseEvent) => {
      if (!isMenuOpen) return;
      const target = e.target as Node;
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(target)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClickOutside);
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Active state helper (works for both anchors and routes)
  const isActive = (item: (typeof navItems)[number]) => {
    if (item.section) {
      return currentSection === item.section;
    }
    return pathname === item.href;
  };

  return (
    <>
      {/* Progress bar showing scroll position with gradient fill */}
      <div
        className="fixed top-0 left-0 w-full h-1 z-50"
        role="progressbar"
        aria-label="Page scroll progress"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full bg-gradient-to-r from-green-500 via-green-400 to-green-300 motion-reduce:transition-none transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-xl shadow-2xl shadow-black/20 border-b border-green-500/20'
            : 'bg-black/80 backdrop-blur-lg border-b border-transparent'
        } z-50`}
        role="banner"
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8" role="navigation" aria-label="Main navigation">
          <div className="flex justify-between items-center h-14">
            {/* Logo (clickable to home/top) with hover rotate/scale and glow */}
            <Link
              href="/"
              onClick={(e) => handleNavClick(e, '/')}
              className="flex items-center space-x-3 group focus:outline-none rounded-md"
              aria-label="Go to top"
            >
              <div className="relative">
                <Image
                  src="/assets/cube.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:rotate-12 group-hover:scale-110 logo-float"
                />
                <div className="absolute inset-0 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out logo-glow" />
              </div>
              <span className="hidden sm:inline-block font-extrabold text-lg bg-gradient-to-r from-white via-green-200 to-green-400 bg-clip-text text-transparent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-105 gradient-anim">
                M0H1T's Portfolio
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex space-x-1" role="menubar" aria-label="Primary">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-2 rounded-lg font-semibold whitespace-nowrap cursor-pointer transition-colors transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] transform will-change-transform hover:scale-105 ${
                    isActive(item)
                      ? 'text-white bg-gradient-to-r from-green-600 to-emerald-500 shadow-lg shadow-green-600/30'
                      : 'text-gray-300 hover:text-green-400 hover:bg-gray-800'
                  } group focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black`}
                  role="menuitem"
                  aria-current={isActive(item) ? 'page' : undefined}
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-300 transition-[width] duration-400 ease-out transform -translate-x-1/2 ${
                      isActive(item) ? 'w-0' : 'group-hover:w-3/4'
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              ref={menuButtonRef}
              onClick={() => setIsMenuOpen((v) => !v)}
              className="md:hidden w-10 h-10 flex items-center justify-center cursor-pointer rounded-lg hover:bg-gray-800 transition-colors transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black shadow-md shadow-green-500/10 hover:shadow-green-500/30"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-haspopup="true"
            >
              <i
                className={`text-xl text-gray-300 transition-transform duration-400 ease-out ${
                  isMenuOpen ? 'ri-close-line rotate-180' : 'ri-menu-line'
                }`}
                aria-hidden="true"
              />
            </button>
          </div>

          {/* Mobile menu */}
          <div
            ref={mobileMenuRef}
            id="mobile-menu"
            className={`md:hidden overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
            role="menu"
            aria-label="Mobile navigation menu"
            aria-orientation="vertical"
          >
            <div className="py-4 border-t border-gray-800/60 space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium cursor-pointer transition-colors transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] transform will-change-transform hover:translate-x-2 ${
                    isActive(item)
                      ? 'text-white bg-gradient-to-r from-green-600 to-emerald-500 shadow-lg'
                      : 'text-gray-300 hover:text-green-400 hover:bg-gray-800/70'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  role="menuitem"
                  aria-current={isActive(item) ? 'page' : undefined}
                  aria-label={`Navigate to ${item.name}`}
                >
                  <span className="flex-1">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Local animation styles for logo and gradient text */}
      <style jsx>{`
        @keyframes logoFloat {
          0%, 100% { transform: translateY(0) }
          50% { transform: translateY(-2px) }
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .logo-float { animation: logoFloat 4s ease-in-out infinite; }
        .logo-glow { background: radial-gradient(60% 60% at 50% 50%, rgba(34,197,94,0.35), rgba(34,197,94,0)); }
        .gradient-anim { background-size: 200% 200%; animation: gradientMove 6s linear infinite; }
      `}</style>
    </>
  );
}

