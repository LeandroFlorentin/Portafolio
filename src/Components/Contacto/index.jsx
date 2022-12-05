import React from 'react'
import './Contacto.css'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import Notiflix from 'notiflix'

const Contacto = () => {
    const [enviado, setEnviado] = useState(true)
    const [objetoForm, setObjetoForm] = useState({
        nombre: "",
        email: "",
        mensaje: ""
    })

    const enviarMail = (e) => {
        e.preventDefault()
        if (
            objetoForm.nombre.length
            &&
            objetoForm.email.length
            &&
            objetoForm.mensaje.length
        ) {
            emailjs.sendForm("service_ktd8uku", "template_jirmkfp", e.target, "1EkX72i3uLvtYWoR3")
                .then(res => {
                    setObjetoForm({
                        nombre: "",
                        email: "",
                        mensaje: ""
                    })
                    Notiflix.Notify.success('Enviado con exito.', {
                        position: 'right-bottom',
                    })
                    setEnviado(true)
                })
                .catch(err => {
                    console.log(err)
                })
        }
        else {
            setEnviado(false)
            Notiflix.Notify.failure('Falta completar campos.', {
                position: 'right-bottom',
            })
            console.log("no enviado")
        }
    }

    const cambiarValor = (e) => {
        setObjetoForm({
            ...objetoForm,
            [e.target.name]: e.target.value
        })
    }

    const cursorOff = () => {
        const cursor = document.querySelector('#cursor')
        cursor.style.transform = 'scale(0)'
    }

    const cursorOn = () => {
        const cursor = document.querySelector('#cursor')
        cursor.style.transform = 'scale(1)'
    }

    const letraGrande = (e) => {
        const cursor = document.querySelector('#cursor')
        cursor.style.transform = 'scale(0.5)'
        e.target.style.transform = 'scale(1.1)'
    }

    const letraChica = (e) => {
        const cursor = document.querySelector('#cursor')
        cursor.style.transform = 'scale(1)'
        e.target.style.transform = 'scale(1)'
    }

    return (
        <div className='containerContacto'>
            <div className='containerTextoForm'>
                <div className='containerContactame'>
                    <h1
                        onMouseEnter={letraGrande}
                        onMouseLeave={letraChica}
                    >Contactame!</h1>
                    <p
                        onMouseEnter={letraGrande}
                        onMouseLeave={letraChica}
                        className='pInteresa'
                    >
                        Me interesa buscar mi primera experiencia laboral en relación de dependencia en el mundo IT. Sin embargo si
                        tiene otra solicitud o pregunta, no dude en utilizar el formulario.
                    </p>
                    <div
                        className='containerUbicacionConta'
                        onMouseEnter={letraGrande}
                        onMouseLeave={letraChica}
                    >
                        <p>Florentín Leandro</p>
                        <p>Argentina, Buenos Aires</p>
                        <p>Quilmes</p>
                        <p className='parrafoMail'>email : leandro.florentin@hotmail.com</p>
                    </div>
                </div>
            </div>
            <div className='containerFormulario'>
                <form onSubmit={enviarMail}>
                    <div className='containerInputs'>
                        <div className={!enviado && !objetoForm.nombre ? 'inputsI after1 afterError' : 'inputsI after1'}>
                            <input
                                className='inputs'
                                type='text'
                                placeholder='Nombre'
                                name='nombre'
                                onChange={cambiarValor}
                                value={objetoForm.nombre}
                            />
                        </div>
                        <div className={!enviado && !objetoForm.email ? 'inputsI after2 afterError' : 'inputsI after2'}>
                            <input
                                className='inputs'
                                type='text'
                                placeholder='Email'
                                name='email'
                                onChange={cambiarValor}
                                value={objetoForm.email}
                            />
                        </div>
                    </div>
                    <div className={!enviado && !objetoForm.mensaje ? 'textAreaI afterError' : 'textAreaI'}>
                        <textarea
                            className='textArea'
                            type='text'
                            placeholder='Mensaje'
                            name='mensaje'
                            onChange={cambiarValor}
                            value={objetoForm.mensaje}
                        ></textarea>
                    </div>
                    <button
                        onMouseEnter={cursorOff}
                        onMouseLeave={cursorOn}
                        className='botonSubir'
                        type='submit'
                    >Enviar mensaje !</button>
                </form>
            </div>
        </div>
    )
}

export default Contacto;
