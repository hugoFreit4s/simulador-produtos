import './Displays.css'
import DisableNumberScroll from "../DisableNumberScroll";

function InputCurrency({ value, onChange, placeholder, title }) {
    DisableNumberScroll();
    return (
        <div id="main">
            <div id="display">
                <p>{title}</p>
                <input value={value} onChange={onChange} placeholder={placeholder} type="number" id="info" />
            </div>
        </div>
    )
}

export default InputCurrency;