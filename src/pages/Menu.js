import Button from "../components/Button";
import stl from "./Menu.module.css";
import { Link } from "react-router-dom";

function Menu() {
    return (
        <div className={stl.main}>
            <div className={stl.sidemenu}>
                <div className={stl.sidemenutext}>
                    <Link to="/boletos">
                        <p className={stl.sidemenup}>Boletos</p>
                    </Link>
                    <p className={stl.sidemenup}>SIPAG</p>
                    <p className={stl.sidemenup}>Produto X</p>
                    <p className={stl.sidemenup}>Produto Y</p>
                    <p className={stl.sidemenup}>Produto Z</p>
                </div>
                <div>
                    <img src="logowhitevertical.png" alt='logo' style={{ height: '80px', width: '120px' }} />
                </div>
            </div>
            <div className={stl.talktous}>
                <h1>Fale Conosco</h1>
                <p>Sugestões, Dúvidas e Suporte: Abra um fluxo direcionado a equipe de BI com o tema “Simulador de Produtos” na Intranet</p>
                <Button text={'INTRANET'} />
            </div>
        </div>
    )
}

export default Menu;