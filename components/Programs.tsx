'use client';

import { useEffect, useRef, useState } from 'react';

const programs = [
  {
    title: 'Наркозависимость',
    description: 'Комплексная программа восстановления с глубокой проработкой причин и формированием новых паттернов поведения.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Pill/Capsule icon */}
        <path d="M10.5 20.5L3.5 13.5C2.1 12.1 2.1 9.9 3.5 8.5C4.9 7.1 7.1 7.1 8.5 8.5L15.5 15.5C16.9 16.9 16.9 19.1 15.5 20.5C14.1 21.9 11.9 21.9 10.5 20.5Z"/>
        <path d="M8.5 13.5L12.5 9.5"/>
        {/* Warning/Alert mark */}
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
    description: 'Программа избавления от алкогольной зависимости с восстановлением здоровья и социальных связей.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Wine glass with prohibition */}
        <path d="M8 22H16"/>
        <path d="M12 17V22"/>
        <path d="M6 2H18L17 8.5C17 11.5 14.8 14 12 14C9.2 14 7 11.5 7 8.5L6 2Z"/>
        <path d="M6 6H18"/>
        {/* Prohibition cross */}
        <path d="M4 4L20 20" strokeWidth="2"/>
      </svg>
    ),
    color: '#ea580c',
    features: ['Медицинская помощь', 'Группы поддержки', 'Семейная терапия'],
  },
  {
    title: 'Лудомания',
    description: 'Помощь при игровой зависимости — восстановление контроля над импульсами и финансовой ответственности.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Dice icon */}
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
    description: 'Программа для родственников — восстановление личных границ, здоровых отношений и внутренней опоры.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Two people with heart - family support */}
        <circle cx="7" cy="6" r="3"/>
        <path d="M4 20V17C4 15.3 5.3 14 7 14"/>
        <circle cx="17" cy="6" r="3"/>
        <path d="M20 20V17C20 15.3 18.7 14 17 14"/>
        {/* Heart in the middle */}
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
    <section
      ref={sectionRef}
      id="programs"
      style={{
        position: 'relative',
        padding: '100px 0 120px',
        background: '#f8fafc',
        overflow: 'hidden',
      }}
    >
      {/* Decorative elements */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.06) 0%, transparent 70%)',
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
              background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
              borderRadius: '100px',
              border: '1px solid rgba(124, 58, 237, 0.2)',
              fontSize: '14px',
              fontWeight: 600,
              color: '#7c3aed',
              marginBottom: '24px',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
            Программы реабилитации
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
            Какие зависимости мы{' '}
            <span style={{ 
              background: 'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              лечим
            </span>
          </h2>
          <p style={{ fontSize: '18px', color: '#64748b', lineHeight: 1.7 }}>
            Индивидуальный подход к каждому типу зависимости с учётом особенностей личности
          </p>
        </div>

        {/* Programs grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            marginBottom: '56px',
          }}
        >
          {programs.map((program, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                padding: '36px 28px',
                background: hoveredIndex === i ? '#ffffff' : 'rgba(255,255,255,0.7)',
                borderRadius: '24px',
                border: `1px solid ${hoveredIndex === i ? program.color + '40' : '#e2e8f0'}`,
                boxShadow: hoveredIndex === i 
                  ? `0 20px 40px ${program.color}15`
                  : '0 4px 20px rgba(0, 0, 0, 0.03)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                opacity: isVisible ? 1 : 0,
                transform: isVisible 
                  ? hoveredIndex === i ? 'translateY(-8px)' : 'translateY(0)'
                  : 'translateY(30px)',
                transitionDelay: `${0.05 + i * 0.05}s`,
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '24px',
                  background: `linear-gradient(135deg, ${program.color}12 0%, ${program.color}20 100%)`,
                  color: program.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  transition: 'all 0.3s ease',
                  transform: hoveredIndex === i ? 'scale(1.1)' : 'scale(1)',
                }}
              >
                {program.icon}
              </div>
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#0f172a',
                  marginBottom: '12px',
                }}
              >
                {program.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6, marginBottom: '20px' }}>
                {program.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center' }}>
                {program.features.map((feature, j) => (
                  <span
                    key={j}
                    style={{
                      padding: '6px 12px',
                      background: `${program.color}10`,
                      color: program.color,
                      fontSize: '12px',
                      fontWeight: 600,
                      borderRadius: '6px',
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
          style={{
            textAlign: 'center',
            padding: '48px',
            background: '#ffffff',
            borderRadius: '24px',
            border: '1px solid #e2e8f0',
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.6s ease-out 0.3s',
          }}
        >
          <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>
            Не нашли свою проблему?
          </h3>
          <p style={{ fontSize: '16px', color: '#64748b', marginBottom: '24px' }}>
            Каждый случай уникален. Свяжитесь с нами для бесплатной консультации
          </p>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '16px 32px',
              background: 'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)',
              color: '#ffffff',
              fontSize: '16px',
              fontWeight: 600,
              borderRadius: '14px',
              textDecoration: 'none',
              boxShadow: '0 8px 24px rgba(124, 58, 237, 0.35)',
            }}
          >
            Бесплатная консультация
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1100px) {
          section > div > div:nth-child(2) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          section > div > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
