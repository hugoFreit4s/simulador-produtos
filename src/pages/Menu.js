import Button from "../components/Button";
import stl from "./Menu.module.css";
import { Link } from "react-router-dom";

function Menu() {
    return (
        <div className={stl.main}>
            <div className={stl.sidemenu}>
                <div className={stl.sidemenutext}>
                    <a href="/boletos" className={stl.links}>
                        <p className={stl.sidemenup}>Boletos</p>
                    </a>
                    <a href="/boletos" className={stl.links}>
                        <p className={stl.sidemenup}>SIPAG</p>
                    </a>
                    <a href="/boletos" className={stl.links}>
                        <p className={stl.sidemenup}>Produto X</p>
                    </a>
                    <a href="/boletos" className={stl.links}>
                        <p className={stl.sidemenup}>Produto Y</p>
                    </a>
                    <a href="/boletos" className={stl.links}>
                        <p className={stl.sidemenup}>Produto Z</p>
                    </a>
                </div>
                <div>
                    <a href="/">
                        <img src="logowhitevertical.png" alt='logo' style={{ height: '80px', width: '120px' }} />
                    </a>
                </div>
            </div>
            <div className={stl.outside}>
                <div className={stl.talktous}>
                    <div>
                        <h1>Fale Conosco</h1>
                        <p className={stl.outsidetext}>Sugestões, Dúvidas e Suporte: <br />Abra um fluxo direcionado a equipe de BI com o tema “Simulador de Produtos” na Intranet</p>
                    </div>
                    <div>
                        <a href="https://intranet.sicoobvaledoaco.com.br/login?r=Lw==" target="_blank">
                            <Button text={'INTRANET'} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;