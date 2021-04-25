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
      <div style={{display: 'flex', minHeight: '250px', justifyContent: 'center', alignItems: 'center', color: '#898F99', fontSize: '14px'}}>
         {
           children
         }
        </div>
    </div>
  );
};

export default index;
