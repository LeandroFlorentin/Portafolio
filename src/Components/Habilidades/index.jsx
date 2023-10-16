import React from 'react'
import './Habilidades.css'
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
import typescript from '../../img/Tecnologias/typescript.png'
import bitbucket from '../../img/Tecnologias/bitbucket.png'
import sqlite from '../../img/Tecnologias/sqlite.png'

const Habilidades = () => {
    const imagenes = [{ src: Postgre }, { src: Sequelize }, { src: Node }, { src: Express }, { src: Redux }, { src: ReactJS }, { src: Sass }, { src: Boot },
    { src: Material }, { src: GitHub }, { src: Git }, { src: JScr }, { src: Html }, { src: Css }, { src: Firebase }, { src: ReactJS }, { src: typescript }, { src: bitbucket }, { src: sqlite }]
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
        cursor.style.transform = 'scale(0.5)'
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
                        luego profundicé ingresando al curso de CoderHouse y mientras terminaba el curso
                        de React.js de CoderHouse cursaba soyHenry.
                    </p>
                    <p onMouseEnter={mover} onMouseLeave={volver}>
                        Pasando por estos cursos conoci muchas tecnologias
                        de Front como React.js, Redux, Javascript, Sass, Bootstrap, CSS3 y HTML5, de Back como
                        Express.js, Sequelize, PostgreSQL, Node.js y tambien aprendi el manejo de Git y GitHub.
                        Por mi parte tambien aprendi la implementacion de Material UI.
                    </p>
                    <p onMouseEnter={mover} onMouseLeave={volver}>
                        Actualmente me encuentro trabajando en la empresa Flexit como desarrollador Full Stack, en la cual implemente nuevas herramientas como TypeScript, SQLite, entre otros.
                        Con estas nuevas herramientas desarrolle APIS, microservicios y paginas web, siendo bitbucket la plataforma donde se maneja el repositorio.
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
                        <a href='https://portafolio-leandro-florentin.vercel.app/Contacto' style={{
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
                {
                    imagenes.map((value, key) => {
                        return (
                            <div
                                key={key}
                                onMouseEnter={agrandar}
                                onMouseLeave={achicar}
                            >
                                <img
                                    src={value.src}
                                    alt={`img${key}`}
                                    width="30px"
                                    height="30px"
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Habilidades;
