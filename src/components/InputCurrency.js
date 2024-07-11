import { Input } from "@mui/joy";
import './InputCurrency.css'

function InputCurrency({ value, onChange, placeholder, title}) {

    return (
        <div className="main">
            <p className="input-title">{title}</p>
            <Input value={value} onChange={onChange} placeholder={placeholder} variant="solid" type="number" />
        </div>
    )
}

export default InputCurrency;