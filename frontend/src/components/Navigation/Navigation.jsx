import React from 'react';
import "./Navigation.css"

import UnfoldMoreDoubleIcon from '@mui/icons-material/UnfoldMoreDouble';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
const Navigation = () => {
    return (
        <div className="navigation">
            <div>
                <a href="#">Home Page</a>
                <a href="#">Find a Job</a>
                <a href="#">Find Staff</a>
                <a href="#">Services</a>
                <a href="#">About</a>
                <a href="#">News</a>
                <a href="#">Contact</a>
                <a href="#"><SearchIcon/></a>
            </div>
            <div>
                <Button variant="outlined" style={{
                    color: "rgb(0,62,11)",
                    border: "2px solid white",
                    backgroundColor: "white",
                    fontSize: "13px",
                    fontWeight: "700",
                    padding: "10px 18px 10px 18px"
                }}>
                    GET IMMIGRATION ADVICE
                </Button>
            </div>
        </div>
    )
}
export default Navigation;