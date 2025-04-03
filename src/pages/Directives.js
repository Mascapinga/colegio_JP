import React, { useEffect } from 'react';
import '../styles/Directives.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import placeholderImage from '../assets/placeholder-profile.jpg';

function Directives() {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  const directorData = {
    id: 1,
    name: "Damián Gronerth Ray Nikky",
    position: "Director",
    description: "Director de gestión pública directa",
    image: placeholderImage
  };

  const subdirectoresData = {
    inicial: [
      {
        id: 2,
        name: "Vela Macedo, Asdrúbal",
        position: "Subdirector",
        description: "Subdirector de Educación Inicial",
        image: placeholderImage
      },
      {
        id: 5,
        name: "Castilla García, Maribel",
        position: "Subdirectora",
        description: "Subdirectora de Educación Inicial",
        image: placeholderImage
      }
    ],
    primaria: [
      {
        id: 3,
        name: "Tafur Acosta, Eliana",
        position: "Subdirectora",
        description: "Subdirectora de Educación Primaria",
        image: placeholderImage
      },
      {
        id: 7,
        name: "García Rengifo, Diana",
        position: "Subdirectora",
        description: "Subdirectora de Educación Primaria",
        image: placeholderImage
      }
    ],
    secundaria: [
      {
        id: 4,
        name: "Barbarán Mozo, Hipólito Percy",
        position: "Subdirector",
        description: "Subdirector de Educación Secundaria",
        image: placeholderImage
      },
      {
        id: 6,
        name: "Alegría Cardenas, Sara Aydee",
        position: "Subdirectora",
        description: "Subdirectora de Educación Secundaria",
        image: placeholderImage
      }
    ]
  };

  return (
    <div className="directives">
      {/* Sección de Introducción */}
      <section className="intro-section" data-aos="fade-up">
        <h2>Equipo Directivo</h2>
        <div className="intro-container">
          <p className="intro-text">
            Nuestro equipo directivo está comprometido con la excelencia académica y el desarrollo integral
            de nuestros estudiantes. Conozca a los profesionales que lideran nuestra institución.
          </p>
        </div>
      </section>

      {/* Sección del Director */}
      <section className="director-section" data-aos="fade-up">
        <div className="director-container">
          <h3 className="level-title">Dirección General</h3>
          <div className="directives-grid">
            <div className="directive-card director-card">
              <div className="directive-image-container">
                <img 
                  src={directorData.image} 
                  alt={`Foto de ${directorData.name}`}
                  className="directive-image"
                  loading="lazy"
                />
                <div className="directive-overlay">
                  <div className="directive-overlay-content">
                    <span className="directive-view">Ver perfil</span>
                  </div>
                </div>
              </div>
              <div className="directive-details">
                <h4 className="directive-name">{directorData.name}</h4>
                <div className="directive-position-badge">{directorData.position}</div>
                <p className="directive-description">{directorData.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Subdirectores */}
      <section className="subdirectors-section">
        {/* Inicial */}
        <div className="level-section" data-aos="fade-up">
          <h3 className="level-title">Educación Inicial</h3>
          <div className="directives-grid">
            {subdirectoresData.inicial.map((directive) => (
              <div key={directive.id} className="directive-card">
                <div className="directive-image-container">
                  <img 
                    src={directive.image} 
                    alt={`Foto de ${directive.name}`}
                    className="directive-image"
                    loading="lazy"
                  />
                  <div className="directive-overlay">
                    <div className="directive-overlay-content">
                      <span className="directive-view">Ver perfil</span>
                    </div>
                  </div>
                </div>
                <div className="directive-details">
                  <h4 className="directive-name">{directive.name}</h4>
                  <div className="directive-position-badge">{directive.position}</div>
                  <p className="directive-description">{directive.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Primaria */}
        <div className="level-section" data-aos="fade-up">
          <h3 className="level-title">Educación Primaria</h3>
          <div className="directives-grid">
            {subdirectoresData.primaria.map((directive) => (
              <div key={directive.id} className="directive-card">
                <div className="directive-image-container">
                  <img 
                    src={directive.image} 
                    alt={`Foto de ${directive.name}`}
                    className="directive-image"
                    loading="lazy"
                  />
                  <div className="directive-overlay">
                    <div className="directive-overlay-content">
                      <span className="directive-view">Ver perfil</span>
                    </div>
                  </div>
                </div>
                <div className="directive-details">
                  <h4 className="directive-name">{directive.name}</h4>
                  <div className="directive-position-badge">{directive.position}</div>
                  <p className="directive-description">{directive.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secundaria */}
        <div className="level-section" data-aos="fade-up">
          <h3 className="level-title">Educación Secundaria</h3>
          <div className="directives-grid">
            {subdirectoresData.secundaria.map((directive) => (
              <div key={directive.id} className="directive-card">
                <div className="directive-image-container">
                  <img 
                    src={directive.image} 
                    alt={`Foto de ${directive.name}`}
                    className="directive-image"
                    loading="lazy"
                  />
                  <div className="directive-overlay">
                    <div className="directive-overlay-content">
                      <span className="directive-view">Ver perfil</span>
                    </div>
                  </div>
                </div>
                <div className="directive-details">
                  <h4 className="directive-name">{directive.name}</h4>
                  <div className="directive-position-badge">{directive.position}</div>
                  <p className="directive-description">{directive.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Directives;