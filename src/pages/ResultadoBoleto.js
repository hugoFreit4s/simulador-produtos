import { Link } from 'react-router-dom';
import React from 'react';
import './ResultadoBoletos.css';
import HomeIcon from '@mui/icons-material/Home';
import { Input } from "@mui/joy";
import DisableNumberScroll from "../DisableNumberScroll";

function ResultadoBoleto() {
    DisableNumberScroll();
    const [formData, setFormData] = React.useState({
        saldoMedio: '',
    });
    const handleInputChange = (field, value) => {
        localStorage.setItem(field, value);
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    return (
        <div className="ResultadoBoletos">
            <Link id="navigation" to="/boletos">
                <i className="fa fa-arrow-circle-left" style={{ fontSize: '40px', cursor: 'pointer', color: 'white', marginLeft: '20px', marginTop: '5px' }}></i>
            </Link>
            <Link id="navigation" to="/">
                <HomeIcon />
            </Link>
            <main>
                <div className="info-table">
                    <h1>Custos Por Emissão</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Linhas de Custos</th>
                                <th>Custos Unitários</th>
                                <th>Custos Totais</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="table-first-column">(A) Rede Bancária - XXXX Boletos</td>
                                <td>R$X,XX</td>
                                <td>R$XXX,XX</td>
                            </tr>
                            <tr>
                                <td className="table-first-column">(B) Rede Sicoob - XXX Boletos</td>
                                <td>R$X,XX</td>
                                <td>R$XXX,XX</td>
                            </tr>
                            <tr>
                                <td className="table-first-column">(C) Correspondente Bancário - XXXX Boletos</td>
                                <td>R$X,XX</td>
                                <td>R$XXX,XX</td>
                            </tr>
                            <tr>
                                <td className="table-first-column">(D) Processamento - XXXX Boletos</td>
                                <td>R$X,XX</td>
                                <td>R$XXX,XX</td>
                            </tr>
                            <tr>
                                <td className="table-first-column">(E) Tarifa Nova Cobrança - XXXX Boletos</td>
                                <td>R$X,XX</td>
                                <td>R$XXX,XX</td>
                            </tr>
                            <tr>
                                <td className="table-first-column">(=) Custos Totais:</td>
                                <td>R$X,XX</td>
                                <td>R$XXX,XX</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="info-table">
                    <h1>Ponto de Equilíbrio</h1>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Por Boleto</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="table-first-column">(+) Receitas Auferidas</td>
                                <td>R$X,XX</td>
                                <td>R$XXX,XX</td>
                            </tr>
                            <tr>
                                <td className="table-first-column">(-) Custos Totais Por Boleto</td>
                                <td>R$X,XX</td>
                                <td>R$XXX,XX</td>
                            </tr>
                            <tr>
                                <td className="table-first-column">(=) Falta/Excedente</td>
                                <td>R$X,XX</td>
                                <td>R$XXX,XX</td>
                            </tr>
                            <tr>
                                <td className="table-first-column">Tarifa por baixa por decurso de prazo</td>
                                <td><Input sx={{'--Input-radius': 0, '--Input-focusedInset': 'var(--any, )',}} value={formData.saldoMedio} className="input" onChange={(e) => handleInputChange('saldoMedio', e.target.value)} placeholder={'Insira aqui!'} variant="outlined" type="number" /></td>
                                <td>R$XXX,XX</td>
                            </tr>
                            <tr>
                                <td className="table-first-column">Tarifa na baixa pedido cedente</td>
                                <td><Input sx={{'--Input-radius': 0}} value={formData.saldoMedio} className="input" onChange={(e) => handleInputChange('saldoMedio', e.target.value)} placeholder={'Insira aqui!'} variant="outlined" type="number" /></td>
                                <td>R$XXX,XX</td>
                            </tr>
                            <tr>
                                <td className="table-first-column">Tarifa na liquidação do título</td>
                                <td><Input sx={{'--Input-radius': 0}} value={formData.saldoMedio} className="input" onChange={(e) => handleInputChange('saldoMedio', e.target.value)} placeholder={'Insira aqui!'} variant="outlined" type="number" /></td>
                                <td>R$XXX,XX</td>
                            </tr>
                            <tr>
                                <td className="table-first-column">Tarifa na entrada do título</td>
                                <td><Input sx={{'--Input-radius': 0}} value={formData.saldoMedio} className="input" onChange={(e) => handleInputChange('saldoMedio', e.target.value)} placeholder={'Insira aqui!'} variant="outlined" type="number" /></td>
                                <td>R$XXX,XX</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    )
}

export default ResultadoBoleto;