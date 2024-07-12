// src/pages/Boletos.js
import React from 'react';
import InputCurrency from '../components/InputCurrency';
import { Link } from 'react-router-dom';
import './Boletos.css';
import { Checkbox } from '@mui/joy';
import Button from '@mui/joy/Button';
import CheckIcon from '@mui/icons-material/Check';
import { ArrowForwardIos } from '@mui/icons-material';

function Boletos() {
    const [saldoMedio, setSaldoMedio] = React.useState('');
    const [percentageSaldoMedio, setpercentageSaldoMedio] = React.useState('');
    const [taxaCDI, setTaxaCDI] = React.useState('');
    const [percentageCetralizacao, setPercentageCetralizacao] = React.useState('');
    const [diasFloat, setDiasFloat] = React.useState('');
    const [CDIauferido1Dia, setCDIauferido1Dia] = React.useState('');
    const [percentageCentralizacao2, setpercentageCentralizacao2] = React.useState('');
    const [isChecked, setIsProtesto1Checked] = React.useState(false);
    const [isChecked2, setIsProtesto2Checked] = React.useState(false);
    const [diasProtesto, setdiasProtesto] = React.useState('');
    const [tarifaProtesto, setTarifaProtesto] = React.useState('');
    const [isCheckedEmissao2Via, setisCheckedEmissao2Via1] = React.useState(false);
    const [isCheckedEmissao2Via2, setisCheckedEmissao2Via2] = React.useState(false);
    const [tarifaProrrogacaoTVencido, setTarifaProrrogacaoTVencido] = React.useState('');
    const [tarifaManutencaoTVencido, setTarifaManutencaoTVencido] = React.useState('');
    const [isCheckedBancoCorrespondente, setisCheckedBancoCorrespondente] = React.useState(false);
    const [isCheckedBancoCorrespondente2, setisCheckedBancoCorrespondente2] = React.useState(false);

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

    const handleCheckboxProtesto1 = (e) => {
        setIsProtesto1Checked(e.target.checked);
        if (e.target.checked) {
            setIsProtesto2Checked(false);
        }
    };

    const handleCheckboxProtesto2 = (e) => {
        setIsProtesto2Checked(e.target.checked);
        if (e.target.checked) {
            setIsProtesto1Checked(false);
            // document.getElementById("sem-protesto").
        }
    };

    const handleDiasProtesto = e => {
        localStorage.setItem('diasProtesto', e.target.value);
        setdiasProtesto(e.target.value);
    };

    const handleTarifaProtesto = e => {
        localStorage.setItem('tarifaProtesto', e.target.value);
        setTarifaProtesto(e.target.value);
    };

    const handleEmissaoSegundaVia1 = (e) => {
        setisCheckedEmissao2Via1(e.target.checked);
        if (e.target.checked) {
            setisCheckedEmissao2Via2(false);
        }
    };

    const handleEmissaoSegundaVia2 = (e) => {
        setisCheckedEmissao2Via2(e.target.checked);
        if (e.target.checked) {
            setisCheckedEmissao2Via1(false);
        }
    };

    const handleTarifaProrrogacaoTVencido = e => {
        localStorage.setItem('tarifaProrrogacaoTVencido', e.target.value);
        setTarifaProrrogacaoTVencido(e.target.value);
    };

    const handleTarifaManutencaoTVencido = e => {
        localStorage.setItem('tarifaManutencaoTVencido', e.target.value);
        setTarifaManutencaoTVencido(e.target.value);
    };

    const handleBancoCorrespondente = e => {
        setisCheckedBancoCorrespondente(e.target.checked);
        if (e.target.checked) {
            setisCheckedBancoCorrespondente2(false);
        }
    }

    const handleBancoCorrespondente2 = e => {
        setisCheckedBancoCorrespondente2(e.target.checked);
        if (e.target.checked) {
            setisCheckedBancoCorrespondente(false);
        }
    }


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
                    <div className="text-box">
                        <p style={{ color: 'white' }}>(=) Receita Estimada</p>
                    </div>
                </div>

                <div className="centralizacao-financeira-2">
                    <h1 className="label" style={{ color: 'white' }}>(2) Centralização Financeira</h1>

                    <InputCurrency value={diasFloat} onChange={handleDiasFloat} placeholder={'Insira aqui!'} title={'(A) Dias de Float'} />
                    <InputCurrency value={CDIauferido1Dia} onChange={handleCDIauferido1Dia} placeholder={'Insira aqui!'} title={'(B) Taxa CDI auferida por 1 dia'} />
                    <InputCurrency value={percentageCentralizacao2} onChange={handlePercentageCentralizacao2} placeholder={'Insira aqui!'} title={'(C) % Centralização'} />

                    <div className="text-box">
                        <p className="common-text" style={{ color: 'white' }}>(=) Receita estimada:</p>
                        <p className="common-text" style={{ color: 'white' }}>(=) Receita total (1) + (2):</p>
                        <p className="common-text" style={{ color: 'white' }}>(=) Quantidade boletos liquidados:</p>
                        <p className="common-text" style={{ color: 'white' }}>(=) Receita gerada por boleto:</p>
                    </div>

                    <hr style={{border: '3px solid white'}}/>

                    <div className="inputs">
                        <div className="input-checkbox">
                            <p className="common-text">Protesto:</p>
                            <div style={{ display: 'flex', gap: '40px' }}>
                                <Checkbox checked={isChecked} color="primary" size="sm" variant="outlined" label="SIM" onChange={handleCheckboxProtesto1} />
                                <Checkbox checked={isChecked2} id="sem-protesto" color="primary" size="sm" variant="outlined" label="NÃO" onChange={handleCheckboxProtesto2} />
                            </div>
                        </div>
                        <div id="inputs-currency">
                            <InputCurrency value={diasProtesto} onChange={handleDiasProtesto} placeholder={'Insira aqui!'} title={'Dias de Protesto'} />
                            <InputCurrency value={tarifaProtesto} onChange={handleTarifaProtesto} placeholder={'Insira aqui!'} title={'Tarifa Protesto'} />
                        </div>
                        <div className="input-checkbox">
                            <p className="common-text">Emissão 2ª Via:</p>
                            <div style={{ display: 'flex', gap: '40px' }}>
                                <Checkbox checked={isCheckedEmissao2Via} color="primary" size="sm" variant="outlined" label="SIM" onChange={handleEmissaoSegundaVia1} />
                                <Checkbox checked={isCheckedEmissao2Via2} color="primary" size="sm" variant="outlined" label="NÃO" onChange={handleEmissaoSegundaVia2} />
                            </div>
                        </div>
                        <div id="inputs-currency">
                            <InputCurrency value={tarifaProrrogacaoTVencido} onChange={handleTarifaProrrogacaoTVencido} placeholder={'Insira aqui!'} title={'Tarifa Prorrogação de Título Vencido'} />
                            <InputCurrency value={tarifaManutencaoTVencido} onChange={handleTarifaManutencaoTVencido} placeholder={'Insira aqui!'} title={'Tarifa Manutenção de Título Vencido'} />
                        </div>
                        <div className="input-checkbox">
                            <p className="common-text">Banco Correspondente:</p>
                            <div style={{ display: 'flex', gap: '40px' }}>
                                <Checkbox checked={isCheckedBancoCorrespondente} color="primary" size="sm" variant="outlined" label="SIM" onChange={handleBancoCorrespondente} />
                                <Checkbox checked={isCheckedBancoCorrespondente2} color="primary" size="sm" variant="outlined" label="NÃO" onChange={handleBancoCorrespondente2} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <Button color="success" startDecorator={<CheckIcon />}>Simular apenas boletos</Button>
                    <Button endDecorator={<ArrowForwardIos />}>Simular mais produtos</Button>
                </div>
            </div>
            <footer>

            </footer>
        </div>
    );
}

export default Boletos;