'use client';

import { useEffect, useRef, useState } from 'react';

const methods = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Brain with thought bubbles - psychology */}
        <path d="M12 4.5C10.5 4.5 9.3 5.2 8.5 6.2C7.7 5.7 6.7 5.5 5.7 5.7C4 6.1 2.7 7.7 2.5 9.5C2.3 11.3 3 13 4.5 14"/>
        <path d="M12 4.5C13.5 4.5 14.7 5.2 15.5 6.2C16.3 5.7 17.3 5.5 18.3 5.7C20 6.1 21.3 7.7 21.5 9.5C21.7 11.3 21 13 19.5 14"/>
        <path d="M4.5 14C5 15.5 6.5 17 8 17.5V20C8 21 9 22 10 22H14C15 22 16 21 16 20V17.5C17.5 17 19 15.5 19.5 14"/>
        <path d="M9 14C9 13 9.5 12 10.5 12C11.5 12 12 13 12 14"/>
        <path d="M15 14C15 13 14.5 12 13.5 12C12.5 12 12 13 12 14"/>
      </svg>
    ),
    title: 'Психологические сессии',
    description: 'Индивидуальная и групповая работа с психологами. Понимание причин зависимости, проработка травм, развитие эмоциональной зрелости.',
    color: '#8b5cf6',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Specialist with clipboard - addictologist */}
        <circle cx="12" cy="5" r="3"/>
        <path d="M12 8V12"/>
        <rect x="6" y="12" width="12" height="10" rx="2"/>
        <path d="M9 16H15"/>
        <path d="M9 19H13"/>
        <path d="M16 12V10C16 9 15 8 14 8H10C9 8 8 9 8 10V12"/>
      </svg>
    ),
    title: 'Работа с аддиктологами',
    description: 'Профессиональное консультирование специалистами по зависимостям. Формирование устойчивых стратегий трезвой жизни.',
    color: '#0ea5e9',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Mountains with sun - nature */}
        <path d="M8 21L3 14L8 10L12 14L16 8L21 14L16 21"/>
        <circle cx="18" cy="5" r="2"/>
        <path d="M8 21H16"/>
      </svg>
    ),
    title: 'Выезды на природу',
    description: 'Терапевтическое восстановление в горах. Снятие стресса, эмоциональная разгрузка, укрепление внутренних ресурсов.',
    color: '#10b981',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Dumbbell - gym */}
        <path d="M6.5 6.5V17.5"/>
        <path d="M17.5 6.5V17.5"/>
        <path d="M3 8.5V15.5C3 16 3.5 16.5 4 16.5H5.5C6 16.5 6.5 16 6.5 15.5V8.5C6.5 8 6 7.5 5.5 7.5H4C3.5 7.5 3 8 3 8.5Z"/>
        <path d="M21 8.5V15.5C21 16 20.5 16.5 20 16.5H18.5C18 16.5 17.5 16 17.5 15.5V8.5C17.5 8 18 7.5 18.5 7.5H20C20.5 7.5 21 8 21 8.5Z"/>
        <path d="M6.5 12H17.5"/>
      </svg>
    ),
    title: 'Спорт с тренером',
    description: 'Укрепление физического здоровья и выработка дисциплины. Индивидуальный подход к нагрузкам.',
    color: '#ef4444',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Horse - hippotherapy */}
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
    description: 'Взаимодействие с лошадьми для улучшения координации, эмоциональной устойчивости и развития доверия.',
    color: '#f59e0b',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Person in lotus pose - yoga */}
        <circle cx="12" cy="4" r="2"/>
        <path d="M12 6V10"/>
        <path d="M8 11C6 11 4 12 4 14C4 15 5 15 6 15L9 14L12 16L15 14L18 15C19 15 20 15 20 14C20 12 18 11 16 11"/>
        <path d="M8 19C8 17 10 16 12 16C14 16 16 17 16 19"/>
        <path d="M6 22C6 20 8 19 8 19"/>
        <path d="M18 22C18 20 16 19 16 19"/>
      </svg>
    ),
    title: 'Йога и дыхание',
    description: 'Тренировки тела и сознания. Развитие осознанности, саморегуляции и устойчивости к стрессу.',
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
    <section
      ref={sectionRef}
      id="methods"
      style={{
        position: 'relative',
        padding: '100px 0 120px',
        background: '#ffffff',
        overflow: 'hidden',
      }}
    >
      {/* Decorative gradient orbs */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.05) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '-10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 32px', position: 'relative' }}>
        {/* Section header */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto 72px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease-out',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
              borderRadius: '100px',
              border: '1px solid rgba(14, 165, 233, 0.2)',
              fontSize: '14px',
              fontWeight: 600,
              color: '#0ea5e9',
              marginBottom: '24px',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 2 7 12 12 22 7 12 2"/>
              <polyline points="2 17 12 22 22 17"/>
              <polyline points="2 12 12 17 22 12"/>
            </svg>
            Методики лечения
          </span>

          <h2
            style={{
              fontSize: 'clamp(36px, 5vw, 52px)',
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '-0.03em',
              marginBottom: '20px',
            }}
          >
            Многоуровневый{' '}
            <span style={{ 
              background: 'linear-gradient(135deg, #0ea5e9 0%, #10b981 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              подход
            </span>
          </h2>
          <p style={{ fontSize: '18px', color: '#64748b', lineHeight: 1.7 }}>
            Шесть терапевтических направлений для полного восстановления
          </p>
        </div>

        {/* Methods grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
        >
          {methods.map((method, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                padding: '36px',
                background: hoveredIndex === i 
                  ? 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)'
                  : 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
                borderRadius: '24px',
                border: `1px solid ${hoveredIndex === i ? method.color + '30' : '#e2e8f0'}`,
                boxShadow: hoveredIndex === i 
                  ? `0 20px 40px ${method.color}12`
                  : '0 4px 20px rgba(0, 0, 0, 0.03)',
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
                opacity: isVisible ? 1 : 0,
                transform: isVisible 
                  ? hoveredIndex === i ? 'translateY(-4px)' : 'translateY(0)'
                  : 'translateY(30px)',
                transition: 'all 0.4s ease-out',
                transitionDelay: `${0.05 + i * 0.05}s`,
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '20px',
                  background: `linear-gradient(135deg, ${method.color}12 0%, ${method.color}20 100%)`,
                  color: method.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'all 0.3s ease',
                  transform: hoveredIndex === i ? 'scale(1.05)' : 'scale(1)',
                }}
              >
                {method.icon}
              </div>
              <div>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#0f172a',
                    marginBottom: '10px',
                  }}
                >
                  {method.title}
                </h3>
                <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.7 }}>
                  {method.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1000px) {
          section > div > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          section > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
          section > div > div:last-child > div {
            flex-direction: column !important;
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
}
