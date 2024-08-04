import tablepeStl from "./TabelaPontoEquilibrio.module.css"
import rBoletoStl from './ResultadoBoleto.module.css';
import { useFormContext } from '../../contexts/FormContext';
import custosUnitarios, { CalculoCustosTotais } from './custosUnitarios';

function TabelaPontoEquilibrio() {
    const { formData, setFormData } = useFormContext();
    const totais = CalculoCustosTotais();
    return (
        <div className={rBoletoStl.section}>
            <h1><span style={{fontFamily: "'Roboto Serif', serif", fontWeight:'200'}}>I)</span> Custos Compensação</h1>
            <table className={tablepeStl.tablepeStl}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Por boleto</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>(+) Receitas Auferidas</td>
                        <td>?</td>
                        <td>?</td>
                    </tr>
                    <tr>
                        <td>(-) Custos totais por boleto</td>
                        <td>?</td>
                        <td>?</td>
                    </tr>
                    <tr>
                        <td>Falta/excedente</td>
                        <td>?</td>
                        <td>?</td>
                    </tr>
                    <tr style={{backgroundColor:'white', height:'40px'}}>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Tarifa por baixa por decurso de prazo</td>
                        <td><input type="number" /></td>
                        <td>???</td>
                    </tr>
                    <tr>
                        <td>Tarifa na baixa pedido cedente</td>
                        <td><input type="number" /></td>
                        <td>???</td>
                    </tr>
                    <tr>
                        <td>Tarifa na liquidação do título</td>
                        <td><input type="number" /></td>
                        <td>???</td>
                    </tr>
                    <tr>
                        <td>Tarifa na entrada do título</td>
                        <td><input type="number" /></td>
                        <td>???</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TabelaPontoEquilibrio;