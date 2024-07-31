import { useFormContext } from "../../contexts/FormContext";
import { useRef, useState } from "react";
import rBoletoStl from '../../pages/ResultadoBoleto.module.css';
import InputCurrency from "../InputCurrency";

function Receitas2() {
    const { formData, setFormData } = useFormContext();
    const diasDeProtestoRef = useRef(null);
    const tarifaProtestoRef = useRef(null);
    const tarifaProrrogTVencidoRef = useRef(null);
    const tarifaManutenTVencidoRef = useRef(null);
    const tarifaBaixaAutomaticaRef = useRef(null);
    const tarifaEmissao2ViaRef = useRef(null);

    const handleProtestoChange = (value) => {
        setFormData((prevData) => ({
            ...prevData,
            protesto: value,
        }));
        if (value === 'nao') {
            setFormData((prevData) => ({
                ...prevData,
                diasDeProtesto: '0',
                tarifaProtesto: '0',
            }));

            if (diasDeProtestoRef.current && tarifaProtestoRef.current) {
                diasDeProtestoRef.current.disabled = true;
                tarifaProtestoRef.current.disabled = true;
            }
        } else {
            if (diasDeProtestoRef.current && tarifaProtestoRef.current) {
                diasDeProtestoRef.current.disabled = false;
                tarifaProtestoRef.current.disabled = false;
            }
        }
    };

    const validateAndSetField = (field, value) => {
        const numericValue = Number(value);
        if (numericValue >= 0 && numericValue <= 100) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [field]: ''
            }));
            setFormData((prevData) => ({
                ...prevData,
                [field]: numericValue,
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [field]: 'Valor inválido! Insira um valor entre 0 e 100.'
            }));
            setFormData((prevData) => ({
                ...prevData,
                [field]: '',
            }));
        }
    };

    const [errors, setErrors] = useState({
        diasDeProtesto: '',
        tarifaProrrogTVencido: '',
        tarifaManutenTVencido: '',
        tarifaBaixaAutomatica: '',
        tarifaEmissao2Via: ''
    });

    const handleBancoCorrespondenteChange = (value) => {
        setFormData((prevData) => ({
            ...prevData,
            bancoCorrespondente: value,
        }));
        if (value === 'nao') {
            setFormData((prevData) => ({
                ...prevData,
                tarifaBaixaAutomatica: '0',
                tarifaEmissao2Via: '0',
            }));

            if (tarifaBaixaAutomaticaRef.current && tarifaEmissao2ViaRef.current) {
                tarifaBaixaAutomaticaRef.current.disabled = true;
                tarifaEmissao2ViaRef.current.disabled = true;
            }
        } else {
            if (tarifaBaixaAutomaticaRef.current && tarifaEmissao2ViaRef.current) {
                tarifaBaixaAutomaticaRef.current.disabled = false;
                tarifaEmissao2ViaRef.current.disabled = false;
            }
        }
    };

    const handleEmissao2Via = (value) => {
        setFormData((prevData) => ({
            ...prevData,
            emissao2via: value,
        }));
        if (value === 'nao') {
            setFormData((prevData) => ({
                ...prevData,
                tarifaProrrogTVencido: '0',
                tarifaManutenTVencido: '0',
            }));

            if (tarifaProrrogTVencidoRef.current && tarifaManutenTVencidoRef.current) {
                tarifaProrrogTVencidoRef.current.disabled = true;
                tarifaManutenTVencidoRef.current.disabled = true;
            }
        } else {
            if (tarifaProrrogTVencidoRef.current && tarifaManutenTVencidoRef.current) {
                tarifaProrrogTVencidoRef.current.disabled = false;
                tarifaManutenTVencidoRef.current.disabled = false;
            }
        }
    };

    return (
        <div>
            <div className={rBoletoStl.checkbox}>
                <p>Protesto:</p>
                <div className={rBoletoStl.subcheckbox}>
                    <input
                        type="checkbox"
                        checked={formData.protesto === 'sim'}
                        onChange={() => handleProtestoChange('sim')}
                        style={{ cursor: 'pointer' }}
                    />
                    SIM
                </div>
                <div className={rBoletoStl.subcheckbox}>
                    <input
                        type="checkbox"
                        checked={formData.protesto === 'nao'}
                        onChange={() => handleProtestoChange('nao')}
                        style={{ cursor: 'pointer' }}
                    />
                    NÃO
                </div>
            </div>
            <InputCurrency
                ref={diasDeProtestoRef}
                type="number"
                value={formData.diasDeProtesto || ''}
                onChange={(e) => validateAndSetField('diasDeProtesto', e.target.value)}
                placeholder={'Insira aqui!'}
                title={'Dias de Protesto'}
                disabled={formData.protesto === 'nao'}
            />
            {errors.diasDeProtesto && <p style={{ color: 'red', fontFamily: "'Roboto Serif', serif", textAlign: 'center' }}>{errors.diasDeProtesto}</p>}
            <InputCurrency
                ref={tarifaProtestoRef}
                type="number"
                value={formData.tarifaProtesto || ''}
                onChange={(e) => setFormData((prevData) => ({
                    ...prevData,
                    tarifaProtesto: e.target.value || ''
                }))}
                placeholder={'Insira aqui!'}
                title={'Tarifa Protesto'}
                disabled={formData.protesto === 'nao'}
            />

            <div className={rBoletoStl.checkbox}>
                <p>Emissão 2ª via:</p>
                <div className={rBoletoStl.subcheckbox}>
                    <input
                        type="checkbox"
                        checked={formData.emissao2via === 'sim'}
                        onChange={() => handleEmissao2Via('sim')}
                        style={{ cursor: 'pointer' }}
                    />
                    SIM
                </div>
                <div className={rBoletoStl.subcheckbox}>
                    <input
                        type="checkbox"
                        checked={formData.emissao2via === 'nao'}
                        onChange={() => handleEmissao2Via('nao')}
                        style={{ cursor: 'pointer' }}
                    />
                    NÃO
                </div>
            </div>
            <InputCurrency
                ref={tarifaProrrogTVencidoRef}
                type="number"
                value={formData.tarifaProrrogTVencido || ''}
                onChange={(e) => validateAndSetField('tarifaProrrogTVencido', e.target.value)}
                placeholder={'Insira aqui!'}
                title={'Tarifa prorrogação de título vencido'}
                disabled={formData.emissao2via === 'nao'}
            />
            {errors.tarifaProrrogTVencido && <p style={{ color: 'red', fontFamily: "'Roboto Serif', serif", textAlign: 'center' }}>{errors.tarifaProrrogTVencido}</p>}
            <InputCurrency
                ref={tarifaManutenTVencidoRef}
                type="number"
                value={formData.tarifaManutenTVencido || ''}
                onChange={(e) => setFormData((prevData) => ({
                    ...prevData,
                    tarifaManutenTVencido: e.target.value || ''
                }))}
                placeholder={'Insira aqui!'}
                title={'Tarifa manutenção de título vencido'}
                disabled={formData.emissao2via === 'nao'}
            />
            {errors.tarifaManutenTVencido && <p style={{ color: 'red', fontFamily: "'Roboto Serif', serif", textAlign: 'center' }}>{errors.tarifaManutenTVencido}</p>}

            <div className={rBoletoStl.checkbox}>
                <p>Banco correspondente:</p>
                <div className={rBoletoStl.subcheckbox}>
                    <input
                        type="checkbox"
                        checked={formData.bancoCorrespondente === 'sim'}
                        onChange={() => handleBancoCorrespondenteChange('sim')}
                        style={{ cursor: 'pointer' }}
                    />
                    SIM
                </div>
                <div className={rBoletoStl.subcheckbox}>
                    <input
                        type="checkbox"
                        checked={formData.bancoCorrespondente === 'nao'}
                        onChange={() => handleBancoCorrespondenteChange('nao')}
                        style={{ cursor: 'pointer' }}
                    />
                    NÃO
                </div>
            </div>
            <InputCurrency
                ref={tarifaBaixaAutomaticaRef}
                type="number"
                value={formData.tarifaBaixaAutomatica || ''}
                onChange={(e) => validateAndSetField('tarifaBaixaAutomatica', e.target.value)}
                placeholder={'Insira aqui!'}
                title={'Baixa automática títulos vendidos (dias)'}
                disabled={formData.bancoCorrespondente === 'nao'}
            />
            {errors.tarifaBaixaAutomatica && <p style={{ color: 'red', fontFamily: "'Roboto Serif', serif", textAlign: 'center' }}>{errors.tarifaBaixaAutomatica}</p>}
            <InputCurrency
                ref={tarifaEmissao2ViaRef}
                type="number"
                value={formData.tarifaEmissao2Via || ''}
                onChange={(e) => validateAndSetField('tarifaEmissao2Via', e.target.value)}
                placeholder={'Insira aqui!'}
                title={'Tarifa emissão segunda via'}
                disabled={formData.bancoCorrespondente === 'nao'}
            />
            {errors.tarifaEmissao2Via && <p style={{ color: 'red', fontFamily: "'Roboto Serif', serif", textAlign: 'center' }}>{errors.tarifaEmissao2Via}</p>}
        </div>
    )
}

export default Receitas2;