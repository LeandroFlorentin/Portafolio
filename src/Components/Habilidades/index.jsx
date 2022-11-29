import React from 'react'
import './Habilidades.css'

const Habilidades = () => {
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
    return (
        <div className='containerHabilidades'>
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
                        src="https://cdn-icons-png.flaticon.com/128/919/919825.png"
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
                        src="https://cdn.icon-icons.com/icons2/2248/PNG/512/material_ui_icon_137419.png"
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
                        src="https://cdn.icon-icons.com/icons2/2415/PNG/512/express_original_wordmark_logo_icon_146528.png"
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
