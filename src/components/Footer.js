import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contacto</h3>
            <div className="contact-info">
              <p><i className="fas fa-map-marker-alt"></i> Av. Principal 123, Ciudad</p>
              <p><i className="fas fa-phone"></i> (01) 234-5678</p>
              <p><i className="fas fa-envelope"></i> <a href="mailto:info@escuela.edu">info@escuela.edu</a></p>
              <p><i className="fas fa-clock"></i> Lun - Vie: 7:30 AM - 4:00 PM</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Enlaces Rápidos</h3>
            <div className="quick-links">
              <Link to="/plataforma-virtual">Plataforma Virtual</Link>
              <Link to="/menu-comedor">Menú del Comedor</Link>
              <Link to="/reglamento-interno">Reglamento Interno</Link>
              <Link to="/calendario-academico">Calendario Académico</Link>
              <Link to="/contacto">Contacto</Link>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Suscríbete al Newsletter</h3>
            <p>Recibe noticias y eventos importantes directamente en tu correo.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Tu correo electrónico" required />
              <button type="submit">Suscribirse</button>
            </form>
          </div>
          
          <div className="footer-section">
            <h3>Síguenos</h3>
            <p>Mantente conectado con nuestra comunidad educativa.</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Jiménez Pimentel. Todos los derechos reservados.</p>
          </div>
          <div className="security">
            <p>Certificados de:</p>
            <div className="security-badge">
              <i className="fas fa-shield-alt"></i>
              <span>Seguridad y Protocolos de Bioseguridad</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;