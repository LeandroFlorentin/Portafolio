import React from 'react'
import './SobreMi.css'
import { useNavigate } from 'react-router-dom'

const SobreMi = () => {

    const navigate = useNavigate()

    const mover = (e) => {
        const cursor = document.querySelector('#cursor');
        cursor.style.transform = 'scale(0)'
        e.target.style.transform = 'scale(1.1)'
    }

    const volver = (e) => {
        const cursor = document.querySelector('#cursor');
        cursor.style.transform = 'scale(1)'
        e.target.style.transform = 'scale(1)'
    }

    const encima = (e) => {
        const cursor = document.querySelector('#cursor')
        cursor.style.transform = 'scale(0.5)'
        cursor.style.backgroundColor = 'yellow'
        e.target.style.backgroundColor = '#08dff8'
        e.target.style.color = '#000'
        e.target.style.transform = 'scale(1.1)'
    }

    const noEncima = (e) => {
        const cursor = document.querySelector('#cursor')
        cursor.style.transform = 'scale(1)'
        cursor.style.backgroundColor = '#08dff8'
        e.target.style.backgroundColor = 'transparent'
        e.target.style.color = '#08dff8'
        e.target.style.transform = 'scale(1)'
    }

    return (
        <div className='containerSobreMi2'>
            <div className='cuadradoSobre1'></div>
            <div className='cuadradoSobre2'></div>
            <div className='cuadradoSobre3'></div>
            <div className='cuadradoSobre4'></div>
            <div className='cuadradoSobre5'></div>
            <div className='cuadradoSobre6'></div>
            <div className='seccionIzquierda'>
                <div className='containerTextSobre'>
                    <h1 onMouseEnter={mover} onMouseLeave={volver} className='quienSoy'>Quien soy?</h1>
                    <p onMouseEnter={mover} onMouseLeave={volver}>
                        Un desarrollador Full-Stack que reside en Argentina.
                        Me inicie en la programación realizando la carrera de desarrollador Front-End en CoderHouse
                        y actualmente estoy finalizando el bootcamp de desarrollador Full-Stack de soyHenry.
                    </p>
                    <p onMouseEnter={mover} onMouseLeave={volver}>
                        Soy una persona muy organizada, intento ser muy puntual y comprometido en cualquier aspecto de mi vida,
                        me gustan los desafios y buscar la mejor solución a los mismos, soy un fan de las MMA, entreno en el gimnasio a diario,
                        me gusta mucho leer, los gatos y jugar a la pelota.
                    </p>
                    <p onMouseEnter={mover} onMouseLeave={volver} onClick={() => navigate('/Contacto')}>¡Entablemos contacto para un futuro proyecto!</p>
                </div>
            </div>
            <div className='seccionDerecha'>
                <a href='https://www.coderhouse.com/certificados/6355d8726e1261000e425388'
                    target='_BLANK'
                    className='containerCoder'
                    onMouseEnter={encima}
                    onMouseLeave={noEncima}
                >
                    <h3
                    >CoderHouse React.js</h3>
                    <p
                    >Ver certificado</p>
                </a>
                <a
                    href='https://www.coderhouse.com/certificados/62e6e92126daca0024e1f8e4'
                    target='_BLANK'
                    className='containerCoder'
                    onMouseEnter={encima}
                    onMouseLeave={noEncima}
                >
                    <h3>CoderHouse javascript</h3>
                    <p>Ver certificado</p>
                </a>
                <a
                    href='https://www.coderhouse.com/certificados/627c858493f86500199f6272'
                    target='_BLANK'
                    className='containerCoder'
                    onMouseEnter={encima}
                    onMouseLeave={noEncima}
                >
                    <h3>CoderHouse desarrollo web</h3>
                    <p>Ver certificado</p>
                </a>
            </div>
        </div>
    )
}

export default SobreMi;