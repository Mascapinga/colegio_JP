import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Levels.css';
import { FaChild, FaBookOpen, FaGraduationCap, FaUserGraduate } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// Importación de imágenes
import inicial1 from '../assets/inicial1.jpg';
import inicial2 from '../assets/inicial2.jpg';
import primaria1 from '../assets/primaria1.jpg';
import primaria2 from '../assets/primaria2.jpg';
import secundaria1 from '../assets/secundaria1.jpg';
import secundaria2 from '../assets/secundaria2.jpg';

function Levels() {
  const [activeTab, setActiveTab] = useState('inicial');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const levelData = {
    inicial: {
      title: "Nivel Inicial",
      icon: <FaChild className="level-icon" />,
      description: "Fomentamos el desarrollo integral de nuestros pequeños estudiantes.",
      horarios: ["Mañana: 6:50 AM - 12:30 PM", "Tarde: 12:40 PM - 5:50 PM"],
      estudiantes: "228",
      subDirector: "Maribel Castilla García",
      images: [inicial1, inicial2],
      imageAlt: ["Actividades en nivel inicial", "Niños en clases inicial"]
    },
    primaria: {
      title: "Nivel Primaria",
      icon: <FaBookOpen className="level-icon" />,
      description: "Brindamos una base sólida de conocimientos y habilidades.",
      horarios: ["Mañana: 6:50 AM - 12:30 PM", "Tarde: 12:40 PM - 5:50 PM"],
      estudiantes: "1161",
      subDirector: "Sara Ayde Alegría, Diana García Rengifo",
      images: [primaria1, primaria2],
      imageAlt: ["Estudiantes de primaria", "Aula de primaria"]
    },
    secundaria: {
      title: "Nivel Secundaria",
      icon: <FaGraduationCap className="level-icon" />,
      description: "Formamos jóvenes preparados académicamente y con valores.",
      horarios: ["Mañana: 6:50 AM - 12:30 PM", "Tarde: 12:40 PM - 5:50 PM"],
      estudiantes: "1479",
      subDirector: "Asdrúbal Vela Macedo, Eliana Tafur Acosta, Hipólito Percy Barbarán Mozo",
      images: [secundaria1, secundaria2],
      imageAlt: ["Laboratorio secundaria", "Actividades deportivas"]
    },
    ceba: {
      title: "CEBA - Educación Básica Alternativa",
      icon: <FaUserGraduate className="level-icon" />,
      description: "Ofrecemos una oportunidad educativa flexible para jóvenes y adultos.",
      horarios: ["Noche: 6:50 PM - 10:00 PM"],
      estudiantes: "393",
      subDirector: "Segundo Edgard Cubas Llaja",
      images: [],
      imageAlt: ["Clases nocturnas CEBA", "Estudiantes adultos CEBA"]
    }
  };

  const handleTabChange = (level) => {
    setActiveTab(level);
    setTimeout(() => {
      AOS.refresh();
    }, 50);
  };

  return (
    <div className="levels">
      {/* Sección de Introducción */}
      <section className="intro-section" data-aos="fade-up">
        <h2>Niveles Educativos</h2>
      </section>

      {/* Sección de Pestañas */}
      <section className="tabs-section" data-aos="fade-up">
        <div className="tabs-container">
          <div className="tabs">
            {Object.keys(levelData).map((level, index) => (
              <button
                key={level}
                className={`tab-button ${activeTab === level ? 'active' : ''}`}
                onClick={() => handleTabChange(level)}
                data-aos="zoom-in"
                data-aos-delay={100 * index}
              >
                <span className="tab-icon-container">
                  {levelData[level].icon}
                </span>
                <span className="tab-text">{levelData[level].title.split(' - ')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Contenido */}
      <section className="content-section" data-aos="fade-up">
        <div className="tab-content">
          <div className="level-container">
            <div className="level-header">
              <h3>{levelData[activeTab].title}</h3>
              <a
                className="curriculum-btn"
                href={`/assets/plan-${activeTab}.pdf`}
                download
              >
                Descargar Plan de Estudios
              </a>
            </div>
            
            <p className="level-description">
              {levelData[activeTab].description}
            </p>
            
            <div className="level-info-container">
              <div className="level-stats">
                <div className="stat-item">
                  <h4>Información General</h4>
                  <ul>
                    <li><strong>Horarios:</strong></li>
                    {levelData[activeTab].horarios.map((horario, index) => (
                      <li key={index} style={{ marginLeft: '20px' }}>{horario}</li>
                    ))}
                    <li><strong>Estudiantes:</strong> {levelData[activeTab].estudiantes}</li>
                    <li><strong>Sub-Director(es):</strong> {levelData[activeTab].subDirector}</li>
                  </ul>
                </div>
                <div className="stat-item">
                  <h4>Docentes</h4>
                  <Link to="/personal/docentes" className="docentes-link">
                    Conocer Docentes
                  </Link>
                </div>
              </div>
              
              <div className="level-gallery">
                {levelData[activeTab].images.length > 0 ? (
                  <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    modules={[Autoplay]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={levelData[activeTab].images.length > 1}
                    className="level-swiper"
                  >
                    {levelData[activeTab].images.map((img, index) => (
                      <SwiperSlide key={index}>
                        <div className="swiper-slide-content">
                          <img
                            src={img}
                            alt={levelData[activeTab].imageAlt[index]}
                            loading="lazy"
                            width="800"  // Añadido: ancho estimado para el carrusel
                            height="300"  // Añadido: alto basado en el height: 300px del CSS
                          />
                          <p className="image-caption">{levelData[activeTab].imageAlt[index]}</p>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <div className="ceba-placeholder">
                    <p>Próximamente: Galería de imágenes para {levelData[activeTab].title}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Levels;