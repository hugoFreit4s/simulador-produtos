import displayStl from './Displays.module.css';

function DisplayInfo({ title, data }) {
    return (
        <div className={displayStl.main}>
            <div className={displayStl.display}>
                <p>{title}</p>
                <div className={displayStl.info}>{data}</div>
            </div>
        </div>
    )
}

export default DisplayInfo