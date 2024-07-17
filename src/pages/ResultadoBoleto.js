import { Link } from 'react-router-dom';
import './ResultadoBoletos.css';
import HomeIcon from '@mui/icons-material/Home';

function ResultadoBoleto() {
    return (
        <div className="ResultadoBoletos">
            <Link id="navigation" to="/boletos">
                <i className="fa fa-arrow-circle-left" style={{ fontSize: '40px', cursor: 'pointer', color: 'white', marginLeft: '20px', marginTop: '5px' }}></i>
            </Link>
            <Link id="navigation" to="/">
                <HomeIcon />
            </Link>
            <main>
                <div className="custos-por-emissao">
                    <h1>Custos por Emissão</h1>
                    <h2>(1) Custos Compensação</h2>
                    <div className="cabecalho">
                        <h3>Linhas de custos</h3>
                        <h3>Linhas de custos</h3>
                        <h3>Linhas de custos</h3>
                    </div>
                    <hr />

                    <div className="info-custos">
                        <p className="name">(A) Rede Bancária - X Boletos</p>
                        <p>R$0,XX</p>
                        <p>R$XXX,XX</p>
                    </div>
                    <div className="info-custos">
                        <p className="name">(B) Rede Sicoob - X Boletos</p>
                        <p>R$0,XX</p>
                        <p>R$XXX,XX</p>
                    </div>
                    <div className="info-custos">
                        <p className="name">(C) Liquidação Própria Coop. - X Boletos</p>
                        <p>R$0,XX</p>
                        <p>R$XXX,XX</p>
                    </div>
                    <div className="info-custos">
                        <p className="name">(D) Correspondente Bancário - X Boletos</p>
                        <p>R$0,XX</p>
                        <p>R$XXX,XX</p>
                    </div>
                    <div className="info-custos">
                        <p className="name">(E) Tarifa Nova Cobrança - X Boletos</p>
                        <p>R$0,XX</p>
                        <p>R$XXX,XX</p>
                    </div>
                </div>
                <div className="ponto-de-equilibrio">
                    
                </div>
            </main>
        </div>
    )
}

export default ResultadoBoleto;