'use client';

import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [visibleOrnaments, setVisibleOrnaments] = useState<number[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Список SVG орнаментов
  const ornamentFiles = [
    'kazakh-ornament-icon-162900-512.svg',
    'ornament-icon-1493917-512.svg',
    'ornament-icon-1493918-512.svg',
    'ornament-icon-1511804-512.svg',
    'ornament-icon-1511809-512.svg',
    'ornament-icon-1512548-512.svg',
    'ornament-icon-1545991-512.svg',
    'ornament-icon-1565561-512.svg',
    'ornament-icon-1565564-512.svg',
    'ornament-icon-1585270-512.svg',
  ];

  // Позиции для орнаментов: углы, стороны, диагонали
  const ornamentPositions = [
    { position: 'top-left', delay: 0 },
    { position: 'top-right', delay: 150 },
    { position: 'bottom-left', delay: 300 },
    { position: 'bottom-right', delay: 450 },
    { position: 'top-center', delay: 600 },
    { position: 'bottom-center', delay: 750 },
    { position: 'left-center', delay: 900 },
    { position: 'right-center', delay: 1050 },
    { position: 'diagonal-1', delay: 1200 },
    { position: 'diagonal-2', delay: 1350 },
  ];

  // Согласно ТЗ: орнаменты → название → тексты
  const steps = [
    { type: 'ornaments', delay: 0, duration: 2000 },
    { type: 'title', text: 'AVRORA NOMAD', delay: 2000, duration: 2500 },
    { type: 'text', text: 'От слов к действию', delay: 4500, duration: 1500 },
    { type: 'text', text: 'from words to action', delay: 6000, duration: 1500 },
    { type: 'text', text: 'избавляем от зависимостей', delay: 7500, duration: 1500 },
    { type: 'text', text: 'помогаем изменить образ жизни', delay: 9000, duration: 1500 },
    { type: 'text', text: '3-х этапное мед обследование', delay: 10500, duration: 1500 },
    { type: 'text', text: 'восстановление нейронных связей', delay: 12000, duration: 1500 },
  ];

  useEffect(() => {
    // Анимация появления орнаментов поочередно
    const ornamentTimers: NodeJS.Timeout[] = [];
    
    ornamentPositions.forEach((pos, index) => {
      const timer = setTimeout(() => {
        setVisibleOrnaments(prev => [...prev, index]);
      }, pos.delay);
      ornamentTimers.push(timer);
    });

    // Шаги анимации
    const stepTimers: NodeJS.Timeout[] = [];
    steps.forEach((step, index) => {
      const timer = setTimeout(() => {
        setCurrentStep(index);
      }, step.delay);
      stepTimers.push(timer);
    });

    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onComplete();
      }, 500);
    }, 13500);

    return () => {
      ornamentTimers.forEach(timer => clearTimeout(timer));
      stepTimers.forEach(timer => clearTimeout(timer));
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  const showTitle = currentStep >= 1;
  const currentText = steps[currentStep]?.type === 'text' ? steps[currentStep].text : null;

  return (
    <div className="loading-screen">
      <div className="loading-content">
        {/* Орнаменты Оюлы - все 10 с поочередной анимацией */}
        <div className="loading-ornaments-container">
          {ornamentPositions.map((pos, index) => (
            <div
              key={index}
              className={`ornament-item ornament-${pos.position}`}
              style={{
                opacity: visibleOrnaments.includes(index) ? 1 : 0,
                transform: visibleOrnaments.includes(index) 
                  ? 'scale(1) rotate(0deg)' 
                  : 'scale(0.3) rotate(-180deg)',
                transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              <img 
                src={`/ornaments/${ornamentFiles[index]}`} 
                alt={`Казахский орнамент ${index + 1}`}
                className="ornament-img"
              />
            </div>
          ))}
        </div>

        {/* Название компании - вылетает и застывает на 2.5 сек */}
        {showTitle && (
          <h1
            className="loading-title"
            style={{
              opacity: currentStep >= 3 ? 1 : 0,
              transform: currentStep >= 3 ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
              transition: 'all 0.6s ease-out',
            }}
          >
            AVRORA NOMAD
          </h1>
        )}

        {/* Текстовые строки - каждая появляется на 1.5 сек */}
        <div className="loading-texts">
          {currentText && (
            <p
              className="loading-text"
              key={currentStep}
              style={{
                opacity: 1,
                transform: 'translateY(0)',
                animation: 'fadeInUp 0.6s ease-out',
              }}
            >
              {currentText}
            </p>
          )}
        </div>
      </div>

      <style jsx>{`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #ffffff 0%, #e0f2fe 50%, #bae6fd 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          transition: opacity 0.5s ease-out;
        }

        .loading-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 40px;
          position: relative;
          width: 100%;
          height: 100%;
        }

        .loading-ornaments-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          max-width: 1200px;
          max-height: 800px;
          z-index: 1;
        }

        .ornament-item {
          position: absolute;
        }

        .ornament-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          opacity: 0.4;
          filter: brightness(1.2) drop-shadow(0 2px 8px rgba(59, 130, 246, 0.2));
        }

        /* Углы */
        .ornament-top-left {
          top: 5%;
          left: 5%;
          width: 120px;
          height: 120px;
        }

        .ornament-top-right {
          top: 5%;
          right: 5%;
          width: 120px;
          height: 120px;
        }

        .ornament-bottom-left {
          bottom: 5%;
          left: 5%;
          width: 120px;
          height: 120px;
        }

        .ornament-bottom-right {
          bottom: 5%;
          right: 5%;
          width: 120px;
          height: 120px;
        }

        /* Стороны */
        .ornament-top-center {
          top: 5%;
          left: 50%;
          transform: translateX(-50%);
          width: 150px;
          height: 80px;
        }

        .ornament-bottom-center {
          bottom: 5%;
          left: 50%;
          transform: translateX(-50%);
          width: 150px;
          height: 80px;
        }

        .ornament-left-center {
          left: 5%;
          top: 50%;
          transform: translateY(-50%);
          width: 80px;
          height: 150px;
        }

        .ornament-right-center {
          right: 5%;
          top: 50%;
          transform: translateY(-50%);
          width: 80px;
          height: 150px;
        }

        /* Диагонали */
        .ornament-diagonal-1 {
          top: 25%;
          left: 25%;
          width: 100px;
          height: 100px;
        }

        .ornament-diagonal-2 {
          bottom: 25%;
          right: 25%;
          width: 100px;
          height: 100px;
        }

        .loading-title {
          font-size: clamp(32px, 6vw, 56px);
          font-weight: 800;
          color: #1e40af;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-top: 60px;
          position: relative;
          z-index: 2;
        }

        .loading-texts {
          min-height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 20px;
          position: relative;
          z-index: 2;
        }

        .loading-text {
          font-size: clamp(18px, 3vw, 28px);
          font-weight: 600;
          color: #2563eb;
          text-align: center;
          line-height: 1.4;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 640px) {
          .loading-content {
            gap: 30px;
          }
          .loading-ornaments-container {
            max-width: 100%;
            max-height: 100%;
          }
          .ornament-top-left,
          .ornament-top-right,
          .ornament-bottom-left,
          .ornament-bottom-right {
            width: 80px;
            height: 80px;
          }
          .ornament-top-center,
          .ornament-bottom-center {
            width: 100px;
            height: 60px;
          }
          .ornament-left-center,
          .ornament-right-center {
            width: 60px;
            height: 100px;
          }
          .ornament-diagonal-1,
          .ornament-diagonal-2 {
            width: 70px;
            height: 70px;
          }
        }
      `}</style>
    </div>
  );
}
