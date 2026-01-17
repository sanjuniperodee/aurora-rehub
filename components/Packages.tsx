'use client';

import { useEffect, useRef, useState } from 'react';

const packages = [
  { name: 'Старт', description: 'Базовая программа', color: '#64748b', features: ['Стационар в центре', '3-разовое питание + полдник', 'Консультации с директором', 'Баня', 'Работа с психологом', 'Творческие навыки'] },
  { name: 'Стандарт', description: 'Расширенная программа', color: '#3b82f6', features: ['Всё из Старт', 'Выезды в горы', 'Йога с тренером', 'Дыхательные практики'] },
  { name: 'Апгрейд', description: 'Популярный выбор', color: '#10b981', featured: true, features: ['Всё из Стандарт', 'Спортзал 2р/нед', 'Консультации с учредителями', 'Нарколог', 'Чек-ап', 'Иппотерапия', 'Саумал терапия'] },
  { name: 'Ультра', description: 'Продвинутая', color: '#8b5cf6', features: ['Всё из Апгрейд', 'Проф. ориентация', 'Медикаменты', 'Витамины'] },
  { name: 'Фулл', description: 'Полная программа', color: '#f59e0b', features: ['Всё из Ультра', 'Семейная проработка'] },
  { name: 'Макс', description: 'Максимальная', color: '#ef4444', features: ['Всё из Фулл', 'Комплексная семейная', 'Работа с СОЗ'] },
];

