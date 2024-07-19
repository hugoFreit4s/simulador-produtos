// ResultadoBoleto.js
import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import DisplayInfo from "../components/DisplayInfo";
import Printer from '../components/Printer';
import DisableNumberScroll from '../DisableNumberScroll';

const ResultadoBoleto = () => {
    DisableNumberScroll();

    // Obter e converter valores do localStorage
    const qtdBoletos = parseFloat(localStorage.getItem('qtdBoletos')) || 0;
    const percentageTLiquidados = parseFloat(localStorage.getItem('percentageTLiquidados')) || 0;
    const ticketMedio = parseFloat(localStorage.getItem('ticketMedio')) || 0;

    // Realizar cálculos
    const bLiquidados = (qtdBoletos * percentageTLiquidados) / 100;
    const saldoMedio = (bLiquidados * ticketMedio).toLocaleString('pt-BR', {
        style: "currency",
        currency: "BRL",
    });

    // Referência para o conteúdo de impressão
    const componentRef = useRef();

    return (
        <div className="ResultadoBoletos">
            <DisplayInfo title={'Saldo Médio'} data={saldoMedio} />
            <ReactToPrint
                trigger={() => <button>Imprimir Saldo Médio</button>}
                content={() => {
                    console.log("Rendering for print:", componentRef.current); // Verifique o conteúdo
                    return componentRef.current;
                }}
            />
            <div style={{ color: 'black', display:'none' }}>
                <Printer ref={componentRef} saldoMedio={saldoMedio} />
            </div>
        </div>
    );
};

export default ResultadoBoleto;
