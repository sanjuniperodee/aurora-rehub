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
      style={{
        position: 'relative',
        background: '#ffffff',
        overflow: 'hidden',
      }}
    >
      {/* Curved transition from Hero */}
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          left: 0,
          right: 0,
          height: '200px',
          background: 'linear-gradient(180deg, #0d1829 0%, #ffffff 100%)',
        }}
      />
      <svg
        style={{
          position: 'absolute',
          top: '-2px',
          left: 0,
          width: '100%',
          height: '100px',
        }}
        viewBox="0 0 1440 100"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 L0,60 Q360,100 720,60 T1440,60 L1440,0 Z"
          fill="#0d1829"
        />
      </svg>

      {/* Decorative elements */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '120px 32px 100px', position: 'relative' }}>
        {/* Section header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
            marginBottom: '80px',
          }}
        >
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
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
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              Основан в 2025 году
            </span>

            <h2
              style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: 800,
                color: '#0f172a',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '24px',
              }}
            >
              Место, где начинается{' '}
              <span style={{ 
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                новая жизнь
              </span>
            </h2>
          </div>

          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
              transition: 'all 0.6s ease-out 0.1s',
            }}
          >
            <p
              style={{
                fontSize: '18px',
                color: '#64748b',
                lineHeight: 1.8,
                marginBottom: '20px',
              }}
            >
              Реабилитационный центр в Алматы, специализированный на помощи 
              и поддержке зависимых людей. Мы работаем не ради прибыли, 
              а ради <strong style={{ color: '#0f172a' }}>результата и человеческой жизни</strong>.
            </p>
            <p
              style={{
                fontSize: '18px',
                color: '#64748b',
                lineHeight: 1.8,
              }}
            >
              У нас открытая реабилитация: человек приходит за помощью сам 
              и получает уважение, поддержку и заботу. Шаг за шагом — через терапию, 
              режим, спорт и честную работу над собой.
            </p>
          </div>
        </div>

        {/* Values grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            marginBottom: '80px',
          }}
        >
          {values.map((value, i) => (
            <div
              key={i}
              style={{
                padding: '32px',
                background: '#ffffff',
                borderRadius: '24px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.3s ease',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${0.1 + i * 0.05}s`,
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: value.bg,
                  color: value.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                {value.icon}
              </div>
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#0f172a',
                  marginBottom: '10px',
                }}
              >
                {value.title}
              </h3>
              <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6 }}>
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom highlight card */}
        <div
          style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)',
            borderRadius: '32px',
            padding: '56px',
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '48px',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease-out 0.3s',
          }}
        >
          {/* Background decoration */}
          <div
            style={{
              position: 'absolute',
              top: '-50%',
              right: '-20%',
              width: '600px',
              height: '600px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 60%)',
              filter: 'blur(40px)',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                background: 'rgba(59, 130, 246, 0.2)',
                color: '#93c5fd',
                fontSize: '14px',
                fontWeight: 600,
                borderRadius: '100px',
                marginBottom: '20px',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              Уникальный подход
            </div>
            <h3 style={{ fontSize: '32px', fontWeight: 800, color: '#ffffff', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              Всего 8 центров в мире практикуют этот подход
            </h3>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, maxWidth: '600px' }}>
              По-настоящему глубокий индивидуальный и многоуровневый подход требует огромных ресурсов 
              и личной вовлечённости каждого сотрудника. На нашем континенте подобных центров 
              больше нет — мы первые и единственные.
            </p>
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <a
              href="#contact"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                width: '100%',
                padding: '20px 32px',
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                color: '#ffffff',
                fontSize: '17px',
                fontWeight: 600,
                borderRadius: '16px',
                textDecoration: 'none',
                boxShadow: '0 8px 32px rgba(59, 130, 246, 0.35)',
              }}
            >
              Получить консультацию
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1100px) {
          section > div > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          section > div > div:nth-child(2) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          section > div > div:last-child {
            grid-template-columns: 1fr !important;
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
