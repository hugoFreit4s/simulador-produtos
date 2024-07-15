import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Button from '@mui/joy/Button';

function App() {
  return (
    <div className="App">
      <img src='logo.png' style={{ height: '100px', width: '250px' }} />
      <div className="main">
        <div className="navigation">
          <Link to="/boletos">
            <Button className="btn-navegacao" size="lg" variant="soft">Boletos</Button>
          </Link>
          <Link to="/produtos">
            <Button className="btn-navegacao" size="lg" variant="soft">Produtos</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;