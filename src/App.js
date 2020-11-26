// import logo from './logo.svg';
import './App.css';

/** Componentes */
import Titulo from './components/Titulo';
import BtnReinicio from './components/BtnReinicio';
import Adivina from './components/Adivina';
import Formulario from './components/Formulario';

import Textos from './components/Textos';
import { useState } from 'react';

const generarNumeroSecreto = () => {
  return Math.trunc(Math.random() * 20) + 1;
};

function App() {
  const [numeroSecreto, setNumeroSecreto] = useState(generarNumeroSecreto);
  const [mensaje, setMensaje] = useState('Empiece a adivinar....');
  const [puntuacion, setPuntuacion] = useState(20);
  const [puntajeAlto, setPuntajeAlto] = useState(0);

  const reiniciarPartida = () => {
    setNumeroSecreto(generarNumeroSecreto);
    setPuntuacion(20);
    setMensaje('Empiece a adivinar....');
  };

  const compararNumero = (numero) => {
    console.log('el numero a comparar es: ', numero);
    if (!numero) {
      setMensaje('🚨 No es un número');
    } else if (Number(numero) !== numeroSecreto) {
      if (puntuacion > 1) {
        setPuntuacion(puntuacion - 1);
        Number(numero) > numeroSecreto
          ? setMensaje('📈 Tu número es muy alto')
          : setMensaje('📉 Tu número es muy bajo');
      } else {
        setMensaje('🔥 Perdiste el juego');
        setPuntuacion(0);
      }
    } else if (Number(numero) === numeroSecreto) {
      setMensaje('🎉 Ganaste 🎉');
      if (puntuacion > puntajeAlto) {
        setPuntajeAlto(puntuacion);
      }
    }
  };

  return (
    <div className='App'>
      <header>
        <Titulo></Titulo>
        <p className='between'>(Número entre 1 y 20) {numeroSecreto}</p>
        <BtnReinicio reiniciar={reiniciarPartida} />
        <Adivina />
      </header>
      <main>
        <Formulario comparar={compararNumero} />
        <Textos
          mensaje={mensaje}
          puntuacion={puntuacion}
          puntajeAlto={puntajeAlto}
        />
      </main>
    </div>
  );
}

export default App;
