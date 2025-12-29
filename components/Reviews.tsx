'use client';

import { useEffect, useRef, useState } from 'react';

const reviews = [
  {
    name: 'Алексей К.',
    duration: '3 месяца в центре',
    text: 'Благодаря Avrora Nomad я обрёл новую жизнь. Индивидуальный подход и поддержка команды помогли мне понять причины зависимости и найти силы измениться. Здесь я научился жить заново.',
    rating: 5,
  },
  {
    name: 'Мария С.',
    duration: 'Мама резидента',
    text: 'Отправила сына с большими сомнениями. Сейчас он совсем другой человек — уверенный, спокойный, с планами на жизнь. Спасибо команде за терпение и профессионализм. Вы вернули мне сына.',
    rating: 5,
  },
  {
    name: 'Дмитрий Н.',
    duration: '4 месяца в центре',
    text: 'Открытая реабилитация — это то, что мне было нужно. Никакого давления, только поддержка и вера в меня. Йога и выезды в горы стали моей терапией. Рекомендую всем, кто ищет выход.',
    rating: 5,
  },
];

export default function Reviews() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="reviews"
      style={{
        position: 'relative',
        padding: '100px 0 120px',
        background: '#ffffff',
        overflow: 'hidden',
      }}
    >
      {/* Decorative */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.05) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 32px', position: 'relative' }}>
        {/* Section header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '56px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease-out',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(245, 158, 11, 0.1) 100%)',
              borderRadius: '100px',
              border: '1px solid rgba(251, 191, 36, 0.2)',
              fontSize: '14px',
              fontWeight: 600,
              color: '#f59e0b',
              marginBottom: '24px',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" stroke="none">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            Отзывы наших резидентов
          </span>

          <h2
            style={{
              fontSize: 'clamp(36px, 5vw, 52px)',
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '-0.03em',
            }}
          >
            Истории{' '}
            <span style={{ 
              background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              успеха
            </span>
          </h2>
        </div>

        {/* Review card */}
        <div
          style={{
            background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
            borderRadius: '32px',
            padding: '56px',
            border: '1px solid #fcd34d',
            marginBottom: '36px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease-out 0.1s',
          }}
        >
          {/* Stars */}
          <div style={{ display: 'flex', gap: '6px', marginBottom: '28px' }}>
            {[...Array(reviews[activeIndex].rating)].map((_, i) => (
              <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="#f59e0b" stroke="none">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            ))}
          </div>

          {/* Quote */}
          <p
            style={{
              fontSize: '22px',
              color: '#78350f',
              lineHeight: 1.7,
              marginBottom: '36px',
              fontStyle: 'italic',
            }}
          >
            &ldquo;{reviews[activeIndex].text}&rdquo;
          </p>

          {/* Author */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 20px rgba(245, 158, 11, 0.3)',
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 700, color: '#78350f' }}>
                {reviews[activeIndex].name}
              </div>
              <div style={{ fontSize: '14px', color: '#a16207' }}>
                {reviews[activeIndex].duration}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.6s ease-out 0.2s',
          }}
        >
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              style={{
                width: activeIndex === i ? '32px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background: activeIndex === i 
                  ? 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)'
                  : '#e2e8f0',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeIndex === i ? '0 4px 12px rgba(245, 158, 11, 0.4)' : 'none',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
