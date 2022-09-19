import Usuario from "./Usuario"
import Sugestoes from "./Sugestoes"

export default function sidebar() {

    return (
        <div class="sidebar">
            <Usuario imagem="assets/img/catanacomics.svg" tagname="catanacomics" nome="Catana" />
            <Sugestoes />
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}