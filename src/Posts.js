import react, { useState } from "react"

export default function posts() {

    return (
        <div class="posts">
            {postsArr.map ((p)=> (
                <Post
                    imagem = {p.imagem}
                    usuario = {p.usuario}
                    conteudo = {p.conteudo}
                    curtidas = {p.curtidas}
                    curtiu = {p.curtiu}
                />
            ))}
        </div>
    )
}

function Post(p) {

    const [bookmark, setBookmark] = react.useState("bookmark-outline")
    const [heart, setHeart] = react.useState("heart-outline")
    const [curtidas, setCurtidas] = react.useState(p.curtidas)

    function curtiu () {
    
        if(heart === "heart-outline"){

            setHeart("heart")
            setCurtidas(curtidas+1)

        }  else {setHeart("heart-outline") 
                setCurtidas(curtidas-1)}
       
    }

    return (
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
                <img src={p.conteudo} onClick={curtiu} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={heart} onClick={curtiu}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={bookmark} onClick={() => setBookmark((bookmark === "bookmark-outline") ? "bookmark" : "bookmark-outline")} ></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src="assets/img/respondeai.svg" />
                    <div class="texto">
                        Curtido por <strong>{p.curtiu}</strong> e <strong>outras {curtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>

    )
    
}

const postsArr = [
    {
        imagem: "assets/img/meowed.svg",
        usuario: "meowed",
        conteudo: "assets/img/gato-telefone.svg",
        curtidas: 101523,
        curtiu: "respondeai",
        bookmark: "bookmark-outline"
    },
    {
        imagem: "assets/img/barked.svg",
        usuario: "barked",
        conteudo: "assets/img/dog.svg",
        curtidas: 99159,
        curtiu: "adorable_animals",
        bookmark: "bookmark-outline"
    }
]


