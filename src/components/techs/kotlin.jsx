import React from 'react'
import '../../styles/techs_css/tech_kotlin.css'

class Kotlin extends React.Component {
    constructor() {
        super()
        this.state = {
            minhaClasse: ""
        }
        this.Clicada = this.Clicada.bind(this)
    }

    Clicada() {
        var divAberta = this.state.minhaClasse === "" ? "divAberta" : ""
        this.setState({
            minhaClasse: divAberta
        })
    }

    render() {
        return(
            <>
            <label onClick={this.Clicada}>Kotlin</label>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/06/Kotlin_Icon.svg" alt="kotlin logo" loading="lazy" onClick={this.Clicada} />
                <div id="box8" >
                    <div id="seconddiv8" className={this.state.minhaClasse}>
                        <p id="texto8">
                            <code>Kotlin</code> é uma linguagem de programação para <code>Android</code> e <code>iOS</code>, ou seja:
                            uma linguagem de programação multiplataforma ou híbrida muito parecido com Java, só que com algumas melhorias
                            também, como por exemplo o <code>Null Safety</code> onde previne o código de disparar o NullPointerException,
                            que interrompia o programa em tempo de execução por conta de uma propriedade que tinha valor como <code>Null</code>, onde 
                            nem sempre era algo indesejável, mas as linguagens de programação como o Java, achavam!
                        </p>
                    </div>
                </div>
            </>
        )
    }
}

export default Kotlin