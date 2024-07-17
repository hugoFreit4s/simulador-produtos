import './Boletos.css';
import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/joy/Button';
import CheckIcon from '@mui/icons-material/Check';
import { ArrowForwardIos } from '@mui/icons-material';

import InputCurrency from '../components/InputCurrency';
import DisplayInfo from '../components/DisplayInfo';

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
                <DisplayInfo title={'(I) % da quantidade em rede bancária'} data={80} />
                <InputCurrency className="input" value={formData.qtdBoletos} onChange={(e) => handleInputChange('qtdBoletos', e.target.value)} placeholder={'Insira aqui!'} title={'A.1) Quantidade de boletos emitidos mensalmente'} />
                <InputCurrency className="input" value={formData.percentageTLiquidados} onChange={(e) => handleInputChange('percentageTLiquidados', e.target.value)} placeholder={'Insira aqui!'} title={'A.2) % dos títulos que são liquidados'} />
                <InputCurrency className="input" value={formData.percentageTBaixadosCedente} onChange={(e) => handleInputChange('percentageTBaixadosCedente', e.target.value)} placeholder={'Insira aqui!'} title={'(I) % dos títulos baixados pedido Cedente'} />
                <InputCurrency className="input" value={formData.percentageTBaixadosDecurso} onChange={(e) => handleInputChange('percentageTBaixadosDecurso', e.target.value)} placeholder={'Insira aqui!'} title={'(II) % dos títulos baixados por decurso de prazo'} />
                <InputCurrency className="input" value={formData.diasFloat} onChange={(e) => handleInputChange('diasFloat', e.target.value)} placeholder={'Insira aqui!'} title={'Dias de float'} />
                <InputCurrency className="input" value={formData.ticketMedio} onChange={(e) => handleInputChange('ticketMedio', e.target.value)} placeholder={'Insira aqui!'} title={'Ticket médio da carteira'} />
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