import React from 'react'
import { useNavigate } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    const navigate = useNavigate()

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

    return (
        <>
            <div className='containerNavBar'>
                <span className='Persona' onMouseEnter={mover} onMouseLeave={volver} onClick={() => navigate('/')}>Leandro</span>
                <div className='containerSpan'>
                    <div onMouseEnter={circulo} onMouseLeave={atras} onClick={() => navigate('/SobreMi')}>Sobre mi</div>
                    <div onMouseEnter={circulo} onMouseLeave={atras} onClick={() => navigate('Habilidades')}>Habilidades</div>
                    <div onMouseEnter={circulo} onMouseLeave={atras} onClick={() => navigate('Proyectos')}>Proyectos</div>
                    <div onMouseEnter={circulo} onMouseLeave={atras} onClick={() => navigate('Contacto')}>Contacto</div>
                </div>
            </div>
        </>
    )
}

export default NavBar;
