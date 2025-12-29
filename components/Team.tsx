'use client';

import { useEffect, useRef, useState } from 'react';

const team = [
  { name: 'Директор центра', role: 'Руководитель программы', description: 'Координирует работу центра и индивидуальный подход', icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>), color: '#3b82f6' },
  { name: 'Психолог', role: 'Клинический психолог', description: 'Индивидуальная и групповая терапия', icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5L14 21h-4l0-11.5C8.8 8.8 8 7.5 8 6a4 4 0 0 1 4-4z"/><path d="M8 6c-2 0-4 1.5-4 4s2 4 4 4"/><path d="M16 6c2 0 4 1.5 4 4s-2 4-4 4"/></svg>), color: '#8b5cf6' },
  { name: 'Аддиктолог', role: 'Специалист по зависимостям', description: 'Профессиональное сопровождение и консультации', icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>), color: '#ef4444' },
  { name: 'Нарколог', role: 'Врач-нарколог', description: 'Медицинское наблюдение и лечение', icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>), color: '#10b981' },
  { name: 'Тренер', role: 'Спортивный инструктор', description: 'Физическое восстановление и дисциплина', icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 5v14"/><path d="M18 5v14"/><path d="M6 9h12"/><path d="M6 15h12"/><circle cx="3" cy="9" r="2"/><circle cx="21" cy="9" r="2"/><circle cx="3" cy="15" r="2"/><circle cx="21" cy="15" r="2"/></svg>), color: '#f59e0b' },
  { name: 'Инструктор йоги', role: 'Практик йоги', description: 'Дыхательные практики и медитация', icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="5" r="2"/><path d="M4 20l4-9 4 9"/><path d="M12 20l4-9 4 9"/><path d="M8 14h8"/></svg>), color: '#6366f1' },
];

