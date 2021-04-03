import React from 'react'
import '../../styles/techs_css/tech_reactjs.css'

class ReactJs extends React.Component {
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
        return (
            <>
                <label onClick={this.Clicada}>React.js</label>
                <img src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png" alt="react.js logo" loading="lazy" onClick={this.Clicada} />
                        <div id="box2" >
                            <div id="seconddiv2" className={this.state.minhaClasse}>
                                <p id="texto2">
                                    <code>React.js</code> é um framework para o desenvolvimento <code>Front-end</code> feito pela equipe de desenvolvimento
                                    do Facebook para facilitar o desenvolvimento de aplicações web de tal forma que foque na produtividade 
                                    juntamente com a facilidade de usar o Javascript em um formato novo conhecido como JSX, que se trata de
                                    uma extensão do Javascript, tambem é possivel trabalhar com Typescript (TSX), para quem gosta de linguagens "tipadas".
                                </p>
                            </div>
                        </div>
            </>
        )
    }
}

export default ReactJs