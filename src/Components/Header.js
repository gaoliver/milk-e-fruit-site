import React, {} from "react";
import {} from "reactstrap";

import logo from '../Images/milk-e-fruit-logo.png'
import './styles.css'

function Header(props) {
  return (
    <div className='header'>
      <img src={logo} alt="Milk & Fruit - logo" width={120} />
    </div>
  );
}

export default Header;
