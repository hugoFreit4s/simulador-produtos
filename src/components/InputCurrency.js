import { Input } from "@mui/joy";
import './InputCurrency.css'
import DisableNumberScroll from "../DisableNumberScroll";

function InputCurrency({ value, onChange, placeholder, title }) {
    DisableNumberScroll();
    return (
        <div className="main">
            <p className="input-title">{title}</p>
            <Input value={value} onChange={onChange} placeholder={placeholder} variant="solid" type="number" />
        </div>
    )
}

export default InputCurrency;