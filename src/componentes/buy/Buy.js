import React, { useState } from 'react';
import './Buy.css'; // Importa los estilos CSS

const Buy = () => {
  const [bookCount, setBookCount] = useState(0);

  const incrementBookCount = () => {
    setBookCount(bookCount + 1);
  };

  const calculateTotalCost = () => {
    const bookPrice = 15000;
    return bookCount * bookPrice;
  };

  return (
    <div className="library-container">
      <h1 className="library-title">Articulos totales Ventas</h1>
      <p className="book-count">Articulos solicitados comprar: {bookCount}</p>
      <p className="total-cost">Costo total: ${calculateTotalCost()}</p>
      <button className="request-button" onClick={incrementBookCount}>
        Solicitar articulos
      </button>
    </div>
  );
};

export default Buy;