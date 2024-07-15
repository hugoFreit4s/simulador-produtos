import { Link } from 'react-router-dom';

function Produtos() {
    return (
        <div>
            <Link to="/">
                <i className="fa fa-arrow-circle-left" style={{ fontSize: '40px', cursor: 'pointer', color: 'white', marginLeft: '20px' }}></i>
            </Link>
            {'saldo medio' + localStorage.getItem("percentageSaldoMedio")}
        </div>
    )
}

export default Produtos;