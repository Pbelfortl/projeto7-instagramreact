export default function posts() {

    return (
        <div class="posts">
            {post}
        </div>
    )
}

const postsArr = [
    {
        imagem: "assets/img/meowed.svg",
        usuario: "meowed",
        conteudo: "assets/img/gato-telefone.svg",
        curtidas: 101523,
        curtiu: "respondeai"
    },
    {
        imagem: "assets/img/barked.svg",
        usuario: "barked",
        conteudo: "assets/img/dog.svg",
        curtidas: 99159,
        curtiu: "adorable_animals"
    }
]

const post = postsArr.map((p) =>

    <div class="post">
        <div class="topo">
            <div class="usuario">
                <img src={p.imagem} />
                {p.usuario}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>

        <div class="conteudo">
            <img src={p.conteudo} />
        </div>

        <div class="fundo">
            <div class="acoes">
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src="assets/img/respondeai.svg" />
                <div class="texto">
                    Curtido por <strong>{p.curtiu}</strong> e <strong>outras {p.curtidas} pessoas</strong>
                </div>
            </div>
        </div>
    </div>
)