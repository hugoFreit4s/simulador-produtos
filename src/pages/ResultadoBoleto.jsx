import React, { useState, useRef, useEffect } from 'react';
import ReactToPrint from 'react-to-print';
import DisplayInfo from "../components/DisplayInfo";
import Printer from '../components/Printer';
import DisableNumberScroll from '../utils/DisableNumberScroll';
import rBoletoStl from './ResultadoBoleto.module.css';
import { Link } from 'react-router-dom';
import { useFormContext } from '../contexts/FormContext';
import InputCurrency from '../components/InputCurrency';
import CentralizacaoFinanceira, { CentralizacaoFinanceira1, CentralizacaoFinanceira2 } from '../components/ResultadoBoletos/CentralizacaoFinanceira';
import Receitas from '../components/ResultadoBoletos/Receitas';

const ResultadoBoleto = () => {
    const { formData, setFormData } = useFormContext();
    DisableNumberScroll();

    const saldoMedio = (formData.bLiquidados * formData.ticketMedio).toLocaleString('pt-BR', {
        style: "currency",
        currency: "BRL",
    });
    const diasDeFloat = localStorage.getItem('diasFloat');
    const componentRef = useRef();
    const [errors, setErrors] = useState({
        diasDeProtesto: '',
        tarifaProrrogTVencido: '',
        tarifaManutenTVencido: '',
        tarifaBaixaAutomatica: '',
        tarifaEmissao2Via: ''
    });

    const diasDeProtestoRef = useRef(null);
    const tarifaProtestoRef = useRef(null);
    const tarifaProrrogTVencidoRef = useRef(null);
    const tarifaManutenTVencidoRef = useRef(null);
    const tarifaBaixaAutomaticaRef = useRef(null);
    const tarifaEmissao2ViaRef = useRef(null);

    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,
            protesto: 'sim',
            emissao2via: 'sim',
            bancoCorrespondente: 'sim',
        }));
    }, [setFormData]);

    const validateAndSetField = (field, value) => {
        const numericValue = Number(value);
        if (numericValue >= 0 && numericValue <= 100) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [field]: ''
            }));
            setFormData((prevData) => ({
                ...prevData,
                [field]: numericValue,
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [field]: 'Valor inválido! Insira um valor entre 0 e 100.'
            }));
            setFormData((prevData) => ({
                ...prevData,
                [field]: '',
            }));
        }
    };

    const handleProtestoChange = (value) => {
        setFormData((prevData) => ({
            ...prevData,
            protesto: value,
        }));
        if (value === 'nao') {
            setFormData((prevData) => ({
                ...prevData,
                diasDeProtesto: '0',
                tarifaProtesto: '0',
            }));

            if (diasDeProtestoRef.current && tarifaProtestoRef.current) {
                diasDeProtestoRef.current.disabled = true;
                tarifaProtestoRef.current.disabled = true;
            }
        } else {
            if (diasDeProtestoRef.current && tarifaProtestoRef.current) {
                diasDeProtestoRef.current.disabled = false;
                tarifaProtestoRef.current.disabled = false;
            }
        }
    };

    const handleEmissao2Via = (value) => {
        setFormData((prevData) => ({
            ...prevData,
            emissao2via: value,
        }));
        if (value === 'nao') {
            setFormData((prevData) => ({
                ...prevData,
                tarifaProrrogTVencido: '0',
                tarifaManutenTVencido: '0',
            }));

            if (tarifaProrrogTVencidoRef.current && tarifaManutenTVencidoRef.current) {
                tarifaProrrogTVencidoRef.current.disabled = true;
                tarifaManutenTVencidoRef.current.disabled = true;
            }
        } else {
            if (tarifaProrrogTVencidoRef.current && tarifaManutenTVencidoRef.current) {
                tarifaProrrogTVencidoRef.current.disabled = false;
                tarifaManutenTVencidoRef.current.disabled = false;
            }
        }
    };

    const handleBancoCorrespondenteChange = (value) => {
        setFormData((prevData) => ({
            ...prevData,
            bancoCorrespondente: value,
        }));
        if (value === 'nao') {
            setFormData((prevData) => ({
                ...prevData,
                tarifaBaixaAutomatica: '0',
                tarifaEmissao2Via: '0',
            }));

            if (tarifaBaixaAutomaticaRef.current && tarifaEmissao2ViaRef.current) {
                tarifaBaixaAutomaticaRef.current.disabled = true;
                tarifaEmissao2ViaRef.current.disabled = true;
            }
        } else {
            if (tarifaBaixaAutomaticaRef.current && tarifaEmissao2ViaRef.current) {
                tarifaBaixaAutomaticaRef.current.disabled = false;
                tarifaEmissao2ViaRef.current.disabled = false;
            }
        }
    };

    const custoUnitarioRBancaria = 0.31;
    const custoTotalRBancaria = custoUnitarioRBancaria * formData.bRBancaria;

    const custoUnitarioRSicoob = 0.31;
    const custoTotalRSicoob = custoUnitarioRSicoob * formData.bRSicoob;

    const custoUnitarioLiqPropCoop = 0.06;
    const custoTotalLiqPropCoop = custoUnitarioLiqPropCoop * formData.bLPropriaCoop;

    const custoUnitarioCorrespBancario = 1.74;
    const custoTotalCorrespBancario = custoUnitarioCorrespBancario * formData.bCorrespBancario;

    const custoUnitarioProcessamento = 0.03;
    // const custoTotalProcessamento = custoUnitarioProcessamento * formData.qtdBoletos;

    const custoUnitarioTrfNovaCobranca = 0.08;
    const custoTotalTarifaNovaCobranca = custoUnitarioTrfNovaCobranca * formData.qtdBoletos

    const custoUnitarioTotal = (custoUnitarioRBancaria + custoUnitarioRSicoob + custoUnitarioLiqPropCoop + custoUnitarioCorrespBancario + custoUnitarioProcessamento + custoUnitarioTrfNovaCobranca) / 6;
    const custoTotal = custoTotalRBancaria + custoTotalRSicoob + custoTotalLiqPropCoop + custoTotalCorrespBancario // + custoUnitarioProcessamento + custoUnitarioTrfNovaCobranca //

    return (
        <div className={rBoletoStl.ResultadoBoleto}>
            <Link to="/boletos">
                <i className="fa fa-arrow-circle-left" style={{ fontSize: '40px', cursor: 'pointer', color: 'white', marginLeft: '20px', marginTop: '5px' }}></i>
            </Link>
            <div className={rBoletoStl.section}>
                <CentralizacaoFinanceira1 />
            </div>
            <div className={rBoletoStl.section}>
                <CentralizacaoFinanceira2 />
            </div>
            <div className={rBoletoStl.section}>
                <Receitas />
            </div>
            <div className={rBoletoStl.section}>
                <div className={rBoletoStl.checkbox}>
                    <p>Protesto:</p>
                    <div className={rBoletoStl.subcheckbox}>
                        <input
                            type="checkbox"
                            checked={formData.protesto === 'sim'}
                            onChange={() => handleProtestoChange('sim')}
                            style={{ cursor: 'pointer' }}
                        />
                        SIM
                    </div>
                    <div className={rBoletoStl.subcheckbox}>
                        <input
                            type="checkbox"
                            checked={formData.protesto === 'nao'}
                            onChange={() => handleProtestoChange('nao')}
                            style={{ cursor: 'pointer' }}
                        />
                        NÃO
                    </div>
                </div>
                <InputCurrency
                    ref={diasDeProtestoRef}
                    type="number"
                    value={formData.diasDeProtesto || ''}
                    onChange={(e) => validateAndSetField('diasDeProtesto', e.target.value)}
                    placeholder={'Insira aqui!'}
                    title={'Dias de Protesto'}
                    disabled={formData.protesto === 'nao'}
                />
                {errors.diasDeProtesto && <p style={{ color: 'red', fontFamily: "'Roboto Serif', serif", textAlign: 'center' }}>{errors.diasDeProtesto}</p>}
                <InputCurrency
                    ref={tarifaProtestoRef}
                    type="number"
                    value={formData.tarifaProtesto || ''}
                    onChange={(e) => setFormData((prevData) => ({
                        ...prevData,
                        tarifaProtesto: e.target.value || ''
                    }))}
                    placeholder={'Insira aqui!'}
                    title={'Tarifa Protesto'}
                    disabled={formData.protesto === 'nao'}
                />

                <div className={rBoletoStl.checkbox}>
                    <p>Emissão 2ª via:</p>
                    <div className={rBoletoStl.subcheckbox}>
                        <input
                            type="checkbox"
                            checked={formData.emissao2via === 'sim'}
                            onChange={() => handleEmissao2Via('sim')}
                            style={{ cursor: 'pointer' }}
                        />
                        SIM
                    </div>
                    <div className={rBoletoStl.subcheckbox}>
                        <input
                            type="checkbox"
                            checked={formData.emissao2via === 'nao'}
                            onChange={() => handleEmissao2Via('nao')}
                            style={{ cursor: 'pointer' }}
                        />
                        NÃO
                    </div>
                </div>
                <InputCurrency
                    ref={tarifaProrrogTVencidoRef}
                    type="number"
                    value={formData.tarifaProrrogTVencido || ''}
                    onChange={(e) => validateAndSetField('tarifaProrrogTVencido', e.target.value)}
                    placeholder={'Insira aqui!'}
                    title={'Tarifa prorrogação de título vencido'}
                    disabled={formData.emissao2via === 'nao'}
                />
                {errors.tarifaProrrogTVencido && <p style={{ color: 'red', fontFamily: "'Roboto Serif', serif", textAlign: 'center' }}>{errors.tarifaProrrogTVencido}</p>}
                <InputCurrency
                    ref={tarifaManutenTVencidoRef}
                    type="number"
                    value={formData.tarifaManutenTVencido || ''}
                    onChange={(e) => setFormData((prevData) => ({
                        ...prevData,
                        tarifaManutenTVencido: e.target.value || ''
                    }))}
                    placeholder={'Insira aqui!'}
                    title={'Tarifa manutenção de título vencido'}
                    disabled={formData.emissao2via === 'nao'}
                />
                {errors.tarifaManutenTVencido && <p style={{ color: 'red', fontFamily: "'Roboto Serif', serif", textAlign: 'center' }}>{errors.tarifaManutenTVencido}</p>}

                <div className={rBoletoStl.checkbox}>
                    <p>Banco correspondente:</p>
                    <div className={rBoletoStl.subcheckbox}>
                        <input
                            type="checkbox"
                            checked={formData.bancoCorrespondente === 'sim'}
                            onChange={() => handleBancoCorrespondenteChange('sim')}
                            style={{ cursor: 'pointer' }}
                        />
                        SIM
                    </div>
                    <div className={rBoletoStl.subcheckbox}>
                        <input
                            type="checkbox"
                            checked={formData.bancoCorrespondente === 'nao'}
                            onChange={() => handleBancoCorrespondenteChange('nao')}
                            style={{ cursor: 'pointer' }}
                        />
                        NÃO
                    </div>
                </div>
                <InputCurrency
                    ref={tarifaBaixaAutomaticaRef}
                    type="number"
                    value={formData.tarifaBaixaAutomatica || ''}
                    onChange={(e) => validateAndSetField('tarifaBaixaAutomatica', e.target.value)}
                    placeholder={'Insira aqui!'}
                    title={'Baixa automática títulos vendidos (dias)'}
                    disabled={formData.bancoCorrespondente === 'nao'}
                />
                {errors.tarifaBaixaAutomatica && <p style={{ color: 'red', fontFamily: "'Roboto Serif', serif", textAlign: 'center' }}>{errors.tarifaBaixaAutomatica}</p>}
                <InputCurrency
                    ref={tarifaEmissao2ViaRef}
                    type="number"
                    value={formData.tarifaEmissao2Via || ''}
                    onChange={(e) => validateAndSetField('tarifaEmissao2Via', e.target.value)}
                    placeholder={'Insira aqui!'}
                    title={'Tarifa emissão segunda via'}
                    disabled={formData.bancoCorrespondente === 'nao'}
                />
                {errors.tarifaEmissao2Via && <p style={{ color: 'red', fontFamily: "'Roboto Serif', serif", textAlign: 'center' }}>{errors.tarifaEmissao2Via}</p>}
            </div>


            <div className={rBoletoStl.section}>
                <h1>(I) Custos Compensação</h1>
                <table className={rBoletoStl.sss}>
                    <thead>
                        <tr>
                            <th>Linhas de Custos</th>
                            <th>Custos Unitários</th>
                            <th>Custos Totais</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={rBoletoStl.center}>A) Rede Bancária - {formData.bRBancaria} Boletos</td>
                            <td className={rBoletoStl.center}>{custoUnitarioRBancaria.toLocaleString('pt-BR', {
                                style: "currency",
                                currency: "BRL",
                            })}</td>
                            <td className={rBoletoStl.center}>{custoTotalRBancaria.toLocaleString('pt-BR', {
                                style: "currency",
                                currency: "BRL",
                            })}</td>
                        </tr>
                        <tr>
                            <td className={rBoletoStl.center}>B) Rede SICOOB - {formData.bRSicoob} Boletos</td>
                            <td className={rBoletoStl.center}>{custoUnitarioRSicoob.toLocaleString('pt-BR', {
                                style: "currency",
                                currency: "BRL",
                            })}</td>
                            <td className={rBoletoStl.center}>{custoTotalRSicoob.toLocaleString('pt-BR', {
                                style: "currency",
                                currency: "BRL",
                            })}</td>
                        </tr>
                        <tr>
                            <td className={rBoletoStl.center}>C) Liquidação Própria Cooperativa - {formData.bLPropriaCoop} Boletos</td>
                            <td className={rBoletoStl.center}>{custoUnitarioLiqPropCoop.toLocaleString('pt-BR', {
                                style: "currency",
                                currency: "BRL",
                            })}</td>
                            <td className={rBoletoStl.center}>{custoTotalLiqPropCoop.toLocaleString('pt-BR', {
                                style: "currency",
                                currency: "BRL",
                            })}</td>
                        </tr>
                        <tr>
                            <td className={rBoletoStl.center}>D) Correspondente Bancário - {formData.bCorrespBancario} Boletos</td>
                            <td className={rBoletoStl.center}>{custoUnitarioCorrespBancario.toLocaleString('pt-BR', {
                                style: "currency",
                                currency: "BRL",
                            })}</td>
                            <td className={rBoletoStl.center}>{custoTotalCorrespBancario.toLocaleString('pt-BR', {
                                style: "currency",
                                currency: "BRL",
                            })}</td>
                        </tr>
                        <tr>
                            <td className={rBoletoStl.center}>E) Processamento - {formData.qtdBoletos} Boletos</td> {/**TALVEZ A QUANTIDADE LIQUIDADA DOS BOLETOS */}
                            <td className={rBoletoStl.center}>{custoUnitarioProcessamento.toLocaleString('pt-BR', {
                                style: "currency",
                                currency: "BRL",
                            })}</td>
                            <td className={rBoletoStl.center}>???</td>
                        </tr>
                        <tr>
                            <td className={rBoletoStl.center}>D) Tarifa Nova Cobrança - ??? Boletos</td> {/**100% DOS BOLETOS */}
                            <td className={rBoletoStl.center}>{custoUnitarioTrfNovaCobranca.toLocaleString('pt-BR', {
                                style: "currency",
                                currency: "BRL",
                            })}</td>
                            <td className={rBoletoStl.center}>{custoTotalTarifaNovaCobranca.toLocaleString('pt-BR', {
                                style: "currency",
                                currency: "BRL",
                            })}</td>
                        </tr>
                        <tr>
                            <td className={rBoletoStl.center}>= Custos Totais:</td>
                            <td className={rBoletoStl.center}>{custoUnitarioTotal.toLocaleString('pt-BR', {
                                style: "currency",
                                currency: "BRL",
                            })}</td> {/**ESTÁ ERRADO, CONFERIR COM O DEDÉ*/}
                            <td className={rBoletoStl.center}>{custoTotal.toLocaleString('pt-BR', {
                                style: "currency",
                                currency: "BRL",
                            })}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="print">
                <ReactToPrint
                    trigger={() => <button>Imprimir Saldo Médio</button>}
                    content={() => {
                        console.log("Rendering for print:", componentRef.current);
                        return componentRef.current;
                    }} />

                <div style={{ display: 'none' }}>
                    <Printer ref={componentRef} saldoMedio={saldoMedio} />
                </div>
            </div>
        </div>
    );
};

export default ResultadoBoleto;