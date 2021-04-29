import React from "react";
import SeeMore from "../SeeMore";
import "./style.css"

const index = (props) => {
  const { moreInfo, children, others, smallheight } = props
  return (
    <div className={`recent-wrapper ${others ? 'top-space' : null}`}>
      <div className="recent-row">
        <div style={{color: '#1A2841', fontSize: '14px', fontWeight: '600'}}>
          Recent Transactions
        </div>
        {
          moreInfo ? moreInfo() : <SeeMore />
        }
      </div>
         <div className={`bg-height + ${smallheight ? 'small-height' : 'normal-height'}`}>
            {children && 
              <div
              style={{display: 'flex', justifyContent: 'center', height: '90%', alignItems: 'center', padding: '0 20px'}}
                >
                <div>
                {children}
                </div>
              </div>
            }
            {others && <div>{others()}</div>}
         </div>
    </div>
  );
};

export default index;
