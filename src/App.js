import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {

  const [saldoMedio, setSaldoMedio] = React.useState('');
  const [percentageSaldoMedio, setpercentageSaldoMedio] = React.useState('');

  const handleSMchange = event => {
    localStorage.setItem('saldoMedioLS', event.target.value);
    setSaldoMedio(event.target.value);
  };

  const handlePercentageSMchange = event => {
    localStorage.setItem('percentageSaldoMedioLS', event.target.value);
    setpercentageSaldoMedio(event.target.value);
  }

  return (
    <div className="App">
      <Link to="/boletos">
        <button>Boletos</button>
      </Link>
      <Link to="/produtos">
        <button>Produtos</button>
      </Link>
    </div>
  );
}

export default App;