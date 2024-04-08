import "./footer.css"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
const Footer=()=>{
    return(
        <section id="footersec">
            <div className="container">
                <div className="row">
                    <div className="col3">
                        <div className="aboutSec">
                            <h4>BigBasket</h4>
                            <ul>
                                <li>About Us</li>
                                <li>In News</li>
                                <li>Green Bigbasket</li>
                                <li>Privacy policy</li>
                                <li>Affilliate</li>
                                <li>Teams And Conditions</li>
                                <li>Careers At Bigbasket</li>
                                <li>bb Instant</li>
                                <li>bb Daily</li>
                                <li>bb Blog</li>
                                <li>bbnow</li>
                            </ul>
                        </div>
                    </div>
                        <div className="col3">
                            <div className="aboutSec">
                                <h4>Help</h4>
                                <ul>
                                    <li>FAQs</li>
                                    <li>contact Us</li>
                                    <li>bb Wallet FAQs</li>
                                    <li>bb wallet T&Cs</li>
                                    <li>Vendor Connect</li>
                                </ul>
                            </div>
                        </div>
                            <div className="col3">
                                {/* <div className="iconSec">
                                    <img src="./image/logo/bigbasket.png" alt="image"></img>
                                </div> */}
                                <div className="social">
                               <FaFacebookF/>
                               <FaInstagram/>
                               <FaTwitter/>
                               <FaPinterest/>
                                </div>
                                <div className="vendor">
                                    <h5>Vendor Connect</h5>
                                </div>
                            </div>
                </div>
            </div>
        </section>
    )
}


export default Footer;