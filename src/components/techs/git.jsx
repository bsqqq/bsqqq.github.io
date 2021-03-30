import React from 'react'
import '../../styles/techs_css/tech_git.css'

class Git extends React.Component {
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
            <label onClick={this.Clicada}>Git</label>
            <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="git logo" onClick={this.Clicada} />
                <div id="box4" >
                    <div id="seconddiv4" className={this.state.minhaClasse}>
                        <p id="texto4">
                            <code>Git</code> é uma ferramenta de versionamento de código, uma ferramenta muito importante para
                            trabalhar com novas versões de uma aplicação ou antigas versões, ajuda os desenvolvedores a separar
                            versões de acordo com novos recursos que surgem nas atualizações seguintes ou caso precise voltar 
                            para uma versão antiga e estável da aplicação isso será possível com Git.
                        </p>
                    </div>
                </div>
            </>
        )
    }
}

export default Git