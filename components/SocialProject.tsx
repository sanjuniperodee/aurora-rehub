'use client';

import { useEffect, useRef, useState } from 'react';

const benefits = [
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Gift/Free - бесплатно */}
        <rect x="3" y="8" width="18" height="13" rx="2"/>
        <path d="M12 8V21"/>
        <path d="M3 12H21"/>
        <path d="M19 8C19 6 17 4 15 4C13 4 12 6 12 8"/>
        <path d="M5 8C5 6 7 4 9 4C11 4 12 6 12 8"/>
      </svg>
    ),
    title: 'Бесплатное лечение', 
    desc: 'Полная программа реабилитации без затрат',
    color: '#ef4444',
  },
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Video camera - media */}
        <path d="M15 10L19.5 7.5C20 7.2 21 7.5 21 8V16C21 16.5 20 16.8 19.5 16.5L15 14"/>
        <rect x="3" y="7" width="12" height="10" rx="2"/>
      </svg>
    ),
    title: 'Вдохновение', 
    desc: 'Ваша история поможет тысячам людей',
    color: '#f59e0b',
  },
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Team/Support */}
        <circle cx="9" cy="7" r="3"/>
        <path d="M9 10C5 10 3 13 3 15V17H15V15C15 13 13 10 9 10Z"/>
        <circle cx="17" cy="8" r="2"/>
        <path d="M21 17V15.5C21 14 19.5 12.5 17 12.5"/>
      </svg>
    ),
    title: 'Полная поддержка', 
    desc: 'Команда рядом на каждом этапе пути',
    color: '#10b981',
  },
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Shield with check - control/privacy */}
        <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"/>
        <path d="M9 12L11 14L15 10"/>
      </svg>
    ),
    title: 'Контроль', 
    desc: 'Вы контролируете что и когда публиковать',
    color: '#8b5cf6',
  },
];

export default function SocialProject() {
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
      id="social"
      style={{
        position: 'relative',
        padding: '0 0 120px 0',
        background: 'linear-gradient(180deg, #ffffff 0%, #0f172a 15%, #0f172a 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Smooth gradient transition at top */}
      <div
        style={{
          height: '200px',
          background: 'linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.8) 30%, rgba(15, 23, 42, 0.2) 70%, #0f172a 100%)',
          marginBottom: '-80px',
        }}
      />

      {/* Decorative background */}
      <div
        style={{
          position: 'absolute',
          top: '200px',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          pointerEvents: 'none',
        }}
      />

      {/* Gradient orbs */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, transparent 60%)',
          filter: 'blur(60px)',
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
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 60%)',
          filter: 'blur(60px)',
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
              background: 'rgba(239, 68, 68, 0.15)',
              borderRadius: '100px',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              fontSize: '14px',
              fontWeight: 600,
              color: '#fca5a5',
              marginBottom: '24px',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#fca5a5" stroke="none">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            Социальный проект
          </span>

          <h2
            style={{
              fontSize: 'clamp(36px, 5vw, 52px)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.03em',
              marginBottom: '20px',
            }}
          >
            Путь к{' '}
            <span style={{ 
              background: 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              свободе
            </span>
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
            Уникальная программа бесплатной реабилитации. Ваша история вдохновит других.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          {/* Left - Benefits */}
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  style={{
                    padding: '28px',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '20px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(10px)',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.5s ease-out',
                    transitionDelay: `${0.1 + i * 0.05}s`,
                  }}
                >
                  <div 
                    style={{ 
                      width: '56px',
                      height: '56px',
                      borderRadius: '16px',
                      background: `linear-gradient(135deg, ${benefit.color}25 0%, ${benefit.color}15 100%)`,
                      color: benefit.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                    }}
                  >
                    {benefit.icon}
                  </div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                    {benefit.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - CTA Card */}
          <div
            style={{
              padding: '48px',
              background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(249, 115, 22, 0.15) 100%)',
              borderRadius: '32px',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              backdropFilter: 'blur(20px)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 0.6s ease-out 0.2s',
            }}
          >
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '28px',
                boxShadow: '0 12px 32px rgba(239, 68, 68, 0.4)',
              }}
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {/* Play button */}
                <circle cx="12" cy="12" r="10"/>
                <polygon points="10 8 16 12 10 16 10 8" fill="#ffffff" stroke="none"/>
              </svg>
            </div>

            <h3 style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              Станьте частью истории
            </h3>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: '28px' }}>
              Мы документируем путь восстановления с вашего согласия. 
              Ваша история публикуется в медиа и вдохновляет других сделать первый шаг.
            </p>

            {/* Stats */}
            <div
              style={{
                display: 'flex',
                gap: '40px',
                marginBottom: '28px',
                paddingBottom: '28px',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <div>
                <div style={{ fontSize: '36px', fontWeight: 800, color: '#ffffff' }}>50+</div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>Участников</div>
              </div>
              <div>
                <div style={{ fontSize: '36px', fontWeight: 800, color: '#ffffff' }}>1M+</div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>Просмотров</div>
              </div>
            </div>

            <a
              href="#contact"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                width: '100%',
                padding: '18px 32px',
                background: 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)',
                color: '#ffffff',
                fontSize: '17px',
                fontWeight: 600,
                borderRadius: '14px',
                textDecoration: 'none',
                boxShadow: '0 12px 32px rgba(239, 68, 68, 0.4)',
              }}
            >
              Участвовать в проекте
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          section > div:last-child > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          section > div:last-child > div:last-child > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
