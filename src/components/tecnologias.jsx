import React from 'react'
import Texto from './apresentacao'
import Tecs from "./techs";
import logos from '../logos.json'
import textos from '../textos.json'

import '../styles/tecnologias.css'

   function Tecnologias() {
    return (
        <>
            <Texto titulo="Tecnologias que uso normalmente..." />
        <br /><br />
            <Texto subtitulo="De maior proficiência até menor proficiência" />
        <div className="teste">
            <ul className="tabelaDeTecnologias">
                <li> 
                    <Tecs 
                    nome="Javascript"
                    logo={ logos.javascript }
                    texto={ textos.javascript } /></li>
                <li> 
                    <Tecs 
                    nome="React"
                    logo={ logos.react }
                    texto={ textos.react } /></li>
                <li>
                    <Tecs 
                    nome="React Native" 
                    logo={ logos.native }
                    texto={ textos.native } /></li>
                <li> 
                    <Tecs 
                    nome="Nodejs"
                    logo={ logos.nodejs }
                    texto={ textos.nodejs } /></li>
                <li> 
                    <Tecs 
                    nome="Java" 
                    logo={logos.java} 
                    texto={textos.java} /></li>
                <li>
                    <Tecs 
                    nome="Typescript" 
                    logo={ logos.typescript } 
                    texto={ textos.typescript } /></li>
                <li> 
                    <Tecs 
                    nome="Git" 
                    logo={ logos.git} 
                    texto={textos.git} /></li>
                <li>
                    <Tecs
                    nome="Python"
                    logo={ logos.python }
                    texto={ textos.python } /></li>
                <li>
                    <Tecs 
                    nome='Kotlin' 
                    logo={ logos.kotlin } 
                    texto={ textos.kotlin } /></li>
                <li>
                    <Tecs 
                    nome='PHP' 
                    logo={ logos.php } 
                    texto={ textos.php } /></li>
            </ul>
        </div>
    </>
    )
}

export default Tecnologias