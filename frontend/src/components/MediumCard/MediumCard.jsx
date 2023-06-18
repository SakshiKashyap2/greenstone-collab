import React from 'react';
import './MediumCard.css';

import Button from '@mui/material/Button';
import CallIcon from '@mui/icons-material/Call';

const MediumCard = (props) => {
  return (
    <div className="mediumCard">
      <div className="mc-left">
        <strong>{props.officeName}</strong>
        <strong>{props.typeOfAddress}</strong>
        <p>{props.addr1}</p>
        <p>{props.addr2}</p>
        <p>{props.addr3}</p>
      </div>
      <div className="mc-right">
        <a>
          <CallIcon
            style={{ color: '#666666', margin: '0 5px 0 0' }}
            fontSize="xsmall"
          />
          {props.phone1}
        </a>
        <a>
          {props.phone2 ? (
            <CallIcon
              style={{ color: '#666666', margin: '0 5px 0 0' }}
              fontSize="xsmall"
            />
          ) : null}
          {props.phone2}
        </a>
        <Button
          variant="outlined"
          style={{
            backgroundColor: 'rgb(2,70,14)',
            color: 'white',
            border: '2px solid',
            fontSize: '13px',
            fontWeight: '700',
            padding: '10px 18px 10px 18px',
            borderRadius: '8px',
          }}
        >
          <CallIcon
            style={{ color: '#666666', margin: '0 5px 0 0' }}
            fontSize="small"
          />
          Email Us
        </Button>
      </div>
    </div>
  );
};

export default MediumCard;
