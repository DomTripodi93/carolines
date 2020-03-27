import React from 'react';
import banner from "../../assets/banner2.jpg";

const Header = () =>{
    return(
        <div className="header-back middle">
            <img className="header" alt="banner" src={banner} />
        </div>
    )
}

export default Header;