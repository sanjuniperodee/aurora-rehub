'use client';

import { useEffect, useRef, useState } from 'react';

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
      className="about-section"
    >
      <div className="about-container">
        {/* Section header */}
        <div
          className="about-header"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease-out',
          }}
        >
          <span className="about-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            БПСДМ - Био Психо Социально Духовная Модель
          </span>

          <h2 className="about-title">
            Avrora Nomad — <span className="about-title-gradient">центр поддержки</span>
          </h2>
          <p className="about-subtitle">
            Пространство, где безопасно восстанавливаться и меняться
          </p>
        </div>

        {/* Main content */}
        <div className="about-content">
          <div
            className="about-text-block"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'all 0.6s ease-out 0.1s',
            }}
          >
            <p className="about-text">
              Это место, которое мы создали для действительной помощи людям, 
              которые столкнулись с болезнью &quot;Зависимостью&quot;.
            </p>
            <p className="about-text">
              Как не всем известно, <strong>98% реабилитационных центров</strong> во всем мире 
              работают по принципу &quot;Большого потока резидентов = большого потока денежных поступлений&quot;. 
              Это стандартная бизнес-модель.
            </p>
          </div>

          <div
            className="about-highlight-box"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.6s ease-out 0.2s',
            }}
          >
            <div className="about-highlight-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <div className="about-highlight-content">
              <h3 className="about-highlight-title">
                Всего 8 центров в мире практикуют этот подход
              </h3>
              <p className="about-highlight-text">
                Это уникальное пространство, в которое мы внедрили <strong>Био-Психо-Социально Духовную модель</strong>. 
                Во всем мире существует всего 8 центров, которые практикуют по-настоящему глубокий индивидуальный 
                и многоуровневый подход.
              </p>
              <p className="about-highlight-text">
                На нашем континенте подобных центров нет вовсе — потому что это дорого и требует не только времени, 
                но и огромной личной вовлеченности к резиденту самих сотрудников центра.
              </p>
            </div>
          </div>
        </div>

        {/* About center section */}
        <div
          className="about-center-section"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease-out 0.3s',
          }}
        >
          <div className="about-center-header">
            <span className="about-center-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              О нашем Центре
            </span>
            <h3 className="about-center-title">Открытая реабилитация</h3>
          </div>

          <div className="about-center-grid">
            <div className="about-center-card">
              <div className="about-center-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <p className="about-center-text">
                Это место, где людей <strong>не удерживают силой</strong> и не заставляют. 
                У нас открытая реабилитация: человек приходит за помощью сам и получает уважение, 
                поддержку и заботу.
              </p>
            </div>

            <div className="about-center-card">
              <div className="about-center-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <p className="about-center-text">
                Мы работаем <strong>24/7/365</strong> — круглосуточная поддержка и помощь 
                в любое время суток.
              </p>
            </div>

            <div className="about-center-card">
              <div className="about-center-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <p className="about-center-text">
                Это место, где человека <strong>принимают, понимают</strong> и помогают ему подняться. 
                Мы создаём безопасную среду, в которой резидент восстанавливает себя шаг за шагом — 
                через терапию, режим, спорт, поддержку и честную работу над собой.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          position: relative;
          padding: 100px 0;
          background: linear-gradient(180deg, #ffffff 0%, #f0f9ff 100%);
          overflow: hidden;
        }

        .about-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 32px;
          position: relative;
        }

        .about-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 60px;
        }

        .about-badge {
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

        .about-title {
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 800;
          color: #1e40af;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 20px;
        }

        .about-title-gradient {
          background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .about-subtitle {
          font-size: 18px;
          color: #64748b;
          line-height: 1.7;
        }

        .about-content {
          max-width: 1000px;
          margin: 0 auto 80px;
        }

        .about-text-block {
          margin-bottom: 40px;
        }

        .about-text {
          font-size: 17px;
          color: #475569;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .about-text strong {
          color: #1e40af;
          font-weight: 700;
        }

        .about-highlight-box {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(96, 165, 250, 0.08) 100%);
          border-radius: 24px;
          padding: 40px;
          border: 1px solid rgba(59, 130, 246, 0.2);
          display: flex;
          gap: 24px;
          align-items: flex-start;
        }

        .about-highlight-icon {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          flex-shrink: 0;
        }

        .about-highlight-content {
          flex: 1;
        }

        .about-highlight-title {
          font-size: clamp(22px, 3vw, 28px);
          font-weight: 800;
          color: #1e40af;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }

        .about-highlight-text {
          font-size: 16px;
          color: #475569;
          line-height: 1.8;
          margin-bottom: 12px;
        }

        .about-highlight-text strong {
          color: #1e40af;
          font-weight: 700;
        }

        .about-center-section {
          max-width: 1200px;
          margin: 0 auto;
        }

        .about-center-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .about-center-badge {
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
          margin-bottom: 20px;
        }

        .about-center-title {
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 800;
          color: #1e40af;
          letter-spacing: -0.02em;
        }

        .about-center-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .about-center-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 32px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .about-center-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(96, 165, 250, 0.1) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3b82f6;
          margin-bottom: 20px;
        }

        .about-center-text {
          font-size: 15px;
          color: #475569;
          line-height: 1.7;
        }

        .about-center-text strong {
          color: #1e40af;
          font-weight: 700;
        }

        @media (max-width: 1100px) {
          .about-container {
            padding: 0 24px;
          }
          .about-center-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 640px) {
          .about-section {
            padding: 60px 0;
          }
          .about-container {
            padding: 0 20px;
          }
          .about-header {
            margin-bottom: 40px;
          }
          .about-badge {
            padding: 6px 12px;
            font-size: 12px;
            margin-bottom: 16px;
          }
          .about-title {
            font-size: 28px;
            margin-bottom: 14px;
          }
          .about-subtitle {
            font-size: 16px;
          }
          .about-content {
            margin-bottom: 60px;
          }
          .about-text {
            font-size: 15px;
            margin-bottom: 16px;
          }
          .about-highlight-box {
            flex-direction: column;
            padding: 28px;
            gap: 20px;
          }
          .about-highlight-icon {
            width: 48px;
            height: 48px;
          }
          .about-highlight-title {
            font-size: 22px;
            margin-bottom: 12px;
          }
          .about-highlight-text {
            font-size: 14px;
            margin-bottom: 10px;
          }
          .about-center-header {
            margin-bottom: 32px;
          }
          .about-center-badge {
            padding: 6px 12px;
            font-size: 12px;
            margin-bottom: 14px;
          }
          .about-center-title {
            font-size: 24px;
          }
          .about-center-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .about-center-card {
            padding: 24px;
          }
          .about-center-icon {
            width: 44px;
            height: 44px;
            margin-bottom: 16px;
          }
          .about-center-text {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}
