import React from "react";
import "./Header.css"

import Logo from '../../assets/images/Logo.png'
import CallIcon from '@mui/icons-material/Call';
import Button from '@mui/material/Button';

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Header = () => {
    return (
        <div className="head" >
            <div>
                <img src={Logo} alt="Logo" />
            </div>
            <div>
                <div><CallIcon />0064 7 850 1411</div>
                <div>
                    <Button variant="outlined" style={{
                        color: "black",
                        border: "2px solid",
                        fontSize: "13px",
                        fontWeight: "700",
                        padding: "10px 18px 10px 18px"
                    }}>
                        Email Us
                    </Button>
                </div>
                <div>
                    <FacebookRoundedIcon style={{color:"rgb(66 103 178)"}} fontSize="large"/>
                    <LinkedInIcon style={{color:"rgb(10, 102, 194)"}} fontSize="large"/>
                    <WhatsAppIcon style={{color:"rgb(37 211 102)"}} fontSize="large"/>
                </div>
            </div>
        </div>
    )
}

export default Header;