import React from 'react';
import './Footer.css'; // Importa los estilos si los tienes

function Footer() {
  return (
    <footer className="library-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Información de la tienda de accesorios</h3>
          <p>Somos una tienda de accesorios comprometida con brindar el mejor servicio y la más amplia colección de libros para nuestros visitantes.</p>
        </div>
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Email: info@accesorios.com</p>
        </div>
        <div className="footer-section">
          <h3>Horario de Atención</h3>
          <p>Lunes a Viernes: 7:00 AM - 8:00 PM</p>
          <p>Sábados: 8:00 AM - 6:00 PM</p>
          <p>Domingos: Cerrado</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;