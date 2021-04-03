/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "../../styles/techs_css/tech_javascript.css"

class Javascript extends React.Component {
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
                <label onClick={this.Clicada}>Javascript</label>
                    <a onClick={this.Clicada}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" loading="lazy" alt="js logo" />
                    </a>
                    <div id="box0" >
                        <div id="seconddiv0" className={this.state.minhaClasse}>
                            <p id="texto0">
                                <code>Javascript</code> (JS) é uma linguagem de programação
                                voltada para o desenvolvimento web Front-end
                                (tipo essa página que está vendo agora) que a proposito foi feita usando o
                                framework React.js, é minha linguagem favorita, e
                                também gosto de utilizar ela no <code>Back-end</code> com o <code>Node.js</code>
                            </p>
                        </div>
                    </div>
            </>
        )
    }
}

export default Javascript