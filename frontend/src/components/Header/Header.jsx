import React from "react";
import "./Header.css"

import Button from '@mui/material/Button';
import Logo from '../../assets/images/Logo.png'
const Header=()=>{
    return(
        <div className="head" >
            <div>
                <img src={Logo} alt="Logo"/>
            </div>
            <div>
                <div>Phone</div>
                <div>Email</div>
                <div>Share</div>
            </div>
        </div>
    )
}

export default Header;