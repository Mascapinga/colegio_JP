import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Teachers.css';

// Importa las imágenes y el video (ajusta las rutas según tu proyecto)
import teacher1 from '../assets/teacher1.jpg';
import teacher2 from '../assets/teacher2.jpg';
import teacherVideo from '../assets/teacher-video.mp4';

function Teachers() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Animaciones solo una vez
  }, []);

  // Array de docentes (puedes agregar más)
  const teachers = [
    {
      name: 'María Gómez',
      specialty: 'Matemáticas',
      achievements: '10 años de experiencia',
      image: teacher1,
    },
    {
      name: 'Juan Pérez',
      specialty: 'Ciencias',
      achievements: 'Premio al Mejor Docente 2023',
      image: teacher2,
    },
  ];

  return (
    <div className="teachers">
      {/* Sección de Introducción */}
      <section className="intro-section" data-aos="fade-up">
        <h2>Docentes</h2>
      </section>

      {/* Sección de Tarjetas de Docentes */}
      <section className="teachers-section" data-aos="fade-up">
        <div className="teachers-container">
          <div className="teacher-grid">
            {teachers.map((teacher, index) => (
              <div className="teacher-card" key={index}>
                {/*<img src={teacher.image} alt={teacher.name} />*/} 
                <h3>{teacher.name}</h3>
                <p>Especialidad: {teacher.specialty}</p>
                <p>Logros: {teacher.achievements}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Video */}
      <section className="video-section" data-aos="fade-up">
        <div className="video-container">
          <h3>Día a Día con Nuestros Profesores</h3>
          <video controls>
            <source src={teacherVideo} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </section>
    </div>
  );
}

export default Teachers;