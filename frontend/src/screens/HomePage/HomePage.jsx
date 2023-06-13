import React from "react";
import Poster1 from '../../assets/images/Poster1.jpg';

import "./HomePage.css"

const HomePage =()=>{
    return(
        <div className="home" >
            <div className="s1">
                <div className="poster" ><img src={Poster1} alt="Poster1" /></div>
                <div className="detailsCard" >
                    <h1>Connecting the Right People With the Right Job</h1>
                    <p>Recruitment & Immigration Specialists Since 2006</p>
                    <p>New Zealand and overseas candidates</p>
                </div>
                <div className="findButtons" >Buttons</div>
            </div>
        </div>
    )
}
export default HomePage;