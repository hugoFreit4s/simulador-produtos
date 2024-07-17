import './Displays.css';

function DisplayInfo({ title, data }) {
    return (
        <div id="main">
            <div id="display">
                <p>{title}</p>
                <div id="info">{data}</div>
            </div>
        </div>
    )
}

export default DisplayInfo