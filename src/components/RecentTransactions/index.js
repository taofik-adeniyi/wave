import React from "react";
import SeeMore from "../SeeMore";
import "./style.css"

const index = (props) => {
  const { moreInfo, children, others } = props
  return (
    <div className={`recent-wrapper ${others ? 'top-space' : null}`}>
      <div className="recent-row">
        <div style={{color: '#1A2841', fontSize: '14px', fontWeight: '600'}}>Recent Transactions</div>
        
        {
          moreInfo ? moreInfo() : <SeeMore />
        }
      </div>
         {children && 
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '310px', padding: '0 20px'}}>
           {children}
        </div>
         }
      {others && <div>{others()}</div>}
    </div>
  );
};

export default index;
