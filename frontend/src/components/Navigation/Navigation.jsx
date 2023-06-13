import React from 'react';
import "./Navigation.css"

import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';




const Navigation = () => {

    const linkStyle = {
        textDecoration: 'none',
        margin: "0 10px 0 10px"

    }

    return (
        <div className="navigation">
            <div>
                <Link to='/' style={linkStyle}>
                    <h4>Home Page</h4>
                </Link>
                <Link to='/findjobs' style={linkStyle}>
                    <h4>Find a Job</h4>
                </Link>
                <Link to='/' style={linkStyle}>
                    <h4>Find Staff</h4>
                </Link>
                <Link to='/' style={linkStyle}>
                    <h4>Services</h4>
                </Link>
                <Link to='/' style={linkStyle}>
                    <h4>About</h4>
                </Link>
                <Link to='/' style={linkStyle}>
                    <h4>News</h4>
                </Link>
                <Link to='/' style={linkStyle}>
                    <h4>Contact</h4>
                </Link>
                <Link to='/' style={linkStyle}>
                    <h4><SearchIcon /></h4>
                </Link>
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