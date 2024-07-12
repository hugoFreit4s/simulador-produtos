import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
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