import displayStl from './Displays.module.css'
import DisableNumberScroll from "../DisableNumberScroll";

function InputCurrency({ value, onChange, placeholder, title }) {
    DisableNumberScroll();
    return (
        <div className={displayStl.main}>
            <div className={displayStl.display}>
                <div className={displayStl.title}>
                    <p>{title}</p>
                </div>
                <input value={value} onChange={onChange} placeholder={placeholder} type="number" className={displayStl.info} />
            </div>
        </div>
    )
}

export default InputCurrency;