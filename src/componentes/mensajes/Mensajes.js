import React, { useState } from 'react';
import './Mensajes.css';

const Mensajes = () => {
  const [showVision, setShowVision] = useState(true);

  const toggleInfo = () => {
    setShowVision(!showVision);
  };

  return (
    <div className="library-info-container">
      <h2>Información de la tienda de accesorios</h2>
      <button className="library-info-button" onClick={toggleInfo}>
        Mostrar {showVision ? 'Mensaje' : 'Mensaje'}
      </button>
      <div className="library-info-content">
        {showVision ? (
          <p>
            ¡Viajeros intrépidos! Eleva tu experiencia de vuelo con nuestros exclusivos artículos de aerolínea.
             Desde cómodos cojines de viaje hasta elegantes sets de amenidades, tenemos todo lo que necesitas para 
             hacer que tu vuelo sea aún más placentero. ¡Descubre nuestra colección hoy mismo y prepárate para volar con estilo!
          </p>
        ) : (
          <p>
             ¡Prepárate para volar con comodidad y estilo! Nuestra selección de artículos de aerolínea ofrece desde productos
              de viaje prácticos hasta lujosos accesorios que harán que tu próximo vuelo sea inolvidable. Con materiales de alta
               calidad y diseño ergonómico, nuestros productos están diseñados para satisfacer las necesidades de los viajeros más exigentes.
                ¡Descubre nuestra gama completa y haz que cada momento en el aire sea una experiencia excepcional!
          </p>
        )}
      </div>
    </div>
  );
};

export default Mensajes;