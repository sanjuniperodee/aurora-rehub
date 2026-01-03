'use client';

import { useEffect, useRef, useState } from 'react';

const benefits = [
  { 
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 12v10H4V12"/><path d="M2 7h20v5H2z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>), 
    title: 'Бесплатное лечение', 
    description: 'Полный курс реабилитации без оплаты', 
    color: '#3b82f6' 
  },
  { 
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>), 
    title: 'Медиа-участие', 
    description: 'Вдохновляете других своей историей', 
    color: '#ef4444' 
  },
  { 
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>), 
    title: 'Поддержка команды', 
    description: 'Полное сопровождение специалистов', 
    color: '#10b981' 
  },
  { 
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>), 
    title: 'Ваш контроль', 
    description: 'Согласовываем все публикации', 
    color: '#8b5cf6' 
  },
];

export default function SocialProject() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="social" className="social-section">
      <div className="social-orb social-orb-1" />
      <div className="social-orb social-orb-2" />

      <div className="social-container">
        <div
          className="social-content"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease-out',
          }}
        >
          <span className="social-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0z"/>
            </svg>
            Социальный проект
          </span>
          <h2 className="social-title">
            Второй шанс — <span className="social-title-gradient">бесплатно</span>
          </h2>
          <p className="social-subtitle">
            Уникальная возможность пройти полный курс реабилитации бесплатно.
            Мы публикуем вашу историю выздоровления, чтобы вдохновить других.
          </p>
        </div>

        <div className="social-grid">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="social-card"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s ease-out ${0.15 + i * 0.08}s`,
              }}
            >
              <div className="social-icon" style={{ background: `linear-gradient(135deg, ${benefit.color}20 0%, ${benefit.color}30 100%)`, color: benefit.color }}>
                {benefit.icon}
              </div>
              <h3 className="social-card-title">{benefit.title}</h3>
              <p className="social-card-desc">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div
          className="social-cta"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.5s ease-out 0.5s',
          }}
        >
          <div className="social-cta-box">
            <div className="social-cta-text">
              <span className="social-cta-label">Готовы изменить свою жизнь?</span>
              <span className="social-cta-title">Подайте заявку на участие в проекте</span>
            </div>
            <a href="#contact" className="social-cta-btn">
              Подать заявку
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .social-section { position: relative; padding: 100px 0; background: linear-gradient(180deg, #f8fafc 0%, #e0f2fe 100%); overflow: hidden; }
        .social-orb { position: absolute; border-radius: 50%; filter: blur(80px); }
        .social-orb-1 { top: 20%; left: -10%; width: 500px; height: 500px; background: radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%); }
        .social-orb-2 { bottom: 10%; right: -10%; width: 500px; height: 500px; background: radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%); }
        .social-container { max-width: 1200px; margin: 0 auto; padding: 0 32px; position: relative; }
        .social-content { text-align: center; max-width: 750px; margin: 0 auto 60px; }
        .social-badge { display: inline-flex; align-items: center; gap: 8px; padding: 8px 16px; background: linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(245, 158, 11, 0.1) 100%); border-radius: 100px; border: 1px solid rgba(239, 68, 68, 0.2); font-size: 14px; font-weight: 600; color: #ef4444; margin-bottom: 24px; }
        .social-title { font-size: clamp(32px, 5vw, 52px); font-weight: 800; color: #0f172a; letter-spacing: -0.03em; margin-bottom: 20px; }
        .social-title-gradient { background: linear-gradient(135deg, #ef4444 0%, #f59e0b 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .social-subtitle { font-size: 17px; color: #475569; line-height: 1.8; }
        .social-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 48px; }
        .social-card { padding: 28px; background: rgba(255,255,255,0.9); backdrop-filter: blur(10px); border-radius: 20px; border: 1px solid rgba(226, 232, 240, 0.5); text-align: center; transition: all 0.3s ease; }
        .social-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
        .social-icon { width: 60px; height: 60px; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; }
        .social-card-title { font-size: 16px; font-weight: 700; color: #0f172a; margin-bottom: 8px; }
        .social-card-desc { font-size: 13px; color: #64748b; line-height: 1.5; }
        .social-cta { text-align: center; }
        .social-cta-box { display: inline-flex; align-items: center; gap: 32px; padding: 24px 36px; background: rgba(255,255,255,0.95); backdrop-filter: blur(20px); border-radius: 20px; border: 1px solid rgba(226, 232, 240, 0.5); box-shadow: 0 20px 50px rgba(0,0,0,0.15); flex-wrap: wrap; justify-content: center; }
        .social-cta-text { text-align: left; }
        .social-cta-label { display: block; font-size: 13px; color: #64748b; margin-bottom: 4px; }
        .social-cta-title { font-size: 18px; font-weight: 700; color: #0f172a; }
        .social-cta-btn { display: inline-flex; align-items: center; gap: 10px; padding: 16px 32px; background: linear-gradient(135deg, #ef4444 0%, #f59e0b 100%); color: #ffffff; font-size: 15px; font-weight: 600; border-radius: 12px; text-decoration: none; box-shadow: 0 8px 24px rgba(239, 68, 68, 0.35); transition: all 0.3s ease; }
        .social-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(239, 68, 68, 0.45); }
        
        @media (max-width: 1000px) {
          .social-grid { grid-template-columns: repeat(2, 1fr); }
        }
        
        @media (max-width: 640px) {
          .social-section { padding: 60px 0; }
          .social-container { padding: 0 20px; }
          .social-content { margin-bottom: 40px; }
          .social-badge { padding: 6px 12px; font-size: 12px; margin-bottom: 16px; }
          .social-title { font-size: 28px; margin-bottom: 14px; }
          .social-subtitle { font-size: 15px; }
          .social-grid { grid-template-columns: 1fr; gap: 14px; margin-bottom: 32px; }
          .social-card { padding: 22px; border-radius: 16px; }
          .social-icon { width: 52px; height: 52px; border-radius: 14px; margin-bottom: 12px; }
          .social-card-title { font-size: 15px; margin-bottom: 6px; }
          .social-card-desc { font-size: 12px; }
          .social-cta-box { flex-direction: column; gap: 18px; padding: 24px; width: 100%; text-align: center; }
          .social-cta-text { text-align: center; }
          .social-cta-label { font-size: 12px; }
          .social-cta-title { font-size: 16px; }
          .social-cta-btn { width: 100%; justify-content: center; padding: 14px 24px; font-size: 14px; }
          .social-orb { width: 250px; height: 250px; }
        }
      `}</style>
    </section>
  );
}
