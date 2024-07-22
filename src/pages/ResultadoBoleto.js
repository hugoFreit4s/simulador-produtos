import React, { useState, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import DisplayInfo from "../components/DisplayInfo";
import Printer from '../components/Printer';
import DisableNumberScroll from '../utils/DisableNumberScroll';
import rBoletoStl from './ResultadoBoleto.module.css';
import { Link } from 'react-router-dom';
import { useFormContext } from '../contexts/FormContext'
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

    // Estado para a mensagem de erro
    const [error, setError] = useState('');

    // Função para validar o valor do novo input
    const validateAndSetField = (field, value) => {
        const numericValue = Number(value);

        if (numericValue >= 0 && numericValue <= 100) {
            setError('');
            setFormData((prevData) => ({
                ...prevData,
                [field]: numericValue,
            }));
        } else {
            setError('Valor inválido! Insira um valor entre 0 e 100.');
            setFormData((prevData) => ({
                ...prevData,
                [field]: '',
            }));
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
                <DisplayInfo title={'Taxa CDI auferida por 1 dia:'} data={'???'} />
                <DisplayInfo title={'% Centralização:'} data={'???'} />
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
                            onChange={() => setFormData((prevData) => ({
                                ...prevData,
                                protesto: 'sim',
                                protestoNao: ''
                            }))}
                        />
                        SIM
                    </div>
                    <div className={rBoletoStl.subcheckbox}>
                        <input
                            type="checkbox"
                            checked={formData.protesto === 'nao'}
                            onChange={() => setFormData((prevData) => ({
                                ...prevData,
                                protesto: 'nao',
                                protestoSim: ''
                            }))}
                        />
                        NÃO
                    </div>
                </div>
                <InputCurrency type="number" className="input" value={formData.diasDeProtesto || ''} onChange={(e) => validateAndSetField('diasDeProtesto', e.target.value)} placeholder={'Insira aqui!'} title={'Novo campo (0 a 100)'} />
                {error && <p style={{ color: 'red', fontFamily: "'Roboto Serif', serif", textAlign: 'center' }}>{error}</p>}
            </div>
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
    );
};

export default ResultadoBoleto;