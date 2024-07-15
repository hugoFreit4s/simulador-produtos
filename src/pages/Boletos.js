import './Boletos.css';
import InputCurrency from '../components/InputCurrency';
import React from 'react';
import { Link } from 'react-router-dom';

import { Checkbox } from '@mui/joy';
import Button from '@mui/joy/Button';
import CheckIcon from '@mui/icons-material/Check';
import { ArrowForwardIos } from '@mui/icons-material';

function Boletos() {
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
        <div className="Boletos">
            <Link to="/">
                <i className="fa fa-arrow-circle-left" style={{ fontSize: '40px', cursor: 'pointer', color: 'white', marginLeft: '20px', marginTop: '5px' }}></i>
            </Link>
            <div className="main">
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

                    <InputCurrency className="input" value={formData.diasFloat} onChange={(e) => handleInputChange('diasFloat', e.target.value)} placeholder={'Insira aqui!'} title={'(A) Dias de Float'} />
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
                        <div id="inputs-currency" className="inputs-protesto">
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
                        <div id="inputs-currency">
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
                    </div>
                </div>
                <div className="buttons">
                    <Button color="success" startDecorator={<CheckIcon />}>Simular apenas boletos</Button>
                    <Button endDecorator={<ArrowForwardIos />}>Simular mais produtos</Button>
                </div>
            </div>
        </div>
    );
}

export default Boletos;