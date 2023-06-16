import React from "react";
import Poster1 from '../../assets/images/Poster1.jpg';

import "./HomePage.css"
import Button from '@mui/material/Button'
import ShortCard from "../../components/ShortCard/ShortCard";


import S2Image1 from '../../assets/images/S2-Image1.png'
import S2Image2 from '../../assets/images/S2-Image2.png'
import S2Image3 from '../../assets/images/S2-Image3.png'

import LargeCard from "../../components/LargeCard/LargeCard";

import S3Image1 from "../../assets/images/S3-Image1.jpg"
import S3Image2 from "../../assets/images/S3-Image2.jpg"

import S4Image1 from "../../assets/images/S4-Image1.jpg"

const HomePage = () => {

    return (
        <div className="home" >
            <div className="s1">
                <div className="poster" ><img src={Poster1} alt="Poster1" /></div>
                <div className="detailsCard" >
                    <h1>Connecting the Right People With the Right Job</h1>
                    <p>Recruitment & Immigration Specialists Since 2006</p>
                    <p>New Zealand and overseas candidates</p>
                </div>
                <div className="findButtons" >
                    <Button variant="outlined" style={{
                        backgroundColor: 'white',
                        color: 'rgb(0,62,11)',
                        padding: "10px 100px 10px 100px",
                        margin: "10px",
                        border: "1px solid white",
                        fontSize: "14px",
                        fontWeight: 'bold'

                    }}>FIND WORK</Button>
                    <Button variant="outlined" style={{
                        padding: "10px 100px 10px 100px",
                        margin: "10px",
                        backgroundColor: 'rgb(0,62,11)',
                        color: 'white',
                        border: "1px solid rgb(0,62,11)",
                        fontSize: "14px",
                        fontWeight: "bold",
                    }}>FIND STAFF</Button>
                </div>
            </div>

            <div className="s2" >
                <ShortCard 
                    icon={S2Image1}
                    heading='New Zealand & Overseas Staff'
                    subHeading='inc Philippines, South Africa, India etc'
            
                />
                <ShortCard 
                    icon={S2Image2}
                    heading='End to end Recruitment Process'
                    subHeading='Specialised visa support available'
            
                />
                <ShortCard 
                    icon={S2Image3}
                    heading='Experienced Recruiters Offering a Personalised Service'
                    subHeading='For both candidates and employers'
            
                />
            </div>

            <div className='s3' >

                    <LargeCard
                        image={S3Image1}
                        title='Agricultural Work'
                        button1='FIND WORK'
                        b1Route='/'
                        button2='FIND STAFF'
                        b2Route='/'
                    />
                    <LargeCard
                        image={S3Image2}
                        title='Engineering & Trade Work'
                        button1='FIND WORK'
                        b1Route='/'
                        button2='FIND STAFF'
                        b2Route='/'
                    />
            </div>

            <div className='s4' >
                <div>
                    <img src={S4Image1} alt='S4Image1' />
                </div>
                <div>Corousel</div>
            </div>


        </div>
    )
}
export default HomePage;