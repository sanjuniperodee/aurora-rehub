'use client';

import { useEffect, useRef, useState } from 'react';

const team = [
  {
    name: 'Директор центра',
    role: 'Руководитель программы',
    description: 'Координация всех направлений, стратегическое развитие, индивидуальные консультации с резидентами.',
    color: '#3b82f6',
  },
  {
    name: 'Психолог',
    role: 'Клинический специалист',
    description: 'Индивидуальная и групповая терапия, проработка травм, глубинная работа с причинами зависимости.',
    color: '#8b5cf6',
  },
  {
    name: 'Аддиктолог',
    role: 'Специалист по зависимостям',
    description: 'Профессиональное консультирование, формирование устойчивых стратегий трезвой жизни.',
    color: '#10b981',
  },
  {
    name: 'Нарколог',
    role: 'Врач-специалист',
    description: 'Медицинское сопровождение, детоксикация, медикаментозная поддержка при необходимости.',
    color: '#ef4444',
  },
];

export default function Team() {
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
      id="team"
      style={{
        position: 'relative',
        padding: '120px 0',
        background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Decorative */}
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
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
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            Наша команда
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
            Профессионалы{' '}
            <span style={{ 
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              своего дела
            </span>
          </h2>
          <p style={{ fontSize: '18px', color: '#64748b', lineHeight: 1.7 }}>
            Команда специалистов с многолетним опытом и глубокой личной вовлечённостью
          </p>
        </div>

        {/* Team grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            marginBottom: '56px',
          }}
        >
          {team.map((member, i) => (
            <div
              key={i}
              style={{
                padding: '36px 28px',
                background: '#ffffff',
                borderRadius: '24px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                textAlign: 'center',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.5s ease-out',
                transitionDelay: `${0.1 + i * 0.05}s`,
              }}
            >
              <div
                style={{
                  width: '88px',
                  height: '88px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${member.color} 0%, ${member.color}dd 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  boxShadow: `0 12px 24px ${member.color}30`,
                }}
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#0f172a',
                  marginBottom: '6px',
                }}
              >
                {member.name}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: member.color,
                  fontWeight: 600,
                  marginBottom: '16px',
                }}
              >
                {member.role}
              </p>
              <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6 }}>
                {member.description}
              </p>
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
            Хотите познакомиться с командой?
          </h3>
          <p style={{ fontSize: '16px', color: '#64748b', marginBottom: '24px' }}>
            Приезжайте на экскурсию или запишитесь на консультацию
          </p>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '16px 32px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              color: '#ffffff',
              fontSize: '16px',
              fontWeight: 600,
              borderRadius: '14px',
              textDecoration: 'none',
              boxShadow: '0 8px 24px rgba(59, 130, 246, 0.35)',
            }}
          >
            Связаться с нами
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
