import React from "react";
import './style.css'
import naira from "../../assets/icons/naira.png";

const index = ({currency, balance, icon, percent, sylp, nairaVal}) => {
  return (
    <div className="wallet-card-wrapper">
      <div className="first-row">
        <div>
          <img src={icon} alt="naira logo" style={{borderRaius: '50%', backgroundColor: 'white'}} />
        </div>
        <div style={{paddingLeft: '5px'}}>{currency}</div>
      </div>

      <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '45px', alignItems: 'flex-end'}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div style={{color: '#898F99'}}>Available Balance</div>
          <div style={{color: '#1A2841'}}>{balance}
          <span style={{color: '#19BE45'}}>{percent}</span>
          </div>
        </div>
        <div style={{color: '#898F99'}}>{nairaVal} NGN</div>
      </div>

    </div>
  );
};

export default index;
