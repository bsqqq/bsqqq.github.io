import React from 'react'
import '../../styles/techs_css/tech_typescript.css'

class Typescript extends React.Component {
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
            <label onClick={this.Clicada}>Typescript</label>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="ts logo" loading="lazy" onClick={this.Clicada} />
                <div id="box7" >
                    <div id="seconddiv7" className={this.state.minhaClasse}>
                        <p id="texto7">
                            <code>Typescript</code> é uma linguagem de programação "baseada" no Javascript, onde se aproveita tudo de seu pai
                            porém adiciona alguns recursos a mais que não tinham antes no javascript, como por exemplo <code>tipagem</code>, classes,
                            interfaces, etc... dando uma nova usabilidade mais fácil e prática para o javascript na web, graças aos compiladores, é possivel
                            converter de volta para typescript para ser interpretado para o navegador e rodar sua aplicação normalmente.
                        </p>
                    </div>
                </div>
            </>
        )
    }
}

export default Typescript