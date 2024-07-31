import rBoletoStl from '../../pages/ResultadoBoleto.module.css';
import { useFormContext } from '../../contexts/FormContext';

function TabelaCustosCompensacao() {
    const formData = useFormContext();
    const custoUnitarioRBancaria = 0.31;
    const custoTotalRBancaria = custoUnitarioRBancaria * formData.bRBancaria;

    const custoUnitarioRSicoob = 0.31;
    const custoTotalRSicoob = custoUnitarioRSicoob * formData.bRSicoob;

    const custoUnitarioLiqPropCoop = 0.06;
    const custoTotalLiqPropCoop = custoUnitarioLiqPropCoop * formData.bLPropriaCoop;

    const custoUnitarioCorrespBancario = 1.74;
    const custoTotalCorrespBancario = custoUnitarioCorrespBancario * formData.bCorrespBancario;

    const custoUnitarioProcessamento = 0.03;
    // const custoTotalProcessamento = custoUnitarioProcessamento * formData.qtdBoletos;

    const custoUnitarioTrfNovaCobranca = 0.08;
    const custoTotalTarifaNovaCobranca = custoUnitarioTrfNovaCobranca * formData.qtdBoletos

    const custoUnitarioTotal = (custoUnitarioRBancaria + custoUnitarioRSicoob + custoUnitarioLiqPropCoop + custoUnitarioCorrespBancario + custoUnitarioProcessamento + custoUnitarioTrfNovaCobranca) / 6;
    const custoTotal = custoTotalRBancaria + custoTotalRSicoob + custoTotalLiqPropCoop + custoTotalCorrespBancario // + custoUnitarioProcessamento + custoUnitarioTrfNovaCobranca //

    return (
        <div>
            <h1>(I) Custos Compensação</h1>
            <table className={rBoletoStl.sss}>
                <thead>
                    <tr>
                        <th>Linhas de Custos</th>
                        <th>Custos Unitários</th>
                        <th>Custos Totais</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={rBoletoStl.center}>A) Rede Bancária - {formData.bRBancaria} Boletos</td>
                        <td className={rBoletoStl.center}>{custoUnitarioRBancaria.toLocaleString('pt-BR', {
                            style: "currency",
                            currency: "BRL",
                        })}</td>
                        <td className={rBoletoStl.center}>{custoTotalRBancaria.toLocaleString('pt-BR', {
                            style: "currency",
                            currency: "BRL",
                        })}</td>
                    </tr>
                    <tr>
                        <td className={rBoletoStl.center}>B) Rede SICOOB - {formData.bRSicoob} Boletos</td>
                        <td className={rBoletoStl.center}>{custoUnitarioRSicoob.toLocaleString('pt-BR', {
                            style: "currency",
                            currency: "BRL",
                        })}</td>
                        <td className={rBoletoStl.center}>{custoTotalRSicoob.toLocaleString('pt-BR', {
                            style: "currency",
                            currency: "BRL",
                        })}</td>
                    </tr>
                    <tr>
                        <td className={rBoletoStl.center}>C) Liquidação Própria Cooperativa - {formData.bLPropriaCoop} Boletos</td>
                        <td className={rBoletoStl.center}>{custoUnitarioLiqPropCoop.toLocaleString('pt-BR', {
                            style: "currency",
                            currency: "BRL",
                        })}</td>
                        <td className={rBoletoStl.center}>{custoTotalLiqPropCoop.toLocaleString('pt-BR', {
                            style: "currency",
                            currency: "BRL",
                        })}</td>
                    </tr>
                    <tr>
                        <td className={rBoletoStl.center}>D) Correspondente Bancário - {formData.bCorrespBancario} Boletos</td>
                        <td className={rBoletoStl.center}>{custoUnitarioCorrespBancario.toLocaleString('pt-BR', {
                            style: "currency",
                            currency: "BRL",
                        })}</td>
                        <td className={rBoletoStl.center}>{custoTotalCorrespBancario.toLocaleString('pt-BR', {
                            style: "currency",
                            currency: "BRL",
                        })}</td>
                    </tr>
                    <tr>
                        <td className={rBoletoStl.center}>E) Processamento - {formData.qtdBoletos} Boletos</td> {/**TALVEZ A QUANTIDADE LIQUIDADA DOS BOLETOS */}
                        <td className={rBoletoStl.center}>{custoUnitarioProcessamento.toLocaleString('pt-BR', {
                            style: "currency",
                            currency: "BRL",
                        })}</td>
                        <td className={rBoletoStl.center}>???</td>
                    </tr>
                    <tr>
                        <td className={rBoletoStl.center}>D) Tarifa Nova Cobrança - ??? Boletos</td> {/**100% DOS BOLETOS */}
                        <td className={rBoletoStl.center}>{custoUnitarioTrfNovaCobranca.toLocaleString('pt-BR', {
                            style: "currency",
                            currency: "BRL",
                        })}</td>
                        <td className={rBoletoStl.center}>{custoTotalTarifaNovaCobranca.toLocaleString('pt-BR', {
                            style: "currency",
                            currency: "BRL",
                        })}</td>
                    </tr>
                    <tr>
                        <td className={rBoletoStl.center}>= Custos Totais:</td>
                        <td className={rBoletoStl.center}>{custoUnitarioTotal.toLocaleString('pt-BR', {
                            style: "currency",
                            currency: "BRL",
                        })}</td> {/**ESTÁ ERRADO, CONFERIR COM O DEDÉ*/}
                        <td className={rBoletoStl.center}>{custoTotal.toLocaleString('pt-BR', {
                            style: "currency",
                            currency: "BRL",
                        })}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TabelaCustosCompensacao;