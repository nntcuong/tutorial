import React from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import '../css/style.css';

function Header() {
  return (
   
      <ul>
        <li>
          <Link to="/" className='nav-link'>
            <img className="rate" src="../src/assets/imgs/interest-rate.png" alt="Interest Rate" />
            <span className="title_head">LÃI SUẤT NGÂN HÀNG</span>
          </Link>
        </li>
        <li>
          <Link to="/LaiDon" className='nav-link'>
            <span className="title">
              1. Lãi đơn
            </span>
          </Link>
        </li>
        <li>
          <Link to="/LaiKep" className='nav-link'>
            <span className="title">
              2 .Lãi kép
            </span>
          </Link>
        </li>
        <li>
          <Link to="/TienGuiHangThang" className='nav-link'>
            <span className="title">
              3. Tiền gửi hàng tháng
            </span>
          </Link>
        </li>
        <li>
          <Link to="/GuiNganHangVaRutTienGuiHangThang" className='nav-link'>
            <span className="title">
              4. Gửi ngân hàng và rút tiền gửi hàng tháng
            </span>
          </Link>
        </li>
        <li>
          <Link to="/VayVonTraGop" className='nav-link'>
            <span className="title">
              5. Vay vốn trả góp
            </span>
          </Link>
        </li>
        <li>
          <Link to="/LaiKepLienTuc" className='nav-link'>
            <span className="title">
              6 .Lãi kép liên tục
            </span>
          </Link>
        </li>
      </ul>
    
  );
}

export default Header;
