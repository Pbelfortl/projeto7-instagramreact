import react from "react"

export default function usuario(props) {

    const [nome, setNome] = react.useState(props.nome)
    const [imagem, setImagem] = react.useState(props.imagem)

    return (
        <div class="usuario">
            <img src={imagem} onClick={()=>setImagem(prompt("Insira o link da foto!"))} />
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
