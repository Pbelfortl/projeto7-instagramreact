export default function stories() {
    return (
        <div class="stories">

            {story}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}


const storiesArr = [
    {
        usuario: "9gag",
        imagem: "assets/img/9gag.svg"
    },
    {
        usuario: "meowed",
        imagem: "assets/img/meowed.svg"
    },
    {
        usuario: "barked",
        imagem: "assets/img/barked.svg"
    },
    {
        usuario: "nathanwpylestrangeplanet",
        imagem: "assets/img/nathanwpylestrangeplanet.svg"
    },
    {
        usuario: "wawawicomics",
        imagem: "assets/img/wawawicomics.svg"
    },
    {
        usuario: "respondeai",
        imagem: "assets/img/respondeai.svg"
    },
    {
        usuario: "filomoderna",
        imagem: "assets/img/filomoderna.svg"
    },
    {
        usuario: "memeriagourmet",
        imagem: "assets/img/memeriagourmet.svg"
    }
]

const story = storiesArr.map((s) =>
    <div class="story">
        <div class="imagem">
            <img src={s.imagem} alt="profile"/>
        </div>
        <div class="usuario">
            {s.usuario}
        </div>
    </div>
)

stories();