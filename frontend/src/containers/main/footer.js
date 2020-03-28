import React from 'react';
import fb from '../../assets/fb.png';
import ig from '../../assets/ig.png';
import { Link } from 'react-router-dom';


const Footer = () =>{
    return(
        <div className="footer">
            <div className="grid55">
                <div>
                </div>
                <div className="grid100 backed2">
                    <div className="grid70">
                        <div></div>
                        <div className="grid50">
                            <Link to="/ig" className="middle">
                                <img src={ig} alt="fb" className="icon" />
                            </Link>
                            <Link to="/fb" className="middle">
                                <img src={fb} alt="fb" className="icon" />
                            </Link>
                        </div>
                    </div>
                    <div className="centered">
                        <h5>
                            Contact Us:
                        </h5>
                        <h5>
                            Email: Carolinescrystals@hotmail.com
                        </h5>
                        <h5>
                            Text: 267-346-3844
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;