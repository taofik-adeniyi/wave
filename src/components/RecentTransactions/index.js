import React from "react";
import "./style.css"

const index = (props) => {
  const { moreInfo, children } = props
  return (
    <div className="recent-wrapper">
      <div className="recent-row">
        <div>Recent Transactions</div>
        
        {
          moreInfo ? moreInfo() : <div>See more &gt;</div>
        }
      </div>
      <div style={{}}>
         {
           children
         }
        </div>
    </div>
  );
};

export default index;
