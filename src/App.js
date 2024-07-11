import './App.css';
import InputCurrency from './components/InputCurrency';
import React from 'react';

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
      <header>
        <img className="logo" alt='' src="logo.png" />
      </header>
      <div className="main">
        <div className="centralizacao-financeira">
          <h1 className="label" style={{ color: 'white' }}>(1) Centralização Financeira</h1>

          <InputCurrency
            value={saldoMedio}
            onChange={handleSMchange}
            placeholder={'Insira aqui!'}
            title={'(A) Saldo Médio'}
          />
          <InputCurrency
            value={percentageSaldoMedio}
            onChange={handlePercentageSMchange}
            placeholder={'Insira aqui!'}
            title={'(B) % Sobre Saldo Médio'}
          />
        </div>
      </div>
      <footer>

      </footer>
    </div>
  );
}

export default App;
