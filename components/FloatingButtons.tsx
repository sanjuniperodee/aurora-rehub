'use client';

import { useState, useEffect } from 'react';

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [showWhatsAppMenu, setShowWhatsAppMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownload = () => {
    // TODO: Заменить на реальную ссылку на презентацию
    const link = document.createElement('a');
    link.href = '/presentation.pdf'; // Заменить на реальный путь
    link.download = 'Avrora-Nomad-Presentation.pdf';
    link.click();
  };

  const handleWhatsAppCall = () => {
    window.open('tel:+87712466646', '_blank');
    setShowWhatsAppMenu(false);
  };

  const handleWhatsAppMessage = () => {
    window.open('https://wa.me/87712466646', '_blank');
    setShowWhatsAppMenu(false);
  };

  if (!isVisible) return null;

  return (
    <div className="floating-buttons">
      {showWhatsAppMenu && (
        <div className="floating-whatsapp-menu">
          <button onClick={handleWhatsAppCall} className="floating-menu-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Позвонить
          </button>
          <button onClick={handleWhatsAppMessage} className="floating-menu-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Написать
          </button>
        </div>
      )}

      <div className="floating-buttons-group">
        <button
          onClick={handleDownload}
          className="floating-button floating-button-download"
          title="Скачать презентацию"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </button>

        <button
          onClick={() => setShowWhatsAppMenu(!showWhatsAppMenu)}
          className="floating-button floating-button-whatsapp"
          title="WhatsApp"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </button>

        <a
          href="https://instagram.com/avrora_nomad"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-button floating-button-instagram"
          title="Instagram"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        </a>
      </div>

      <style jsx>{`
        .floating-buttons {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
        }

        .floating-buttons-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .floating-button {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .floating-button-download {
          background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
          color: #ffffff;
        }

        .floating-button-download:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(59, 130, 246, 0.4);
        }

        .floating-button-whatsapp {
          background: #25d366;
          color: #ffffff;
        }

        .floating-button-whatsapp:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(37, 211, 102, 0.4);
        }

        .floating-button-instagram {
          background: linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%);
          color: #ffffff;
        }

        .floating-button-instagram:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(131, 58, 180, 0.4);
        }

        .floating-whatsapp-menu {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 12px;
          animation: slideUp 0.3s ease-out;
        }

        .floating-menu-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          background: #ffffff;
          color: #1e40af;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          white-space: nowrap;
        }

        .floating-menu-item:hover {
          background: #f0f9ff;
          border-color: #3b82f6;
          transform: translateX(-4px);
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 640px) {
          .floating-buttons {
            bottom: 16px;
            right: 16px;
          }
          .floating-button {
            width: 52px;
            height: 52px;
            border-radius: 14px;
          }
          .floating-button svg {
            width: 20px;
            height: 20px;
          }
        }
      `}</style>
    </div>
  );
}


