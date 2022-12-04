import React from 'react'
import './Habilidades.css'
import { useNavigate } from 'react-router-dom'
import ReactJS from '../../img/Tecnologias/react.png'
import Redux from '../../img/Tecnologias/redux.png'
import JScr from '../../img/Tecnologias/JS.png'
import Node from '../../img/Tecnologias/node.png'
import Express from '../../img/Tecnologias/express.png'
import Sequelize from '../../img/Tecnologias/sequelize.png'
import Postgre from '../../img/Tecnologias/postgresql.png'
import Git from '../../img/Tecnologias/git.png'
import GitHub from '../../img/Tecnologias/github.png'
import Material from '../../img/Tecnologias/materialui.png'
import Boot from '../../img/Tecnologias/boot.png'
import Sass from '../../img/Tecnologias/sass.png'
import Css from '../../img/Tecnologias/CSS.png'
import Html from '../../img/Tecnologias/html.png'
import Firebase from '../../img/Tecnologias/firebase.png'

const Habilidades = () => {
    const navigate = useNavigate()
    const agrandar = (e) => {
        const cursor = document.querySelector('#cursor');
        cursor.style.transform = 'scale(0.5)';
        e.target.style.transform = 'scale(1.2)';
    }
    const achicar = (e) => {
        const cursor = document.querySelector('#cursor');
        cursor.style.transform = 'scale(1)';
        e.target.style.transform = 'scale(1)';
    }

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

    return (
        <div className='containerHabilidades'>
            <div className='containerDescrip'>
                <div className='containerTextoHabi'>
                    <h1 onMouseEnter={mover} onMouseLeave={volver}>Mis habilidades</h1>
                    <p onMouseEnter={mover} onMouseLeave={volver}>
                        Comence este camino viendo videos de Youtube lo basico de HTML5 y CSS3,
                        luego profundicé ingresando al cursor de CoderHouse y mientras terminaba el curso
                        de React.js de CoderHouse cursaba soyHenry.
                    </p>
                    <p onMouseEnter={mover} onMouseLeave={volver}>
                        Pasando por estos cursos conoci muchas tecnologias
                        desde React.js, Redux, Javascript, Express.js, Sequelize, PostgreSQL, Git, GitHub, Node.js, Sass, CSS3 y HTML5.
                        Por mi parte tambien aprendi la implementacion de Material UI.
                    </p>
                    <p onMouseEnter={mover} onMouseLeave={volver}>
                        Tambien tuve la experiencia de trabajar en un equipo de desarrollo en el curso de soyHenry, en el cual desarrollamos una aplicación de plantas
                        en este proceso aprendimos el manejo de GitFlow y metodologias agiles como SCRUM.
                    </p>
                    <p onMouseEnter={mover} onMouseLeave={volver}>
                        Visita mi perfil de
                        <a href='https://www.linkedin.com/in/leandro-florentin/' target='_BLANK' style={{
                            color: '#08dff8',
                            cursor: 'none',
                            textDecoration: 'none',
                            margin: '0px 3px'
                        }}>Linkedin</a>
                        para mas detalles o simplemente
                        <a href='https://portafolio-gold-seven.vercel.app/Contacto' style={{
                            color: '#08dff8',
                            cursor: 'none',
                            textDecoration: 'none',
                            margin: '0px 3px'
                        }}>
                            contáctame</a>.
                    </p>
                </div>
            </div>
            <div className='containerAptitudes'>
                <div
                    onMouseEnter={agrandar}
                    onMouseLeave={achicar}
                >
                    <img
                        src={Postgre}
                        alt='img1'
                        width="30px"
                        height="30px"
                    />
                </div>
                <div
                    onMouseEnter={agrandar}
                    onMouseLeave={achicar}
                >
                    <img
                        src={Sequelize}
                        alt='img2'
                        width="30px"
                        height="30px"
                    />
                </div>
                <div
                    onMouseEnter={agrandar}
                    onMouseLeave={achicar}
                >
                    <img
                        src={Node}
                        alt='img3'
                        width="30px"
                        height="30px"
                    />
                </div>
                <div
                    onMouseEnter={agrandar}
                    onMouseLeave={achicar}
                >
                    <img
                        src={Express}
                        alt='img4'
                        width="30px"
                        height="30px"
                    />
                </div>
                <div
                    onMouseEnter={agrandar}
                    onMouseLeave={achicar}
                >
                    <img
                        src={Redux}
                        alt='img5'
                        width="30px"
                        height="30px"
                    />
                </div>
                <div
                    onMouseEnter={agrandar}
                    onMouseLeave={achicar}
                >
                    <img
                        src={ReactJS}
                        alt='img6'
                        width="30px"
                        height="30px"
                    />
                </div>
                <div
                    onMouseEnter={agrandar}
                    onMouseLeave={achicar}
                >
                    <img
                        src={Sass}
                        alt='img7'
                        width="30px"
                        height="30px"
                    />
                </div>
                <div
                    onMouseEnter={agrandar}
                    onMouseLeave={achicar}
                >
                    <img
                        src={Boot}
                        alt='img8'
                        width="30px"
                        height="30px"
                    />
                </div>
                <div
                    onMouseEnter={agrandar}
                    onMouseLeave={achicar}
                >
                    <img
                        src={Material}
                        alt='img9'
                        width="30px"
                        height="30px"
                    />
                </div>
                <div
                    onMouseEnter={agrandar}
                    onMouseLeave={achicar}
                >
                    <img
                        src={GitHub}
                        alt='img10'
                        width="30px"
                        height="30px"
                    />
                </div>
                <div
                    onMouseEnter={agrandar}
                    onMouseLeave={achicar}
                >
                    <img
                        src={Git}
                        alt='img11'
                        width="30px"
                        height="30px"
                    />
                </div>
                <div
                    onMouseEnter={agrandar}
                    onMouseLeave={achicar}
                >
                    <img
                        src={JScr}
                        alt='img12'
                        width="30px"
                        height="30px"
                    />
                </div>
                <div
                    onMouseEnter={agrandar}
                    onMouseLeave={achicar}
                >
                    <img
                        src={Html}
                        alt='img12'
                        width="30px"
                        height="30px"
                    />
                </div>
                <div
                    onMouseEnter={agrandar}
                    onMouseLeave={achicar}
                >
                    <img
                        src={Css}
                        alt='img12'
                        width="30px"
                        height="30px"
                    />
                </div>
                <div
                    onMouseEnter={agrandar}
                    onMouseLeave={achicar}
                >
                    <img
                        src={Firebase}
                        alt='img10'
                        width="30px"
                        height="30px"
                    />
                </div>
            </div>
        </div>
    )
}

export default Habilidades;
