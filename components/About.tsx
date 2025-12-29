'use client';

import { useEffect, useRef, useState } from 'react';

const values = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: 'Уважение и забота',
    description: 'Человека принимают таким, какой он есть. Без осуждения, с пониманием и поддержкой.',
    color: '#ec4899',
    bg: 'rgba(236, 72, 153, 0.1)',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    title: 'Безопасная среда',
    description: 'Создаём пространство доверия, где можно раскрыться и начать путь к изменениям.',
    color: '#10b981',
    bg: 'rgba(16, 185, 129, 0.1)',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Мировые стандарты',
    description: 'Био-Психо-Социальная модель — стандарт лучших реабилитационных центров мира.',
    color: '#3b82f6',
    bg: 'rgba(59, 130, 246, 0.1)',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Личная вовлечённость',
    description: 'Каждый сотрудник лично вовлечён в процесс восстановления резидента.',
    color: '#f59e0b',
    bg: 'rgba(245, 158, 11, 0.1)',
  },
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="about-section"
    >
      {/* Curved transition from Hero */}
      <div className="about-transition" />
      <svg className="about-curve" viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none">
        <path d="M0,0 L0,60 Q360,100 720,60 T1440,60 L1440,0 Z" fill="#0d1829"/>
      </svg>

      {/* Decorative elements */}
      <div className="about-orb about-orb-1" />
      <div className="about-orb about-orb-2" />

      <div className="about-container">
        {/* Section header */}
        <div className="about-header">
          <div
            className="about-header-left"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'all 0.6s ease-out',
            }}
          >
            <span className="about-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              Основан в 2025 году
            </span>

            <h2 className="about-title">
              Место, где начинается{' '}
              <span className="about-title-gradient">новая жизнь</span>
            </h2>
          </div>

          <div
            className="about-header-right"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
              transition: 'all 0.6s ease-out 0.1s',
            }}
          >
            <p className="about-text">
              Реабилитационный центр в Алматы, специализированный на помощи 
              и поддержке зависимых людей. Мы работаем не ради прибыли, 
              а ради <strong>результата и человеческой жизни</strong>.
            </p>
            <p className="about-text">
              У нас открытая реабилитация: человек приходит за помощью сам 
              и получает уважение, поддержку и заботу. Шаг за шагом — через терапию, 
              режим, спорт и честную работу над собой.
            </p>
          </div>
        </div>

        {/* Values grid */}
        <div className="about-values">
          {values.map((value, i) => (
            <div
              key={i}
              className="about-value-card"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease-out ${0.1 + i * 0.05}s`,
              }}
            >
              <div className="about-value-icon" style={{ background: value.bg, color: value.color }}>
                {value.icon}
              </div>
              <h3 className="about-value-title">{value.title}</h3>
              <p className="about-value-text">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom highlight card */}
        <div
          className="about-highlight"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease-out 0.3s',
          }}
        >
          <div className="about-highlight-decoration" />

          <div className="about-highlight-content">
            <div className="about-highlight-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              Уникальный подход
            </div>
            <h3 className="about-highlight-title">Всего 8 центров в мире практикуют этот подход</h3>
            <p className="about-highlight-text">
              По-настоящему глубокий индивидуальный и многоуровневый подход требует огромных ресурсов 
              и личной вовлечённости каждого сотрудника. На нашем континенте подобных центров 
              больше нет — мы первые и единственные.
            </p>
          </div>

          <div className="about-highlight-cta">
            <a href="#contact" className="about-highlight-btn">
              Получить консультацию
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          position: relative;
          background: #ffffff;
          overflow: hidden;
        }
        
        .about-transition {
          position: absolute;
          top: -100px;
          left: 0;
          right: 0;
          height: 200px;
          background: linear-gradient(180deg, #0d1829 0%, #ffffff 100%);
        }
        
        .about-curve {
          position: absolute;
          top: -2px;
          left: 0;
          width: 100%;
          height: 100px;
        }
        
        .about-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
        }
        
        .about-orb-1 {
          top: 20%;
          right: -5%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%);
        }
        
        .about-orb-2 {
          bottom: 10%;
          left: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%);
        }
        
        .about-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 120px 32px 100px;
          position: relative;
        }
        
        .about-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          margin-bottom: 80px;
        }
        
        .about-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
          border-radius: 100px;
          border: 1px solid rgba(59, 130, 246, 0.2);
          font-size: 14px;
          font-weight: 600;
          color: #3b82f6;
          margin-bottom: 24px;
        }
        
        .about-title {
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 24px;
        }
        
        .about-title-gradient {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .about-text {
          font-size: 17px;
          color: #64748b;
          line-height: 1.8;
          margin-bottom: 16px;
        }
        
        .about-text strong {
          color: #0f172a;
        }
        
        .about-values {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 80px;
        }
        
        .about-value-card {
          padding: 28px;
          background: #ffffff;
          border-radius: 20px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }
        
        .about-value-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        
        .about-value-title {
          font-size: 17px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 8px;
        }
        
        .about-value-text {
          font-size: 14px;
          color: #64748b;
          line-height: 1.6;
        }
        
        .about-highlight {
          background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%);
          border-radius: 28px;
          padding: 48px;
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        
        .about-highlight-decoration {
          position: absolute;
          top: -50%;
          right: -20%;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 60%);
          filter: blur(40px);
        }
        
        .about-highlight-content {
          position: relative;
          z-index: 1;
        }
        
        .about-highlight-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(59, 130, 246, 0.2);
          color: #93c5fd;
          font-size: 14px;
          font-weight: 600;
          border-radius: 100px;
          margin-bottom: 20px;
        }
        
        .about-highlight-title {
          font-size: clamp(24px, 4vw, 32px);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }
        
        .about-highlight-text {
          font-size: 16px;
          color: rgba(255,255,255,0.7);
          line-height: 1.8;
          max-width: 600px;
        }
        
        .about-highlight-cta {
          position: relative;
          z-index: 1;
        }
        
        .about-highlight-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 100%;
          padding: 18px 28px;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          color: #ffffff;
          font-size: 16px;
          font-weight: 600;
          border-radius: 14px;
          text-decoration: none;
          box-shadow: 0 8px 32px rgba(59, 130, 246, 0.35);
        }
        
        /* Tablet */
        @media (max-width: 1100px) {
          .about-container {
            padding: 100px 24px 80px;
          }
          .about-header {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about-values {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
            margin-bottom: 60px;
          }
          .about-highlight {
            grid-template-columns: 1fr;
            padding: 36px;
          }
        }
        
        /* Mobile */
        @media (max-width: 640px) {
          .about-container {
            padding: 80px 20px 60px;
          }
          .about-curve {
            height: 60px;
          }
          .about-header {
            gap: 24px;
            margin-bottom: 48px;
          }
          .about-badge {
            padding: 6px 12px;
            font-size: 12px;
            margin-bottom: 16px;
          }
          .about-title {
            font-size: 28px;
            margin-bottom: 16px;
          }
          .about-text {
            font-size: 15px;
            margin-bottom: 12px;
          }
          .about-values {
            grid-template-columns: 1fr;
            gap: 12px;
            margin-bottom: 40px;
          }
          .about-value-card {
            padding: 20px;
            border-radius: 16px;
          }
          .about-value-icon {
            width: 44px;
            height: 44px;
            border-radius: 12px;
            margin-bottom: 12px;
          }
          .about-value-title {
            font-size: 15px;
          }
          .about-value-text {
            font-size: 13px;
          }
          .about-highlight {
            padding: 24px;
            border-radius: 20px;
            gap: 24px;
          }
          .about-highlight-badge {
            padding: 6px 12px;
            font-size: 12px;
            margin-bottom: 12px;
          }
          .about-highlight-title {
            font-size: 20px;
            margin-bottom: 12px;
          }
          .about-highlight-text {
            font-size: 14px;
          }
          .about-highlight-btn {
            padding: 16px 24px;
            font-size: 15px;
          }
          .about-orb-1,
          .about-orb-2 {
            width: 200px;
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
}
