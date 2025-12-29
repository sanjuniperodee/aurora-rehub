'use client';

import { useEffect, useRef, useState } from 'react';

const programs = [
  {
    title: 'Наркозависимость',
    description: 'Комплексная программа восстановления с глубокой проработкой причин.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.5 20.5L3.5 13.5C2.1 12.1 2.1 9.9 3.5 8.5C4.9 7.1 7.1 7.1 8.5 8.5L15.5 15.5C16.9 16.9 16.9 19.1 15.5 20.5C14.1 21.9 11.9 21.9 10.5 20.5Z"/>
        <path d="M8.5 13.5L12.5 9.5"/>
        <circle cx="18" cy="6" r="4"/>
        <path d="M18 4V6.5"/>
        <path d="M18 8.5V8.51"/>
      </svg>
    ),
    color: '#dc2626',
    features: ['Детоксикация', 'Психотерапия', 'Ресоциализация'],
  },
  {
    title: 'Алкоголизм',
    description: 'Программа избавления от алкогольной зависимости.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 22H16"/>
        <path d="M12 17V22"/>
        <path d="M6 2H18L17 8.5C17 11.5 14.8 14 12 14C9.2 14 7 11.5 7 8.5L6 2Z"/>
        <path d="M6 6H18"/>
        <path d="M4 4L20 20" strokeWidth="2"/>
      </svg>
    ),
    color: '#ea580c',
    features: ['Медицинская помощь', 'Группы поддержки', 'Семейная терапия'],
  },
  {
    title: 'Лудомания',
    description: 'Помощь при игровой зависимости — контроль над импульсами.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3"/>
        <circle cx="8" cy="8" r="1.5" fill="currentColor"/>
        <circle cx="16" cy="8" r="1.5" fill="currentColor"/>
        <circle cx="8" cy="16" r="1.5" fill="currentColor"/>
        <circle cx="16" cy="16" r="1.5" fill="currentColor"/>
        <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
      </svg>
    ),
    color: '#7c3aed',
    features: ['Когнитивная терапия', 'Финансовая грамотность', 'Контроль импульсов'],
  },
  {
    title: 'Созависимость',
    description: 'Программа для родственников — личные границы и отношения.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="7" cy="6" r="3"/>
        <path d="M4 20V17C4 15.3 5.3 14 7 14"/>
        <circle cx="17" cy="6" r="3"/>
        <path d="M20 20V17C20 15.3 18.7 14 17 14"/>
        <path d="M12 12C12 11 12.5 10 13.5 10C14.5 10 15 11 15 12C15 13.5 12 15.5 12 15.5C12 15.5 9 13.5 9 12C9 11 9.5 10 10.5 10C11.5 10 12 11 12 12Z"/>
      </svg>
    ),
    color: '#059669',
    features: ['Личные границы', 'Эмоциональный баланс', 'Здоровые отношения'],
  },
];