export default function Team() {
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
    <section ref={sectionRef} id="team" className="team-section">
      <div className="team-orb team-orb-1" />
      <div className="team-orb team-orb-2" />

      <div className="team-container">
        <div
          className="team-header"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease-out',
          }}
        >
          <span className="team-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            Команда специалистов
          </span>
          <h2 className="team-title">
            Наши <span className="team-title-gradient">профессионалы</span>
          </h2>
          <p className="team-subtitle">
            Команда экспертов с многолетним опытом работы в сфере реабилитации
          </p>
        </div>

        <div className="team-grid">
          {team.map((member, i) => (
            <div
              key={i}
              className="team-card"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.5s ease-out ${0.1 + i * 0.08}s`,
              }}
            >
              <div
                className="team-avatar"
                style={{
                  background: `linear-gradient(135deg, ${member.color}15 0%, ${member.color}25 100%)`,
                  borderColor: `${member.color}30`,
                }}
              >
                <div style={{ color: member.color }}>{member.icon}</div>
              </div>
              <h3 className="team-name">{member.name}</h3>
              <span className="team-role" style={{ background: `${member.color}15`, color: member.color }}>
                {member.role}
              </span>
              <p className="team-desc">{member.description}</p>
            </div>
          ))}
        </div>

        <div
          className="team-cta"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.5s ease-out 0.6s',
          }}
        >
          <div className="team-cta-content">
            <div className="team-cta-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div className="team-cta-text">
              <span className="team-cta-label">Познакомьтесь с нашей командой</span>
              <span className="team-cta-title">Запишитесь на консультацию</span>
            </div>
          </div>
          <a href="#contact" className="team-cta-btn">
            Записаться
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        .team-section { position: relative; padding: 100px 0; background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%); overflow: hidden; }
        .team-orb { position: absolute; border-radius: 50%; filter: blur(60px); }
        .team-orb-1 { top: 10%; left: -10%; width: 400px; height: 400px; background: radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%); }
        .team-orb-2 { bottom: 10%; right: -10%; width: 400px; height: 400px; background: radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%); }
        .team-container { max-width: 1400px; margin: 0 auto; padding: 0 32px; position: relative; }
        .team-header { text-align: center; max-width: 700px; margin: 0 auto 60px; }
        .team-badge { display: inline-flex; align-items: center; gap: 8px; padding: 8px 16px; background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%); border-radius: 100px; border: 1px solid rgba(59, 130, 246, 0.2); font-size: 14px; font-weight: 600; color: #3b82f6; margin-bottom: 24px; }
        .team-title { font-size: clamp(32px, 5vw, 52px); font-weight: 800; color: #0f172a; letter-spacing: -0.03em; margin-bottom: 16px; }
        .team-title-gradient { background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .team-subtitle { font-size: 17px; color: #64748b; line-height: 1.7; }
        .team-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 48px; }
        .team-card { padding: 32px 24px; background: #ffffff; border-radius: 20px; border: 1px solid #e2e8f0; text-align: center; transition: all 0.3s ease; }
        .team-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); border-color: #cbd5e1; }
        .team-avatar { width: 72px; height: 72px; border-radius: 20px; display: flex; align-items: center; justify-content: center; margin: 0 auto 18px; border: 1px solid; }
        .team-name { font-size: 18px; font-weight: 700; color: #0f172a; margin-bottom: 10px; }
        .team-role { display: inline-block; padding: 5px 12px; font-size: 12px; font-weight: 600; border-radius: 6px; margin-bottom: 14px; }
        .team-desc { font-size: 14px; color: #64748b; line-height: 1.6; }
        .team-cta { display: flex; align-items: center; justify-content: space-between; padding: 28px 36px; background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%); border-radius: 20px; border: 1px solid #e2e8f0; flex-wrap: wrap; gap: 20px; }
        .team-cta-content { display: flex; align-items: center; gap: 16px; }
        .team-cta-icon { width: 56px; height: 56px; border-radius: 14px; background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .team-cta-text { display: flex; flex-direction: column; gap: 4px; }
        .team-cta-label { font-size: 13px; color: #64748b; }
        .team-cta-title { font-size: 17px; font-weight: 700; color: #0f172a; }
        .team-cta-btn { display: inline-flex; align-items: center; gap: 10px; padding: 14px 28px; background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); color: #ffffff; font-size: 15px; font-weight: 600; border-radius: 12px; text-decoration: none; box-shadow: 0 8px 24px rgba(59, 130, 246, 0.35); transition: all 0.3s ease; }
        .team-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(59, 130, 246, 0.45); }
        
        @media (max-width: 1000px) {
          .team-grid { grid-template-columns: repeat(2, 1fr); }
        }
        
        @media (max-width: 640px) {
          .team-section { padding: 60px 0; }
          .team-container { padding: 0 20px; }
          .team-header { margin-bottom: 40px; }
          .team-badge { padding: 6px 12px; font-size: 12px; margin-bottom: 16px; }
          .team-title { font-size: 28px; margin-bottom: 12px; }
          .team-subtitle { font-size: 15px; }
          .team-grid { grid-template-columns: 1fr; gap: 16px; margin-bottom: 32px; }
          .team-card { padding: 24px 20px; border-radius: 16px; }
          .team-avatar { width: 60px; height: 60px; border-radius: 16px; margin-bottom: 14px; }
          .team-name { font-size: 16px; margin-bottom: 8px; }
          .team-role { padding: 4px 10px; font-size: 11px; margin-bottom: 10px; }
          .team-desc { font-size: 13px; }
          .team-cta { flex-direction: column; align-items: stretch; padding: 20px; text-align: center; }
          .team-cta-content { flex-direction: column; }
          .team-cta-icon { margin: 0 auto; width: 48px; height: 48px; }
          .team-cta-text { align-items: center; }
          .team-cta-label { font-size: 12px; }
          .team-cta-title { font-size: 15px; }
          .team-cta-btn { width: 100%; justify-content: center; padding: 14px 20px; font-size: 14px; }
          .team-orb { width: 200px; height: 200px; }
        }
      `}</style>
    </section>
  );
}
