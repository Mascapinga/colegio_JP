import React, { useEffect } from 'react';
import '../styles/Administrativos.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import placeholderImage from '../assets/placeholder-profile.jpg';

function Administrativos() {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  const directoraData = {
    id: 1,
    name: "Vásquez Chung Giovanna",
    position: "Directora",
    description: "Directora administrativa",
    image: placeholderImage
  };

  const administrativosData = {
    oficina: [
      {
        id: 2,
        name: "Meña Sánchez Betty Dolly",
        position: "Secretaria",
        description: "Secretaria administrativa",
        image: placeholderImage
      },
      {
        id: 3,
        name: "Amacifuen García Bilha Rody",
        position: "Auxiliar",
        description: "Auxiliar de servicio administrativo I",
        image: placeholderImage
      },
      {
        id: 4,
        name: "Zamora García Cindith Johanna",
        position: "Auxiliar",
        description: "Auxiliar de servicio administrativo I",
        image: placeholderImage
      },
      {
        id: 5,
        name: "Aribildo Ruiz, Zonia",
        position: "Auxiliar",
        description: "Auxiliar de servicio administrativo II",
        image: placeholderImage
      },
      {
        id: 6,
        name: "Pérez Tavara Luz Mileni",
        position: "Auxiliar",
        description: "Auxiliar de oficina I",
        image: placeholderImage
      },
      {
        id: 7,
        name: "Reátegui Isla Jessica Leonor",
        position: "Oficina",
        description: "Oficina I",
        image: placeholderImage
      },
      {
        id: 8,
        name: "Trigozo Torres Normi Pilar",
        position: "Trabajador",
        description: "Trabajador administrativo I",
        image: placeholderImage
      }
    ],
    apoyo: [
      {
        id: 9,
        name: "Vargas Daza Sonia",
        position: "Auxiliar",
        description: "Auxiliar laboratorio",
        image: placeholderImage
      },
      {
        id: 10,
        name: "Vela Armas Leovina",
        position: "Auxiliar",
        description: "Auxiliar biblioteca",
        image: placeholderImage
      }
    ],
    servicio: [
      {
        id: 11,
        name: "Lazo del Aguila Julio",
        position: "Trabajador",
        description: "Trabajador de servicio I",
        image: placeholderImage
      },
      {
        id: 12,
        name: "Flores Ramírez Lenin",
        position: "Trabajador",
        description: "Trabajador de servicio II",
        image: placeholderImage
      },
      {
        id: 13,
        name: "Gonzales Morí Vda de Gardini Maria E",
        position: "Trabajador",
        description: "Trabajador de servicio II",
        image: placeholderImage
      },
      {
        id: 14,
        name: "Mendoza Sánchez Beatriz",
        position: "Trabajador",
        description: "Trabajador de servicio II",
        image: placeholderImage
      },
      {
        id: 15,
        name: "Ramirez Ramirez Ney",
        position: "Trabajador",
        description: "Trabajador de servicio II",
        image: placeholderImage
      },
      {
        id: 16,
        name: "Tafur Flores María Nancy",
        position: "Trabajador",
        description: "Trabajador de servicio II",
        image: placeholderImage
      },
      {
        id: 17,
        name: "Yap Flores Teresa Arlett",
        position: "Trabajador",
        description: "Trabajador de servicio II",
        image: placeholderImage
      },
      {
        id: 18,
        name: "Chujandama Tangoa Edith",
        position: "Trabajador",
        description: "Trabajador de servicio III",
        image: placeholderImage
      },
      {
        id: 19,
        name: "Amacifen Chong Sarita Soledad",
        position: "Personal",
        description: "Personal de servicio",
        image: placeholderImage
      },
      {
        id: 20,
        name: "Luna Loja Tedi",
        position: "Personal",
        description: "Personal de servicio",
        image: placeholderImage
      },
      {
        id: 21,
        name: "Saavedra Reátegui Gladys",
        position: "Personal",
        description: "Personal de servicio",
        image: placeholderImage
      },
      {
        id: 22,
        name: "Vela de Baneo Melita",
        position: "Personal",
        description: "Personal de servicio",
        image: placeholderImage
      },
      {
        id: 23,
        name: "Orbe Flores Arlin",
        position: "Personal",
        description: "Personal de servicio",
        image: placeholderImage
      },
      {
        id: 24,
        name: "Romero Roja Charles",
        position: "Personal",
        description: "Personal de servicio",
        image: placeholderImage
      }
    ]
  };

  return (
    <div className="administrativos">
      {/* Sección de Introducción */}
      <section className="intro-section" data-aos="fade-up">
        <h2>Personal Administrativo y de Apoyo</h2>
        <div className="intro-container">
          <p className="intro-text">
            Nuestro equipo administrativo y de apoyo trabaja arduamente para garantizar el 
            funcionamiento eficiente de nuestra institución.
          </p>
        </div>
      </section>

      {/* Sección de Directora */}
      <section className="directora-section" data-aos="fade-up">
        <div className="directora-container">
          <h3 className="level-title">Dirección Administrativa</h3>
          <div className="administrativos-grid">
            <div className="admin-card directora-card">
              <div className="admin-image-container">
                <img 
                  src={directoraData.image} 
                  alt={`Foto de ${directoraData.name}`}
                  className="admin-image"
                  loading="lazy"
                />
                <div className="admin-overlay">
                  <div className="admin-overlay-content">
                    <span className="admin-view">Ver perfil</span>
                  </div>
                </div>
              </div>
              <div className="admin-details">
                <h4 className="admin-name">{directoraData.name}</h4>
                <div className="admin-position-badge">{directoraData.position}</div>
                <p className="admin-description">{directoraData.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Personal por Categoría */}
      <section className="admins-section">
        {/* Oficina */}
        <div className="level-section" data-aos="fade-up">
          <h3 className="level-title">Personal de Oficina</h3>
          <div className="administrativos-grid">
            {administrativosData.oficina.map((admin) => (
              <div key={admin.id} className="admin-card">
                <div className="admin-image-container">
                  <img 
                    src={admin.image} 
                    alt={`Foto de ${admin.name}`}
                    className="admin-image"
                    loading="lazy"
                  />
                  <div className="admin-overlay">
                    <div className="admin-overlay-content">
                      <span className="admin-view">Ver perfil</span>
                    </div>
                  </div>
                </div>
                <div className="admin-details">
                  <h4 className="admin-name">{admin.name}</h4>
                  <div className="admin-position-badge">{admin.position}</div>
                  <p className="admin-description">{admin.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Apoyo */}
        <div className="level-section" data-aos="fade-up">
          <h3 className="level-title">Personal de Apoyo</h3>
          <div className="administrativos-grid">
            {administrativosData.apoyo.map((admin) => (
              <div key={admin.id} className="admin-card">
                <div className="admin-image-container">
                  <img 
                    src={admin.image} 
                    alt={`Foto de ${admin.name}`}
                    className="admin-image"
                    loading="lazy"
                  />
                  <div className="admin-overlay">
                    <div className="admin-overlay-content">
                      <span className="admin-view">Ver perfil</span>
                    </div>
                  </div>
                </div>
                <div className="admin-details">
                  <h4 className="admin-name">{admin.name}</h4>
                  <div className="admin-position-badge">{admin.position}</div>
                  <p className="admin-description">{admin.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Servicio */}
        <div className="level-section" data-aos="fade-up">
          <h3 className="level-title">Personal de Servicio</h3>
          <div className="administrativos-grid">
            {administrativosData.servicio.map((admin) => (
              <div key={admin.id} className="admin-card">
                <div className="admin-image-container">
                  <img 
                    src={admin.image} 
                    alt={`Foto de ${admin.name}`}
                    className="admin-image"
                    loading="lazy"
                  />
                  <div className="admin-overlay">
                    <div className="admin-overlay-content">
                      <span className="admin-view">Ver perfil</span>
                    </div>
                  </div>
                </div>
                <div className="admin-details">
                  <h4 className="admin-name">{admin.name}</h4>
                  <div className="admin-position-badge">{admin.position}</div>
                  <p className="admin-description">{admin.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Administrativos;