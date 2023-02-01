import React, { useState } from 'react'
import './Proyectos.css'
import Lg from '../../img/Proyectos/inicioLG.png'
import GitHub from '../../img/Proyectos/modoOscuroLeandro.png'
import Lol from '../../img/Proyectos/LOL.png'
import Pi from '../../img/Proyectos/videoGamesPI.png'
import Moviles from '../Moviles'

const Apps = () => {

    const [cambio, setCambio] = useState(true)

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

    const visitar = (e) => {
        const cursor = document.querySelector("#cursor")
        cursor.style.transform = "scale(0)"
        e.target.style.border = "1 px solid #000";
        e.target.style.backgroundColor = "#08dff8";
        e.target.style.color = "#000"
    }

    const noVisitar = (e) => {
        const cursor = document.querySelector("#cursor")
        cursor.style.transform = "scale(1)"
        e.target.style.border = "1 px solid #08dff8";
        e.target.style.backgroundColor = "transparent";
        e.target.style.color = "#08dff8"
    }

    return (
        <>
            <div className='containerCambio'>
                <h3 className='tituloCambio'>{cambio ? "Proyectos Web" : "Proyectos Mobile"}</h3>
                <button
                    onMouseEnter={visitar}
                    onMouseLeave={noVisitar}
                    className='botonCambio'
                    onClick={() => setCambio(!cambio)}>{cambio ? "Visitar proyectos mobile" : "Volver a proyectos web"}
                </button>
            </div>
            {
                cambio ?
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
                    :
                    <Moviles />
            }
        </>
    )
}

export default Apps;
