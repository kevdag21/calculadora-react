import './App.css';
import Boton from './components/Boton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='contenedor-calculadora'>
          <div className='fila'><Boton>+</Boton></div>
          <div className='fila'></div>
          <div className='fila'></div>
          <div className='fila'></div>
          <div className='fila'></div>
        </div>
      </header>
    </div>
  );
}

export default App;
