import { Link } from 'react-router-dom';
import React from 'react';
import './ResultadoBoletos.css';
import HomeIcon from '@mui/icons-material/Home';
import { Input } from "@mui/joy";
import DisableNumberScroll from "../DisableNumberScroll";
import InputCurrency from '../components/InputCurrency';
import { Checkbox } from '@mui/joy';

function ResultadoBoleto() {
    DisableNumberScroll();
    const [formData, setFormData] = React.useState({
        saldoMedio: '',
        percentageSaldoMedio: '',
        taxaCDI: '',
        percentageCetralizacao: '',
        diasFloat: '',
        CDIauferido1Dia: '',
        percentageCentralizacao2: '',
        isCheckedProtesto1: false,
        isCheckedProtesto2: false,
        diasProtesto: '',
        tarifaProtesto: '',
        isCheckedEmissao2Via1: false,
        isCheckedEmissao2Via2: false,
        tarifaProrrogacaoTVencido: '',
        tarifaManutencaoTVencido: '',
        isCheckedBancoCorrespondente1: false,
        isCheckedBancoCorrespondente2: false,
        baixaAutomaticaTVendidos: '',
        tarifaEmissaoSegundaVia: '',
    });

    const handleInputChange = (field, value) => {
        localStorage.setItem(field, value);
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleCheckboxChange = (field1, field2, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field1]: value,
            [field2]: value ? false : prevData[field2],
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
                <div className="inputs">
                    <header>
                        <img className="logo" alt='' src="logo.png" />
                    </header>
                    <div className="centralizacao-financeira">
                        <h1 className="label" style={{ color: 'white' }}>(1) Centralização Financeira</h1>

                        <InputCurrency className="input" value={formData.saldoMedio} onChange={(e) => handleInputChange('saldoMedio', e.target.value)} placeholder={'Insira aqui!'} title={'(A) Saldo Médio'} />
                        <InputCurrency className="input" value={formData.percentageSaldoMedio} onChange={(e) => handleInputChange('percentageSaldoMedio', e.target.value)} placeholder={'Insira aqui!'} title={'(B) % Sobre Saldo Médio'} />
                        <InputCurrency className="input" value={formData.taxaCDI} onChange={(e) => handleInputChange('taxaCDI', e.target.value)} placeholder={'Insira aqui!'} title={'(C) Taxa CDI (a.m)'} />
                        <InputCurrency className="input" value={formData.percentageCetralizacao} onChange={(e) => handleInputChange('percentageCetralizacao', e.target.value)} placeholder={'Insira aqui!'} title={'(D) % Centralização'} />
                        <div className="text-box">
                            <p style={{ color: 'white' }}>(=) Receita Estimada</p>
                        </div>
                    </div>

                    <div className="centralizacao-financeira">
                        <h1 className="label" style={{ color: 'white' }}>(2) Centralização Financeira</h1>

                        {/* <InputCurrency className="input" value={formData.diasFloat} onChange={(e) => handleInputChange('diasFloat', e.target.value)} placeholder={'Insira aqui!'} title={'(A) Dias de Float'} /> */}
                        <InputCurrency className="input" value={formData.CDIauferido1Dia} onChange={(e) => handleInputChange('CDIauferido1Dia', e.target.value)} placeholder={'Insira aqui!'} title={'(B) Taxa CDI auferida por 1 dia'} />
                        <InputCurrency className="input" value={formData.percentageCentralizacao2} onChange={(e) => handleInputChange('percentageCentralizacao2', e.target.value)} placeholder={'Insira aqui!'} title={'(C) % Centralização'} />

                        <div className="text-box">
                            <p className="common-text" style={{ color: 'white' }}>(=) Receita estimada:</p>
                            <p className="common-text" style={{ color: 'white' }}>(=) Receita total (1) + (2):</p>
                            <p className="common-text" style={{ color: 'white' }}>(=) Quantidade boletos liquidados:</p>
                            <p className="common-text" style={{ color: 'white' }}>(=) Receita gerada por boleto:</p>
                        </div>

                        <hr style={{ border: '3px solid white' }} />

                        <div className="inputs">
                            <div className="input-checkbox">
                                <p className="common-text">Protesto:</p>
                                <div style={{ display: 'flex', gap: '40px' }}>
                                    <Checkbox checked={formData.isCheckedProtesto1} color="primary" size="sm" variant="outlined" label="SIM" onChange={(e) => handleCheckboxChange('isCheckedProtesto1', 'isCheckedProtesto2', e.target.checked)} />
                                    <Checkbox checked={formData.isCheckedProtesto2} color="primary" size="sm" variant="outlined" label="NÃO" onChange={(e) => handleCheckboxChange('isCheckedProtesto2', 'isCheckedProtesto1', e.target.checked)} />
                                </div>
                            </div>
                            <div className="input">
                                <InputCurrency className="input" value={formData.diasProtesto} onChange={(e) => handleInputChange('diasProtesto', e.target.value)} placeholder={'Insira aqui!'} title={'Dias de Protesto'} />
                                <InputCurrency className="input" value={formData.tarifaProtesto} onChange={(e) => handleInputChange('tarifaProtesto', e.target.value)} placeholder={'Insira aqui!'} title={'Tarifa Protesto'} />
                            </div>
                            <div className="input-checkbox">
                                <p className="common-text">Emissão 2ª Via:</p>
                                <div style={{ display: 'flex', gap: '40px' }}>
                                    <Checkbox checked={formData.isCheckedEmissao2Via1} color="primary" size="sm" variant="outlined" label="SIM" onChange={(e) => handleCheckboxChange('isCheckedEmissao2Via1', 'isCheckedEmissao2Via2', e.target.checked)} />
                                    <Checkbox checked={formData.isCheckedEmissao2Via2} color="primary" size="sm" variant="outlined" label="NÃO" onChange={(e) => handleCheckboxChange('isCheckedEmissao2Via2', 'isCheckedEmissao2Via1', e.target.checked)} />
                                </div>
                            </div>
                            <div className="input">
                                <InputCurrency className="input" value={formData.tarifaProrrogacaoTVencido} onChange={(e) => handleInputChange('tarifaProrrogacaoTVencido', e.target.value)} placeholder={'Insira aqui!'} title={'Tarifa Prorrogação de Título Vencido'} />
                                <InputCurrency className="input" value={formData.tarifaManutencaoTVencido} onChange={(e) => handleInputChange('tarifaManutencaoTVencido', e.target.value)} placeholder={'Insira aqui!'} title={'Tarifa Manutenção de Título Vencido'} />
                            </div>
                            <div className="input-checkbox">
                                <p className="common-text">Banco Correspondente:</p>
                                <div style={{ display: 'flex', gap: '40px' }}>
                                    <Checkbox checked={formData.isCheckedBancoCorrespondente1} color="primary" size="sm" variant="outlined" label="SIM" onChange={(e) => handleCheckboxChange('isCheckedBancoCorrespondente1', 'isCheckedBancoCorrespondente2', e.target.checked)} />
                                    <Checkbox checked={formData.isCheckedBancoCorrespondente2} color="primary" size="sm" variant="outlined" label="NÃO" onChange={(e) => handleCheckboxChange('isCheckedBancoCorrespondente2', 'isCheckedBancoCorrespondente1', e.target.checked)} />
                                </div>
                            </div>
                            <div className="input">
                                <InputCurrency className="input" value={formData.baixaAutomaticaTVendidos} onChange={(e) => handleInputChange('baixaAutomaticaTVendidos', e.target.value)} placeholder={'Insira aqui!'} title={'Baixa Automatica Titulos Vendidos (Dias)'} />
                                <InputCurrency className="input" value={formData.tarifaEmissaoSegundaVia} onChange={(e) => handleInputChange('tarifaEmissaoSegundaVia', e.target.value)} placeholder={'Insira aqui!'} title={'Tarifa Emissão Segunda Via'} />
                            </div>
                        </div>
                    </div>
                </div>
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
                                <td><Input sx={{ '--Input-radius': 0, '--Input-focusedInset': 'var(--any, )', }} value={formData.tarifaBaixoDecursodePrazo} className="input" onChange={(e) => handleInputChange('tarifaBaixoDecursodePrazo', e.target.value)} placeholder={'Insira aqui!'} variant="outlined" type="number" /></td>
                                <td>R$XXX,XX</td>
                            </tr>
                            <tr>
                                <td className="table-first-column">Tarifa na baixa pedido cedente</td>
                                <td><Input sx={{ '--Input-radius': 0, '--Input-focusedInset': 'var(--any, )', }} value={formData.tarifaBaixaPedidoCedente} className="input" onChange={(e) => handleInputChange('tarifaBaixaPedidoCedente', e.target.value)} placeholder={'Insira aqui!'} variant="outlined" type="number" /></td><td>R$XXX,XX</td>
                            </tr>
                            <tr>
                                <td className="table-first-column">Tarifa na liquidação do título</td>
                                <td><Input sx={{ '--Input-radius': 0, '--Input-focusedInset': 'var(--any, )', }} value={formData.tarifaLiquidacaoDoTitulo} className="input" onChange={(e) => handleInputChange('tarifaLiquidacaoDoTitulo', e.target.value)} placeholder={'Insira aqui!'} variant="outlined" type="number" /></td><td>R$XXX,XX</td>
                            </tr>
                            <tr>
                                <td className="table-first-column">Tarifa na entrada do título</td>
                                <td><Input sx={{ '--Input-radius': 0, '--Input-focusedInset': 'var(--any, )', }} value={formData.tarifaEntradaTitulo} className="input" onChange={(e) => handleInputChange('tarifaEntradaTitulo', e.target.value)} placeholder={'Insira aqui!'} variant="outlined" type="number" /></td><td>R$XXX,XX</td>
                            </tr>
                            <tr>
                                <td className="table-first-column">Média das Tarifas de Cobrança Total</td>
                                <td>R$X,XX</td>
                            </tr>
                            <tr>
                                <td className="table-first-column">(=) Simulação Resultado Líquido Mensal</td>
                                <td>R$X,XX</td>
                                <td>R$XXX,XX</td>
                            </tr>
                            <tr>
                                <td className="table-first-column">(=) Simulação Resultado Líquido Anual</td>
                                <td></td>
                                <td>R$XX.XXX,XX</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    )
}

export default ResultadoBoleto;