'use client';

import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    number: '01',
    title: 'Записаться на бесплатную консультацию',
    description: 'Свяжитесь с нами любым удобным способом',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    color: '#3b82f6',
  },
  {
    number: '02',
    title: 'Справка 086/у или 075/у',
    description: 'Получите необходимую медицинскую справку',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    color: '#10b981',
  },
  {
    number: '03',
    title: 'Прибыть в центр',
    description: 'Приезжайте в наш реабилитационный центр',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    color: '#8b5cf6',
  },
  {
    number: '04',
    title: 'Заключить договор на оказание услуг',
    description: 'Оформление официальных документов',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    color: '#f59e0b',
  },
  {
    number: '05',
    title: 'Начать путь трезвости вместе с нами',
    description: 'Начало восстановления и новой жизни',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    color: '#ef4444',
  },
];

export default function HowToJoin() {
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
    <section ref={sectionRef} id="how-to-join" className="howtojoin-section">
      <div className="howtojoin-container">
        <div
          className="howtojoin-header"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease-out',
          }}
        >
          <span className="howtojoin-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            Как к нам попасть
          </span>
          <h2 className="howtojoin-title">
            Путь к <span className="howtojoin-title-gradient">восстановлению</span>
          </h2>
          <p className="howtojoin-subtitle">
            Простые шаги для начала вашего пути к новой жизни
          </p>
        </div>

        <div className="howtojoin-steps">
          {steps.map((step, i) => (
            <div
              key={i}
              className="howtojoin-step"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease-out ${0.1 + i * 0.1}s`,
              }}
            >
              <div className="howtojoin-step-number" style={{ color: step.color }}>
                {step.number}
              </div>
              <div
                className="howtojoin-step-icon"
                style={{
                  background: `linear-gradient(135deg, ${step.color}15 0%, ${step.color}25 100%)`,
                  color: step.color,
                }}
              >
                {step.icon}
              </div>
              <div className="howtojoin-step-content">
                <h3 className="howtojoin-step-title">{step.title}</h3>
                <p className="howtojoin-step-description">{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="howtojoin-step-connector" style={{ background: step.color }} />
              )}
            </div>
          ))}
        </div>

        <div
          className="howtojoin-cta"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease-out 0.6s',
          }}
        >
          <a href="#contact" className="howtojoin-cta-btn">
            Записаться на консультацию
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        .howtojoin-section {
          position: relative;
          padding: 100px 0;
          background: linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%);
          overflow: hidden;
        }

        .howtojoin-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
          position: relative;
        }

        .howtojoin-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 60px;
        }

        .howtojoin-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%);
          border-radius: 100px;
          border: 1px solid rgba(16, 185, 129, 0.2);
          font-size: 14px;
          font-weight: 600;
          color: #10b981;
          margin-bottom: 24px;
        }

        .howtojoin-title {
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 800;
          color: #1e40af;
          letter-spacing: -0.03em;
          margin-bottom: 16px;
        }

        .howtojoin-title-gradient {
          background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .howtojoin-subtitle {
          font-size: 17px;
          color: #64748b;
          line-height: 1.7;
        }

        .howtojoin-steps {
          display: flex;
          flex-direction: column;
          gap: 32px;
          margin-bottom: 48px;
        }

        .howtojoin-step {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 24px;
          background: #ffffff;
          border-radius: 20px;
          padding: 32px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          transition: all 0.3s ease;
        }

        .howtojoin-step:hover {
          transform: translateX(8px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          border-color: #cbd5e1;
        }

        .howtojoin-step-number {
          font-size: 32px;
          font-weight: 800;
          line-height: 1;
          min-width: 60px;
        }

        .howtojoin-step-icon {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .howtojoin-step-content {
          flex: 1;
        }

        .howtojoin-step-title {
          font-size: 20px;
          font-weight: 700;
          color: #1e40af;
          margin-bottom: 8px;
        }

        .howtojoin-step-description {
          font-size: 15px;
          color: #64748b;
          line-height: 1.6;
        }

        .howtojoin-step-connector {
          position: absolute;
          left: 92px;
          top: 96px;
          width: 2px;
          height: calc(100% + 32px);
          opacity: 0.3;
        }

        .howtojoin-step:last-child .howtojoin-step-connector {
          display: none;
        }

        .howtojoin-cta {
          text-align: center;
        }

        .howtojoin-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 18px 36px;
          background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
          color: #ffffff;
          font-size: 16px;
          font-weight: 600;
          border-radius: 14px;
          text-decoration: none;
          box-shadow: 0 8px 32px rgba(59, 130, 246, 0.35);
          transition: all 0.3s ease;
        }

        .howtojoin-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(59, 130, 246, 0.45);
        }

        @media (max-width: 900px) {
          .howtojoin-step {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }
          .howtojoin-step-number {
            min-width: auto;
          }
          .howtojoin-step-connector {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .howtojoin-section {
            padding: 60px 0;
          }
          .howtojoin-container {
            padding: 0 20px;
          }
          .howtojoin-header {
            margin-bottom: 40px;
          }
          .howtojoin-badge {
            padding: 6px 12px;
            font-size: 12px;
            margin-bottom: 16px;
          }
          .howtojoin-title {
            font-size: 28px;
            margin-bottom: 12px;
          }
          .howtojoin-subtitle {
            font-size: 15px;
          }
          .howtojoin-steps {
            gap: 24px;
            margin-bottom: 32px;
          }
          .howtojoin-step {
            padding: 24px;
            border-radius: 16px;
          }
          .howtojoin-step-number {
            font-size: 28px;
          }
          .howtojoin-step-icon {
            width: 56px;
            height: 56px;
          }
          .howtojoin-step-title {
            font-size: 18px;
            margin-bottom: 6px;
          }
          .howtojoin-step-description {
            font-size: 14px;
          }
          .howtojoin-cta-btn {
            padding: 16px 28px;
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  );
}

