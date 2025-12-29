'use client';

import { useEffect, useRef, useState } from 'react';

const services = [
  {
    id: 'checkup',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: 'Медицинский чек-ап',
    subtitle: 'Фундамент безопасной реабилитации',
    description: 'Восстановление начинается с реального понимания состояния организма. Мы не гадаем — мы знаем.',
    color: '#ef4444',
    checks: ['Сердце и сосуды', 'Печень и почки', 'Нервная система', 'Гормональный фон', 'Иммунитет'],
    benefits: ['Выявление скрытых рисков', 'Предотвращение осложнений', 'Безопасная нагрузка'],
  },
  {
    id: 'codependency',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Работа с созависимыми',
    subtitle: 'Помощь обеим сторонам',
    description: 'Глубокое понимание деструктивных моделей отношений. Восстановление личных границ.',
    color: '#8b5cf6',
    checks: ['Понимание своей роли', 'Восстановление границ', 'Изменение общения', 'Эмоциональный баланс'],
    benefits: ['Снижение напряжения', 'Здоровые отношения', 'Поддержка близких'],
  },
  {
    id: 'social',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Социальная реинтеграция',
    subtitle: 'Возвращение в общество',
    description: 'Помогаем снова научиться жить среди людей: работать, общаться, брать ответственность.',
    color: '#10b981',
    checks: ['Взаимодействие с людьми', 'Трудовые навыки', 'Ответственность', 'Самостоятельность'],
    benefits: ['Уверенность', 'Место в обществе', 'Готовность к жизни'],
  },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
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
      id="services"
      style={{
        position: 'relative',
        padding: '120px 0',
        background: '#ffffff',
        overflow: 'hidden',
      }}
    >
      {/* Decorative gradient */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${services[activeService].color}08 0%, transparent 70%)`,
          transition: 'background 0.5s ease',
          filter: 'blur(60px)',
        }}
      />

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 32px', position: 'relative' }}>
        {/* Section header */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto 64px',
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
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
              borderRadius: '100px',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              fontSize: '14px',
              fontWeight: 600,
              color: '#3b82f6',
              marginBottom: '24px',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
            Что мы предлагаем
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
            Комплексный подход к{' '}
            <span style={{ 
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              восстановлению
            </span>
          </h2>
          <p style={{ fontSize: '18px', color: '#64748b', lineHeight: 1.7 }}>
            Три ключевых направления для полного восстановления тела, психики и социальных навыков
          </p>
        </div>

        {/* Services tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '48px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease-out 0.1s',
          }}
        >
          {services.map((service, i) => (
            <button
              key={i}
              onClick={() => setActiveService(i)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px 28px',
                background: activeService === i 
                  ? `linear-gradient(135deg, ${service.color} 0%, ${service.color}dd 100%)`
                  : '#f8fafc',
                color: activeService === i ? '#ffffff' : '#64748b',
                fontSize: '15px',
                fontWeight: 600,
                borderRadius: '16px',
                border: activeService === i ? 'none' : '1px solid #e2e8f0',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeService === i ? `0 8px 24px ${service.color}40` : 'none',
              }}
            >
              <span style={{ opacity: activeService === i ? 1 : 0.6 }}>{service.icon}</span>
              {service.title}
            </button>
          ))}
        </div>

        {/* Active service content */}
        <div
          style={{
            background: '#f8fafc',
            borderRadius: '32px',
            padding: '56px',
            border: '1px solid #e2e8f0',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease-out 0.2s',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '64px',
              alignItems: 'start',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 14px',
                  background: `${services[activeService].color}15`,
                  color: services[activeService].color,
                  fontSize: '13px',
                  fontWeight: 600,
                  borderRadius: '8px',
                  marginBottom: '20px',
                }}
              >
                {services[activeService].subtitle}
              </div>
              <h3
                style={{
                  fontSize: '32px',
                  fontWeight: 800,
                  color: '#0f172a',
                  marginBottom: '20px',
                  letterSpacing: '-0.02em',
                }}
              >
                {services[activeService].title}
              </h3>
              <p
                style={{
                  fontSize: '17px',
                  color: '#64748b',
                  lineHeight: 1.8,
                  marginBottom: '32px',
                }}
              >
                {services[activeService].description}
              </p>

              {/* What we check */}
              <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#94a3b8', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Что включено
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px' }}>
                {services[activeService].checks.map((check, i) => (
                  <span
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 18px',
                      background: '#ffffff',
                      color: '#374151',
                      fontSize: '14px',
                      fontWeight: 500,
                      borderRadius: '10px',
                      border: '1px solid #e2e8f0',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={services[activeService].color} strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {check}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '16px 32px',
                  background: `linear-gradient(135deg, ${services[activeService].color} 0%, ${services[activeService].color}dd 100%)`,
                  color: '#ffffff',
                  fontSize: '16px',
                  fontWeight: 600,
                  borderRadius: '14px',
                  textDecoration: 'none',
                  boxShadow: `0 8px 24px ${services[activeService].color}40`,
                }}
              >
                Узнать подробнее
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

            {/* Benefits */}
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#94a3b8', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Результат
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {services[activeService].benefits.map((benefit, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '24px',
                      background: '#ffffff',
                      borderRadius: '16px',
                      border: '1px solid #e2e8f0',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                    }}
                  >
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: `${services[activeService].color}15`,
                        color: services[activeService].color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span style={{ fontSize: '17px', fontWeight: 600, color: '#0f172a' }}>
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1000px) {
          section > div > div:nth-child(2) {
            flex-direction: column !important;
          }
          section > div > div:last-child > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
