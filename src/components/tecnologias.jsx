import React from 'react'
import Texto from './apresentacao'
import Javascript from "./techs/javascript"
import Nodejs from './techs/nodejs'
import Reactjs from './techs/reactjs'
import Java from './techs/java'
import Git from './techs/git'
import '../styles/tecnologias.css'

   function Tecnologias() {
    return (
        <>
            <Texto titulo="Tecnologias que uso normalmente..." />
        <br /><br />
            <Texto subtitulo="De maior proficiência até menor proficiência" />
        <div>
            <ul className="tabelaDeTecnologias">
                <li> <Javascript /> </li>
                <li> <Nodejs /> </li>
                <li> <Reactjs /> </li>
                <li> <Java /> </li>
                <li> <Git /> </li>
                <li>Shell</li>
                <li>Python</li>
                <li>Typescript</li>
                <li>Kotlin</li>
                <li>Arduino / ESP32</li>
            </ul>
        </div>
    </>
    )
}

export default Tecnologias