import DisplayInfo from "../DisplayInfo"
import { useFormContext } from "../../contexts/FormContext";

function CentralizacaoFinanceira() {
    const { formData } = useFormContext();
    const diasDeFloat = localStorage.getItem('diasFloat');
    const saldoMedio = (formData.bLiquidados * formData.ticketMedio).toLocaleString('pt-BR', {
        style: "currency",
        currency: "BRL",
    });
    <div>
        <h1>1. Centralização Financeira</h1>
        <DisplayInfo title={'Saldo médio:'} data={saldoMedio} />
        <DisplayInfo title={'Porcentagem sobre saldo médio:'} data={'???'} />
        <DisplayInfo title={'Taxa CDI (a.m.):'} data={'???'} />
        <DisplayInfo title={'Porcentagem centralização:'} data={'???'} />
        <DisplayInfo title={'Receita Estimada:'} data={'???'} />
        <h1>2. Centralização Financeira</h1>
        <DisplayInfo title={'Dias de Float:'} data={diasDeFloat} />
        <DisplayInfo title={`Taxa CDI auferida por ${diasDeFloat} dia(s)`} data={'???'} />
    </div>

}

function CentralizacaoFinanceira1() {
    const { formData } = useFormContext();
    const saldoMedio = (formData.bLiquidados * formData.ticketMedio).toLocaleString('pt-BR', {
        style: "currency",
        currency: "BRL",
    });
    return (
        <div>
            <h1>1. Centralização Financeira</h1>
            <DisplayInfo title={'Saldo médio:'} data={saldoMedio} />
            <DisplayInfo title={'Porcentagem sobre saldo médio:'} data={'???'} />
            <DisplayInfo title={'Taxa CDI (a.m.):'} data={'???'} />
            <DisplayInfo title={'Porcentagem centralização:'} data={'???'} />
            <DisplayInfo title={'Receita Estimada:'} data={'???'} />
        </div>
    )
}

function CentralizacaoFinanceira2() {
    const diasDeFloat = localStorage.getItem('diasFloat');
    return (
        <div>
            <h1>2. Centralização Financeira</h1>
            <DisplayInfo title={'Dias de Float:'} data={diasDeFloat} />
            <DisplayInfo title={`Taxa CDI auferida por ${diasDeFloat} dia(s)`} data={'???'} />
        </div>
    )
}

export default CentralizacaoFinanceira
export { CentralizacaoFinanceira1, CentralizacaoFinanceira2 }