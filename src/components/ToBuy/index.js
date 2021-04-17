import React from "react";
import "./style.css";
import WalletBank from "../WalletBank";
import BuySell from "../BuySell";
import Sender from "../Sender";
import SenderTwo from "../Sender/SenderTwo";
import RecentTransactions from "../RecentTransactions";

const ToBuy = () => {
  return (
    <div>
      <div className="step-two-wrapper-grid">
        <div className="step-two-wrapper-grid-one">
          <WalletBank />
        </div>
        <div className="step-two-wrapper-grid-two" style={{width: '94%'}}>
          <BuySell>
            <div>Activate Recurring Buy</div>
          </BuySell>
        </div>
        <div className="step-three-wrapper-grid-three" style={{marginTop: '-140px'}}>
          <Sender />
          {/* <SenderTwo /> */}
        </div>
        <div className="step-four-wrapper-grid-four"  style={{width: '94%', marginTop: '410px'}}>
          <RecentTransactions>
              <div style={{display: "flex", alignItems: 'center', justifyContent: 'center', }}>
                  <div style={{marginTop: '80px'}}>You have no activity yet</div>
            </div>
          </RecentTransactions>
        </div>
      </div>
    </div>
  );
};

export default ToBuy;