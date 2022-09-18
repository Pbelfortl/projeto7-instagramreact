import react from "react"
import { useState } from "react"

export default function usuario(props) {

    const [nome, setNome] = react.useState(props.nome)

    return (
        <div class="usuario">
            <img src={props.imagem} />
            <div class="texto">
                <strong>{props.tagname}</strong>
                <span>
                    {nome}
                    <ion-icon name="pencil" onClick={()=>setNome(prompt("Digite seu nome!"))}></ion-icon>
                </span>
            </div>
        </div>
    )
}
