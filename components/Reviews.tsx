'use client';

import { useEffect, useRef, useState } from 'react';

const reviews = [
  {
    name: 'Александр',
    period: '4 месяца в центре',
    text: 'Благодарю команду Avrora Nomad за то, что помогли мне вернуться к нормальной жизни. Здесь я нашел понимание и поддержку. Сейчас я трезв уже 8 месяцев.',
    rating: 5,
    color: '#3b82f6',
  },
  {
    name: 'Марина',
    period: 'Мама резидента',
    text: 'Мой сын прошел реабилитацию в этом центре. Спасибо за индивидуальный подход и работу с семьей. Наши отношения восстановились.',
    rating: 5,
    color: '#8b5cf6',
  },
  {
    name: 'Дмитрий',
    period: '6 месяцев в центре',
    text: 'Открытая реабилитация — это именно то, что мне было нужно. Никакого давления, только поддержка. Рекомендую всем.',
    rating: 5,
    color: '#10b981',
  },
];

export default function Reviews() {
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
    <section ref={sectionRef} id="reviews" className="reviews-section">
      <div className="reviews-orb" />

      <div className="reviews-container">
        <div
          className="reviews-header"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease-out',
          }}
        >
          <span className="reviews-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            Отзывы
          </span>
          <h2 className="reviews-title">
            Истории <span className="reviews-title-gradient">выздоровления</span>
          </h2>
          <p className="reviews-subtitle">
            Реальные отзывы наших резидентов и их близких
          </p>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="review-card"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.5s ease-out ${0.1 + i * 0.1}s`,
              }}
            >
              <div className="review-quote" style={{ color: `${review.color}30` }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              <div className="review-stars">
                {[...Array(review.rating)].map((_, j) => (
                  <svg key={j} width="18" height="18" viewBox="0 0 24 24" fill="#fbbf24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              <p className="review-text">{review.text}</p>

              <div className="review-author">
                <div className="review-avatar" style={{ background: `linear-gradient(135deg, ${review.color}20 0%, ${review.color}40 100%)`, color: review.color }}>
                  {review.name.charAt(0)}
                </div>
                <div className="review-info">
                  <span className="review-name">{review.name}</span>
                  <span className="review-period">{review.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="reviews-cta"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.5s ease-out 0.5s',
          }}
        >
          <a href="https://wa.me/77053505988" target="_blank" rel="noopener noreferrer" className="reviews-cta-btn">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Оставить отзыв
          </a>
        </div>
      </div>

      <style jsx>{`
        .reviews-section { position: relative; padding: 100px 0; background: #ffffff; overflow: hidden; }
        .reviews-orb { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 800px; height: 800px; border-radius: 50%; background: radial-gradient(circle, rgba(59, 130, 246, 0.03) 0%, transparent 70%); }
        .reviews-container { max-width: 1400px; margin: 0 auto; padding: 0 32px; position: relative; }
        .reviews-header { text-align: center; max-width: 700px; margin: 0 auto 60px; }
        .reviews-badge { display: inline-flex; align-items: center; gap: 8px; padding: 8px 16px; background: linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(245, 158, 11, 0.1) 100%); border-radius: 100px; border: 1px solid rgba(251, 191, 36, 0.3); font-size: 14px; font-weight: 600; color: #d97706; margin-bottom: 24px; }
        .reviews-title { font-size: clamp(32px, 5vw, 52px); font-weight: 800; color: #0f172a; letter-spacing: -0.03em; margin-bottom: 16px; }
        .reviews-title-gradient { background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .reviews-subtitle { font-size: 17px; color: #64748b; line-height: 1.7; }
        .reviews-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 48px; }
        .review-card { position: relative; padding: 32px; background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%); border-radius: 24px; border: 1px solid #e2e8f0; transition: all 0.3s ease; }
        .review-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
        .review-quote { position: absolute; top: 20px; right: 24px; }
        .review-stars { display: flex; gap: 3px; margin-bottom: 18px; }
        .review-text { font-size: 15px; color: #475569; line-height: 1.7; margin-bottom: 24px; min-height: 90px; }
        .review-author { display: flex; align-items: center; gap: 14px; }
        .review-avatar { width: 48px; height: 48px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: 700; }
        .review-info { display: flex; flex-direction: column; gap: 2px; }
        .review-name { font-size: 15px; font-weight: 700; color: #0f172a; }
        .review-period { font-size: 13px; color: #64748b; }
        .reviews-cta { text-align: center; }
        .reviews-cta-btn { display: inline-flex; align-items: center; gap: 10px; padding: 14px 28px; background: #25d366; color: #ffffff; font-size: 15px; font-weight: 600; border-radius: 12px; text-decoration: none; box-shadow: 0 8px 24px rgba(37, 211, 102, 0.35); transition: all 0.3s ease; }
        .reviews-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(37, 211, 102, 0.45); }
        
        @media (max-width: 1000px) {
          .reviews-grid { grid-template-columns: repeat(2, 1fr); }
        }
        
        @media (max-width: 640px) {
          .reviews-section { padding: 60px 0; }
          .reviews-container { padding: 0 20px; }
          .reviews-header { margin-bottom: 40px; }
          .reviews-badge { padding: 6px 12px; font-size: 12px; margin-bottom: 16px; }
          .reviews-title { font-size: 28px; margin-bottom: 12px; }
          .reviews-subtitle { font-size: 15px; }
          .reviews-grid { grid-template-columns: 1fr; gap: 16px; margin-bottom: 32px; }
          .review-card { padding: 24px; border-radius: 18px; }
          .review-quote svg { width: 32px; height: 32px; }
          .review-stars svg { width: 16px; height: 16px; }
          .review-text { font-size: 14px; min-height: auto; margin-bottom: 18px; }
          .review-avatar { width: 42px; height: 42px; font-size: 16px; border-radius: 12px; }
          .review-name { font-size: 14px; }
          .review-period { font-size: 12px; }
          .reviews-cta-btn { width: 100%; justify-content: center; padding: 14px 20px; font-size: 14px; }
          .reviews-orb { width: 400px; height: 400px; }
        }
      `}</style>
    </section>
  );
}
