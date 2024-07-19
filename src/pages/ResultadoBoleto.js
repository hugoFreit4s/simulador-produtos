import DisableNumberScroll from "../DisableNumberScroll";
import DisplayInfo from "../components/DisplayInfo";

function ResultadoBoleto() {
    DisableNumberScroll();
    const qtdBoletos = localStorage.getItem('qtdBoletos');
    const bLiquidados = (qtdBoletos * localStorage.getItem('percentageTLiquidados')) / 100;
    const tMedio = localStorage.getItem('ticketMedio');
    const saldoMedio = (bLiquidados * tMedio).toLocaleString('pt-BR', {
        style:"currency",
        currency:"BRL",
    });
    // const handleCheckboxChange = (field1, field2, value) => {
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         [field1]: value,
    //         [field2]: value ? false : prevData[field2],
    //     }));
    // };


    return (
        <div className="ResultadoBoletos">
            <DisplayInfo title={'Saldo Médio'} data={saldoMedio} />
        </div >
    )
}

export default ResultadoBoleto;