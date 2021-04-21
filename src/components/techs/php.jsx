import React from 'react'
import '../../styles/techs_css/tech_php.css'

export default class Php extends React.Component {
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
            <label onClick={this.Clicada}>PHP</label>
            <img src="https://www.php.net/images/logos/new-php-logo.svg" alt="php logo" loading="lazy" onClick={this.Clicada} />
                <div id="box9" >
                    <div id="seconddiv9" className={this.state.minhaClasse}>
                        <p id="texto9">
                            <code>PHP</code> é mais uma linguagem de programação para fluxo de backend onde os desenvolvedores web trabalhavam
                            nos primórdios do desenvolvimento web, uma das linguagens com maior utilização no mercado hoje, antes mesmo de javascript
                        </p>
                    </div>
                </div>
            </>
        )
    }
}
