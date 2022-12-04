import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './Components/Landing'
import NavBar from './Components/NavBar'
import Habilidades from './Components/Habilidades'
import SobreMi from './Components/SobreMi'
import Apps from './Components/Apps'
import Contacto from './Components/Contacto'

function App() {

  const mover = (e) => {
    const cursor = document.querySelector('#cursor')
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + 'px'
    cursor.style.top = y + "px"
  }

  return (
    <div className='containerApp' onMouseMove={mover}>
      <div id='cursor'></div>
      <BrowserRouter>
        <div className='containerNavRutas'>
          <NavBar />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/SobreMi' element={<SobreMi />} />
            <Route path='/Habilidades' element={<Habilidades />} />
            <Route path='/Proyectos' element={<Apps />} />
            <Route path='/Contacto' element={<Contacto />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
