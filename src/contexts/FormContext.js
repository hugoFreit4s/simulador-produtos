import React, { createContext, useContext, useState, useEffect } from 'react';

const FormContext = createContext();

export const useFormContext = () => {
    return useContext(FormContext);
};

export const FormProvider = ({ children }) => {
    const initialFormData = {
        qtdBoletos: localStorage.getItem('qtdBoletos') || '',
        percentageTLiquidados: localStorage.getItem('percentageTLiquidados') || '',
        percentageTBaixadosPCedente: localStorage.getItem('percentageTBaixadosPCedente') || '',
        percentageTBaixadosDecurso: localStorage.getItem('percentageTBaixadosDecurso') || '',
        diasFloat: localStorage.getItem('diasFloat') || '',
        ticketMedio: localStorage.getItem('ticketMedio') || '',
        ticketMedioX2: (localStorage.getItem('ticketMedio') || 0) * 2,
    };

    const [formData, setFormData] = useState(initialFormData);

    useEffect(() => {
        for (const key in formData) {
            localStorage.setItem(key, formData[key]);
        }
    }, [formData]);

    useEffect(() => {
        const bLiquidados = (formData.qtdBoletos * formData.percentageTLiquidados) / 100;
        setFormData((prevData) => ({
            ...prevData,
            bLiquidados,
        }));
        localStorage.setItem('bLiquidados', bLiquidados);
    }, [formData.percentageTLiquidados]);

    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormContext.Provider>
    );
};