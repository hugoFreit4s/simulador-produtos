import './fonts/fonts.css';
import styles from './App.module.css';

import React from 'react';
import { Link } from 'react-router-dom';
import Button from './components/Button';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.main}>
        <h1 className={styles.h1}>Simulador de Produtos</h1>
        <p className={styles.homepagetxt}>Uma solução simples. <br />Uma solução Sicoob Vale do Aço.</p>
        <img src='logowhitevertical.png' alt='logo' style={{ height: '80px', width: '120px' }} />
        <div className={styles.navigation}>
          <Link to="/menu">
            <Button text={'SIMULAR'} />
          </Link>
        </div>
      </div>
      <footer>
        Sicoob Vale do Aço ®
      </footer>
    </div>
  );
}

export default App;
