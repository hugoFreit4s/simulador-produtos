import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import DisplayInfo from "../components/DisplayInfo";
import Printer from '../components/Printer';
import DisableNumberScroll from '../DisableNumberScroll';
import rBoletoStl from './ResultadoBoleto.module.css';
import { Link } from 'react-router-dom';

const ResultadoBoleto = () => {
    DisableNumberScroll();
    const qtdBoletos = parseFloat(localStorage.getItem('qtdBoletos')) || 0;
    const percentageTLiquidados = parseFloat(localStorage.getItem('percentageTLiquidados')) || 0;
    const ticketMedio = parseFloat(localStorage.getItem('ticketMedio')) || 0;
    const bLiquidados = (qtdBoletos * percentageTLiquidados) / 100;
    const saldoMedio = (bLiquidados * ticketMedio).toLocaleString('pt-BR', {
        style: "currency",
        currency: "BRL",
    });
    const diasDeFloat = localStorage.getItem('diasFloat');
    const componentRef = useRef();

    // const handleCheckboxChange = (field1, field2, value) => {
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         [field1]: value,
    //         [field2]: value ? false : prevData[field2],
    //     }));
    // };

    return (
        <div className={rBoletoStl.ResultadoBoleto}>
            <Link to="/boletos">
                <i className="fa fa-arrow-circle-left" style={{ fontSize: '40px', cursor: 'pointer', color: 'white', marginLeft: '20px', marginTop: '5px' }}></i>
            </Link>
            <div className={rBoletoStl.section}>
                <h1>1. Centralização Financeira</h1>
                <DisplayInfo title={'Saldo médio'} data={saldoMedio} />
                <DisplayInfo title={'Porcentagem sobre saldo médio'} data={'???'} />
                <DisplayInfo title={'Taxa CDI (a.m.)'} data={'???'} />
                <DisplayInfo title={'Porcentagem centralização'} data={'???'} />
                <p><strong>RECEITA ESTIMADA:</strong></p>
            </div>
            <div className={rBoletoStl.section}>
                <h1>2. Centralização Financeira</h1>
                <DisplayInfo title={'Dias de Float'} data={diasDeFloat} />
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