import CalculateIcon from '@mui/icons-material/Calculate';
import React from 'react';

const Header = () => {
  return (
    <div className="head">
        <nav className="container">
          <div className="title">
            <CalculateIcon />
            <h2>GWA Calculator</h2>
          </div>
          <p>Created by <a href="https://www.facebook.com/jlc.cljh/"><b>Jhomar Candelario</b></a></p>
        </nav>
    </div>
  )
}

export default Header
