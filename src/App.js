import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './Components/Landing'
import NavBar from './Components/NavBar'
import Habilidades from './Components/Habilidades'

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
        <NavBar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/Habilidades' element={<Habilidades />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
