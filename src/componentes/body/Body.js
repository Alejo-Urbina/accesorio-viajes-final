import React from 'react';
import './Body.css'; 
import Mensajes from '../mensajes/Mensajes';

function Body() {
  return (
    <div className="library-body">
      <Mensajes />
    </div>
  );
}

export default Body;