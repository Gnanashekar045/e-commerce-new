import React from 'react'
import '../Footer/Footer.css'
import footer_log from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatssap_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_log} alt="" />
                <p>SHOPPER</p>
            </div>

            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pinterest_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatssap_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copy Right @2023</p>
            </div>
        </div>
    )
}

export default Footer;