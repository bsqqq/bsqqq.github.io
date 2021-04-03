import React from 'react'
import '../../styles/techs_css/tech_nodejs.css'

class NodeJs extends React.Component {
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
                <label onClick={this.Clicada}>Node.js</label>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvXnQDVwDj8wqp_mgvACXgDgmVwqd6rfQODQ&usqp=CAU" alt="node.js logo" loading="lazy" onClick={this.Clicada} />
                        <div id="box1" >
                            <div id="seconddiv1" className={this.state.minhaClasse}>
                                <p id="texto1">
                                    <code>Node.js</code> é um "ambiente de desenvolvimento Javascript" capaz de interpretar o código
                                    sem a necessidade de usar um navegador, com a tecnologia do "V8", um interpretador de códigos
                                    Javascript da Google no navegador Google Chrome, com esta tecnologia é possivel desenvolver 
                                    aplicações de <code>Back-end</code> com a facilidade de se usar Javascript odiernamente e com a
                                    utilização de pacotes como por exemplo Express.
                                </p>
                            </div>
                        </div>
            </>
        )
    }
}

export default NodeJs