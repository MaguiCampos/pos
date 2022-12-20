import React from 'react';
import logo from './../../assets/img/carts.png';

function Navbar() {
    return (
        <nav class="navbar navbar-light shadow-sm">
        <div class="container-fluid">
          <a class="navbar-brand my-1" href="#">
            <img src={logo} alt="" width="30" class="d-inline-block align-text-top mx-2" />
            BasicPOS
          </a>
        </div>
      </nav>
    )
}

export default Navbar;