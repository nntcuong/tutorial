import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './components/Admin.jsx';
import User from './components/User.jsx';
import Home from './components/Home.jsx';
import LaiDon from './components/LaiDon.jsx';
import LaiKep from './components/LaiKep.jsx';
import TienGuiHangThang from './components/TienGuiHangThang.jsx';
import GuiNganHangVaRutTienGuiHangThang from './components/GuiNganHangVaRutTienGuiHangThang.jsx';
import VayVonTraGop from './components/VayVonTraGop.jsx';
import LaiKepLienTuc from './components/LaiKepLienTuc.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="LaiDon" element={<LaiDon />} />
          <Route path="LaiKep" element={<LaiKep />} />
          <Route path="TienGuiHangThang" element={<TienGuiHangThang />} />
          <Route path="GuiNganHangVaRutTienGuiHangThang" element={<GuiNganHangVaRutTienGuiHangThang />} />
          <Route path="VayVonTraGop" element={<VayVonTraGop />} />
          <Route path="LaiKepLienTuc" element={<LaiKepLienTuc />} />
          <Route index element={<Home />} />
        </Route>

      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)
