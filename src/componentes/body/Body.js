import React from 'react';
import './Body.css'; 
import Mensajes from '../mensajes/Mensajes';
import Images from '../images/Images';
import Lend from '../lend/Lend';
import Buy from '../buy/Buy';
import List from '../list/List';

function Body() {
  return (
    <div className="library-body">
      <Mensajes />
      <Images />
      <Lend />
      <Buy />
      <List />
    </div>
  );
}

export default Body;