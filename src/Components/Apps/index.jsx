import React from 'react'
import './Proyectos.css'
import Lg from '../../img/Proyectos/inicioLG.png'
import GitHub from '../../img/Proyectos/modoOscuroLeandro.png'
import Lol from '../../img/Proyectos/LOL.png'
import Pi from '../../img/Proyectos/videoGamesPI.png'

const Apps = () => {

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
        <div className='containerAppsGlobal'>
            <div className='containerImgPro'>
                <a
                    href='https://videogames-chi.vercel.app/' target='_BLANK'
                    onMouseEnter={circulo} onMouseLeave={atras}
                    className='aSegundo'
                >
                    <span>Ver proyecto</span>
                    <img className='imagenProyec' src={Pi} />
                </a>
                <a
                    href='https://front-lol.vercel.app/' target='_BLANK'
                    onMouseEnter={circulo} onMouseLeave={atras}
                    className='aPrimero'
                >
                    <span>Ver proyecto</span>
                    <img className='imagenProyec' src={Lol} />
                </a>
                <a
                    href='https://proyecto-lg-rang.vercel.app/' target='_BLANK'
                    onMouseEnter={circulo} onMouseLeave={atras}
                    className='aCuarto'
                >
                    <span>Ver proyecto</span>
                    <img className='imagenProyec' src={Lg} />
                </a>
                <a
                    href='https://github-proyect-ten.vercel.app/' target='_BLANK'
                    onMouseEnter={circulo} onMouseLeave={atras}
                    className='aTercero'
                >
                    <span>Ver proyecto</span>
                    <img className='imagenProyec' src={GitHub} />
                </a>
            </div>
        </div>
    )
}

export default Apps;
