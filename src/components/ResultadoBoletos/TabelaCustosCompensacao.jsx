import rBoletoStl from '../../pages/ResultadoBoleto.module.css';
import { useFormContext } from '../../contexts/FormContext';
import custosUnitarios, { CalculoCustosTotais } from './custosUnitarios';

function TabelaCustosCompensacao() {
    const { formData, setFormData } = useFormContext();
    const totais = CalculoCustosTotais();
    return (
        <div className={rBoletoStl.section}>
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
                        <td className={rBoletoStl.center}>{custosUnitarios.RBancaria.toLocaleString('pt-BR', {
                            style: "currency",
                            currency: "BRL",
                        })}</td>
                        <td className={rBoletoStl.center}>{totais.rBancaria.toLocaleString('pt-BR', {
                            style: "currency",
                            currency: "BRL",
                        })}</td>
                    </tr>
                    <tr>
                        <td className={rBoletoStl.center}>B) Rede SICOOB - {formData.bRSicoob} Boletos</td>
                        <td className={rBoletoStl.center}>{custosUnitarios.RSicoob.toLocaleString('pt-BR', {
                            style: "currency",
                            currency: "BRL",
                        })}</td>
                        <td className={rBoletoStl.center}>{totais.rSicoob.toLocaleString('pt-BR', {
                            style: "currency",
                            currency: "BRL",
                        })}</td>
                    </tr>
                    <tr>
                        <td className={rBoletoStl.center}>C) Liquidação Própria Cooperativa - {formData.bLPropriaCoop} Boletos</td>
                        <td className={rBoletoStl.center}>{custosUnitarios.LiqPropCoop.toLocaleString('pt-BR', {
                            style: "currency",
                            currency: "BRL",
                        })}</td>
                        <td className={rBoletoStl.center}>{totais.liqPropCoop.toLocaleString('pt-BR', {
                            style: "currency",
                            currency: "BRL",
                        })}</td>
                    </tr>
                    <tr>
                        <td className={rBoletoStl.center}>D) Correspondente Bancário - {formData.bCorrespBancario} Boletos</td>
                        <td className={rBoletoStl.center}>{custosUnitarios.CorrespBancario.toLocaleString('pt-BR', {
                            style: "currency",
                            currency: "BRL",
                        })}</td>
                        <td className={rBoletoStl.center}>{totais.correspBancario.toLocaleString('pt-BR', {
                            style: "currency",
                            currency: "BRL",
                        })}</td>
                    </tr>
                    <tr>
                        <td className={rBoletoStl.center}>E) Processamento - {formData.qtdBoletos} Boletos</td> {/**TALVEZ A QUANTIDADE LIQUIDADA DOS BOLETOS */}
                        <td className={rBoletoStl.center}>{custosUnitarios.Processamento.toLocaleString('pt-BR', {
                            style: "currency",
                            currency: "BRL",
                        })}</td>
                        <td className={rBoletoStl.center}>???</td>
                    </tr>
                    <tr>
                        <td className={rBoletoStl.center}>D) Tarifa Nova Cobrança - ??? Boletos</td> {/**100% DOS BOLETOS */}
                        <td className={rBoletoStl.center}>{custosUnitarios.TrfNovaCobranca.toLocaleString('pt-BR', {
                            style: "currency",
                            currency: "BRL",
                        })}</td>
                        <td className={rBoletoStl.center}>{totais.tarifaNovaCobranca.toLocaleString('pt-BR', {
                            style: "currency",
                            currency: "BRL",
                        })}</td>
                    </tr>
                    <tr>
                        <td className={rBoletoStl.center}>= Custos Totais:</td>
                        <td className={rBoletoStl.center}>{custosUnitarios.custoTotal}</td> {/**ESTÁ ERRADO, CONFERIR COM O DEDÉ*/}
                        <td className={rBoletoStl.center}>{totais.total.toLocaleString('pt-BR', {
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