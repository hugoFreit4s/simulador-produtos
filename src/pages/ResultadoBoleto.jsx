import React, { useState, useRef, useEffect } from 'react';
import ReactToPrint from 'react-to-print';
import DisplayInfo from "../components/DisplayInfo";
import Printer from '../components/Printer';
import DisableNumberScroll from '../utils/DisableNumberScroll';
import rBoletoStl from './ResultadoBoleto.module.css';
import { Link } from 'react-router-dom';
import { useFormContext } from '../contexts/FormContext';
import InputCurrency from '../components/InputCurrency';

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

    return (
        <div className={rBoletoStl.ResultadoBoleto}>
            <Link to="/boletos">
                <i className="fa fa-arrow-circle-left" style={{ fontSize: '40px', cursor: 'pointer', color: 'white', marginLeft: '20px', marginTop: '5px' }}></i>
            </Link>
            <div className={rBoletoStl.section}>
                <h1>1. Centralização Financeira</h1>
                <DisplayInfo title={'Saldo médio:'} data={saldoMedio} />
                <DisplayInfo title={'Porcentagem sobre saldo médio:'} data={'???'} />
                <DisplayInfo title={'Taxa CDI (a.m.):'} data={'???'} />
                <DisplayInfo title={'Porcentagem centralização:'} data={'???'} />
                <DisplayInfo title={'Receita Estimada:'} data={'???'} />
            </div>
            <div className={rBoletoStl.section}>
                <h1>2. Centralização Financeira</h1>
                <DisplayInfo title={'Dias de Float:'} data={diasDeFloat} />
                <DisplayInfo title={`Taxa CDI auferida por ${diasDeFloat} dia(s)`} data={'???'} />
            </div>
            <div className={rBoletoStl.section}>
                <h1>Receitas</h1>
                <DisplayInfo title={'Receita Estimada - Float:'} data={'???'} />
                <DisplayInfo title={'Receita total (1 + 2):'} data={'???'} />
                <DisplayInfo title={'Quantidade de boletos liquidados:'} data={formData.bLiquidados || 'Valor inválido'} />
                <DisplayInfo title={'Receita gerada por boleto:'} data={formData.bLiquidados || 'Valor inválido'} />
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
                <DisplayInfo title={`A - Rede Bancária`} data={`$`} />
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