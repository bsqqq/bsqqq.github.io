import React from 'react'
import '../../styles/techs_css/tech_python.css'

class Python extends React.Component {
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
            <label onClick={this.Clicada}>Python</label>
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="python logo" loading="lazy" onClick={this.Clicada} />
                <div id="box6" >
                    <div id="seconddiv6" className={this.state.minhaClasse}>
                        <p id="texto6">
                            <code>Python</code> é uma linguagem de programação altamente pragmática, muito simples de aprender
                            e muito poderosa, suas aplicações são inúmeras, desde segurança da informação (portscanners e bots),
                            desenvolvimento web em fluxo de backend até em ciência de dados!, uma linguagem concorrente muito
                            utilizada no mercado de desenvolvimento atualmente, tão poderosa quanto o famoso C/C++.
                        </p>
                    </div>
                </div>
            </>
        )
    }
}

export default Python