'use client';

import { useEffect, useRef, useState } from 'react';

const methods = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4.5C10.5 4.5 9.3 5.2 8.5 6.2C7.7 5.7 6.7 5.5 5.7 5.7C4 6.1 2.7 7.7 2.5 9.5C2.3 11.3 3 13 4.5 14"/>
        <path d="M12 4.5C13.5 4.5 14.7 5.2 15.5 6.2C16.3 5.7 17.3 5.5 18.3 5.7C20 6.1 21.3 7.7 21.5 9.5C21.7 11.3 21 13 19.5 14"/>
        <path d="M4.5 14C5 15.5 6.5 17 8 17.5V20C8 21 9 22 10 22H14C15 22 16 21 16 20V17.5C17.5 17 19 15.5 19.5 14"/>
        <path d="M9 14C9 13 9.5 12 10.5 12C11.5 12 12 13 12 14"/>
        <path d="M15 14C15 13 14.5 12 13.5 12C12.5 12 12 13 12 14"/>
      </svg>
    ),
    title: 'Психологические сессии',
    description: 'Индивидуальная и групповая работа с психологами. Понимание причин зависимости.',
    color: '#8b5cf6',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="3"/>
        <path d="M12 8V12"/>
        <rect x="6" y="12" width="12" height="10" rx="2"/>
        <path d="M9 16H15"/>
        <path d="M9 19H13"/>
        <path d="M16 12V10C16 9 15 8 14 8H10C9 8 8 9 8 10V12"/>
      </svg>
    ),
    title: 'Работа с аддиктологами',
    description: 'Профессиональное консультирование. Стратегии трезвой жизни.',
    color: '#0ea5e9',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 21L3 14L8 10L12 14L16 8L21 14L16 21"/>
        <circle cx="18" cy="5" r="2"/>
        <path d="M8 21H16"/>
      </svg>
    ),
    title: 'Выезды на природу',
    description: 'Терапевтическое восстановление в горах. Снятие стресса.',
    color: '#10b981',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 6.5V17.5"/>
        <path d="M17.5 6.5V17.5"/>
        <path d="M3 8.5V15.5C3 16 3.5 16.5 4 16.5H5.5C6 16.5 6.5 16 6.5 15.5V8.5C6.5 8 6 7.5 5.5 7.5H4C3.5 7.5 3 8 3 8.5Z"/>
        <path d="M21 8.5V15.5C21 16 20.5 16.5 20 16.5H18.5C18 16.5 17.5 16 17.5 15.5V8.5C17.5 8 18 7.5 18.5 7.5H20C20.5 7.5 21 8 21 8.5Z"/>
        <path d="M6.5 12H17.5"/>
      </svg>
    ),
    title: 'Спорт с тренером',
    description: 'Укрепление здоровья и выработка дисциплины.',
    color: '#ef4444',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 9L20 7L18 8L16 6L13 7L11 5L8 7L6 6L4 8L2 7"/>
        <path d="M6 6V4"/>
        <path d="M18 8V6"/>
        <path d="M4 12C4 12 5 10 8 10C11 10 12 12 12 12"/>
        <path d="M12 12C12 12 13 10 16 10C19 10 20 12 20 12"/>
        <path d="M5 16C5 14 6 12 8 12"/>
        <path d="M19 16C19 14 18 12 16 12"/>
        <path d="M8 21L8 16L5 16"/>
        <path d="M16 21L16 16L19 16"/>
        <ellipse cx="12" cy="15" rx="5" ry="3"/>
      </svg>
    ),
    title: 'Иппотерапия',
    description: 'Координация, эмоциональная устойчивость и доверие.',
    color: '#f59e0b',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="4" r="2"/>
        <path d="M12 6V10"/>
        <path d="M8 11C6 11 4 12 4 14C4 15 5 15 6 15L9 14L12 16L15 14L18 15C19 15 20 15 20 14C20 12 18 11 16 11"/>
        <path d="M8 19C8 17 10 16 12 16C14 16 16 17 16 19"/>
        <path d="M6 22C6 20 8 19 8 19"/>
        <path d="M18 22C18 20 16 19 16 19"/>
      </svg>
    ),
    title: 'Йога и дыхание',
    description: 'Осознанность, саморегуляция, устойчивость к стрессу.',
    color: '#06b6d4',
  },
];

