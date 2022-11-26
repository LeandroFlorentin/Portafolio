import React from 'react'
import './Landing.css'

const SobreMi = () => {

    const mover = (e) => {
        const cursor = document.querySelector('#cursor')
        cursor.style.transform = 'scale(0.3)'
        cursor.style.backgroundColor = 'red'
        e.target.style.transform = 'scale(1.1)'
        e.target.style.color = 'red'
    }

    const volver = (e) => {
        const cursor = document.querySelector('#cursor')
        cursor.style.transform = 'scale(1)'
        cursor.style.backgroundColor = '#2128DB'
        e.target.style.transform = 'scale(1)'
    }

    return (
        <div className='containerSobreMi' name='sobreMi'>
            <div className='noFixed'>
                <div className='containerGlobalHola'>
                    <div className='containerHola' onMouseEnter={mover} onMouseLeave={volver}>
                        <span className='letra'>H</span>
                        <span className='letra'>o</span>
                        <span className='letra'>l</span>
                        <span className='letra'>a</span>
                        <span className='letra'>,</span>
                    </div>
                    <div className='containerLeandro' onMouseEnter={mover} onMouseLeave={volver}>
                        <span className='letra'>s</span>
                        <span className='letra'>o</span>
                        <span className='letra'>y</span>
                        <span className='letra'>L</span>
                        <span className='letra'>e</span>
                        <span className='letra'>a</span>
                        <span className='letra'>n</span>
                        <span className='letra'>d</span>
                        <span className='letra'>r</span>
                        <span className='letra'>o</span>
                    </div>
                    <div className='containerDesarrollador' onMouseEnter={mover} onMouseLeave={volver}>
                        <span className='letra'>d</span>
                        <span className='letra'>e</span>
                        <span className='letra'>s</span>
                        <span className='letra'>a</span>
                        <span className='letra'>r</span>
                        <span className='letra'>r</span>
                        <span className='letra'>o</span>
                        <span className='letra'>l</span>
                        <span className='letra'>l</span>
                        <span className='letra'>a</span>
                        <span className='letra'>d</span>
                        <span className='letra'>o</span>
                        <span className='letra'>r</span>
                        <span className='letra'>F</span>
                        <span className='letra'>u</span>
                        <span className='letra'>l</span>
                        <span className='letra'>l</span>
                        <span className='letra'>-</span>
                        <span className='letra'>S</span>
                        <span className='letra'>t</span>
                        <span className='letra'>a</span>
                        <span className='letra'>c</span>
                        <span className='letra'>k</span>
                    </div>
                </div>
                <div className='pelotita1'></div>
                <div className='pelotita2'></div>
                <div className='pelotita3'></div>
                <div className='pelotita4'></div>
                <div className='pelotita5'></div>
                <div className='pelotita6'></div>
                <div className='pelotita7'></div>
                <div className='pelotita8'></div>
                <div className='pelotita9'></div>
                <div className='pelotita10'></div>
                <div className='pelotita11'></div>
                <div className='pelotita12'></div>
                <div className='pelotita13'></div>
                <div className='pelotita14'></div>
                <div className='pelotita15'></div>
            </div>
        </div>
    )
}

export default SobreMi;
