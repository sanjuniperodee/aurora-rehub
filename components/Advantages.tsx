'use client';

import { useEffect, useRef, useState } from 'react';

const advantages = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    title: 'Открытая модель',
    description: 'Без принуждения и давления. Человек сам принимает решение измениться.',
    accent: '#10b981',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Семейные программы',
    description: 'Работаем не только с резидентом, но и с его близкими.',
    accent: '#8b5cf6',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: 'Углублённая психотерапия',
    description: 'Формируем зрелую личность, готовую к новым жизненным этапам.',
    accent: '#f59e0b',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
    title: 'Социальная адаптация',
    description: 'Трудотерапия, мастер-классы, профессиональная ориентация.',
    accent: '#3b82f6',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Образовательные тренинги',
    description: 'Развитие навыков для успешной самостоятельной жизни.',
    accent: '#ec4899',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
        <line x1="9" y1="9" x2="9.01" y2="9"/>
        <line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    ),
    title: 'Уверенность в себе',
    description: 'Выпускники уходят трезвыми и уверенными, с планами.',
    accent: '#06b6d4',
  },
];

export default function Advantages() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
    <section ref={sectionRef} id="advantages" className="advantages-section">
      {/* Decorative dots pattern */}
      <div className="advantages-pattern" />

      {/* Gradient orbs */}
      <div className="advantages-orb advantages-orb-1" />
      <div className="advantages-orb advantages-orb-2" />

      <div className="advantages-container">
        {/* Section header */}
        <div
          className="advantages-header"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease-out',
          }}
        >
          <span className="advantages-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Наши преимущества
          </span>

          <h2 className="advantages-title">
            Почему выбирают{' '}
            <span className="advantages-title-gradient">нас</span>
          </h2>
          <p className="advantages-subtitle">
            Уникальная модель реабилитации с комплексным подходом к восстановлению
          </p>
        </div>

        {/* Advantages grid */}
        <div className="advantages-grid">
          {advantages.map((advantage, i) => (
            <div
              key={i}
              className="advantages-card"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                background: hoveredIndex === i ? '#ffffff' : 'rgba(255,255,255,0.7)',
                borderColor: hoveredIndex === i ? advantage.accent + '40' : '#e2e8f0',
                boxShadow: hoveredIndex === i 
                  ? `0 20px 40px ${advantage.accent}20`
                  : '0 4px 20px rgba(0, 0, 0, 0.03)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible 
                  ? hoveredIndex === i ? 'translateY(-8px)' : 'translateY(0)'
                  : 'translateY(30px)',
                transition: `all 0.3s ease`,
                transitionDelay: `${0.05 + i * 0.05}s`,
              }}
            >
              <div
                className="advantages-card-icon"
                style={{
                  background: `linear-gradient(135deg, ${advantage.accent}15 0%, ${advantage.accent}25 100%)`,
                  color: advantage.accent,
                  transform: hoveredIndex === i ? 'scale(1.1)' : 'scale(1)',
                }}
              >
                {advantage.icon}
              </div>
              <h3 className="advantages-card-title">{advantage.title}</h3>
              <p className="advantages-card-text">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .advantages-section {
          position: relative;
          padding: 100px 0;
          background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
          overflow: hidden;
        }
        
        .advantages-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.07) 1px, transparent 0);
          background-size: 40px 40px;
          pointer-events: none;
        }
        
        .advantages-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
        }
        
        .advantages-orb-1 {
          top: 10%;
          left: -5%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%);
        }
        
        .advantages-orb-2 {
          bottom: 10%;
          right: -5%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%);
        }
        
        .advantages-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 32px;
          position: relative;
        }
        
        .advantages-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 60px;
        }
        
        .advantages-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%);
          border-radius: 100px;
          border: 1px solid rgba(16, 185, 129, 0.2);
          font-size: 14px;
          font-weight: 600;
          color: #10b981;
          margin-bottom: 24px;
        }
        
        .advantages-title {
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.03em;
          margin-bottom: 16px;
        }
        
        .advantages-title-gradient {
          background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .advantages-subtitle {
          font-size: 17px;
          color: #64748b;
          line-height: 1.7;
        }
        
        .advantages-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        
        .advantages-card {
          padding: 28px;
          border-radius: 20px;
          border: 1px solid #e2e8f0;
          cursor: pointer;
        }
        
        .advantages-card-icon {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          transition: transform 0.3s ease;
        }
        
        .advantages-card-title {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 10px;
        }
        
        .advantages-card-text {
          font-size: 14px;
          color: #64748b;
          line-height: 1.6;
        }
        
        /* Tablet */
        @media (max-width: 1100px) {
          .advantages-section {
            padding: 80px 0;
          }
          .advantages-container {
            padding: 0 24px;
          }
          .advantages-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }
        
        /* Mobile */
        @media (max-width: 640px) {
          .advantages-section {
            padding: 60px 0;
          }
          .advantages-container {
            padding: 0 20px;
          }
          .advantages-header {
            margin-bottom: 40px;
          }
          .advantages-badge {
            padding: 6px 12px;
            font-size: 12px;
            margin-bottom: 16px;
          }
          .advantages-title {
            font-size: 28px;
            margin-bottom: 12px;
          }
          .advantages-subtitle {
            font-size: 15px;
          }
          .advantages-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .advantages-card {
            padding: 20px;
            border-radius: 16px;
          }
          .advantages-card-icon {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            margin-bottom: 14px;
          }
          .advantages-card-title {
            font-size: 16px;
            margin-bottom: 6px;
          }
          .advantages-card-text {
            font-size: 13px;
          }
          .advantages-orb-1,
          .advantages-orb-2 {
            width: 200px;
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
}
