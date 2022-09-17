export default function Sugestoes() {
    return (
        <sugestoes>
            {sugestao}
        </sugestoes>  
    )
}
const suggestArr = [
    {
        imagem: "assets/img/bad.vibes.memes.svg",
        nome: "bad.vibes.memes",
        razao: "Segue você"
    },
    {
        imagem: "assets/img/chibirdart.svg",
        nome: "chibirdart",
        razao: "Segue você"
    },
    {
        imagem: "assets/img/razoesparaacreditar.svg",
        nome: "razoesparaacreditar",
        razao: "Novo no Instagram"
    },
    {
        imagem: "assets/img/adorable_animals.svg",
        nome: "adorable_animals",
        razao: "Segue você"
    },
    {
        imagem: "assets/img/smallcutecats.svg",
        nome: "smallcutecats",
        razao: "Segue você"
    }
]

const sugestao = suggestArr.map((s) =>

    <div class="sugestao">
        <div class="usuario">
            <img src={s.imagem} />
            <div class="texto">
                <div class="nome">{s.nome}</div>
                <div class="razao">{s.razao}</div>
            </div>
        </div>

        <div class="seguir">Seguir</div>
    </div>
)