import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import MarketApp from './MarketApp'
import Payment from './Payment'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MarketApp />} />
        <Route path="/carro" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
