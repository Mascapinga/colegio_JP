import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/About.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Importación de imágenes según los años
import img1900_1 from '../assets/historia/img1900_1.jpg';
import img1900_2 from '../assets/historia/img1900_2.jpg';
import img1900_3 from '../assets/historia/img1900_3.jpg';
import img1905_1 from '../assets/historia/img1905_1.jpg';
import img1905_2 from '../assets/historia/img1905_2.jpg';
import img1905_3 from '../assets/historia/img1905_3.jpg';
import img1942_1 from '../assets/historia/img1942_1.jpg';
import img1942_2 from '../assets/historia/img1942_2.jpg';
import img1942_3 from '../assets/historia/img1942_3.jpg';
// Repetiremos algunas imágenes para los años restantes, puedes reemplazarlas con las correctas
import img1952_1 from '../assets/historia/img1952_1.jpg';
import img1952_2 from '../assets/historia/img1952_2.jpg';
import img1952_3 from '../assets/historia/img1952_3.jpg';

function History() {
  useEffect(() => {
    AOS.init({ 
      duration: 1200,
      once: true,
      mirror: false
    });
  }, []);

  // Componente de carrusel para las imágenes
  const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };

    const prevSlide = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };

    return (
      <div className="timeline-carousel">
        <div className="carousel-container">
          <button className="carousel-button prev" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>
          
          <div className="carousel-image-container">
            <img 
              src={images[currentIndex].src} 
              alt={`Imagen histórica ${currentIndex + 1}`} 
              className="carousel-image"
            />
            <div className="carousel-caption">{images[currentIndex].caption}</div>
          </div>
          
          <button className="carousel-button next" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <span 
              key={index} 
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    );
  };

  // Datos de imágenes para cada periodo histórico (usando imágenes importadas)
  const timelineImages = {
    1900: [
      { src: img1900_1, caption: "Fundación del Colegio San Miguel" },
      { src: img1900_2, caption: "Primeras instalaciones" },
      { src: img1900_3, caption: "Manuel Arévalo y Dr. Juan Jiménez Pimentel" }
    ],
    1905: [
      { src: img1905_1, caption: "Transición a Colegio Nacional" },
      { src: img1905_2, caption: "Primeros estudiantes" },
      { src: img1905_3, caption: "Edificio histórico" }
    ],
    1942: [
      { src: img1942_1, caption: "Ceremonia de cambio de nombre" },
      { src: img1942_2, caption: "Retrato de Juan Jiménez Pimentel" },
      { src: img1942_3, caption: "Documentos históricos" }
    ],
    1952: [
      { src: img1952_1, caption: "Ceremonia de donación" },
      { src: img1952_2, caption: "Terreno original" },
      { src: img1952_3, caption: "Pedro Santillán" }
    ],
    // Repetimos imágenes para los años restantes, reemplaza con las imágenes correctas
    1957: [
      { src: img1900_1, caption: "Inauguración sección nocturna" },
      { src: img1900_2, caption: "Primeros alumnos CEBA" },
      { src: img1900_3, caption: "Instalaciones nocturnas" }
    ],
    1962: [
      { src: img1905_1, caption: "Designación como Gran Unidad Escolar" },
      { src: img1905_2, caption: "Ceremonia oficial" },
      { src: img1905_3, caption: "Nuevas instalaciones" }
    ],
    1964: [
      { src: img1942_1, caption: "Traslado a Jr. Orellana" },
      { src: img1942_2, caption: "Construcción de la sede" },
      { src: img1942_3, caption: "Vista aérea del campus" }
    ],
    1978: [
      { src: img1952_1, caption: "Ceremonia de fusión educativa" },
      { src: img1952_2, caption: "Nuevo organigrama institucional" },
      { src: img1952_3, caption: "Ampliación de infraestructura" }
    ],
    2004: [
      { src: img1900_1, caption: "Inauguración nivel inicial" },
      { src: img1900_2, caption: "Primeros alumnos de inicial" },
      { src: img1900_3, caption: "Nuevas aulas para nivel inicial" }
    ],
    2010: [
      { src: img1905_1, caption: "Ceremonia de reconocimiento" },
      { src: img1905_2, caption: "Placa conmemorativa" },
      { src: img1905_3, caption: "Autoridades regionales" }
    ],
    2012: [
      { src: img1942_1, caption: "Primera aula virtual" },
      { src: img1942_2, caption: "Cooperación con Intel Corporation" },
      { src: img1942_3, caption: "Estudiantes usando tecnología" }
    ],
    2015: [
      { src: img1952_1, caption: "Aprobación de nueva infraestructura" },
      { src: img1952_2, caption: "Planos arquitectónicos" },
      { src: img1952_3, caption: "Ceremonia de inicio de obras" }
    ],
    "2016-2017": [
      { src: img1900_1, caption: "Instituto Superior Tecnológico Nororiental de la Selva" },
      { src: img1900_2, caption: "IE Atumpampa" },
      { src: img1900_3, caption: "Universidad Nacional de San Martín" }
    ],
    2018: [
      { src: img1905_1, caption: "Nueva infraestructura moderna" },
      { src: img1905_2, caption: "Inauguración oficial" },
      { src: img1905_3, caption: "Estudiantes en nuevas instalaciones" }
    ]
  };

  return (
    <section className="about-container">
      <div className="about-header">
        <h1 data-aos="fade-down">Historia</h1>
      </div>

      {/* Historia del Colegio - Línea de tiempo */}
      <div className="section-container" data-aos="zoom-in">
        <div className="section-title">
          <h2>Historia del Colegio</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          <div className="timeline-item left" data-aos="fade-right">
            <div className="timeline-content">
              <div className="timeline-year">1900</div>
              <h3>Fundación "San Miguel"</h3>
              <p>El 4 de junio, un grupo liderado por Manuel Arévalo y el Dr. Juan Jiménez Pimentel funda el colegio privado "San Miguel" en Tarapoto.</p>
            </div>
            <div className="timeline-carousel-wrapper right">
              <ImageCarousel images={timelineImages[1900]} />
            </div>
          </div>
          
          <div className="timeline-item right" data-aos="fade-left">
            <div className="timeline-content">
              <div className="timeline-year">1905</div>
              <h3>Colegio Nacional</h3>
              <p>La institución pasa a ser un "Colegio Nacional", consolidándose como pilar educativo en San Martín.</p>
            </div>
            <div className="timeline-carousel-wrapper left">
              <ImageCarousel images={timelineImages[1905]} />
            </div>
          </div>
          
          <div className="timeline-item left" data-aos="fade-right">
            <div className="timeline-content">
              <div className="timeline-year">1942</div>
              <h3>Homenaje al Fundador</h3>
              <p>Adopta el nombre "Juan Jiménez Pimentel" en honor a su fundador y primer director.</p>
            </div>
            <div className="timeline-carousel-wrapper right">
              <ImageCarousel images={timelineImages[1942]} />
            </div>
          </div>
          
          <div className="timeline-item right" data-aos="fade-left">
            <div className="timeline-content">
              <div className="timeline-year">1952</div>
              <h3>Donación del Terreno</h3>
              <p>Pedro Santillán dona el terreno actual, marcando un hito en su desarrollo físico.</p>
            </div>
            <div className="timeline-carousel-wrapper left">
              <ImageCarousel images={timelineImages[1952]} />
            </div>
          </div>
          
          <div className="timeline-item left" data-aos="fade-right">
            <div className="timeline-content">
              <div className="timeline-year">1957</div>
              <h3>Sección Nocturna</h3>
              <p>Se inaugura la sección nocturna, hoy conocida como CEBA, ampliando su alcance educativo.</p>
            </div>
            <div className="timeline-carousel-wrapper right">
              <ImageCarousel images={timelineImages[1957]} />
            </div>
          </div>
          
          <div className="timeline-item right" data-aos="fade-left">
            <div className="timeline-content">
              <div className="timeline-year">1962</div>
              <h3>Gran Unidad Escolar</h3>
              <p>El colegio asciende a "Gran Unidad Escolar", reflejando su crecimiento y prestigio.</p>
            </div>
            <div className="timeline-carousel-wrapper left">
              <ImageCarousel images={timelineImages[1962]} />
            </div>
          </div>
          
          <div className="timeline-item left" data-aos="fade-right">
            <div className="timeline-content">
              <div className="timeline-year">1964</div>
              <h3>Nueva Ubicación</h3>
              <p>Se traslada a Jr. Orellana 3ra cuadra, su sede actual en Tarapoto.</p>
            </div>
            <div className="timeline-carousel-wrapper right">
              <ImageCarousel images={timelineImages[1964]} />
            </div>
          </div>
          
          <div className="timeline-item right" data-aos="fade-left">
            <div className="timeline-content">
              <div className="timeline-year">1978</div>
              <h3>Fusión Educativa</h3>
              <p>Se fusiona con otro centro educativo, fortaleciendo su estructura y oferta.</p>
            </div>
            <div className="timeline-carousel-wrapper left">
              <ImageCarousel images={timelineImages[1978]} />
            </div>
          </div>
          
          <div className="timeline-item left" data-aos="fade-right">
            <div className="timeline-content">
              <div className="timeline-year">2004</div>
              <h3>Nivel Inicial</h3>
              <p>Se implementa el nivel inicial, completando su oferta educativa desde la base.</p>
            </div>
            <div className="timeline-carousel-wrapper right">
              <ImageCarousel images={timelineImages[2004]} />
            </div>
          </div>
          
          <div className="timeline-item right" data-aos="fade-left">
            <div className="timeline-content">
              <div className="timeline-year">2010</div>
              <h3>Emblemática y Representativa</h3>
              <p>Declarada institución "Emblemática y Representativa" de San Martín por su impacto regional.</p>
            </div>
            <div className="timeline-carousel-wrapper left">
              <ImageCarousel images={timelineImages[2010]} />
            </div>
          </div>
          
          <div className="timeline-item left" data-aos="fade-right">
            <div className="timeline-content">
              <div className="timeline-year">2012</div>
              <h3>Primera Aula Virtual</h3>
              <p>Gracias a la cooperación de la empresa Intel Corporation y el gobierno regional, se implementa en nuestra institución la primera aula virtual en un colegio público a nivel nacional, con el objetivo de mejorar el logro de aprendizajes de los estudiantes.</p>
            </div>
            <div className="timeline-carousel-wrapper right">
              <ImageCarousel images={timelineImages[2012]} />
            </div>
          </div>
          
          <div className="timeline-item right" data-aos="fade-left">
            <div className="timeline-content">
              <div className="timeline-year">2015</div>
              <h3>Nueva Infraestructura</h3>
              <p>Se aprueba la construcción de la nueva infraestructura como institución emblemática, por lo que tuvimos que dejar nuestras aulas para dar inicio a la edificación de la nueva sede.</p>
            </div>
            <div className="timeline-carousel-wrapper left">
              <ImageCarousel images={timelineImages[2015]} />
            </div>
          </div>
          
          <div className="timeline-item left" data-aos="fade-right">
            <div className="timeline-content">
              <div className="timeline-year">2016-2017</div>
              <h3>Acogidos por Instituciones Hermanas</h3>
              <p>Fuimos acogidos por instituciones hermanas, tales como el Instituto Superior Tecnológico Nororiental de la Selva, que acogió al nivel secundaria, la institución educativa Atumpampa, donde se establecieron los estudiantes del nivel primaria, la institución educativa 0019, que acogió al nivel inicial, la institución educativa Ángel Custodio, que acogió a la modalidad nocturna, y la Universidad Nacional de San Martín, donde funcionaron las áreas administrativas.</p>
            </div>
            <div className="timeline-carousel-wrapper right">
              <ImageCarousel images={timelineImages["2016-2017"]} />
            </div>
          </div>
          
          <div className="timeline-item right" data-aos="fade-left">
            <div className="timeline-content">
              <div className="timeline-year">2018</div>
              <h3>Moderna Infraestructura</h3>
              <p>La institución viene funcionando en una moderna infraestructura que nos permite brindar un servicio de calidad con mayor comodidad y seguridad a nuestros estudiantes, con quienes asumimos el compromiso de cuidar y mantener nuestra alma mater en las mejores condiciones, consolidando el desarrollo de competencias y motivando la práctica de valores.</p>
            </div>
            <div className="timeline-carousel-wrapper left">
              <ImageCarousel images={timelineImages[2018]} />
            </div>
          </div>
        </div>
      </div>

      {/* Sección de dos columnas: Logros y Ex-Alumnos */}
      <div className="two-column-section">
        <div className="column" data-aos="fade-right">
          <div className="section-title">
            <h2>Logros y Reconocimientos</h2>
            <div className="section-divider"></div>
          </div>
          <div className="card-container">
            <div className="info-card">
              <h4>2018</h4>
              <p>Primeros puestos en banda de música, desfile patrio, deportes (vóley, karate), juegos florales (danza, escultura, cuento) y Olimpiadas de Matemática.</p>
            </div>
            <div className="info-card">
              <h4>2018</h4>
              <p>Ganador en lectura comprensiva (MPSM).</p>
            </div>
            <div className="info-card">
              <h4>2002-2003</h4>
              <p>Concursos de innovación educativa.</p>
            </div>
            <div className="info-card">
              <h4>2009</h4>
              <p>Liderazgo en propuestas educativas.</p>
            </div>
          </div>
        </div>

        <div className="column" data-aos="fade-left">
          <div className="section-title">
            <h2>Ex-Alumnos Destacados</h2>
            <div className="section-divider"></div>
          </div>
          <div className="card-container">
            <div className="info-card">
              <h4>Víctor Daniel Coral Pérez</h4>
              <p>Excongresista de la República.</p>
            </div>
            <div className="info-card">
              <h4>Connie Betty Phillips del Castillo</h4>
              <p>Reconocida poeta.</p>
            </div>
            <div className="info-card">
              <h4>Cadete FAP Néstor Guillermo del Castillo Paredes</h4>
              <p>Héroe Nacional (1956).</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default History;