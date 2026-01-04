'use client';

import { useEffect, useRef, useState } from 'react';

const features = [
  { icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>), title: 'Комфортное проживание', description: 'Уютные комнаты с современным ремонтом', color: '#3b82f6' },
  { icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>), title: '3-разовое питание', description: 'Сбалансированное домашнее питание', color: '#f59e0b' },
  { icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>), title: 'Режим дня', description: 'Чёткий распорядок формирует привычки', color: '#8b5cf6' },
  { icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>), title: 'Безопасность 24/7', description: 'Охраняемая территория', color: '#10b981' },
];

const schedule = [
  { time: '08:00', activity: 'Подъем' },
  { time: '08:00 - 08:20', activity: 'Личная гигиена' },
  { time: '08:20 - 08:30', activity: 'Зарядка (Йога)' },
  { time: '08:30 - 08:55', activity: 'Уборка дома' },
  { time: '09:00 - 09:30', activity: 'Завтрак' },
  { time: '09:30 - 10:00', activity: 'РПЗ' },
  { time: '10:00 - 12:00', activity: 'Лекция, Видеолекция' },
  { time: '12:00 - 12:30', activity: 'Разбор обсуждение мероприятия' },
  { time: '12:30 - 13:00', activity: 'РПЗ' },
  { time: '13:00 - 13:30', activity: 'Обед' },
  { time: '13:30 - 15:00', activity: 'Личное время' },
  { time: '15:00 - 16:00', activity: 'Вычитка основного задания' },
  { time: '16:00 - 16:30', activity: 'РПЗ' },
  { time: '16:30 - 17:50', activity: 'ГСП' },
  { time: '18:00 - 18:30', activity: 'Ужин' },
  { time: '18:30 - 19:00', activity: 'РПЗ' },
  { time: '19:00 - 21:00', activity: 'Просмотр фильма' },
  { time: '21:00 - 21:30', activity: 'РПЗ' },
  { time: '21:30 - 22:30', activity: 'Итоги дня' },
  { time: '22:30 - 23:20', activity: 'Личное время' },
  { time: '23:30', activity: 'Отбой' },
];


