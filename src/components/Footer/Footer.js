import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@material-ui/icons/LocationOn';
function Footer() {
    return (
        <div className="footer">
            <img alt="logo" className="footer__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            <div className="footer__menu">
                <div className="footer__menuCol">
                    <h3>Get to know us</h3>
                    <div className="footer__menuItem">
                        <Link to="/about" className="footer__link">About Us</Link>
                    </div>

                    <div className="footer__menuItem">
                        <Link to="/about" className="footer__link">Careers</Link>
                    </div>

                    <div className="footer__menuItem">
                        <Link to="/about" className="footer__link">Press Release</Link>
                    </div>

                    <div className="footer__menuItem">
                        <Link to="/about" className="footer__link">Amazon Care</Link>
                    </div>

                    <div className="footer__menuItem">
                        <Link to="/about" className="footer__link">Gift a smile</Link>
                    </div>
                </div>

                <div className="footer__menuCol">
                    <h3>Connect With us</h3>

                    <div className="footer__menuItem">
                        <Link to="/about" className="footer__link">Facebook</Link>
                    </div>

                    <div className="footer__menuItem">
                        <Link to="/about" className="footer__link">Twitter</Link>
                    </div>

                    <div className="footer__menuItem">
                        <Link to="/about" className="footer__link">Instagram</Link>
                    </div>
                </div>

                <div className="footer__menuCol">
                    <h3>Make money With us</h3>
                    <div className="footer__menuItem">
                        <Link to="/about" className="footer__link">Sell on Amazon</Link>
                    </div>

                    <div className="footer__menuItem">
                        <Link to="/about" className="footer__link">Sell under Amazon Accelerator</Link>
                    </div>


                    <div className="footer__menuItem">
                        <Link to="/about" className="footer__link">Become an Affiliate</Link>
                    </div>

                    <div className="footer__menuItem">
                        <Link to="/about" className="footer__link">Amazon Pay on merchants</Link>
                    </div>

                    <div className="footer__menuItem">
                        <Link to="/about" className="footer__link">Advertise your product</Link>
                    </div>
                </div>
            </div>

           <div className="footer__base">
                    <div className="footer__baseMenu">
                        <h3 className="footer__baseMenuTitle">Legal Information</h3>
                        <div className="footer__menuItem">
                            <Link to="/about" className="footer__baseLink">Legal Agreement</Link>
                        </div>

                        <div className="footer__menuItem">
                            <Link to="/about" className="footer__baseLink">Service Agreement</Link>
                        </div>

                        <div className="footer__menuItem">
                            <Link to="/about" className="footer__baseLink">Privacy Policy</Link>
                        </div>

                        <div className="footer__menuItem">
                            <Link to="/about" className="footer__baseLink">Copyrights</Link>
                        </div>

                        <div className="footer__menuItem">
                            <Link to="/about" className="footer__baseLink">Return and Refund Policy</Link>
                        </div>
                    </div>



                    <div className="footer__baseMenu">
                        <h3 className="footer__baseMenuTitle">Address</h3>
                        <div className="footer__baseAddress">
                            <LocationOnIcon />
                            <p>49, Block B, Mohan Cooperative Industrial Estate, <br></br>Badarpur, New Delhi, <br></br>Delhi 110076</p>
                        </div>
                    </div>
           
           </div>
        </div>
    )
}

export default Footer
