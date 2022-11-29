import React from 'react'
import './Habilidades.css'
import { useNavigate } from 'react-router-dom'

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
                        src="https://cdn-icons-png.flaticon.com/512/3128/3128323.png"
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
                        src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
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
                        src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
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
                        src="https://cdn-icons-png.flaticon.com/128/5968/5968672.png"
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
                        src="https://cdn-icons-png.flaticon.com/128/875/875209.png"
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
                        src="https://cdn.icon-icons.com/icons2/2415/PNG/128/redux_original_logo_icon_146365.png"
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
                        src="https://cdn-icons-png.flaticon.com/128/5968/5968358.png"
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
                        src="https://img.icons8.com/color/2x/nodejs.png"
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
                        src="https://cdn.icon-icons.com/icons2/2415/PNG/128/postgresql_plain_wordmark_logo_icon_146390.png"
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
                        src="https://cdn.icon-icons.com/icons2/2415/PNG/128/sequelize_original_logo_icon_146348.png"
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
                        src="https://img.icons8.com/color/452/material-ui.png"
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
                        src="https://firebasestorage.googleapis.com/v0/b/pagina-lg-simulacion.appspot.com/o/express.png?alt=media&token=387b8a64-27eb-4b1d-8b0b-2ccee55ec535"
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
                        src="https://cdn.icon-icons.com/icons2/2107/PNG/96/file_type_git_icon_130581.png"
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
                        src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                        alt='img12'
                        width="30px"
                        height="30px"
                    />
                </div>
            </div>
        </div>
    )
}

export default Habilidades;
