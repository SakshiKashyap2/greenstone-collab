import React from 'react'
import { Link } from 'react-router-dom'

import './LargeCard.css'
const LargeCard = (props) => {
    return (
        <div className="largeCard" style={{ backgroundImage: props.background }} >
            <div className='top' >
                <h4>{props.title}</h4>
            </div>
            <div className='bottom' >
                <Link to={props.b1Route}><div>{props.button1}</div></Link>
                <Link to={props.b2Route}><div>{props.button2}</div></Link>
            </div>
        </div>
    )
}
export default LargeCard;