// src/pages/Boletos.js
import React from 'react';
import InputCurrency from '../components/InputCurrency';
import { Link } from 'react-router-dom';
import './Boletos.css';

function Boletos() {
    const [saldoMedio, setSaldoMedio] = React.useState('');
    const [percentageSaldoMedio, setpercentageSaldoMedio] = React.useState('');
    const [taxaCDI, setTaxaCDI] = React.useState('');
    const [percentageCetralizacao, setPercentageCetralizacao] = React.useState('');
    const [diasFloat, setDiasFloat] = React.useState('');

    const handleSMchange = event => {
        localStorage.setItem('saldoMedioLS', event.target.value);
        setSaldoMedio(event.target.value);
    };

    const handlePercentageSMchange = event => {
        localStorage.setItem('percentageSaldoMedioLS', event.target.value);
        setpercentageSaldoMedio(event.target.value);
    };

    const handleTaxaCDI = event => {
        localStorage.setItem('taxaCDI', event.target.value);
        setTaxaCDI(event.target.value);
    };

    const handlePercentageCentralizacao = event => {
        localStorage.setItem('percentageCetralizacao', event.target.value);
        setPercentageCetralizacao(event.target.value);
    };

    const handleDiasFloatChange = event => {
        localStorage.setItem('diasFloat', event.target.value);
        setDiasFloat(event.target.value);
    };

    return (
        <div className="Boletos">
            <Link to="/">
                <i className="fa fa-arrow-circle-left" style={{ fontSize: '40px', cursor: 'pointer', color: 'white', marginLeft: '20px' }}></i>
            </Link>
            <div className="main">
                <header>
                    <img className="logo" alt='' src="logo.png" />
                </header>
                <div className="centralizacao-financeira-1">
                    <h1 className="label" style={{ color: 'white' }}>(1) Centralização Financeira</h1>

                    <InputCurrency value={saldoMedio} onChange={handleSMchange} placeholder={'Insira aqui!'} title={'(A) Saldo Médio'} />
                    <InputCurrency value={percentageSaldoMedio} onChange={handlePercentageSMchange} placeholder={'Insira aqui!'} title={'(B) % Sobre Saldo Médio'} />
                    <InputCurrency value={taxaCDI} onChange={handleTaxaCDI} placeholder={'Insira aqui!'} title={'(C) Taxa CDI (a.m)'} />
                    <InputCurrency value={percentageCetralizacao} onChange={handlePercentageCentralizacao} placeholder={'Insira aqui!'} title={'(D) % Centralização'} />

                    <p style={{ color: 'white' }}>(=) Receita Estimada</p>
                </div>

                <div className="centralizacao-financeira-2">
                    <h1 className="label" style={{ color: 'white' }}>(2) Centralização Financeira</h1>

                    <InputCurrency value={diasFloat} onChange={handleDiasFloatChange} placeholder={'Insira aqui!'} title={'(A) Dias de Float'} />
                </div>
            </div>
            <footer>

            </footer>
        </div>
    );
}

export default Boletos;