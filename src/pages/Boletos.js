import './Boletos.css';
import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/joy/Button';
import CheckIcon from '@mui/icons-material/Check';
import { ArrowForwardIos } from '@mui/icons-material';
import InputCurrency from '../components/InputCurrency';

import DisableNumberScroll from '../DisableNumberScroll';

function Boletos() {
    DisableNumberScroll();
    const [formData, setFormData] = React.useState({
        saldoMedio: '',
    });

    const handleInputChange = (field, value) => {
        localStorage.setItem(field, value);
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    return (
        <div className="Boletos">
            <Link to="/">
                <i className="fa fa-arrow-circle-left" style={{ fontSize: '40px', cursor: 'pointer', color: 'white', marginLeft: '20px', marginTop: '5px' }}></i>
            </Link>
            <div className="main">
                <InputCurrency className="input" value={formData.qtdBoletos} onChange={(e) => handleInputChange('qtdBoletos', e.target.value)} placeholder={'Insira aqui!'} title={'(A) Saldo Médio'} />
                <InputCurrency className="input" value={formData.percentageTEmitidos} onChange={(e) => handleInputChange('percentageTEmitidos', e.target.value)} placeholder={'Insira aqui!'} title={'(A) Saldo Médio'} />
                <InputCurrency className="input" value={formData.percentageTBaixadosCedente} onChange={(e) => handleInputChange('percentageTBaixadosCedente', e.target.value)} placeholder={'Insira aqui!'} title={'(A) Saldo Médio'} />
                <InputCurrency className="input" value={formData.percentageTBaixadosDecurso} onChange={(e) => handleInputChange('percentageTBaixadosDecurso', e.target.value)} placeholder={'Insira aqui!'} title={'(A) Saldo Médio'} />
                <InputCurrency className="input" value={formData.diasFloat} onChange={(e) => handleInputChange('diasFloat', e.target.value)} placeholder={'Insira aqui!'} title={'(A) Saldo Médio'} />
                <InputCurrency className="input" value={formData.ticketMedio} onChange={(e) => handleInputChange('ticketMedio', e.target.value)} placeholder={'Insira aqui!'} title={'(A) Saldo Médio'} />
            </div>
            <div className="buttons">
                <Link to="/resultado-boleto">
                    <Button color="success" startDecorator={<CheckIcon />}>Simular apenas boletos</Button>
                </Link>
                <Link to="/lista-produtos">
                    <Button endDecorator={<ArrowForwardIos />}>Simular mais produtos</Button>
                </Link>
            </div>
        </div>
    );
}

export default Boletos;