import OnePage from './Components/OnePage'
import './App.css'
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
      <OnePage />
    </div>
  );
}

export default App;
