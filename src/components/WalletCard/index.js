import React from "react";
import './style.css'
import naira from "../../assets/icons/naira.png";

const index = ({currency, balance, icon, percent, sylp, nairaVal, clicked}) => {
  return (
    <div className="wallet-card-wrapper" onClick={clicked}>
      <div className="first-row">
        <div>
          <img src={icon} alt="naira logo" style={{borderRaius: '50%', backgroundColor: 'white'}} />
        </div>
        <div style={{fontSize: '14px', paddingTop: '5px', color: '#000000'}}>{currency}</div>
      </div>

      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div style={{color: '#898F99', marginBottom: '10px', fontSize: '13px', fontWeight: 'normal', fontFamily: 'SF Pro Text'}}>Available Balance</div>
          <div style={{color: '#1A2841', fontSize: '20px', fontWeight: 'bold'}}>{balance}
          <span style={{color: '#19BE45', fontWeight: 'normal', fontSize: '12px', paddingLeft: '10px'}}>{percent}</span>
          </div>
        </div>
        <div style={{color: '#898F99', fontSize: '14px'}}>{nairaVal} NGN</div>
      </div>

    </div>
  );
};

export default index;
