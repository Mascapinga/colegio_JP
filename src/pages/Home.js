import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Home.css';

// Importación de imágenes
import director from '../assets/director.jpg';
import videoJP from '../assets/video_jp.mp4';

function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('play', () => {
        const overlay = videoElement.nextElementSibling;
        if (overlay && overlay.classList.contains('video-overlay')) {
          overlay.style.display = 'none';
        }
      });
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('play', () => {});
      }
    };
  }, []);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="home">
      {/* Sección de Bienvenida */}
      <section className="welcome-section" data-aos="fade-up">
        <h2>Bienvenidos al Colegio Jiménez Pimentel</h2>
        
        <div className="director-container">
          <img src={director} alt="Director del Colegio" className="director-photo" />
          <p className="director-quote">
            "En el Colegio J.P, nos dedicamos a formar estudiantes integrales con valores y excelencia académica. ¡Únete a nuestra familia!" - Atentamente: Director del J.P
          </p>
        </div>
      </section>

      {/* Sección de Video */}
      <section className="video-section" data-aos="fade-up">
        <div className="video-container">
          <div className="video-wrapper">
            <video 
              ref={videoRef}
              className="video" 
              controls
              onClick={handlePlayVideo}
            >
              <source src={videoJP} type="video/mp4" />
              Tu navegador no soporta videos HTML5.
            </video>
            <div className="video-overlay" onClick={handlePlayVideo}>
              <button className="play-button" aria-label="Reproducir video">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="rgba(73, 20, 220, 0.8)" />
                  <path d="M16 12L10 16.5V7.5L16 12Z" fill="white" />
                </svg>
              </button>
              <div className="video-caption">
                Conoce nuestro colegio
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;