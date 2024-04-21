import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const OnChangeLinea1 = function (evento) {
      setLinea1(evento.target.value)
  }

  const OnChangeLinea2 = function (evento) {
    setLinea2(evento.target.value)
}

const OnChangeImagen = function (evento) {
  setImagen(evento.target.value)
}

const onClickExportar = function () {
  alert("EXPORTAR")
  html2canvas(document.querySelector("#meme")).then(canvas => {
    var img = canvas.toDataURL("image/png");
    var link = document.createElement('a');
    link.download = 'meme.png';
    link.href = img;
    link.click();
});
}

  return (
    <div className="App">
      
      <select onChange={OnChangeImagen}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart guy</option>
      </select><br/>

      <input onChange={OnChangeLinea1} type="text" placeholder='Linea 1'/><br/>
      <input onChange={OnChangeLinea2} type="text" placeholder='Linea 2'/><br/>
      <button onClick={onClickExportar}>Exportar</button>
      
      <div className="meme" id="meme">
        <span>{linea1}</span> <br/>
        <span>{linea2}</span>
        <img src={"/img/" + imagen + ".jpg"}/>
      </div>
      
    </div>
  );
}

export default App;
