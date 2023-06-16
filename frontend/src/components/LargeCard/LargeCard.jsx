import React from 'react'
import { Link } from 'react-router-dom'

import './LargeCard.css'
const LargeCard = (props) => {
    console.log(props)

    const commonLinkStyle={
        textDecoration: 'none'
    }

    return (
        <div className="largeCard" style={{backgroundImage: `url(${props.image})`}} >
            <div className='top' >
                <h4>{props.title}</h4>
            </div>
            <div className='bottom' >
                <Link to={props.b1Route} style={commonLinkStyle} ><div className='b1' >{props.button1}</div></Link>
                <Link to={props.b2Route} style={commonLinkStyle} ><div className='b2' >{props.button2}</div></Link>
            </div>
        </div>
    )
}
export default LargeCard;