export default function Packages() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(2);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const pkg = packages[selectedPackage];

  return (
    <section ref={sectionRef} id="packages" className="packages-section">
      <div className="packages-orb" style={{ background: `radial-gradient(circle, ${pkg.color}10 0%, transparent 70%)` }} />

      <div className="packages-container">
        <div
          className="packages-header"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease-out',
          }}
        >
          <span className="packages-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 7h-9M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/>
            </svg>
            Пакеты услуг
          </span>
          <h2 className="packages-title">
            Выберите свою <span className="packages-title-gradient">программу</span>
          </h2>
          <p className="packages-subtitle">От базового до максимального уровня поддержки</p>
        </div>

        <div
          className="packages-tabs"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease-out 0.1s',
          }}
        >
          {packages.map((p, i) => (
            <button
              key={i}
              onClick={() => setSelectedPackage(i)}
              className={`packages-tab ${selectedPackage === i ? 'active' : ''}`}
              style={{
                background: selectedPackage === i 
                  ? `linear-gradient(135deg, ${p.color} 0%, ${p.color}dd 100%)`
                  : '#ffffff',
                color: selectedPackage === i ? '#ffffff' : '#64748b',
                borderColor: selectedPackage === i ? 'transparent' : '#e2e8f0',
                boxShadow: selectedPackage === i ? `0 8px 24px ${p.color}40` : '0 2px 8px rgba(0,0,0,0.04)',
              }}
            >
              {p.name}
              {p.featured && selectedPackage !== i && <span className="packages-tab-badge">хит</span>}
            </button>
          ))}
        </div>

        <div
          className="packages-card-wrapper"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease-out 0.2s',
          }}
        >
          <div
            className="packages-card"
            style={{
              background: pkg.featured 
                ? `linear-gradient(135deg, ${pkg.color} 0%, ${pkg.color}dd 100%)`
                : '#ffffff',
              boxShadow: pkg.featured 
                ? `0 24px 48px ${pkg.color}30`
                : '0 8px 32px rgba(0,0,0,0.06)',
            }}
          >
            <div className="packages-card-header">
              <div
                className="packages-card-badge"
                style={{
                  background: pkg.featured ? 'rgba(255,255,255,0.2)' : `${pkg.color}15`,
                  color: pkg.featured ? '#ffffff' : pkg.color,
                }}
              >
                {pkg.description}
              </div>
              <h3
                className="packages-card-title"
                style={{ color: pkg.featured ? '#ffffff' : '#0f172a' }}
              >
                {pkg.name}
              </h3>
            </div>

            <div className="packages-features">
              {pkg.features.map((feature, i) => (
                <div
                  key={i}
                  className="packages-feature"
                  style={{
                    background: pkg.featured ? 'rgba(255,255,255,0.12)' : '#f8fafc',
                    borderColor: pkg.featured ? 'rgba(255,255,255,0.1)' : '#e2e8f0',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={pkg.featured ? '#ffffff' : pkg.color} strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span style={{ color: pkg.featured ? '#ffffff' : '#374151' }}>{feature}</span>
                </div>
              ))}
            </div>

            <div className="packages-cta">
              <a
                href="#contact"
                className="packages-cta-main"
                style={{
                  background: pkg.featured ? '#ffffff' : `linear-gradient(135deg, ${pkg.color} 0%, ${pkg.color}dd 100%)`,
                  color: pkg.featured ? pkg.color : '#ffffff',
                  boxShadow: pkg.featured ? 'none' : `0 8px 24px ${pkg.color}40`,
                }}
              >
                Узнать цену
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a
                href="https://wa.me/87712466646"
                target="_blank"
                rel="noopener noreferrer"
                className="packages-cta-wa"
                style={{
                  background: pkg.featured ? 'rgba(255,255,255,0.15)' : '#f8fafc',
                  color: pkg.featured ? '#ffffff' : '#374151',
                  borderColor: pkg.featured ? 'rgba(255,255,255,0.2)' : '#e2e8f0',
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .packages-section {
          position: relative;
          padding: 100px 0;
          background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
          overflow: hidden;
        }
        .packages-orb {
          position: absolute;
          top: 20%;
          left: -10%;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(60px);
          transition: background 0.5s ease;
        }
        .packages-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 32px;
          position: relative;
        }
        .packages-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 48px;
        }
        .packages-badge {
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
        .packages-title {
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.03em;
          margin-bottom: 16px;
        }
        .packages-title-gradient {
          background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .packages-subtitle {
          font-size: 17px;
          color: #64748b;
          line-height: 1.7;
        }
        .packages-tabs {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        .packages-tab {
          position: relative;
          padding: 12px 20px;
          font-size: 14px;
          font-weight: 600;
          border-radius: 12px;
          border: 1px solid;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .packages-tab-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          padding: 3px 8px;
          background: #10b981;
          color: #ffffff;
          font-size: 9px;
          font-weight: 700;
          border-radius: 6px;
          text-transform: uppercase;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
        }
        .packages-card-wrapper {
          max-width: 700px;
          margin: 0 auto;
        }
        .packages-card {
          border-radius: 28px;
          padding: 40px;
          border: 1px solid #e2e8f0;
          transition: all 0.5s ease;
        }
        .packages-card-header {
          text-align: center;
          margin-bottom: 32px;
        }
        .packages-card-badge {
          display: inline-flex;
          padding: 6px 14px;
          font-size: 13px;
          font-weight: 600;
          border-radius: 8px;
          margin-bottom: 14px;
        }
        .packages-card-title {
          font-size: clamp(28px, 5vw, 36px);
          font-weight: 800;
          letter-spacing: -0.02em;
        }
        .packages-features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin-bottom: 32px;
        }
        .packages-feature {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          border-radius: 10px;
          border: 1px solid;
        }
        .packages-feature span {
          font-size: 13px;
          font-weight: 500;
        }
        .packages-cta {
          display: flex;
          gap: 12px;
        }
        .packages-cta-main {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 24px;
          font-size: 15px;
          font-weight: 600;
          border-radius: 12px;
          text-decoration: none;
        }
        .packages-cta-wa {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px 20px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 12px;
          text-decoration: none;
          border: 1px solid;
        }
        
        @media (max-width: 900px) {
          .packages-section { padding: 80px 0; }
          .packages-container { padding: 0 24px; }
          .packages-tabs { gap: 8px; }
          .packages-tab { padding: 10px 16px; font-size: 13px; }
        }
        
        @media (max-width: 640px) {
          .packages-section { padding: 60px 0; }
          .packages-container { padding: 0 20px; }
          .packages-header { margin-bottom: 32px; }
          .packages-badge { padding: 6px 12px; font-size: 12px; margin-bottom: 16px; }
          .packages-title { font-size: 28px; margin-bottom: 12px; }
          .packages-subtitle { font-size: 15px; }
          .packages-tabs { gap: 6px; margin-bottom: 28px; }
          .packages-tab { padding: 8px 12px; font-size: 12px; border-radius: 10px; }
          .packages-tab-badge { padding: 2px 6px; font-size: 8px; top: -6px; right: -6px; }
          .packages-card { padding: 24px; border-radius: 20px; }
          .packages-card-header { margin-bottom: 24px; }
          .packages-card-badge { padding: 5px 10px; font-size: 11px; margin-bottom: 10px; }
          .packages-card-title { font-size: 26px; }
          .packages-features { grid-template-columns: 1fr; gap: 8px; margin-bottom: 24px; }
          .packages-feature { padding: 10px 14px; }
          .packages-feature span { font-size: 12px; }
          .packages-cta { flex-direction: column; gap: 10px; }
          .packages-cta-main { padding: 14px 20px; font-size: 14px; }
          .packages-cta-wa { padding: 14px 20px; }
          .packages-orb { width: 250px; height: 250px; }
        }
      `}</style>
    </section>
  );
}
