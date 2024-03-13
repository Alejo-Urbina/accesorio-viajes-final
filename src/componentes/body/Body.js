import React from 'react';
import './Body.css'; 
import Mensajes from '../mensajes/Mensajes';
import Images from '../images/Images';

function Body() {
  return (
    <div className="library-body">
      <Mensajes />
      <Images />
    </div>
  );
}

export default Body;