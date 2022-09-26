import './App.css';
import Boton from './componentes/Boton/Boton';
import Contador from './componentes/Contador/Contador';
import freeCodeCampLogo from './imagenes/800px-FreeCodeCamp_logo.png';//Imagen
import { useState } from 'react';// Importación del Hook useState
function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () =>{
    setNumClics(numClics + 1);//Sumamos uno cuando debemos clic y se lo asignamos a la función setNumClics
  };
  const restarUno = () => {
    if (numClics >0) {
      setNumClics(numClics-1);
    }else{
      alert('No se puede restar');
    }
    
  };
  const reiniciarContador = () => {
    setNumClics(0);
  };


  return (
    <div className="App">
      <div className='freeodecamp-logo-contenedor'>
        <img 
          className='freeccodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de FreeCodeCamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador
          numClic={numClics} />
        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton 
        texto='Restar Uno'
        esBotonDeClic={true}
        manejarClic={restarUno} />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
        
      </div>
    </div>
  );
}

export default App;
