'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'О центре', href: '#about' },
  { name: 'Программы', href: '#programs' },
  { name: 'Методики', href: '#methods' },
  { name: 'Услуги', href: '#packages' },
  { name: 'Наша команда', href: '#team' },
  { name: 'Контакты', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <div className={`header-inner ${isScrolled ? 'scrolled' : ''}`}>
        {/* Logo */}
        <a href="#" className="header-logo">
          <div className="header-logo-icon">
            <img src="/logo-avrora.jpg" alt="Avrora Nomad" />
          </div>
        </a>

        {/* Desktop navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link ${isScrolled ? 'scrolled' : ''}`}
            >
              {link.name}
            </a>
          ))}
          <a href="tel:+87712466646" className="nav-cta">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Позвонить
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`mobile-menu-btn ${isScrolled ? 'scrolled' : ''}`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12"/>
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18"/>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mobile-nav-link"
              >
                {link.name}
              </a>
            ))}
            <a href="tel:+87712466646" className="mobile-nav-cta">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Позвонить
            </a>
          </nav>
        </div>
      )}

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 16px 24px;
          transition: all 0.3s ease;
        }
        .header-inner {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 24px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 16px;
          border: 1px solid rgba(59, 130, 246, 0.2);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }
        .header-inner.scrolled {
          background: rgba(255, 255, 255, 0.98);
          border-color: rgba(59, 130, 246, 0.3);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }
        .header-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
        .header-logo-icon {
          width: 128px;
          height: 128px;
          border-radius: 12px;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .header-logo-icon img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .header-logo-icon svg {
          stroke: #ffffff;
        }
        .header-logo-text {
          font-size: 18px;
          font-weight: 700;
          color: #1e40af;
          transition: color 0.3s ease;
        }
        .header-logo-text.scrolled {
          color: #1e40af;
        }
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .nav-link {
          padding: 8px 16px;
          font-size: 14px;
          font-weight: 500;
          color: #475569;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.2s ease;
        }
        .nav-link.scrolled {
          color: #475569;
        }
        .nav-link:hover {
          background: rgba(59, 130, 246, 0.1);
          color: #2563eb;
        }
        .nav-link.scrolled:hover {
          background: rgba(59, 130, 246, 0.1);
          color: #2563eb;
        }
        .nav-cta {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: #3b82f6;
          color: #ffffff;
          font-size: 14px;
          font-weight: 600;
          border-radius: 10px;
          text-decoration: none;
          margin-left: 8px;
          transition: all 0.3s ease;
        }
        .nav-cta:hover {
          background: #2563eb;
          transform: translateY(-1px);
        }
        .mobile-menu-btn {
          display: none;
          padding: 8px;
          background: transparent;
          border: none;
          cursor: pointer;
          color: #1e40af;
        }
        .mobile-menu-btn.scrolled {
          color: #1e40af;
        }
        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 16px;
          right: 16px;
          margin-top: 8px;
          padding: 16px;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(12px);
          border-radius: 16px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }
        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .mobile-nav-link {
          padding: 12px 16px;
          font-size: 15px;
          font-weight: 500;
          color: #374151;
          text-decoration: none;
          border-radius: 8px;
          transition: background 0.2s ease;
        }
        .mobile-nav-link:hover {
          background: #f3f4f6;
        }
        .mobile-nav-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 20px;
          margin-top: 8px;
          background: #3b82f6;
          color: #ffffff;
          font-size: 15px;
          font-weight: 600;
          border-radius: 10px;
          text-decoration: none;
        }
        
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
        
        @media (max-width: 640px) {
          .header {
            padding: 12px 16px;
          }
          .header-inner {
            padding: 10px 16px;
            border-radius: 14px;
          }
          .header-logo-icon {
            width: 56px;
            height: 56px;
            border-radius: 10px;
          }
          .header-logo-icon img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          .header-logo {
            gap: 10px;
          }
          .mobile-menu {
            left: 12px;
            right: 12px;
            padding: 14px;
            border-radius: 14px;
          }
          .mobile-nav-link {
            padding: 10px 14px;
            font-size: 14px;
          }
          .mobile-nav-cta {
            padding: 12px 18px;
            font-size: 14px;
          }
        }
      `}</style>
    </header>
  );
}
