import React from 'react'
import '../../styles/techs_css/tech_shell.css'

class Shell extends React.Component {
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
            <label onClick={this.Clicada}>Shell</label>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg" alt="shell logo" loading="lazy" onClick={this.Clicada} />
                <div id="box5" >
                    <div id="seconddiv5" className={this.state.minhaClasse}>
                        <p id="texto5">
                            <code>Shell</code> ou <code>Bash</code> (Bourne-Again-Shell) é uma linguagem para a linha
                            de comando dos sistemas operacionais (PowerShell para windows, Bash para Linux/MacOS), não
                            se trata de uma linguagem de programação convencional, mas sim apenas comandos que o sistema 
                            interpreta tem para se utilizar sem necessariamente de uma interface gráfica, ou para executar 
                            programas em binários, alem de várias outras coisas...
                        </p>
                    </div>
                </div>
            </>
        )
    }
}

export default Shell