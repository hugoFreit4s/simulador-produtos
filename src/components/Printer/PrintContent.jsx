import styles from "./PrintStyle.module.css";
import { useFormContext } from '../../contexts/FormContext';
import custosUnitarios, { CalculoCustosTotais } from '../ResultadoBoletos/custosUnitarios';

function PrintContent() {
    const { formData } = useFormContext();
    const totais = CalculoCustosTotais();
    const currentDate = new Date().toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    return (
        <div className={styles.printWrapper}>
            <div className={styles.header}>
                <h1>Relatório de Custos</h1>
                <div className={styles.printDate}>Data e Hora da Impressão: {currentDate}</div>
            </div>
            <table className={styles.printerTable}>
                <thead>
                    <tr>
                        <th>Linhas de Custos</th>
                        <th>Custos Unitários</th>
                        <th>Custos Totais</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>A) Rede Bancária - {formData.bRBancaria} Boletos</td>
                        <td>{custosUnitarios.RBancaria.toLocaleString('pt-BR', {
                            style: "currency",
                            currency: "BRL",
                        })}</td>
                        <td>{totais.rBancaria.toLocaleString('pt-BR', {
                            style: "currency",
                            currency: "BRL",
                        })}</td>
                    </tr>
                    <tr>
                        <td>B) Rede SICOOB - {formData.bRSicoob} Boletos</td>
                        <td>{custosUnitarios.RSicoob.toLocaleString('pt-BR', {
                            style: "currency",
                            currency: "BRL",
                        })}</td>
                        <td>{totais.rSicoob.toLocaleString('pt-BR', {
                            style: "currency",
                            currency: "BRL",
                        })}</td>
                    </tr>
                    <tr>
                        <td>C) Liquidação Própria Cooperativa - {formData.bLPropriaCoop} Boletos</td>
                        <td>{custosUnitarios.LiqPropCoop.toLocaleString('pt-BR', {
                            style: "currency",
                            currency: "BRL",
                        })}</td>
                        <td>{totais.liqPropCoop.toLocaleString('pt-BR', {
                            style: "currency",
                            currency: "BRL",
                        })}</td>
                    </tr>
                    <tr>
                        <td>D) Correspondente Bancário - {formData.bCorrespBancario} Boletos</td>
                        <td>{custosUnitarios.CorrespBancario.toLocaleString('pt-BR', {
                            style: "currency",
                            currency: "BRL",
                        })}</td>
                        <td>{totais.correspBancario.toLocaleString('pt-BR', {
                            style: "currency",
                            currency: "BRL",
                        })}</td>
                    </tr>
                    <tr>
                        <td>E) Processamento - {formData.qtdBoletos} Boletos</td> {/**TALVEZ A QUANTIDADE LIQUIDADA DOS BOLETOS */}
                        <td>{custosUnitarios.Processamento.toLocaleString('pt-BR', {
                            style: "currency",
                            currency: "BRL",
                        })}</td>
                        <td>???</td>
                    </tr>
                    <tr>
                        <td>D) Tarifa Nova Cobrança - ??? Boletos</td> {/**100% DOS BOLETOS */}
                        <td>{custosUnitarios.TrfNovaCobranca.toLocaleString('pt-BR', {
                            style: "currency",
                            currency: "BRL",
                        })}</td>
                        <td>{totais.tarifaNovaCobranca.toLocaleString('pt-BR', {
                            style: "currency",
                            currency: "BRL",
                        })}</td>
                    </tr>
                    <tr>
                        <td>= Custos Totais:</td>
                        <td>{custosUnitarios.custoTotal}</td> {/**ESTÁ ERRADO, CONFERIR COM O DEDÉ*/}
                        <td>{totais.total.toLocaleString('pt-BR', {
                            style: "currency",
                            currency: "BRL",
                        })}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default PrintContent;