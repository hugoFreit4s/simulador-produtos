import displayStl from './Displays.module.css';

function DisplayInfo({ title, data }) {
    return (
        <div className={displayStl.main}>
            <div className={displayStl.display}>
                <div className={displayStl.title}>
                    <p>{title}</p>
                </div>
                <div className={displayStl.info}>{data}</div>
            </div>
        </div>
    )
}

export default DisplayInfo