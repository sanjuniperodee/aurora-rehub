'use client';

import { useEffect, useState } from 'react';

const stats = [
  { value: '8', label: 'центров в мире', suffix: '' },
  { value: '500', label: 'выздоровевших', suffix: '+' },
  { value: '24/7', label: 'поддержка', suffix: '' },
  { value: '98', label: 'эффективность', suffix: '%' },
];

const features = [
  { 
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ), 
    text: 'Безопасная среда' 
  },
  { 
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ), 
    text: 'Индивидуальный подход' 
  },
  { 
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ), 
    text: 'Био-Психо-Социальная модель' 
  },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a0f1a 0%, #1a2744 40%, #0d1829 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Animated gradient orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />
      
      {/* Grid pattern */}
      <div className="hero-grid" />

      {/* Floating particles */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="hero-particle"
            style={{
              width: `${3 + (i % 3)}px`,
              height: `${3 + (i % 3)}px`,
              left: `${(i * 7) % 100}%`,
              top: `${(i * 11) % 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${5 + (i % 5)}s`,
            }}
          />
        ))}
      </div>

      <div className="hero-container">
        {/* Left content */}
        <div className="hero-content">
          {/* Badge */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease-out',
            }}
          >
            <span className="hero-badge">
              <span className="hero-badge-dot" />
              Единственный в Центральной Азии
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="hero-title"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.6s ease-out 0.1s',
            }}
          >
            Открытая
            <br />
            <span className="hero-title-gradient">реабилитация</span>
          </h1>

          {/* Description */}
          <p
            className="hero-description"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.6s ease-out 0.2s',
            }}
          >
            Место, где людей не удерживают силой. Человек приходит за помощью сам 
            и получает уважение, поддержку и профессиональную помощь.
          </p>

          {/* Feature pills */}
          <div
            className="hero-features"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease-out 0.25s',
            }}
          >
            {features.map((feature, i) => (
              <span key={i} className="hero-feature-pill">
                <span style={{ color: '#60a5fa' }}>{feature.icon}</span>
                {feature.text}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div
            className="hero-cta"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.6s ease-out 0.3s',
            }}
          >
            <a href="#contact" className="hero-btn-primary">
              Бесплатная консультация
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a
              href="https://wa.me/77053505988"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-secondary"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Right side - Stats card */}
        <div
          className="hero-stats-wrapper"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
            transition: 'all 0.8s ease-out 0.3s',
          }}
        >
          <div className="hero-stats-card">
            {/* Decorative gradient */}
            <div className="hero-stats-decoration" />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="hero-stats-header">
                <div className="hero-stats-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <h3 className="hero-stats-title">Био-Психо-Социальная модель</h3>
                  <p className="hero-stats-subtitle">Уникальный многоуровневый подход</p>
                </div>
              </div>

              <div className="hero-stats-grid">
                {stats.map((stat, i) => (
                  <div key={i} className="hero-stat-item">
                    <div className="hero-stat-value">
                      {stat.value}
                      <span className="hero-stat-suffix">{stat.suffix}</span>
                    </div>
                    <div className="hero-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="hero-stats-footer">
                <div className="hero-stats-footer-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <div>
                  <div className="hero-stats-footer-title">Открытая реабилитация</div>
                  <div className="hero-stats-footer-text">Без принуждения — только поддержка и доверие</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <div className="hero-scroll-indicator">
        <span>Листайте вниз</span>
        <div className="hero-scroll-mouse">
          <div className="hero-scroll-wheel" />
        </div>
      </div>

      <style jsx>{`
        .hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
        }
        .hero-orb-1 {
          top: 10%;
          left: 10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
          animation: float 8s ease-in-out infinite;
        }
        .hero-orb-2 {
          bottom: 20%;
          right: 5%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 70%);
          animation: float 10s ease-in-out infinite reverse;
        }
        .hero-orb-3 {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%);
          filter: blur(80px);
        }
        
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 80px 80px;
          mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
          -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
        }
        
        .hero-particle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          animation: float ease-in-out infinite;
        }
        
        .hero-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 140px 32px 100px;
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
          min-height: 100vh;
        }
        
        .hero-content {
          display: flex;
          flex-direction: column;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%);
          border-radius: 100px;
          border: 1px solid rgba(59, 130, 246, 0.3);
          font-size: 14px;
          font-weight: 600;
          color: #93c5fd;
          margin-bottom: 28px;
          backdrop-filter: blur(10px);
        }
        
        .hero-badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 10px #10b981;
          animation: pulse 2s ease-in-out infinite;
        }
        
        .hero-title {
          font-size: clamp(40px, 8vw, 80px);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.03em;
          line-height: 1.05;
          margin-bottom: 28px;
        }
        
        .hero-title-gradient {
          background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #34d399 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-description {
          font-size: 18px;
          color: rgba(255,255,255,0.75);
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 520px;
        }
        
        .hero-features {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 36px;
        }
        
        .hero-feature-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: rgba(255,255,255,0.06);
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.1);
          font-size: 13px;
          color: rgba(255,255,255,0.8);
        }
        
        .hero-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        
        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 28px;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          color: #ffffff;
          font-size: 15px;
          font-weight: 600;
          border-radius: 14px;
          text-decoration: none;
          box-shadow: 0 8px 32px rgba(59, 130, 246, 0.35);
          transition: all 0.3s ease;
        }
        
        .hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 28px;
          background: rgba(255,255,255,0.08);
          color: #ffffff;
          font-size: 15px;
          font-weight: 600;
          border-radius: 14px;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        
        .hero-stats-wrapper {
          display: flex;
          justify-content: center;
        }
        
        .hero-stats-card {
          background: linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 100%);
          border-radius: 28px;
          padding: 32px;
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(20px);
          position: relative;
          overflow: hidden;
          width: 100%;
          max-width: 420px;
        }
        
        .hero-stats-decoration {
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .hero-stats-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        
        .hero-stats-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .hero-stats-title {
          font-size: 16px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 2px;
        }
        
        .hero-stats-subtitle {
          font-size: 13px;
          color: rgba(255,255,255,0.5);
        }
        
        .hero-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        
        .hero-stat-item {
          padding: 16px;
          background: rgba(255,255,255,0.05);
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.08);
        }
        
        .hero-stat-value {
          font-size: 28px;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 4px;
          display: flex;
          align-items: baseline;
        }
        
        .hero-stat-suffix {
          font-size: 18px;
          color: #60a5fa;
        }
        
        .hero-stat-label {
          font-size: 12px;
          color: rgba(255,255,255,0.5);
        }
        
        .hero-stats-footer {
          margin-top: 20px;
          padding: 16px;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%);
          border-radius: 14px;
          border: 1px solid rgba(16, 185, 129, 0.2);
          display: flex;
          align-items: center;
          gap: 14px;
        }
        
        .hero-stats-footer-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(16, 185, 129, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .hero-stats-footer-title {
          font-size: 14px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 2px;
        }
        
        .hero-stats-footer-text {
          font-size: 12px;
          color: rgba(255,255,255,0.6);
        }
        
        .hero-scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        
        .hero-scroll-indicator span {
          font-size: 13px;
          color: rgba(255,255,255,0.5);
        }
        
        .hero-scroll-mouse {
          width: 24px;
          height: 40px;
          border-radius: 12px;
          border: 2px solid rgba(255,255,255,0.2);
          display: flex;
          justify-content: center;
          padding-top: 8px;
        }
        
        .hero-scroll-wheel {
          width: 4px;
          height: 8px;
          border-radius: 2px;
          background: rgba(255,255,255,0.5);
          animation: scrollDown 2s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes scrollDown {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.3; }
        }
        
        /* Tablet */
        @media (max-width: 1100px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 48px;
            padding: 120px 24px 80px;
            min-height: auto;
          }
          .hero-stats-wrapper {
            order: 2;
          }
          .hero-content {
            order: 1;
          }
          .hero-stats-card {
            max-width: 100%;
          }
        }
        
        /* Mobile */
        @media (max-width: 640px) {
          .hero-container {
            padding: 100px 20px 60px;
            gap: 40px;
          }
          .hero-badge {
            padding: 8px 14px;
            font-size: 12px;
            margin-bottom: 20px;
          }
          .hero-title {
            font-size: 36px;
            margin-bottom: 20px;
          }
          .hero-description {
            font-size: 15px;
            margin-bottom: 24px;
          }
          .hero-features {
            gap: 8px;
            margin-bottom: 28px;
          }
          .hero-feature-pill {
            padding: 8px 12px;
            font-size: 12px;
          }
          .hero-cta {
            flex-direction: column;
            gap: 12px;
          }
          .hero-btn-primary,
          .hero-btn-secondary {
            width: 100%;
            justify-content: center;
            padding: 16px 24px;
            font-size: 15px;
          }
          .hero-stats-card {
            padding: 24px;
            border-radius: 20px;
          }
          .hero-stats-header {
            flex-direction: column;
            text-align: center;
            gap: 12px;
          }
          .hero-stats-title {
            font-size: 15px;
          }
          .hero-stats-grid {
            gap: 10px;
          }
          .hero-stat-item {
            padding: 14px;
          }
          .hero-stat-value {
            font-size: 24px;
          }
          .hero-stat-suffix {
            font-size: 16px;
          }
          .hero-stat-label {
            font-size: 11px;
          }
          .hero-stats-footer {
            flex-direction: column;
            text-align: center;
            gap: 12px;
            padding: 16px;
          }
          .hero-scroll-indicator {
            display: none;
          }
          .hero-orb-1,
          .hero-orb-2 {
            width: 300px;
            height: 300px;
          }
          .hero-orb-3 {
            width: 400px;
            height: 400px;
          }
        }
      `}</style>
    </section>
  );
}
