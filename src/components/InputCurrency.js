import displayStl from './Displays.module.css'
import DisableNumberScroll from "../utils/DisableNumberScroll";

function InputCurrency({ onBlur, value, onChange, placeholder, title, min, max, disabled }) {
    DisableNumberScroll();
    return (
        <div className={displayStl.main}>
            <div className={displayStl.display}>
                <div className={displayStl.title}>
                    <p>{title}</p>
                </div>
                <input id="input" type="number" onBlur={onBlur} min={min} max={max} value={value} onChange={onChange} placeholder={placeholder} className={displayStl.info} disabled={disabled} />
            </div>
        </div>
    )
}

export default InputCurrency;