import React, { useState } from 'react';
import './Lend.css'; // Importa los estilos CSS

const Lend = () => {
  const [bookCount, setBookCount] = useState(0);

  const incrementBookCount = () => {
    setBookCount(bookCount + 1);
  };

  const calculateTotalCost = () => {
    const bookPrice = 500;
    return bookCount * bookPrice;
  };

  return (
    <div className="library-container">
      <h1 className="library-title">Articulos en el carro</h1>
      <p className="book-count">Articulos solicitados: {bookCount}</p>
      <p className="total-cost">Costo total: ${calculateTotalCost()}</p>
      <button className="request-button" onClick={incrementBookCount}>
        Solicitar articulos
      </button>
    </div>
  );
};

export default Lend;