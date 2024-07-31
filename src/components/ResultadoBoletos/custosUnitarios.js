import { useFormContext } from '../../contexts/FormContext';

const custosUnitarios = {
    RBancaria: 0.31,
    RSicoob: 0.31,
    LiqPropCoop: 0.06,
    CorrespBancario: 1.74,
    Processamento: 0.03,
    TrfNovaCobranca: 0.08,
    // (D + E) + A || (D + E) + B || (D + E) + C || (D + E) + D == MEDIA
}

const CalculoCustosTotais = () => {
    const { formData, setFormData } = useFormContext();
    const custoTotalRBancaria = custosUnitarios.RBancaria * formData.bRBancaria;
    const custoTotalRSicoob = custosUnitarios.RSicoob * formData.bRSicoob;
    const custoTotalLiqPropCoop = custosUnitarios.LiqPropCoop * formData.bLPropriaCoop;
    const custoTotalCorrespBancario = custosUnitarios.CorrespBancario * formData.bCorrespBancario;
    // const custoTotalProcessamento = custoUnitarioProcessamento * formData.qtdBoletos;
    const custoTotalTarifaNovaCobranca = custosUnitarios.TrfNovaCobranca * formData.qtdBoletos;
    // const custoUnitarioTotal = (custos.custoUnitarioRBancaria + custoUnitarioRSicoob + custoUnitarioLiqPropCoop + custoUnitarioCorrespBancario + custoUnitarioProcessamento + custoUnitarioTrfNovaCobranca) / 6;
    const custoTotal = custoTotalRBancaria + custoTotalRSicoob + custoTotalLiqPropCoop + custoTotalCorrespBancario // + custoUnitarioProcessamento + custoUnitarioTrfNovaCobranca //
    console.log(`Boletos rede bancária: ${formData.bRBancaria}`);
    console.log(`Boletos liquidados: ${formData.bLiquidados}`);
    console.log(`Porcentagem boletos liquidados: ${formData.percentageRBancaria}`);

    const totais = {
        rBancaria: custoTotalRBancaria,
        rSicoob: custoTotalRSicoob,
        liqPropCoop: custoTotalLiqPropCoop,
        correspBancario: custoTotalCorrespBancario,
        tarifaNovaCobranca: custoTotalTarifaNovaCobranca,
        total: custoTotal
    }

    return totais;
}

export default custosUnitarios;
export { CalculoCustosTotais };