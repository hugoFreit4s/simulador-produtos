import React from 'react';
import { Navigate } from 'react-router-dom';
import { useFormContext } from '../contexts/FormContext';

const PrivateRoute = ({ element: Component, ...rest }) => {
    const { formData } = useFormContext();

    const isFormValid = () => {
        const requiredFields = ['percentageTLiquidados', 'percentageTBaixadosPCedente', 'percentageTBaixadosDecurso'];
        const totalPercentage = (Number(formData.percentageTBaixadosPCedente) || 0) +
            (Number(formData.percentageTBaixadosDecurso) || 0) + 20;

        const areFieldsFilled = requiredFields.every(field => formData[field] !== undefined && formData[field] !== '');
        const isTotalValid = totalPercentage === 100;

        return areFieldsFilled && isTotalValid;
    };

    return isFormValid() ? Component : <Navigate to="/boletos" />;
};

export default PrivateRoute;