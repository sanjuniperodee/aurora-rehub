'use client';

import { useEffect, useRef, useState } from 'react';

const benefits = [
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: 'Бесплатное лечение', 
    desc: 'Полная программа реабилитации без затрат',
    color: '#ef4444',
  },
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: 'Вдохновение', 
    desc: 'Ваша история поможет тысячам людей',
    color: '#f59e0b',
  },
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Полная поддержка', 
    desc: 'Команда рядом на каждом этапе пути',
    color: '#10b981',
  },
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
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
        padding: '120px 0',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Wave transition from light section */}
      <svg
        style={{
          position: 'absolute',
          top: '-1px',
          left: 0,
          width: '100%',
          height: '80px',
        }}
        viewBox="0 0 1440 80"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0,80 L0,40 Q360,0 720,40 T1440,40 L1440,80 Z"
          fill="#ffffff"
        />
      </svg>

      {/* Decorative background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
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
          top: '10%',
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
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.5s ease-out',
                    transitionDelay: `${0.1 + i * 0.05}s`,
                  }}
                >
                  <div 
                    style={{ 
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
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
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5">
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
          section > div:nth-child(5) > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          section > div:nth-child(5) > div:last-child > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
