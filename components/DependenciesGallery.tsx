'use client';

import { useEffect, useRef, useState } from 'react';

const dependencies = [
  {
    title: 'Наркозависимость',
    description: 'Комплексная помощь при наркотической зависимости',
    image: '/dependencies/drug-addiction.jpg',
    color: '#dc2626',
  },
  {
    title: 'Алкоголизм',
    description: 'Восстановление от алкогольной зависимости',
    image: '/dependencies/alcoholism.jpg',
    color: '#ea580c',
  },
  {
    title: 'Лудомания',
    description: 'Помощь при игровой зависимости',
    image: '/dependencies/gambling.jpg',
    color: '#7c3aed',
  },
];

export default function DependenciesGallery() {
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
    <section ref={sectionRef} id="dependencies" className="dependencies-section">
      <div className="dependencies-container">
        <div
          className="dependencies-header"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease-out',
          }}
        >
          <span className="dependencies-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
            С чем мы работаем
          </span>
          <h2 className="dependencies-title">
            Понимание <span className="dependencies-title-gradient">проблемы</span>
          </h2>
          <p className="dependencies-subtitle">
            Мы помогаем людям, столкнувшимся с различными видами зависимостей
          </p>
        </div>

        <div className="dependencies-grid">
          {dependencies.map((dep, i) => (
            <div
              key={i}
              className="dependency-card"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease-out ${0.1 + i * 0.1}s`,
              }}
            >
              <div className="dependency-image-wrapper">
                <img 
                  src={dep.image} 
                  alt={dep.title}
                  className="dependency-image"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const placeholder = target.nextElementSibling as HTMLElement;
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                />
                <div 
                  className="dependency-image-placeholder"
                  style={{ display: 'none' }}
                >
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke={dep.color} strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                  <span style={{ color: dep.color, marginTop: '12px', fontSize: '14px', fontWeight: 600 }}>
                    {dep.title}
                  </span>
                </div>
                <div className="dependency-image-overlay" style={{ background: `linear-gradient(135deg, ${dep.color}40 0%, ${dep.color}60 100%)` }} />
              </div>
              <div className="dependency-content">
                <h3 className="dependency-title">{dep.title}</h3>
                <p className="dependency-description">{dep.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .dependencies-section {
          position: relative;
          padding: 80px 0;
          background: linear-gradient(180deg, #ffffff 0%, #f0f9ff 100%);
          overflow: hidden;
        }

        .dependencies-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 32px;
          position: relative;
        }

        .dependencies-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 60px;
        }

        .dependencies-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(96, 165, 250, 0.1) 100%);
          border-radius: 100px;
          border: 1px solid rgba(59, 130, 246, 0.2);
          font-size: 14px;
          font-weight: 600;
          color: #2563eb;
          margin-bottom: 24px;
        }

        .dependencies-title {
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 800;
          color: #1e40af;
          letter-spacing: -0.03em;
          margin-bottom: 16px;
        }

        .dependencies-title-gradient {
          background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .dependencies-subtitle {
          font-size: 17px;
          color: #64748b;
          line-height: 1.7;
        }

        .dependencies-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .dependency-card {
          background: #ffffff;
          border-radius: 20px;
          border: 1px solid #e2e8f0;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .dependency-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
          border-color: #cbd5e1;
        }

        .dependency-image-wrapper {
          width: 100%;
          height: 200px;
          position: relative;
          overflow: hidden;
        }

        .dependency-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.3s ease;
        }

        .dependency-card:hover .dependency-image {
          transform: scale(1.05);
        }

        .dependency-image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.3;
          pointer-events: none;
        }

        .dependency-image-placeholder {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(220, 38, 38, 0.25) 100%);
        }

        .dependency-content {
          padding: 24px;
        }

        .dependency-title {
          font-size: 20px;
          font-weight: 700;
          color: #1e40af;
          margin-bottom: 10px;
        }

        .dependency-description {
          font-size: 14px;
          color: #64748b;
          line-height: 1.6;
        }

        @media (max-width: 1000px) {
          .dependencies-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 640px) {
          .dependencies-section {
            padding: 60px 0;
          }
          .dependencies-container {
            padding: 0 20px;
          }
          .dependencies-header {
            margin-bottom: 40px;
          }
          .dependencies-badge {
            padding: 6px 12px;
            font-size: 12px;
            margin-bottom: 16px;
          }
          .dependencies-title {
            font-size: 28px;
            margin-bottom: 12px;
          }
          .dependencies-subtitle {
            font-size: 15px;
          }
          .dependencies-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .dependency-image-wrapper {
            height: 160px;
          }
          .dependency-content {
            padding: 20px;
          }
          .dependency-title {
            font-size: 18px;
          }
          .dependency-description {
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  );
}

