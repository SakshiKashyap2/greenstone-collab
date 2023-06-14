import React from 'react';
import './ShortCard.css'

const ShortCard=(props)=>{
    return(
        <div className='shortCard' >
            <img src={props.icon} alt='icon' />
            <h4>{props.heading}</h4>
            <p>{props.subHeading}</p>
        </div>
    )
}

export default ShortCard;