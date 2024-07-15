import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css'

import App from './App';
import Boletos from './pages/Boletos';
import Produtos from './pages/Produtos';
import ListaProdutos from './pages/ListaProdutos';
import ResultadoBoleto from './pages/ResultadoBoleto';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/boletos" element={<Boletos />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/lista-produtos" element={<ListaProdutos />} />
      <Route path="/resultado-boleto" element={<ResultadoBoleto />} ></Route>
    </Routes>
  </Router>
);