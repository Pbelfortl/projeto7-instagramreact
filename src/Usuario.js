export default function usuario(props) {
    return (
        <div class="usuario">
            <img src={props.imagem} />
            <div class="texto">
                <strong>{props.tagname}</strong>
                <span>
                    {props.nome}
                    <ion-icon name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}