export default function Methods() {
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
    <section ref={sectionRef} id="methods" className="methods-section">
      {/* Decorative gradient orbs */}
      <div className="methods-orb methods-orb-1" />
      <div className="methods-orb methods-orb-2" />

      <div className="methods-container">
        {/* Section header */}
        <div
          className="methods-header"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease-out',
          }}
        >
          <span className="methods-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 2 7 12 12 22 7 12 2"/>
              <polyline points="2 17 12 22 22 17"/>
              <polyline points="2 12 12 17 22 12"/>
            </svg>
            Методики лечения
          </span>

          <h2 className="methods-title">
            Многоуровневый{' '}
            <span className="methods-title-gradient">подход</span>
          </h2>
          <p className="methods-subtitle">
            Шесть терапевтических направлений для полного восстановления
          </p>
        </div>

        {/* Methods grid */}
        <div className="methods-grid">
          {methods.map((method, i) => (
            <div
              key={i}
              className="methods-card"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                background: hoveredIndex === i 
                  ? 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)'
                  : 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
                borderColor: hoveredIndex === i ? method.color + '30' : '#e2e8f0',
                boxShadow: hoveredIndex === i 
                  ? `0 20px 40px ${method.color}12`
                  : '0 4px 20px rgba(0, 0, 0, 0.03)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible 
                  ? hoveredIndex === i ? 'translateY(-4px)' : 'translateY(0)'
                  : 'translateY(30px)',
                transition: 'all 0.4s ease-out',
                transitionDelay: `${0.05 + i * 0.05}s`,
              }}
            >
              <div
                className="methods-card-icon"
                style={{
                  background: `linear-gradient(135deg, ${method.color}12 0%, ${method.color}20 100%)`,
                  color: method.color,
                  transform: hoveredIndex === i ? 'scale(1.05)' : 'scale(1)',
                }}
              >
                {method.icon}
              </div>
              <div className="methods-card-content">
                <h3 className="methods-card-title">{method.title}</h3>
                <p className="methods-card-desc">{method.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .methods-section {
          position: relative;
          padding: 100px 0;
          background: #ffffff;
          overflow: hidden;
        }
        
        .methods-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
        }
        
        .methods-orb-1 {
          top: 10%;
          left: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(14, 165, 233, 0.05) 0%, transparent 70%);
        }
        
        .methods-orb-2 {
          bottom: 10%;
          right: -10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%);
        }
        
        .methods-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 32px;
          position: relative;
        }
        
        .methods-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 60px;
        }
        
        .methods-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%);
          border-radius: 100px;
          border: 1px solid rgba(14, 165, 233, 0.2);
          font-size: 14px;
          font-weight: 600;
          color: #0ea5e9;
          margin-bottom: 24px;
        }
        
        .methods-title {
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.03em;
          margin-bottom: 16px;
        }
        
        .methods-title-gradient {
          background: linear-gradient(135deg, #0ea5e9 0%, #10b981 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .methods-subtitle {
          font-size: 17px;
          color: #64748b;
          line-height: 1.7;
        }
        
        .methods-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        
        .methods-card {
          padding: 28px;
          border-radius: 20px;
          border: 1px solid #e2e8f0;
          display: flex;
          gap: 18px;
          align-items: flex-start;
          cursor: pointer;
        }
        
        .methods-card-icon {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        
        .methods-card-content {
          flex: 1;
          min-width: 0;
        }
        
        .methods-card-title {
          font-size: 17px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 8px;
        }
        
        .methods-card-desc {
          font-size: 14px;
          color: #64748b;
          line-height: 1.6;
        }
        
        /* Tablet */
        @media (max-width: 1000px) {
          .methods-section {
            padding: 80px 0;
          }
          .methods-container {
            padding: 0 24px;
          }
          .methods-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }
        
        /* Mobile */
        @media (max-width: 640px) {
          .methods-section {
            padding: 60px 0;
          }
          .methods-container {
            padding: 0 20px;
          }
          .methods-header {
            margin-bottom: 40px;
          }
          .methods-badge {
            padding: 6px 12px;
            font-size: 12px;
            margin-bottom: 16px;
          }
          .methods-title {
            font-size: 28px;
            margin-bottom: 12px;
          }
          .methods-subtitle {
            font-size: 15px;
          }
          .methods-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .methods-card {
            padding: 20px;
            border-radius: 16px;
            flex-direction: column;
            text-align: center;
            gap: 14px;
          }
          .methods-card-icon {
            width: 52px;
            height: 52px;
            border-radius: 14px;
            margin: 0 auto;
          }
          .methods-card-title {
            font-size: 15px;
            margin-bottom: 6px;
          }
          .methods-card-desc {
            font-size: 13px;
          }
          .methods-orb-1,
          .methods-orb-2 {
            width: 200px;
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
}
