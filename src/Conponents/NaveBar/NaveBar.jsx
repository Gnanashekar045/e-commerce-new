import React from "react";
import './NaveBar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
const NaveBar = () => {
    return (
        <div className="NaveBar">
            <div className="nav-log">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul>
                <li>Shop</li>
                <li>Men</li>
                <li>Wemen</li>
                <li>Kids</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src={cart_icon} alt="" />
            </div>
        </div>
    )
}

export default NaveBar;