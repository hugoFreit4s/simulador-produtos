import React, { createContext, useContext, useState, useEffect } from 'react';

const FormContext = createContext();

export const useFormContext = () => {
    return useContext(FormContext);
};

export const FormProvider = ({ children }) => {
    const initialFormData = {
        qtdBoletos: Number(localStorage.getItem('qtdBoletos')) || '',
        percentageTLiquidados: Number(localStorage.getItem('percentageTLiquidados')) || '',
        percentageRBancaria: Number(localStorage.getItem('percentageRedeBancaria')) || '',
        percentageRSicoob: Number(localStorage.getItem('percentageRedeSICOOB')) || '',
        percentageLPropriaCoop: Number(localStorage.getItem('percentageLiquidacaoPropriaCoop')) || '',
        percentageLCBancario: Number(localStorage.getItem('percentageLiquidacaoCorrespBancario')) || '',
        percentageTEBaixados: Number(localStorage.getItem('percentageTitulosEmitidosBaixados')) || 0,
        percentageTBaixadosPCedente: Number(localStorage.getItem('percentageTBaixadosPCedente')) || '',
        percentageTBaixadosDecurso: Number(localStorage.getItem('percentageTBaixadosDecurso')) || '',
        diasFloat: Number(localStorage.getItem('diasFloat')) || '',
        ticketMedio: Number(localStorage.getItem('ticketMedio')) || '',
        bLiquidados: Number(localStorage.getItem('bLiquidados')) || '',
        saldoMedio: Number(localStorage.getItem('saldoMedio')) || '',
        diasDeProtesto: Number(localStorage.getItem('diasDeProtesto')) || '',
    };

    const [formData, setFormData] = useState(initialFormData);

    useEffect(() => {
        for (const key in formData) {
            localStorage.setItem(key, formData[key]);
        }
    }, [formData]);

    useEffect(() => {
        const bLiquidados = (formData.qtdBoletos * formData.percentageTLiquidados) / 100;
        const saldoMedio = bLiquidados * formData.ticketMedio;
        const bRBancaria = (formData.bLiquidados * formData.percentageRBancaria) / 100;
        const bRSicoob = (formData.bLiquidados * formData.percentageRSicoob) / 100;
        const bLPropriaCoop = (formData.bLiquidados * formData.percentageLPropriaCoop) / 100;
        const bCorrespBancario = (formData.bLiquidados * formData.percentageLCBancario) / 100;
        const bPedidoCedente = (formData.bLiquidados * formData.percentageTBaixadosPCedente) / 100;
        const bDecursoDePrazo = (formData.bLiquidados * formData.percentageTBaixadosDecurso) / 100;

        setFormData((prevData) => ({
            ...prevData,
            bLiquidados,
            saldoMedio,
            bRBancaria,
            bRSicoob,
            bLPropriaCoop,
            bCorrespBancario,
            bPedidoCedente,
            bDecursoDePrazo,
        }));

        localStorage.setItem('bLiquidados', bLiquidados);
        localStorage.setItem('saldoMedio', saldoMedio);
        localStorage.setItem('bRBancaria', bRBancaria);
        localStorage.setItem('bRSicoob', bRSicoob);
        localStorage.setItem('bLPropriaCoop', bLPropriaCoop);
        localStorage.setItem('bCorrespBancario', bCorrespBancario);
        localStorage.setItem('bPedidoCedente', bPedidoCedente);
        localStorage.setItem('bDecursoDePrazo', bDecursoDePrazo);
    },
    [formData.bLiquidados,
    formData.percentageLCBancario,
    formData.percentageLPropriaCoop,
    formData.percentageRBancaria,
    formData.percentageRSicoob,
    formData.percentageTBaixadosDecurso,
    formData.percentageTBaixadosPCedente,
    formData.qtdBoletos,
    formData.percentageTLiquidados,
    formData.ticketMedio,
    formData.bPedidoCedente,
    formData.bDecursoDePrazo]);

    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormContext.Provider>
    );
};