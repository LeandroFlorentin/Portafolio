import React from 'react'
import './mobiles.css'
import Mobile from '../../img/Proyectos/Pexel/homebuscar.jpeg'

const Moviles = () => {
  const circulo = () => {
    const cursor = document.querySelector('#cursor')
    cursor.style.transform = 'scale(0.5)'
    cursor.style.backgroundColor = 'yellow'
  }

  const atras = () => {
    const cursor = document.querySelector('#cursor');
    cursor.style.transform = 'scale(1)'
    cursor.style.backgroundColor = '#08dff8'
  }
  return (
    <div className='containerMobiles'>
      <a
        target='_BLANK'
        onMouseEnter={circulo} onMouseLeave={atras}
        className='aMobiles'
      >
        <a target="_blank" href='https://github.com/LeandroFlorentin/PexelsApp'>Ver GitHub</a>
        <a target="_blank" href='https://www.youtube.com/watch?v=IB2Ac9argK8&ab_channel=LeandroFlorent%C3%ADn'>Ver video</a>
        <img className='imagenMobile' src={Mobile} />
      </a>
    </div>
  )
}

export default Moviles;
