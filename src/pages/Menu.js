import React, { useState } from "react";
import Button from "../components/Button";
import stl from "./Menu.module.css";

function Menu() {
    const [DropdownVisibility, setDropdownVisibility] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisibility(!DropdownVisibility);
    }

    return (
        <div className={stl.main}>
            <div className={stl.dropdownmenu}>
                <div className={stl.menuIcon} onClick={toggleDropdown}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul className={`${stl.dropdown} ${DropdownVisibility ? stl.visible : ''}`}>
                    <li><a href="/boletos" className={stl.links}>Boletos</a></li>
                    <li><a href="/" className={stl.links}>SIPAG</a></li>
                    <li><a href="/" className={stl.links}>Produto X</a></li>
                    <li><a href="/" className={stl.links}>Produto Y</a></li>
                    <li><a href="/" className={stl.links}>Produto Z</a></li>
                </ul>
            </div>
            <div className={stl.sidemenu}>
                <div className={stl.sidemenutext}>
                    <a href="/boletos" className={stl.links}>
                        <p className={stl.sidemenup}>Boletos</p>
                    </a>
                    <a href="/" className={stl.links}>
                        <p className={stl.sidemenup}>SIPAG</p>
                    </a>
                    <a href="/" className={stl.links}>
                        <p className={stl.sidemenup}>Produto X</p>
                    </a>
                    <a href="/" className={stl.links}>
                        <p className={stl.sidemenup}>Produto Y</p>
                    </a>
                    <a href="/" className={stl.links}>
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
                    <div className={stl.btn}>
                        <a href="https://intranet.sicoobvaledoaco.com.br/login?r=Lw==" target="_blank">
                            <Button text={'INTRANET'} />
                        </a>
                    </div>
                </div>
            </div>
            <footer>
                <a href="/">
                    <img src="logowhitevertical.png" alt='logo' style={{ height: '80px', width: '120px' }} />
                </a>
            </footer>
        </div>
    );
}

export default Menu;
