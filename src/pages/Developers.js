import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Developers.css';

function Developers() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="developers">
      <h1 data-aos="fade-up">Nuestro Equipo de Desarrollo</h1>
      <div className="team-grid" data-aos="fade-up">
        <div className="team-member">
          <h3>Desarrollador Principal</h3>
          <p>Nombre: Juan Pérez</p>
          <p>Rol: Lideró el desarrollo del frontend y backend.</p>
        </div>
        <div className="team-member">
          <h3>Profesor Encargado</h3>
          <p>Nombre: Dra. María Gómez</p>
          <p>Rol: Supervisó el proyecto y proporcionó orientación técnica.</p>
        </div>
        <div className="team-member">
          <h3>Compañero 1</h3>
          <p>Nombre: Ana López</p>
          <p>Rol: Diseñó la interfaz de usuario.</p>
        </div>
        <div className="team-member">
          <h3>Compañero 2</h3>
          <p>Nombre: Carlos Rodríguez</p>
          <p>Rol: Colaboró en la implementación de las animaciones.</p>
        </div>
        <div className="team-member">
          <h3>Compañero 3</h3>
          <p>Nombre: Sofía Martínez</p>
          <p>Rol: Realizó pruebas de usabilidad y accesibilidad.</p>
        </div>
      </div>
      <div className="thanks" data-aos="fade-up">
        <h2>¡Gracias por visitar nuestra página!</h2>
        <p>Este proyecto fue realizado con mucho esfuerzo y dedicación por nuestro equipo.</p>
      </div>
    </section>
  );
}

export default Developers;