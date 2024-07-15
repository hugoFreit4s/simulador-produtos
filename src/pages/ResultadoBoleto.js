import { Link } from 'react-router-dom';
import './ResultadoBoletos.css';

function ResultadoBoleto() {
    return (
        <div className="ResultadoBoletos">
            <Link to="/boletos">
                <i className="fa fa-arrow-circle-left" style={{ fontSize: '40px', cursor: 'pointer', color: 'white', marginLeft: '20px', marginTop: '5px' }}></i>
            </Link>
            <main>
                <div className="custos-por-emissao">
                    <h1>Custos por Emissão</h1>
                    <h2>(1) Custos Compensação</h2>
                    <p>Linhas de custos</p>
                    <div className="cabecalho">
                        <h2>Nome</h2>
                        <div id="subcabecalho">
                            <h2>Custo Unitário</h2>
                            <h2>Custo Total</h2>
                        </div>
                    </div>
                    <hr id="hr-menor" />
                    <div className="dados">
                        <div className="nome">
                            <p>(A) Rede Bancária - X Boletos</p>
                            <p>(B) Rede Sicoob - X Boletos;</p>
                            <p>(C) Liquidação Própria Coop. - X Boletos;</p>
                            <p>(D) Correspondente Bancário - X Boletos;</p>
                            <p>(E) Processamento - X Boletos;</p>
                            <p>(F) Tarifa Nova Cobrança - X Boletos;</p>
                        </div>
                        <div className="valores-unitarios">
                            <p>R$0.00,00</p>
                            <p>R$0.00,00</p>
                            <p>R$0.00,00</p>
                            <p>R$0.00,00</p>
                            <p>R$0.00,00</p>
                            <p>R$0.00,00</p>
                        </div>
                        <div className="valores-totais">
                            <p>R$0.00,00</p>
                            <p>R$0.00,00</p>
                            <p>R$0.00,00</p>
                            <p>R$0.00,00</p>
                            <p>R$0.00,00</p>
                            <p>R$0.00,00</p>
                        </div>
                    </div>
                </div>
                <div className="ponto-de-equilibrio">

                </div>
            </main>
        </div>
    )
}

export default ResultadoBoleto;