import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    const navigate = useNavigate()
    const [abrirMenu, setAbrirMenu] = useState(false)

    const circulo = (e) => {
        const cursor = document.querySelector('#cursor')
        cursor.style.transform = 'scale(6)'
        e.target.style.color = 'transparent'
        cursor.setAttribute("texto", `${e.target.textContent}`)
    }

    const atras = (e) => {
        const cursor = document.querySelector('#cursor');
        cursor.style.transform = 'scale(1)'
        e.target.style = ({ color: '#2128DB' });
        cursor.setAttribute("texto", "")
    }

    const mover = (e) => {
        const cursor = document.querySelector('#cursor');
        cursor.style.transform = 'scale(0)'
        e.target.style.transform = 'scale(1.5)'
    }

    const volver = (e) => {
        const cursor = document.querySelector('#cursor');
        cursor.style.transform = 'scale(1)'
        e.target.style.transform = 'scale(1)'
    }

    const openMenu = () => {
        setAbrirMenu(true)
    }

    const pararPropa = (e) => {
        e.stopPropagation()
    }

    const cerrarMenu = () => {
        setAbrirMenu(false)
    }

    return (
        <>
            <div className='containerNavBar' onClick={pararPropa}>
                <span className='Persona' onMouseEnter={mover} onMouseLeave={volver} onClick={() => navigate('/')}>Leandro</span>
                <div className='containerSpan'>
                    <div onMouseEnter={circulo} onMouseLeave={atras} onClick={() => navigate('/SobreMi')}>Sobre mi</div>
                    <div onMouseEnter={circulo} onMouseLeave={atras} onClick={() => navigate('/Habilidades')}>Habilidades</div>
                    <div onMouseEnter={circulo} onMouseLeave={atras} onClick={() => navigate('/Proyectos')}>Proyectos</div>
                    <div onMouseEnter={circulo} onMouseLeave={atras} onClick={() => navigate('/Contacto')}>Contacto</div>
                </div>
                <div className='containerDesplegable' onClick={openMenu}>
                    <div className='lineaDesple1'></div>
                    <div className='lineaDesple2'></div>
                    <div className='lineaDesple3'></div>
                </div>
                {
                    abrirMenu ?
                        <div className='containerMenuDesple' onClick={pararPropa}>
                            <div className='containerMenu'>
                                <button onClick={cerrarMenu}>X</button>
                                <div onClick={() => navigate('/SobreMi')}>Sobre mi</div>
                                <div onClick={() => navigate('/Habilidades')}>Habilidades</div>
                                <div onClick={() => navigate('/Proyectos')}>Proyectos</div>
                                <div onClick={() => navigate('/Contacto')}>Contacto</div>
                            </div>
                        </div>
                        :
                        null
                }
            </div>
        </>
    )
}

export default NavBar;
