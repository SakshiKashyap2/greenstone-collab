import React from 'react';
import './BottomCard.css';

import CallIcon from '@mui/icons-material/Call';
import Button from '@mui/material/Button';

const BottomCard = () => {
  return (
    <div className="BottomCard">
      <div className="AboutUs">
        <h2></h2>
        <p></p>
        <p></p>
      </div>

      <div className="FindUs">
        <h3>Find Us</h3>
        <div className="heading1">
          <div className="leftContent">
            <h6>Hamilton Office</h6>
            <h6>Physical Address</h6>
            <p>Ground Floor, 11 London Street</p>
            <p>Hamilton Central 3204</p>
            <p>New Zealand</p>
          </div>

          <div className="rightontent">
            <div>
              <CallIcon />
              0064 27 9111 343
            </div>
            <div>
              <CallIcon />
              0064 7 850 1411
            </div>

            <div>
              <Button
                variant="outlined"
                style={{
                  backgroundColor: 'rgb(0,62,11)',

                  color: 'white',
                  border: '2px solid',
                  fontSize: '13px',
                  fontWeight: '700',
                  padding: '10px 35px 10px 35px',
                }}
              >
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomCard;
