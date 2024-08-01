import React, { useRef, useEffect } from 'react';
import ReactToPrint from 'react-to-print';
import Printer from '../Printer/Printer';
import DisableNumberScroll from '../../utils/DisableNumberScroll';
import rBoletoStl from './ResultadoBoleto.module.css';
import { Link } from 'react-router-dom';
import { useFormContext } from '../../contexts/FormContext';
import { CentralizacaoFinanceira1, CentralizacaoFinanceira2 } from './CentralizacaoFinanceira';
import Receitas from './Receitas';
import Receitas2 from './Receitas2';
import TabelaCustosCompensacao from './TabelaCustosCompensacao';

const ResultadoBoleto = () => {
    const { formData, setFormData } = useFormContext();
    DisableNumberScroll();

    const saldoMedio = (formData.bLiquidados * formData.ticketMedio).toLocaleString('pt-BR', {
        style: "currency",
        currency: "BRL",
    });
    const componentRef = useRef();

    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,
            protesto: 'sim',
            emissao2via: 'sim',
            bancoCorrespondente: 'sim',
        }));
    }, [setFormData]);


    return (
        <div className={rBoletoStl.ResultadoBoleto}>
            <Link to="/boletos">
                <i className="fa fa-arrow-circle-left" style={{ fontSize: '40px', cursor: 'pointer', color: 'white', marginLeft: '20px', marginTop: '5px' }}></i>
            </Link>

            <div className={rBoletoStl.section}>
                <CentralizacaoFinanceira1 />
            </div>

            <div className={rBoletoStl.section}>
                <CentralizacaoFinanceira2 />
            </div>

            <div className={rBoletoStl.section}>
                <Receitas />
            </div>

            <div className={rBoletoStl.section}>
                <Receitas2 />
            </div>

            <div className={rBoletoStl.section}>
                <TabelaCustosCompensacao />
            </div>

            <div className="print">
                <ReactToPrint
                    trigger={() => <button>Imprimir Saldo Médio</button>}
                    content={() => {
                        console.log("Rendering for print:", componentRef.current);
                        return componentRef.current;
                    }} />

                <div style={{ display: 'none' }}>
                    <Printer ref={componentRef} saldoMedio={saldoMedio} />
                </div>
            </div>
        </div>
    );
};

export default ResultadoBoleto;