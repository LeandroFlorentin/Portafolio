import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './NavBar.css'
import equis from '../../img/equis.png'

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
                                <img onClick={cerrarMenu} style={{ width: '40px', heigth: '40px' }} src={equis} />
                                <div className='containerNavegadorCelu'>
                                    <div className='containerSpan1'>
                                        <span
                                            className='Persona2'
                                            onMouseEnter={mover}
                                            onMouseLeave={volver}
                                            onClick={() => {
                                                navigate('/')
                                                cerrarMenu()
                                            }}>Leandro</span>
                                        <span onClick={() => {
                                            navigate('/SobreMi')
                                            cerrarMenu()
                                        }}>Sobre mi</span>
                                        <span onClick={() => {
                                            navigate('/Habilidades')
                                            cerrarMenu()
                                        }}>Habilidades</span>
                                        <span onClick={() => {
                                            navigate('/Proyectos')
                                            cerrarMenu()
                                        }}>Proyectos</span>
                                        <span onClick={() => {
                                            navigate('/Contacto')
                                            cerrarMenu()
                                        }}>Contacto</span>
                                    </div>
                                </div>
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
