'use client';

import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(`Здравствуйте! Меня зовут ${name}. Мой телефон: ${phone}. Хочу получить консультацию.`);
    window.open(`https://wa.me/87712466646?text=${message}`, '_blank');
  };

  return (
    <section ref={sectionRef} id="contact" className="contact-section">
      <div className="contact-orb contact-orb-1" />
      <div className="contact-orb contact-orb-2" />

      <div className="contact-container">
        <div className="contact-grid">
          <div
            className="contact-info"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'all 0.6s ease-out',
            }}
          >
            <span className="contact-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Свяжитесь с нами
            </span>
            <h2 className="contact-title">
              Начните путь к <span className="contact-title-gradient">новой жизни</span>
            </h2>
            <p className="contact-subtitle">
              Первый шаг — самый важный. Мы готовы помочь вам или вашим близким.
              Все консультации конфиденциальны.
            </p>

            <div className="contact-details">
              <a href="tel:+87712466646" className="contact-item">
                <div className="contact-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="contact-text">
                  <span className="contact-label">Телефон</span>
                  <span className="contact-value">+8 771 246 66 46</span>
                </div>
              </a>

              <a href="https://wa.me/87712466646" target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-icon contact-icon-wa">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#25d366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div className="contact-text">
                  <span className="contact-label">WhatsApp</span>
                  <span className="contact-value">Написать сейчас</span>
                </div>
              </a>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="contact-text">
                  <span className="contact-label">Адрес</span>
                  <span className="contact-value">г. Алматы, Казахстан</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="contact-form-wrapper"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 0.6s ease-out 0.2s',
            }}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <h3 className="contact-form-title">Заказать звонок</h3>
              <p className="contact-form-subtitle">Оставьте заявку и мы свяжемся с вами в течение 15 минут</p>

              <div className="contact-field">
                <label htmlFor="name" className="contact-field-label">Ваше имя</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Как к вам обращаться?"
                  required
                  className="contact-input"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="phone" className="contact-field-label">Телефон</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (___) ___-__-__"
                  required
                  className="contact-input"
                />
              </div>

              <button type="submit" className="contact-submit">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Отправить в WhatsApp
              </button>

              <p className="contact-privacy">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section { position: relative; padding: 100px 0; background: linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%); overflow: hidden; }
        .contact-orb { position: absolute; border-radius: 50%; filter: blur(80px); }
        .contact-orb-1 { top: 10%; left: -10%; width: 500px; height: 500px; background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%); }
        .contact-orb-2 { bottom: 10%; right: -10%; width: 500px; height: 500px; background: radial-gradient(circle, rgba(96, 165, 250, 0.08) 0%, transparent 70%); }
        .contact-container { max-width: 1200px; margin: 0 auto; padding: 0 32px; position: relative; }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .contact-info { color: #1e40af; }
        .contact-badge { display: inline-flex; align-items: center; gap: 8px; padding: 8px 16px; background: rgba(59, 130, 246, 0.1); border-radius: 100px; border: 1px solid rgba(59, 130, 246, 0.2); font-size: 14px; font-weight: 600; color: #2563eb; margin-bottom: 24px; }
        .contact-title { font-size: clamp(32px, 5vw, 48px); font-weight: 800; color: #1e40af; letter-spacing: -0.03em; margin-bottom: 20px; line-height: 1.2; }
        .contact-title-gradient { background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .contact-subtitle { font-size: 17px; color: #64748b; line-height: 1.7; margin-bottom: 40px; }
        .contact-details { display: flex; flex-direction: column; gap: 16px; }
        .contact-item { display: flex; align-items: center; gap: 16px; padding: 18px 22px; background: rgba(255,255,255,0.8); border-radius: 16px; border: 1px solid rgba(59, 130, 246, 0.2); text-decoration: none; transition: all 0.3s ease; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
        .contact-item:hover { background: #ffffff; transform: translateX(4px); box-shadow: 0 8px 20px rgba(59, 130, 246, 0.15); }
        .contact-icon { width: 48px; height: 48px; border-radius: 12px; background: rgba(59, 130, 246, 0.1); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .contact-icon-wa { background: rgba(37, 211, 102, 0.1); }
        .contact-text { display: flex; flex-direction: column; gap: 2px; }
        .contact-label { font-size: 13px; color: #64748b; }
        .contact-value { font-size: 16px; font-weight: 600; color: #1e40af; }
        .contact-form-wrapper { background: #ffffff; border-radius: 24px; padding: 36px; box-shadow: 0 24px 48px rgba(0,0,0,0.2); }
        .contact-form-title { font-size: 24px; font-weight: 800; color: #0f172a; margin-bottom: 10px; }
        .contact-form-subtitle { font-size: 14px; color: #64748b; margin-bottom: 28px; }
        .contact-field { margin-bottom: 18px; }
        .contact-field-label { display: block; font-size: 13px; font-weight: 600; color: #374151; margin-bottom: 8px; }
        .contact-input { width: 100%; padding: 14px 18px; font-size: 15px; border: 1.5px solid #e2e8f0; border-radius: 12px; background: #f8fafc; color: #0f172a; transition: all 0.3s ease; box-sizing: border-box; }
        .contact-input:focus { outline: none; border-color: #3b82f6; background: #ffffff; box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1); }
        .contact-input::placeholder { color: #94a3b8; }
        .contact-submit { width: 100%; display: flex; align-items: center; justify-content: center; gap: 12px; padding: 16px 24px; background: #25d366; color: #ffffff; font-size: 16px; font-weight: 600; border: none; border-radius: 12px; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 8px 24px rgba(37, 211, 102, 0.35); }
        .contact-submit:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(37, 211, 102, 0.45); }
        .contact-privacy { font-size: 12px; color: #94a3b8; text-align: center; margin-top: 18px; line-height: 1.5; }
        
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; gap: 40px; }
        }
        
        @media (max-width: 640px) {
          .contact-section { padding: 60px 0; }
          .contact-container { padding: 0 20px; }
          .contact-badge { padding: 6px 12px; font-size: 12px; margin-bottom: 16px; }
          .contact-title { font-size: 28px; margin-bottom: 14px; }
          .contact-subtitle { font-size: 15px; margin-bottom: 28px; }
          .contact-details { gap: 12px; }
          .contact-item { padding: 14px 18px; gap: 14px; }
          .contact-icon { width: 42px; height: 42px; }
          .contact-label { font-size: 12px; }
          .contact-value { font-size: 14px; }
          .contact-form-wrapper { padding: 24px; border-radius: 20px; }
          .contact-form-title { font-size: 20px; margin-bottom: 8px; }
          .contact-form-subtitle { font-size: 13px; margin-bottom: 22px; }
          .contact-field { margin-bottom: 14px; }
          .contact-field-label { font-size: 12px; margin-bottom: 6px; }
          .contact-input { padding: 12px 16px; font-size: 14px; }
          .contact-submit { padding: 14px 20px; font-size: 15px; gap: 10px; }
          .contact-privacy { font-size: 11px; margin-top: 14px; }
          .contact-orb { width: 250px; height: 250px; }
        }
      `}</style>
    </section>
  );
}
