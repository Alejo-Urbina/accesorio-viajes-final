import React from 'react';
import './Body.css'; 
import Mensajes from '../mensajes/Mensajes';
import Images from '../images/Images';
import Lend from '../lend/Lend';

function Body() {
  return (
    <div className="library-body">
      <Mensajes />
      <Images />
      <Lend />
    </div>
  );
}

export default Body;