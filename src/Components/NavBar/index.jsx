import React from 'react'
import './NavBar.css'

const NavBar = () => {

    const volver = (e) => {
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
    const navegar = () => {
        console.log("hola")
    }
    return (
        <>
            <div className='containerNavBar'>
                <span className='Persona'>Leandro</span>
                <div className='containerSpan'>
                    <div onMouseEnter={volver} onMouseLeave={atras} onClick={navegar}>Sobre mi</div>
                    <div onMouseEnter={volver} onMouseLeave={atras}>Habilidades</div>
                    <div onMouseEnter={volver} onMouseLeave={atras}>Proyectos</div>
                    <div onMouseEnter={volver} onMouseLeave={atras}>Contacto</div>
                </div>
            </div>
        </>
    )
}

export default NavBar;
