import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import DisplayInfo from "../components/DisplayInfo";
import Printer from '../components/Printer';
import DisableNumberScroll from '../utils/DisableNumberScroll';
import rBoletoStl from './ResultadoBoleto.module.css';
import { Link } from 'react-router-dom';
import { useFormContext } from '../contexts/FormContext'

const ResultadoBoleto = () => {
    const { formData } = useFormContext();
    DisableNumberScroll();

    const saldoMedio = (formData.bLiquidados * formData.ticketMedio).toLocaleString('pt-BR', {
        style: "currency",
        currency: "BRL",
    });
    const diasDeFloat = localStorage.getItem('diasFloat');
    const componentRef = useRef();

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