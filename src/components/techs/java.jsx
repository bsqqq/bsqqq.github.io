import React from 'react'
import '../../styles/techs_css/tech_java.css'

class Java extends React.Component {
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
                <label onClick={this.Clicada}>Java</label>
                <img src="https://sdtimes.com/wp-content/uploads/2019/03/jW4dnFtA_400x400.jpg" alt="java logo" onClick={this.Clicada} />
                    <div id="box3" >
                        <div id="seconddiv3" className={this.state.minhaClasse}>
                            <p id="texto3">
                                <code>Java</code> é uma linguagem de programação para softwares de sistemas operacionais multi-plataforma,
                                ou seja: um software em Java pode ser usado em Windows, MacOS e distribuições Linux com JVM (Java Virtual Machine), além de ser também usado 
                                para programar aplicativos para Android, é uma linguagem bastante popular e praticamente quase tudo existe Java
                                rodando por baixo dos panos (caixas eletrônicos, servidores e aplicativos web, IoT, smartTVs, consoles de jogos, etc...).    
                            </p>
                        </div>
                    </div>
            </>
        )
    }
}

export default Java