import React, { useState } from "react";
import './NaveBar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";
import Cart from "../../Pages/Cart";

const NaveBar = () => {
    const [menu, setMenu] = useState("shop");
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to="">Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration: 'none'}} to="/mens">men</Link> {menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("wemen")}}><Link style={{textDecoration: 'none'}} to="/wemens">women</Link> {menu==="wemens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}} to="/kids">kids</Link> {menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to="/login"><button>Login</button></Link>
                <Link to="/cart"><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default NaveBar;