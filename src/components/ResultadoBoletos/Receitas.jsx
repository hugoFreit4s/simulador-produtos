import { useFormContext } from "../../contexts/FormContext";
import DisplayInfo from "../DisplayInfo";

function Receitas() {
    const { formData } = useFormContext();
    return (
        <div>
            <h1>Receitas</h1>
            <DisplayInfo title={'Receita Estimada - Float:'} data={'???'} />
            <DisplayInfo title={'Receita total (1 + 2):'} data={'???'} />
            <DisplayInfo title={'Quantidade de boletos liquidados:'} data={formData.bLiquidados || 'Valor inválido'} />
            <DisplayInfo title={'Receita gerada por boleto:'} data={formData.bLiquidados || 'Valor inválido'} />
        </div>
    )
}

export default Receitas;