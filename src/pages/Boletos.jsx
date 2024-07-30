import boletoStyle from './Boletos.module.css';
import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useFormContext } from '../contexts/FormContext';
import Button from '@mui/joy/Button';
import CheckIcon from '@mui/icons-material/Check';
import { ArrowForwardIos } from '@mui/icons-material';
import InputCurrency from '../components/InputCurrency';
import DisplayInfo from '../components/DisplayInfo';
import DisableNumberScroll from '../utils/DisableNumberScroll';

function Boletos() {
    localStorage.setItem('percentageRedeBancaria', 43);
    localStorage.setItem('percentageRedeSICOOB', 7);
    localStorage.setItem('percentageLiquidacaoPropriaCoop', 7);
    localStorage.setItem('percentageLiquidacaoCorrespBancario', 43);

    const messagesStyle = {
        color: '#55efc4',
        fontFamily: "'Roboto Serif', serif",
        textAlign: 'center'
    }

    DisableNumberScroll();
    const { formData, setFormData } = useFormContext();
    const [error, setError] = useState({
        percentageTLiquidados: '',
        percentageTBaixadosPCedente: '',
        percentageTBaixadosDecurso: '',
        totalPercentageMessage: ''
    });
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const validateAndSetField = (field, value) => {
        const numericValue = Number(value);

        if (numericValue >= 0 && numericValue <= 100) {
            setError((prevError) => ({
                ...prevError,
                [field]: ''
            }));
            setFormData((prevData) => ({
                ...prevData,
                [field]: numericValue,
            }));
        } else {
            setError((prevError) => ({
                ...prevError,
                [field]: 'Valor inválido! Insira um valor entre 0 e 100.'
            }));
            setFormData((prevData) => ({
                ...prevData,
                [field]: ''
            }));
        }
    };

    const handleInputChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const callTwoFunctions = (field, value) => {
        handleInputChange(field, value);
    };

    const checkTotalPercentage = useCallback(() => {
        const total = Number(formData.percentageTBaixadosPCedente || 0) + Number(formData.percentageTBaixadosDecurso || 0);
        const reference = Number(localStorage.getItem('percentageTitulosEmitidosBaixados'));
        const allFieldsFilled = [formData.percentageTEBaixados, formData.qtdBoletos, formData.percentageTLiquidados, formData.percentageTBaixadosPCedente, formData.percentageTBaixadosDecurso, formData.diasFloat, formData.ticketMedio].every(field => field !== '' && field !== null && field !== undefined);
        const allValuesValid = [formData.percentageTEBaixados, formData.percentageTLiquidados, formData.percentageTBaixadosPCedente, formData.percentageTBaixadosDecurso].every(field => field >= 0 && field <= 100);

        if (total < reference) {
            setError((prevError) => ({
                ...prevError,
                totalPercentageMessage: 'A soma dos valores está menor do que o exigido. (I + II = Títulos emitidos que são baixados)',
            }));
        } else if (total > reference) {
            setError((prevError) => ({
                ...prevError,
                totalPercentageMessage: 'A soma dos valores está maior do que o exigido. (I + II = Títulos emitidos que são baixados)',
            }));
        } else {
            setError((prevError) => ({
                ...prevError,
                totalPercentageMessage: 'Soma ok!',
            }));
        }

        setIsButtonDisabled(!(total === 100 && allFieldsFilled && allValuesValid));
    }, [formData]);

    useEffect(() => {
        checkTotalPercentage();
    }, [formData, checkTotalPercentage]);

    useEffect(() => {
        const handleUnload = () => {
            localStorage.clear();
        };

        window.addEventListener('beforeunload', handleUnload);

        return () => {
            window.removeEventListener('beforeunload', handleUnload);
        };
    }, []);

    return (
        <div className="Boletos">
            <div className={boletoStyle.navigation}>
                <Link to="/menu">
                    <i className="fa fa-arrow-circle-left" style={{ fontSize: '40px', cursor: 'pointer', color: 'white', marginLeft: '20px', marginTop: '5px' }}></i>
                </Link>
            </div>
            <div className={boletoStyle.main}>
                <h1 style={{ fontFamily: "Rochester, 'cursive'", color: 'white' }}>Boletos</h1>
                <div className={boletoStyle.data}>
                    <div>
                        <InputCurrency type="number" className="input" value={formData.qtdBoletos} onChange={(e) => handleInputChange('qtdBoletos', e.target.value)} placeholder={'Insira aqui!'} title={'A.1) Quantidade de boletos emitidos mensalmente'} />
                    </div>
                    <div>
                        <InputCurrency type="number" className="input" value={formData.percentageTLiquidados} onChange={(e) => handleInputChange('percentageTLiquidados', e.target.value)} onBlur={(e) => validateAndSetField('percentageTLiquidados', e.target.value)} placeholder={'Insira aqui!'} title={'A.2) % dos títulos que são liquidados'} />
                        {error.percentageTLiquidados && <p style={{ color: 'red', fontFamily: "'Roboto Serif', serif", textAlign: 'center' }}>{error.percentageTLiquidados}</p>}
                        <DisplayInfo title={'(I) % da quantidade em rede bancária'} data={43} />
                        <DisplayInfo title={'(II) % da quantidade em rede Sicoob'} data={7} />
                        <DisplayInfo title={'(III) % da quantidade em liquidação própria cooperativa'} data={7} />
                        <DisplayInfo title={'(IV) % da quantidade em liquidação correspondente bancária'} data={43} />
                    </div>
                    <div>
                        <DisplayInfo title={'A.3) % dos titulos emitidos que são baixados'} data={`${100 - localStorage.getItem('percentageTLiquidados')}`} onBlur={(e) => validateAndSetField('percentageTLiquidados', e.target.value)} {...localStorage.setItem('percentageTitulosEmitidosBaixados', 100 - localStorage.getItem('percentageTLiquidados'))} />
                        <InputCurrency type="number" className="input" value={formData.percentageTBaixadosPCedente} onChange={(e) => callTwoFunctions('percentageTBaixadosPCedente', e.target.value)} onBlur={(e) => validateAndSetField('percentageTBaixadosPCedente', e.target.value)} placeholder={'Insira aqui!'} title={'(I) % dos títulos baixados pedido cedente'} />
                        {error.percentageTBaixadosPCedente && <p style={messagesStyle}>{error.percentageTBaixadosPCedente}</p>}
                        <InputCurrency type="number" className="input" value={formData.percentageTBaixadosDecurso} onChange={(e) => callTwoFunctions('percentageTBaixadosDecurso', e.target.value)} onBlur={(e) => validateAndSetField('percentageTBaixadosDecurso', e.target.value)} placeholder={'Insira aqui!'} title={'(II) % dos títulos baixados por decurso de prazo'} />
                        {error.percentageTBaixadosDecurso && <p style={messagesStyle}>{error.percentageTBaixadosDecurso}</p>}
                        {error.totalPercentageMessage && <p style={messagesStyle}>{error.totalPercentageMessage}</p>}
                    </div>
                    <div>
                        <DisplayInfo title={'A.4) % Direcionadores para precificação do Funding'} data={100} />
                        <DisplayInfo title={'(I) % Centralização Financeira'} data={100} />
                        <DisplayInfo title={'% de saldo médio'} data={0} />
                        <DisplayInfo title={'(III) Taxa (%) CDI no ano (a.a)'} data={13.75} />
                        <InputCurrency type="number" className="input" value={formData.diasFloat} onChange={(e) => handleInputChange('diasFloat', e.target.value)} placeholder={'Insira aqui!'} title={'Dias de float'} />
                    </div>
                    <InputCurrency type="number" className="input" value={formData.ticketMedio} onChange={(e) => handleInputChange('ticketMedio', e.target.value)} placeholder={'Insira aqui!'} title={'Ticket médio da carteira'} />
                </div>
            </div>
            <div className={boletoStyle.btns}>
                <Link to={isButtonDisabled ? '#' : '/resultado-boleto'}>
                    <Button color="success" startDecorator={<CheckIcon />} disabled={isButtonDisabled}>Simular apenas boletos</Button>
                </Link>
                <Link to={isButtonDisabled ? '#' : '/menu'}>
                    <Button endDecorator={<ArrowForwardIos />} disabled={isButtonDisabled}>Simular mais produtos</Button>
                </Link>
            </div>
        </div>
    );
}

export default Boletos;