export default function LivingConditions() {
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
    <section ref={sectionRef} id="living" className="living-section">
      <div className="living-orb" />

      <div className="living-container">
        <div
          className="living-header"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease-out',
          }}
        >
          <span className="living-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Условия проживания
          </span>
          <h2 className="living-title">
            Комфорт для <span className="living-title-gradient">восстановления</span>
          </h2>
          <p className="living-subtitle">Каждая деталь продумана для эффективного восстановления</p>
        </div>

        <div className="living-grid">
          <div className="living-left">
            <div className="living-features">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="living-feature"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.5s ease-out ${0.1 + i * 0.05}s`,
                  }}
                >
                  <div className="living-feature-icon" style={{ background: `linear-gradient(135deg, ${feature.color}15 0%, ${feature.color}25 100%)`, color: feature.color }}>
                    {feature.icon}
                  </div>
                  <h3 className="living-feature-title">{feature.title}</h3>
                  <p className="living-feature-desc">{feature.description}</p>
                </div>
              ))}
            </div>

            <div
              className="living-cta-box"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.5s ease-out 0.3s',
              }}
            >
              <h3 className="living-cta-title">Хотите увидеть центр?</h3>
              <p className="living-cta-text">Запишитесь на экскурсию или виртуальный тур</p>
              <a href="#contact" className="living-cta-btn">
                Записаться
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>

          <div
            className="living-schedule"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 0.6s ease-out 0.2s',
            }}
          >
            <div className="living-schedule-header">
              <div className="living-schedule-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div>
                <h3 className="living-schedule-title">Распорядок дня</h3>
                <p className="living-schedule-subtitle">Структурированный режим</p>
              </div>
            </div>
            <div className="living-schedule-list">
              {schedule.map((item, i) => (
                <div key={i} className="living-schedule-item">
                  <span className="living-schedule-time">{item.time}</span>
                  <span className="living-schedule-activity">{item.activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center Photos Gallery */}
        <div
          className="living-gallery"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease-out 0.4s',
          }}
        >
          <h3 className="living-gallery-title">Фотографии центра</h3>
          <div className="living-gallery-grid">
            {[
              { src: '/center/center-1.jpg', alt: 'Фото центра 1' },
              { src: '/center/center-2.jpg', alt: 'Фото центра 2' },
              { src: '/center/center-3.png', alt: 'Фото центра 3' },
              { src: '/center/center-4.png', alt: 'Фото центра 4' },
              { src: '/center/center-5.png', alt: 'Фото центра 5' },
            ].map((photo, i) => (
              <div key={i} className="living-gallery-item">
                <img 
                  src={photo.src} 
                  alt={photo.alt}
                  className="living-gallery-img"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const placeholder = target.parentElement?.querySelector('.living-gallery-placeholder') as HTMLElement;
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                />
                <div className="living-gallery-placeholder" style={{ display: 'none' }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                  <span style={{ marginTop: '8px', fontSize: '12px', color: '#64748b' }}>
                    {photo.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .living-section { position: relative; padding: 100px 0; background: #ffffff; overflow: hidden; }
        .living-orb { position: absolute; top: 10%; right: -15%; width: 600px; height: 600px; border-radius: 50%; background: radial-gradient(circle, rgba(245, 158, 11, 0.05) 0%, transparent 70%); filter: blur(40px); }
        .living-container { max-width: 1400px; margin: 0 auto; padding: 0 32px; position: relative; }
        .living-header { text-align: center; max-width: 700px; margin: 0 auto 60px; }
        .living-badge { display: inline-flex; align-items: center; gap: 8px; padding: 8px 16px; background: linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(239, 68, 68, 0.1) 100%); border-radius: 100px; border: 1px solid rgba(245, 158, 11, 0.2); font-size: 14px; font-weight: 600; color: #f59e0b; margin-bottom: 24px; }
        .living-title { font-size: clamp(32px, 5vw, 52px); font-weight: 800; color: #0f172a; letter-spacing: -0.03em; margin-bottom: 16px; }
        .living-title-gradient { background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .living-subtitle { font-size: 17px; color: #64748b; line-height: 1.7; }
        .living-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start; }
        .living-left { display: flex; flex-direction: column; gap: 20px; }
        .living-features { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .living-feature { padding: 24px; background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%); border-radius: 18px; border: 1px solid #e2e8f0; }
        .living-feature-icon { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; }
        .living-feature-title { font-size: 16px; font-weight: 700; color: #0f172a; margin-bottom: 6px; }
        .living-feature-desc { font-size: 13px; color: #64748b; line-height: 1.5; }
        .living-cta-box { padding: 28px; background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); border-radius: 20px; }
        .living-cta-title { font-size: 18px; font-weight: 700; color: #ffffff; margin-bottom: 10px; }
        .living-cta-text { font-size: 14px; color: rgba(255,255,255,0.9); margin-bottom: 18px; }
        .living-cta-btn { display: inline-flex; align-items: center; gap: 10px; padding: 12px 24px; background: #ffffff; color: #2563eb; font-size: 14px; font-weight: 600; border-radius: 10px; text-decoration: none; box-shadow: 0 8px 24px rgba(255, 255, 255, 0.3); }
        .living-gallery { margin-top: 60px; }
        .living-gallery-title { font-size: 24px; font-weight: 700; color: #1e40af; margin-bottom: 24px; text-align: center; }
        .living-gallery-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; }
        .living-gallery-item { aspect-ratio: 1; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; background: #f8fafc; }
        .living-gallery-placeholder { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; }
        .living-gallery-img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .living-schedule { padding: 32px; background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-radius: 24px; border: 1px solid #fcd34d; }
        .living-schedule-header { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
        .living-schedule-icon { width: 44px; height: 44px; border-radius: 12px; background: rgba(245, 158, 11, 0.2); display: flex; align-items: center; justify-content: center; }
        .living-schedule-title { font-size: 18px; font-weight: 700; color: #92400e; }
        .living-schedule-subtitle { font-size: 13px; color: #a16207; }
        .living-schedule-list { display: flex; flex-direction: column; gap: 6px; }
        .living-schedule-item { display: flex; align-items: center; gap: 14px; padding: 10px 14px; background: rgba(255,255,255,0.6); border-radius: 10px; }
        .living-schedule-time { font-size: 12px; font-weight: 700; color: #d97706; min-width: 100px; }
        .living-schedule-activity { font-size: 12px; color: #78350f; line-height: 1.4; }
        
        @media (max-width: 900px) {
          .living-section { padding: 80px 0; }
          .living-container { padding: 0 24px; }
          .living-grid { grid-template-columns: 1fr; gap: 32px; }
        }
        
        @media (max-width: 640px) {
          .living-section { padding: 60px 0; }
          .living-container { padding: 0 20px; }
          .living-header { margin-bottom: 40px; }
          .living-badge { padding: 6px 12px; font-size: 12px; margin-bottom: 16px; }
          .living-title { font-size: 28px; margin-bottom: 12px; }
          .living-subtitle { font-size: 15px; }
          .living-features { grid-template-columns: 1fr; gap: 12px; }
          .living-feature { padding: 18px; border-radius: 14px; }
          .living-feature-icon { width: 42px; height: 42px; margin-bottom: 12px; }
          .living-feature-title { font-size: 15px; }
          .living-feature-desc { font-size: 12px; }
          .living-cta-box { padding: 20px; border-radius: 16px; }
          .living-cta-title { font-size: 16px; }
          .living-cta-text { font-size: 13px; margin-bottom: 14px; }
          .living-cta-btn { padding: 12px 20px; font-size: 13px; width: 100%; justify-content: center; }
          .living-schedule { padding: 24px; border-radius: 18px; }
          .living-schedule-header { margin-bottom: 18px; }
          .living-schedule-icon { width: 40px; height: 40px; }
          .living-schedule-title { font-size: 16px; }
          .living-schedule-subtitle { font-size: 12px; }
          .living-schedule-item { padding: 8px 12px; }
          .living-schedule-time { font-size: 11px; min-width: 90px; }
          .living-schedule-activity { font-size: 11px; }
          .living-orb { width: 300px; height: 300px; }
          .living-gallery { margin-top: 40px; }
          .living-gallery-title { font-size: 20px; margin-bottom: 20px; }
          .living-gallery-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
        }
      `}</style>
    </section>
  );
}