export default function Programs() {
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
    <section ref={sectionRef} id="programs" className="programs-section">
      {/* Decorative elements */}
      <div className="programs-orb" />

      <div className="programs-container">
        {/* Section header */}
        <div
          className="programs-header"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease-out',
          }}
        >
          <span className="programs-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
            Программы реабилитации
          </span>

          <h2 className="programs-title">
            Какие зависимости мы{' '}
            <span className="programs-title-gradient">лечим</span>
          </h2>
          <p className="programs-subtitle">
            Индивидуальный подход к каждому типу зависимости
          </p>
        </div>

        {/* Programs grid */}
        <div className="programs-grid">
          {programs.map((program, i) => (
            <div
              key={i}
              className="programs-card"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                background: hoveredIndex === i ? '#ffffff' : 'rgba(255,255,255,0.7)',
                borderColor: hoveredIndex === i ? program.color + '40' : '#e2e8f0',
                boxShadow: hoveredIndex === i 
                  ? `0 20px 40px ${program.color}15`
                  : '0 4px 20px rgba(0, 0, 0, 0.03)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible 
                  ? hoveredIndex === i ? 'translateY(-8px)' : 'translateY(0)'
                  : 'translateY(30px)',
                transition: 'all 0.3s ease',
                transitionDelay: `${0.05 + i * 0.05}s`,
              }}
            >
              <div
                className="programs-card-icon"
                style={{
                  background: `linear-gradient(135deg, ${program.color}12 0%, ${program.color}20 100%)`,
                  color: program.color,
                  transform: hoveredIndex === i ? 'scale(1.1)' : 'scale(1)',
                }}
              >
                {program.icon}
              </div>
              <h3 className="programs-card-title">{program.title}</h3>
              <p className="programs-card-desc">{program.description}</p>
              <div className="programs-card-features">
                {program.features.map((feature, j) => (
                  <span
                    key={j}
                    className="programs-card-feature"
                    style={{
                      background: `${program.color}10`,
                      color: program.color,
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="programs-cta-box"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.6s ease-out 0.3s',
          }}
        >
          <h3 className="programs-cta-title">Не нашли свою проблему?</h3>
          <p className="programs-cta-text">Каждый случай уникален. Свяжитесь с нами для консультации</p>
          <a href="#contact" className="programs-cta-btn">
            Бесплатная консультация
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        .programs-section {
          position: relative;
          padding: 100px 0;
          background: #f8fafc;
          overflow: hidden;
        }
        
        .programs-orb {
          position: absolute;
          top: 20%;
          right: -10%;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(124, 58, 237, 0.06) 0%, transparent 70%);
          filter: blur(40px);
        }
        
        .programs-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 32px;
          position: relative;
        }
        
        .programs-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 60px;
        }
        
        .programs-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%);
          border-radius: 100px;
          border: 1px solid rgba(124, 58, 237, 0.2);
          font-size: 14px;
          font-weight: 600;
          color: #7c3aed;
          margin-bottom: 24px;
        }
        
        .programs-title {
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.03em;
          margin-bottom: 16px;
        }
        
        .programs-title-gradient {
          background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .programs-subtitle {
          font-size: 17px;
          color: #64748b;
          line-height: 1.7;
        }
        
        .programs-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 48px;
        }
        
        .programs-card {
          padding: 28px 24px;
          border-radius: 20px;
          border: 1px solid #e2e8f0;
          cursor: pointer;
          text-align: center;
        }
        
        .programs-card-icon {
          width: 72px;
          height: 72px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          transition: transform 0.3s ease;
        }
        
        .programs-card-title {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 10px;
        }
        
        .programs-card-desc {
          font-size: 14px;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 16px;
        }
        
        .programs-card-features {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          justify-content: center;
        }
        
        .programs-card-feature {
          padding: 5px 10px;
          font-size: 11px;
          font-weight: 600;
          border-radius: 6px;
        }
        
        .programs-cta-box {
          text-align: center;
          padding: 40px;
          background: #ffffff;
          border-radius: 20px;
          border: 1px solid #e2e8f0;
        }
        
        .programs-cta-title {
          font-size: 22px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 10px;
        }
        
        .programs-cta-text {
          font-size: 15px;
          color: #64748b;
          margin-bottom: 20px;
        }
        
        .programs-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%);
          color: #ffffff;
          font-size: 15px;
          font-weight: 600;
          border-radius: 12px;
          text-decoration: none;
          box-shadow: 0 8px 24px rgba(124, 58, 237, 0.35);
        }
        
        /* Tablet */
        @media (max-width: 1100px) {
          .programs-section {
            padding: 80px 0;
          }
          .programs-container {
            padding: 0 24px;
          }
          .programs-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }
        
        /* Mobile */
        @media (max-width: 640px) {
          .programs-section {
            padding: 60px 0;
          }
          .programs-container {
            padding: 0 20px;
          }
          .programs-header {
            margin-bottom: 40px;
          }
          .programs-badge {
            padding: 6px 12px;
            font-size: 12px;
            margin-bottom: 16px;
          }
          .programs-title {
            font-size: 28px;
            margin-bottom: 12px;
          }
          .programs-subtitle {
            font-size: 15px;
          }
          .programs-grid {
            grid-template-columns: 1fr;
            gap: 12px;
            margin-bottom: 32px;
          }
          .programs-card {
            padding: 20px;
            border-radius: 16px;
          }
          .programs-card-icon {
            width: 60px;
            height: 60px;
            border-radius: 16px;
            margin-bottom: 14px;
          }
          .programs-card-title {
            font-size: 16px;
            margin-bottom: 8px;
          }
          .programs-card-desc {
            font-size: 13px;
            margin-bottom: 12px;
          }
          .programs-card-feature {
            padding: 4px 8px;
            font-size: 10px;
          }
          .programs-cta-box {
            padding: 24px 20px;
            border-radius: 16px;
          }
          .programs-cta-title {
            font-size: 18px;
          }
          .programs-cta-text {
            font-size: 14px;
            margin-bottom: 16px;
          }
          .programs-cta-btn {
            width: 100%;
            justify-content: center;
            padding: 14px 24px;
            font-size: 14px;
          }
          .programs-orb {
            width: 250px;
            height: 250px;
          }
        }
      `}</style>
    </section>
  );
}
