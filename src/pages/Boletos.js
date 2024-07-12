// src/pages/Boletos.js
import React from 'react';
import InputCurrency from '../components/InputCurrency';
import { Link } from 'react-router-dom';
import './Boletos.css';
import { Checkbox } from '@mui/joy';

function Boletos() {
    const [saldoMedio, setSaldoMedio] = React.useState('');
    const [percentageSaldoMedio, setpercentageSaldoMedio] = React.useState('');
    const [taxaCDI, setTaxaCDI] = React.useState('');
    const [percentageCetralizacao, setPercentageCetralizacao] = React.useState('');
    const [diasFloat, setDiasFloat] = React.useState('');
    const [CDIauferido1Dia, setCDIauferido1Dia] = React.useState('');
    const [percentageCentralizacao2, setpercentageCentralizacao2] = React.useState('');

    const [isChecked, setIsChecked] = React.useState('');
    const [isChecked2, setIsChecked2] = React.useState('');



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

    const handleDiasFloat = event => {
        localStorage.setItem('diasFloat', event.target.value);
        setDiasFloat(event.target.value);
    };

    const handleCDIauferido1Dia = e => {
        localStorage.setItem('CDIAuferido1Dia', e.target.value);
        setCDIauferido1Dia(e.target.value);
    }

    const handlePercentageCentralizacao2 = e => {
        localStorage.setItem('percentageCentralizacao2', e.target.value);
        setpercentageCentralizacao2(e.target.value);
    }

    const handleCheckbox1 = (event) => {
        setIsChecked(event.target.checked);
        if (event.target.checked) {
            setIsChecked2(false);
        }
    };

    const handleCheckbox2 = (event) => {
        setIsChecked2(event.target.checked);
        if (event.target.checked) {
            setIsChecked(false);
        }
    };
    return (
        <div className="Boletos">
            <Link to="/">
                <i className="fa fa-arrow-circle-left" style={{ fontSize: '40px', cursor: 'pointer', color: 'white', marginLeft: '20px', marginTop: '5px' }}></i>
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

                    <InputCurrency value={diasFloat} onChange={handleDiasFloat} placeholder={'Insira aqui!'} title={'(A) Dias de Float'} />
                    <InputCurrency value={CDIauferido1Dia} onChange={handleCDIauferido1Dia} placeholder={'Insira aqui!'} title={'(B) Taxa CDI auferida por 1 dia'} />
                    <InputCurrency value={percentageCentralizacao2} onChange={handlePercentageCentralizacao2} placeholder={'Insira aqui!'} title={'(C) % Centralização'} />

                    <p className="common-text" style={{ color: 'white' }}>(=) Receita estimada:</p>
                    <p className="common-text" style={{ color: 'white' }}>(=) Receita total (1) + (2):</p>
                    <p className="common-text" style={{ color: 'white' }}>(=) Quantidade boletos liquidados:</p>
                    <p className="common-text" style={{ color: 'white' }}>(=) Receita gerada por boleto:</p>

                    <hr />

                    <div className="inputs">
                        <div id="input-1">
                            <p className="common-text">Protesto:</p>
                            <div style={{ display: 'flex', gap: '40px' }}>
                                <Checkbox checked={isChecked} color="primary" size="md" variant="solid" label="SIM" onChange={handleCheckbox1} />
                                <Checkbox checked={isChecked2} color="primary" size="md" variant="solid" label="NÃO" onChange={handleCheckbox2} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>

            </footer>
        </div>
    );
}

export default Boletos;