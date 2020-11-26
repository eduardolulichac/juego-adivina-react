import React from 'react';

const BtnReinicio = ({ reiniciar }) => {
  return (
    <button onClick={reiniciar} className='btn again'>
      Reiniciar!
    </button>
  );
};

export default BtnReinicio;
