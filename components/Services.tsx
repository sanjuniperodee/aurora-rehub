'use client';

import { useEffect, useRef, useState } from 'react';

const services = [
  {
    id: 'checkup',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: 'Медицинский чек-ап',
    subtitle: 'Фундамент безопасной реабилитации',
    description: 'Восстановление начинается с реального понимания состояния организма.',
    color: '#ef4444',
    checks: ['УЗИ почек, печени, сердца, поджелудочной', 'Сердце и сосуды', 'Биохимия крови (Алт, Аст)', 'ОАК (Общий анализ крови)', 'ОАМ (Общий анализ мочи)'],
    benefits: ['Выявление скрытых рисков', 'Предотвращение осложнений', 'Безопасная нагрузка'],
  },
  {
    id: 'codependency',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Работа с созависимыми',
    subtitle: 'Помощь обеим сторонам',
    description: 'Глубокое понимание деструктивных моделей отношений.',
    color: '#8b5cf6',
    checks: ['Понимание своей роли', 'Восстановление границ', 'Изменение общения', 'Эмоциональный баланс'],
    benefits: ['Снижение напряжения', 'Здоровые отношения', 'Поддержка близких'],
  },
  {
    id: 'social',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Социальная реинтеграция',
    subtitle: 'Возвращение в общество',
    description: 'Помогаем снова научиться жить среди людей.',
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
    <section ref={sectionRef} id="services" className="services-section">
      {/* Decorative gradient */}
      <div
        className="services-orb"
        style={{ background: `radial-gradient(circle, ${services[activeService].color}08 0%, transparent 70%)` }}
      />

      <div className="services-container">
        {/* Section header */}
        <div
          className="services-header"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease-out',
          }}
        >
          <span className="services-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
            Что мы предлагаем
          </span>

          <h2 className="services-title">
            Комплексный подход к{' '}
            <span className="services-title-gradient">восстановлению</span>
          </h2>
          <p className="services-subtitle">
            Три ключевых направления для полного восстановления
          </p>
        </div>

        {/* Services tabs */}
        <div
          className="services-tabs"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease-out 0.1s',
          }}
        >
          {services.map((service, i) => (
            <button
              key={i}
              onClick={() => setActiveService(i)}
              className={`services-tab ${activeService === i ? 'active' : ''}`}
              style={{
                background: activeService === i 
                  ? `linear-gradient(135deg, ${service.color} 0%, ${service.color}dd 100%)`
                  : '#f8fafc',
                color: activeService === i ? '#ffffff' : '#64748b',
                borderColor: activeService === i ? 'transparent' : '#e2e8f0',
                boxShadow: activeService === i ? `0 8px 24px ${service.color}40` : 'none',
              }}
            >
              <span style={{ opacity: activeService === i ? 1 : 0.6 }}>{service.icon}</span>
              <span className="services-tab-text">{service.title}</span>
            </button>
          ))}
        </div>

        {/* Active service content */}
        <div
          className="services-content"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease-out 0.2s',
          }}
        >
          <div className="services-content-grid">
            <div className="services-content-left">
              <div
                className="services-content-badge"
                style={{
                  background: `${services[activeService].color}15`,
                  color: services[activeService].color,
                }}
              >
                {services[activeService].subtitle}
              </div>
              <h3 className="services-content-title">{services[activeService].title}</h3>
              <p className="services-content-desc">{services[activeService].description}</p>

              {/* What we check */}
              <h4 className="services-content-label">Что включено</h4>
              <div className="services-checks">
                {services[activeService].checks.map((check, i) => (
                  <span key={i} className="services-check-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={services[activeService].color} strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {check}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="services-cta"
                style={{
                  background: `linear-gradient(135deg, ${services[activeService].color} 0%, ${services[activeService].color}dd 100%)`,
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
            <div className="services-content-right">
              <h4 className="services-content-label">Результат</h4>
              <div className="services-benefits">
                {services[activeService].benefits.map((benefit, i) => (
                  <div key={i} className="services-benefit-item">
                    <div
                      className="services-benefit-icon"
                      style={{
                        background: `${services[activeService].color}15`,
                        color: services[activeService].color,
                      }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span className="services-benefit-text">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .services-section {
          position: relative;
          padding: 100px 0;
          background: #ffffff;
          overflow: hidden;
        }
        
        .services-orb {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 800px;
          height: 800px;
          border-radius: 50%;
          transition: background 0.5s ease;
          filter: blur(60px);
        }
        
        .services-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 32px;
          position: relative;
        }
        
        .services-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 48px;
        }
        
        .services-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
          border-radius: 100px;
          border: 1px solid rgba(59, 130, 246, 0.2);
          font-size: 14px;
          font-weight: 600;
          color: #3b82f6;
          margin-bottom: 24px;
        }
        
        .services-title {
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.03em;
          margin-bottom: 16px;
        }
        
        .services-title-gradient {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .services-subtitle {
          font-size: 17px;
          color: #64748b;
          line-height: 1.7;
        }
        
        .services-tabs {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        
        .services-tab {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 24px;
          font-size: 14px;
          font-weight: 600;
          border-radius: 14px;
          border: 1px solid;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .services-tab-text {
          white-space: nowrap;
        }
        
        .services-content {
          background: #f8fafc;
          border-radius: 28px;
          padding: 40px;
          border: 1px solid #e2e8f0;
        }
        
        .services-content-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 48px;
          align-items: start;
        }
        
        .services-content-badge {
          display: inline-flex;
          padding: 6px 14px;
          font-size: 13px;
          font-weight: 600;
          border-radius: 8px;
          margin-bottom: 16px;
        }
        
        .services-content-title {
          font-size: clamp(24px, 4vw, 32px);
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }
        
        .services-content-desc {
          font-size: 16px;
          color: #64748b;
          line-height: 1.7;
          margin-bottom: 28px;
        }
        
        .services-content-label {
          font-size: 13px;
          font-weight: 700;
          color: #94a3b8;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .services-checks {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 28px;
        }
        
        .services-check-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          background: #ffffff;
          color: #374151;
          font-size: 13px;
          font-weight: 500;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
        }
        
        .services-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          color: #ffffff;
          font-size: 15px;
          font-weight: 600;
          border-radius: 12px;
          text-decoration: none;
        }
        
        .services-benefits {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        
        .services-benefit-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 20px;
          background: #ffffff;
          border-radius: 14px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
        }
        
        .services-benefit-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .services-benefit-text {
          font-size: 16px;
          font-weight: 600;
          color: #0f172a;
        }
        
        /* Tablet */
        @media (max-width: 1000px) {
          .services-section {
            padding: 80px 0;
          }
          .services-container {
            padding: 0 24px;
          }
          .services-tabs {
            gap: 8px;
          }
          .services-tab {
            padding: 12px 18px;
            font-size: 13px;
          }
          .services-content {
            padding: 32px;
          }
          .services-content-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
        
        /* Mobile */
        @media (max-width: 640px) {
          .services-section {
            padding: 60px 0;
          }
          .services-container {
            padding: 0 20px;
          }
          .services-header {
            margin-bottom: 32px;
          }
          .services-badge {
            padding: 6px 12px;
            font-size: 12px;
            margin-bottom: 16px;
          }
          .services-title {
            font-size: 28px;
            margin-bottom: 12px;
          }
          .services-subtitle {
            font-size: 15px;
          }
          .services-tabs {
            flex-direction: column;
            gap: 8px;
            margin-bottom: 24px;
          }
          .services-tab {
            padding: 14px 18px;
            font-size: 14px;
            border-radius: 12px;
            width: 100%;
            justify-content: flex-start;
          }
          .services-tab svg {
            width: 22px;
            height: 22px;
          }
          .services-tab-text {
            white-space: normal;
            text-align: left;
          }
          .services-content {
            padding: 20px;
            border-radius: 20px;
          }
          .services-content-badge {
            padding: 5px 10px;
            font-size: 11px;
            margin-bottom: 12px;
          }
          .services-content-title {
            font-size: 22px;
            margin-bottom: 12px;
          }
          .services-content-desc {
            font-size: 14px;
            margin-bottom: 20px;
          }
          .services-content-label {
            font-size: 11px;
            margin-bottom: 12px;
          }
          .services-checks {
            gap: 6px;
            margin-bottom: 20px;
          }
          .services-check-item {
            padding: 6px 10px;
            font-size: 12px;
          }
          .services-cta {
            width: 100%;
            justify-content: center;
            padding: 14px 24px;
            font-size: 14px;
          }
          .services-benefits {
            gap: 10px;
          }
          .services-benefit-item {
            padding: 14px;
            border-radius: 12px;
          }
          .services-benefit-icon {
            width: 38px;
            height: 38px;
          }
          .services-benefit-text {
            font-size: 14px;
          }
          .services-orb {
            width: 400px;
            height: 400px;
          }
        }
      `}</style>
    </section>
  );
}
