import React from 'react'
export default function Techs(props) {
    var { nome, logo, texto } = props
    var [ minhaClasse, setMinhaClasse ] = React.useState("")
        return (
            <>
            <label onClick={ () => setMinhaClasse("divAberta") }> { nome } </label>
            <img src={ logo } loading="lazy" alt="logo" onClick={ () => setMinhaClasse("divAberta" ? "" : "divAberta") } />
                <div id="box1">
                    <div id="seconddiv1" className={ minhaClasse }>
                        <p id="texto1"> { texto } </p>
                    </div>
                 </div>
            </>
        )
}