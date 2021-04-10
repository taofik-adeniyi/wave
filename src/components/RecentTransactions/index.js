import React from "react";
import "./style.css"

const index = () => {
  return (
    <div className="recent-wrapper">
      <div className="recent-row">
        <div>Recent Transactions</div>
        <div>See more &gt;</div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
         <div style={{display: 'flex', marginTop: '100px'}}>You have no activity yet</div> 
        </div>
    </div>
  );
};

export default index;
