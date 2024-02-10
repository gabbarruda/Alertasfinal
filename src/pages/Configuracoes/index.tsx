import "./style.css"

import Perfil from "../../components/Perfil"
import PerfilImg from "../../assets/img/perfil.png"
import MenuLateral from "../../components/MenuLateral"

function Configuracoes() {

    return (
        <>
            <MenuLateral />
            <Perfil />
            <section className="main_pageconfig">
                <section className="main_Config">

                    <h1>Configurações</h1>
                    <div className="config-geral">
                        <div className="perfil">
                            <img src={PerfilImg} alt="Foto de perfil usuário" />
                            <div className="infos-perfil">
                                {/* <!-- <div className="txt-perfil">
                        <label for="nome">Nome:</label>
                        <label for="email">Email:</label>
                        <label for="tel">Telefone:</label>
                    </div> --> */}
                                <div className="txt-perfil">
                                    <input type="text" name="nome" id="nome" placeholder="Nome:" />
                                    <input type="text" name="email" id="email" placeholder="Email:" />
                                    <input type="text" name="tel" id="tel" placeholder="Telefone:" />
                                </div>
                            </div>
                            <span className="sub-barra">meu perfil</span>
                        </div>
                    </div>
                    <button className="config_button">salvar</button>
                </section>
            </section>
        </>
    )
}
export default Configuracoes