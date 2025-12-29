'use client';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <div className="footer-logo-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              </div>
              <span className="footer-logo-text">Avrora Nomad</span>
            </a>
            <p className="footer-desc">
              Реабилитационный центр в Алматы. Помогаем людям вернуться к полноценной жизни.
            </p>
            <div className="footer-social">
              <a href="https://wa.me/77053505988" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a href="tel:+77053505988" className="footer-social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-links-title">Навигация</h4>
            <nav className="footer-nav">
              <a href="#about" className="footer-nav-link">О центре</a>
              <a href="#services" className="footer-nav-link">Услуги</a>
              <a href="#programs" className="footer-nav-link">Программы</a>
              <a href="#packages" className="footer-nav-link">Пакеты</a>
            </nav>
          </div>

          <div className="footer-links">
            <h4 className="footer-links-title">Контакты</h4>
            <nav className="footer-nav">
              <span className="footer-nav-item">г. Алматы, Казахстан</span>
              <a href="tel:+77053505988" className="footer-nav-link">+7 705 350 59 88</a>
              <span className="footer-nav-item">Пн-Вс: 24/7</span>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© 2025 Avrora Nomad. Все права защищены.</p>
          <p className="footer-privacy">Конфиденциальность гарантирована</p>
        </div>
      </div>

      <style jsx>{`
        .footer { padding: 60px 0 32px; background: #0f172a; color: #ffffff; }
        .footer-container { max-width: 1200px; margin: 0 auto; padding: 0 32px; }
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 48px; margin-bottom: 48px; }
        .footer-brand { max-width: 320px; }
        .footer-logo { display: inline-flex; align-items: center; gap: 12px; text-decoration: none; margin-bottom: 18px; }
        .footer-logo-icon { width: 42px; height: 42px; border-radius: 12px; background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); display: flex; align-items: center; justify-content: center; color: #ffffff; }
        .footer-logo-text { font-size: 20px; font-weight: 800; color: #ffffff; letter-spacing: -0.02em; }
        .footer-desc { font-size: 14px; color: rgba(255,255,255,0.6); line-height: 1.7; margin-bottom: 20px; }
        .footer-social { display: flex; gap: 10px; }
        .footer-social-link { width: 40px; height: 40px; border-radius: 10px; background: rgba(255,255,255,0.08); display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.7); text-decoration: none; transition: all 0.3s ease; }
        .footer-social-link:hover { background: rgba(255,255,255,0.15); color: #ffffff; transform: translateY(-2px); }
        .footer-links-title { font-size: 14px; font-weight: 700; color: #ffffff; margin-bottom: 18px; text-transform: uppercase; letter-spacing: 0.05em; }
        .footer-nav { display: flex; flex-direction: column; gap: 12px; }
        .footer-nav-link { font-size: 14px; color: rgba(255,255,255,0.6); text-decoration: none; transition: color 0.3s ease; }
        .footer-nav-link:hover { color: #ffffff; }
        .footer-nav-item { font-size: 14px; color: rgba(255,255,255,0.6); }
        .footer-bottom { display: flex; justify-content: space-between; align-items: center; padding-top: 28px; border-top: 1px solid rgba(255,255,255,0.08); }
        .footer-copy { font-size: 13px; color: rgba(255,255,255,0.5); }
        .footer-privacy { font-size: 13px; color: rgba(255,255,255,0.5); }
        
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
          .footer-brand { grid-column: 1 / -1; max-width: none; text-align: center; }
          .footer-desc { max-width: 400px; margin: 0 auto 20px; }
          .footer-social { justify-content: center; }
        }
        
        @media (max-width: 640px) {
          .footer { padding: 48px 0 28px; }
          .footer-container { padding: 0 20px; }
          .footer-grid { grid-template-columns: 1fr; gap: 28px; margin-bottom: 32px; text-align: center; }
          .footer-logo { justify-content: center; }
          .footer-logo-icon { width: 38px; height: 38px; }
          .footer-logo-text { font-size: 18px; }
          .footer-desc { font-size: 13px; margin-bottom: 16px; }
          .footer-links-title { margin-bottom: 14px; font-size: 13px; }
          .footer-nav { gap: 10px; align-items: center; }
          .footer-nav-link, .footer-nav-item { font-size: 13px; }
          .footer-bottom { flex-direction: column; gap: 8px; text-align: center; padding-top: 22px; }
          .footer-copy, .footer-privacy { font-size: 12px; }
        }
      `}</style>
    </footer>
  );
}
