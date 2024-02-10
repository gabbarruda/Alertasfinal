import Logo from "../../assets/img/fundo_escuro_logo_integradash.png"
import HomeAzul from "../../assets/img/iconHomeBlue.svg"
import HomeBranco from "../../assets/img/branco_home_icone.png"
import AnalisesAzul from "../../assets/img/iconAnalisesBlue.svg"
import AnalisesBranco from "../../assets/img/branco_ analise_icone.png"
import EstrategiaAzul from "../../assets/img/iconEstratégiaBlue.svg"
import EstrategiaBranco from "../../assets/img/branco_estrategia_icone.png"
import FavoritosAzul from "../../assets/img/iconFavoritosBlue.svg"
import FavoritosBranco from "../../assets/img/branco_favoritos_icone.png"
import AlertasAzul from "../../assets/img/iconAlertasBlue.svg"
import AlertasBranco from "../../assets/img/branco_alerta_icone.png"
import ConfiguracoesAzul from "../../assets/img/iconConfiguracoesBlue.svg"
import ConfiguracoesBranco from "../../assets/img/branco_configuracao_icone.png"
import SairAzul from "../../assets/img/iconSairBlue.svg"
import SairBranco from "../../assets/img/branco_sair_icone.png"

import "./styleperfil.css"

import { Link } from "react-router-dom"
// import { Link } from "react-router-dom"

export default function Perfil() {

    return (
            <aside className="dropdown_perfil" tabIndex={1}>
                    <i className="db2_perfil" tabIndex={1} />
                    <a className="dropbtn_perfil">
                        <img src={SairBranco} alt="" />
                        <span>Perfil</span>
                    </a>
                    <div className="dropdown-content_perfil">
                        <a href="#">Configurações</a>
                        <a href="#">Sair</a>
                    </div>
                </aside>
        

    )
}
