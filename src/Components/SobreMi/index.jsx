import React from 'react'
import './SobreMi.css'
import { useNavigate } from 'react-router-dom'

const SobreMi = () => {

    const certificados = [{ href: 'https://certificates.soyhenry.com/cert?id=6073f915-1d4d-4fc5-9a2d-acff4318f824', titulo: "Henry Full Stack", certificado: "Ver certificado" },
    { href: 'https://www.coderhouse.com/certificados/6355d8726e1261000e425388', titulo: "CoderHouse React.js", certificado: "Ver certificado" },
    { href: 'https://www.coderhouse.com/certificados/62e6e92126daca0024e1f8e4', titulo: "CoderHouse Javascript", certificado: "Ver certificado" },
    { href: 'https://www.coderhouse.com/certificados/627c858493f86500199f6272', titulo: "CoderHouse desarrollo web", certificado: "Ver certificado" }]

    const navigate = useNavigate()

    const mover = (e) => {
        const cursor = document.querySelector('#cursor');
        cursor.style.transform = 'scale(0.5)'
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
        e.target.style.transform = 'scale(1.05)'
    }

    const noEncima = (e) => {
        const cursor = document.querySelector('#cursor')
        cursor.style.transform = 'scale(1)'
        e.target.style.transform = 'scale(1)'
    }

    return (
        <div className='containerSobreMi2'>
            <div className='seccionIzquierda'>
                <div className='containerTextSobre'>
                    <h1 onMouseEnter={mover} onMouseLeave={volver} className='quienSoy'>Quien soy?</h1>
                    <p onMouseEnter={mover} onMouseLeave={volver}>
                        Un desarrollador Full-Stack que reside en Argentina.
                        Me inicie en la programación realizando la carrera de desarrollador Front-End en CoderHouse
                        y luego realice el curso de desarrollador FullStack en Henry.
                        Actualmente me encuentro trabajando en la empresa Flexit desde Marzo de 2023.
                    </p>
                    <p onMouseEnter={mover} onMouseLeave={volver}>
                        Soy una persona muy organizada, puntual y comprometida en cualquier aspecto de mi vida,
                        me gustan los desafios y buscar la mejor solución a los mismos, entreno en el gimnasio a diario,
                        me gusta mucho leer, los gatos y jugar a la pelota.
                    </p>
                    <p className='entablar' onMouseEnter={mover} onMouseLeave={volver} onClick={() => navigate('/Contacto')}>¡Entablemos contacto para un futuro proyecto!</p>
                </div>
            </div>
            <div className='seccionDerecha'>
                {
                    certificados.map((value, key) => {
                        return (
                            <a href={value.href}
                                key={key}
                                target='_BLANK'
                                className='containerCoder'
                                onMouseEnter={encima}
                                onMouseLeave={noEncima}
                            >
                                <h3
                                >{value.titulo}</h3>
                                <p
                                >{value.certificado}</p>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SobreMi;