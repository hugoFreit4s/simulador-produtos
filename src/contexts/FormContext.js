import React, { createContext, useContext, useState, useEffect } from 'react';

const FormContext = createContext();

export const useFormContext = () => {
    return useContext(FormContext);
};

export const FormProvider = ({ children }) => {
    const initialFormData = {
        qtdBoletos: Number(localStorage.getItem('qtdBoletos')) || '',
        percentageTLiquidados: Number(localStorage.getItem('percentageTLiquidados')) || '',
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

        setFormData((prevData) => ({
            ...prevData,
            bLiquidados,
            saldoMedio,
        }));

        localStorage.setItem('bLiquidados', bLiquidados);
        localStorage.setItem('saldoMedio', saldoMedio);
    }, [formData.qtdBoletos, formData.percentageTLiquidados, formData.ticketMedio]);

    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormContext.Provider>
    );
};