import React from "react";
import SeeMore from "../SeeMore";
import "./style.css"

const index = (props) => {
  const { moreInfo, children } = props
  return (
    <div className="recent-wrapper">
      <div className="recent-row">
        <div style={{color: '#1A2841', fontSize: '14px', fontWeight: '600'}}>Recent Transactions</div>
        
        {
          moreInfo ? moreInfo() : <SeeMore />
        }
      </div>
      <div style={{minHeight: '410px', padding: '0 20px'}}>
         {
           children
         }
        </div>
    </div>
  );
};

export default index;
