import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Header.css';

// Importación de imágenes
import logo from '../assets/logo.png';
import instalaciones from '../assets/instalaciones4.jpg';
import evento from '../assets/evento.jpg';
import evento2 from '../assets/evento2.jpg';
import laboratorio from '../assets/laboratorio.jpg';
import biblioteca from '../assets/biblioteca.jpg';
import deporte from '../assets/deporte.jpg';
import arte from '../assets/arte.jpg';

function Header() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  // Verifica si la ruta está activa para resaltar en el menú
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="main-header">
      {/* Parte superior con logo y navegación */}
      <div className="header-top">
        <div className="logo-container" data-aos="fade-right">
          <img 
            src={logo} 
            alt="Logo del Colegio I.E Jimenéz Pimentel" 
            className="logo-img"
          />
          <span className="logo-text">I.E Jiménez Pimentel</span>
        </div>

        {/* Menú de navegación principal */}
        <nav className="main-nav" aria-label="Navegación principal">
          <ul className="nav-list">
            <li className={`nav-item ${isActive('/')}`}>
              <Link to="/" className="nav-link" aria-label="Ir a la página de Inicio">Inicio</Link>
            </li>
            
            <li className={`nav-item dropdown ${isActive('/nosotros') || isActive('/nosotros/historia') || isActive('/nosotros/mision-vision') ? 'active' : ''}`}>
              <Link 
                to="/nosotros" 
                className="nav-link dropdown-toggle" 
                aria-label="Menú Nosotros"
                aria-expanded="false"
                aria-controls="nosotros-dropdown"
              >
                Nosotros
              </Link>
              <div className="dropdown-menu" id="nosotros-dropdown">
                <Link 
                  to="/nosotros/historia" 
                  className={`dropdown-item ${isActive('/nosotros/historia')}`}
                  aria-label="Ir a la página de Historia"
                >
                  Historia
                </Link>
                <Link 
                  to="/nosotros/mision-vision" 
                  className={`dropdown-item ${isActive('/nosotros/mision-vision')}`}
                  aria-label="Ir a la página de Misión, Visión y Valores"
                >
                  Misión, Visión y Valores
                </Link>
              </div>
            </li>
            
            <li className={`nav-item ${isActive('/niveles')}`}>
              <Link to="/niveles" className="nav-link" aria-label="Ir a la página de Niveles">Niveles</Link>
            </li>
            
            <li className={`nav-item dropdown ${isActive('/personal') || isActive('/personal/directivos') || isActive('/personal/docentes') || isActive('/personal/administrativos') ? 'active' : ''}`}>
              <Link 
                to="/personal" 
                className="nav-link dropdown-toggle" 
                aria-label="Menú Personal"
                aria-expanded="false"
                aria-controls="personal-dropdown"
              >
                Personal
              </Link>
              <div className="dropdown-menu" id="personal-dropdown">
                <Link 
                  to="/personal/directivos" 
                  className={`dropdown-item ${isActive('/personal/directivos')}`}
                  aria-label="Ir a la página de Equipo Directivo"
                >
                  Equipo Directivo
                </Link>
                <Link 
                  to="/personal/docentes" 
                  className={`dropdown-item ${isActive('/personal/docentes')}`}
                  aria-label="Ir a la página de Cuerpo Docente"
                >
                  Cuerpo Docente
                </Link>
                <Link 
                  to="/personal/administrativos" 
                  className={`dropdown-item ${isActive('/personal/administrativos')}`}
                  aria-label="Ir a la página de Personal Administrativo"
                >
                  Personal Administrativo
                </Link>
              </div>
            </li>
            
            <li className={`nav-item ${isActive('/comunidad')}`}>
              <Link to="/comunidad" className="nav-link" aria-label="Ir a la página de Comunidad">Comunidad</Link>
            </li>
            
            <li className={`nav-item ${isActive('/contacto')}`}>
              <Link to="/contacto" className="nav-link" aria-label="Ir a la página de Contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Carrusel solo en la página de inicio */}
      {location.pathname === '/' && (
        <div className="hero-banner" data-aos="fade-up">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            modules={[Autoplay]}
            autoplay={{ 
              delay: 5000,
              disableOnInteraction: false
            }}
            loop={true}
            className="banner-slider"
          >
            <SwiperSlide>
              <div className="slide-content">
                <img 
                  src={instalaciones} 
                  alt="Instalaciones del colegio" 
                  className="slide-image"
                  loading="lazy"
                  width="1200"
                  height="600"
                />
                <div className="slide-overlay">
                  <h2 className="slide-title">Instalaciones Modernas</h2>
                  <p className="slide-description">
                    Espacios diseñados para el aprendizaje del siglo XXI
                  </p>
                </div>
              </div>
            </SwiperSlide>
            
            <SwiperSlide>
              <div className="slide-content">
                <img 
                  src={evento} 
                  alt="Evento escolar" 
                  className="slide-image"
                  loading="lazy"
                  width="1200"
                  height="600"
                />
                <div className="slide-overlay">
                  <h2 className="slide-title">Eventos Destacados</h2>
                  <p className="slide-description">
                    Inicio de clases 2025
                  </p>
                </div>
              </div>
            </SwiperSlide>
            
            <SwiperSlide>
              <div className="slide-content">
                <img 
                  src={evento2} 
                  alt="Evento escolar" 
                  className="slide-image"
                  loading="lazy"
                  width="1200"
                  height="600"
                />
                <div className="slide-overlay">
                  <h2 className="slide-title">Eventos Escolares</h2>
                  <p className="slide-description">
                    Actividades que enriquecen la vida escolar de nuestros estudiantes
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slide-content">
                <img 
                  src={laboratorio} 
                  alt="Aula de Innovación Primaria" 
                  className="slide-image"
                  loading="lazy"
                  width="1200"
                  height="600"
                />
                <div className="slide-overlay">
                  <h2 className="slide-title">Aula de Innovación Primaria A.I.P</h2>
                  <p className="slide-description">
                    Espacios de experimentación y aprendizaje práctico para nuestros estudiantes
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slide-content">
                <img 
                  src={biblioteca} 
                  alt="Biblioteca escolar" 
                  className="slide-image"
                  loading="lazy"
                  width="1200"
                  height="600"
                />
                <div className="slide-overlay">
                  <h2 className="slide-title">Biblioteca y Centro de Recursos</h2>
                  <p className="slide-description">
                    Un espacio para la investigación y el desarrollo del conocimiento
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slide-content">
                <img 
                  src={deporte} 
                  alt="Actividades deportivas" 
                  className="slide-image"
                  loading="lazy"
                  width="1200"
                  height="600"
                />
                <div className="slide-overlay">
                  <h2 className="slide-title">Formación Deportiva</h2>
                  <p className="slide-description">
                    Fomentamos el desarrollo físico y los valores del deporte
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slide-content">
                <img 
                  src={arte} 
                  alt="Talleres de arte" 
                  className="slide-image"
                  loading="lazy"
                  width="1200"
                  height="600"
                />
                <div className="slide-overlay">
                  <h2 className="slide-title">Expresión Artística</h2>
                  <p className="slide-description">
                    Talleres de música, danza y artes visuales para el desarrollo integral
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      )}
    </header>
  );
}

export default Header;