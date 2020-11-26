import React, { useState } from 'react';

const Formulario = ({ comparar }) => {
  const [numero, setNumero] = useState('');

  const revisarNumero = () => {
    comparar(numero);
  };

  const handleChange = (event) => {
    setNumero(event.target.value);
  };

  return (
    <section className='left'>
      <input
        type='number'
        name='numero'
        className='guess'
        onChange={handleChange}
      />
      <button onClick={revisarNumero} className='btn check'>
        Check!
      </button>
    </section>
  );
};

export default Formulario;
