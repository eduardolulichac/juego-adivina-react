import React from 'react';

import Mensaje from './Mensaje';
import Puntaje from './Puntaje';

const Textos = ({mensaje, puntuacion, puntajeAlto}) => {
  return (
    <section className='right'>
      <Mensaje mensajito={mensaje}/>
      <Puntaje texto='💯 Puntuación' puntaje={puntuacion} />
      <Puntaje texto='🥇 Puntaje Alto' puntaje={puntajeAlto} />
    </section>
  );
};

export default Textos;
