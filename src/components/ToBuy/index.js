import React, {useState} from "react";

import "./style.css";
import WalletBank from "../WalletBank";
import BuySell from "../BuySell";
import Sender from "../Sender";
import SenderTwo from "../Sender/SenderTwo";
import RecentTransactions from "../RecentTransactions";

const ToBuy = (props) => {
  const { handleRecurringBuy } = props
  const [buy, setbuy] = useState(false);
  const [sendcoin, setsendcoin] = useState(true);
  const [coinreceive, setcoinreceive] = useState(false);

  const toggleReceive = () => {
    setsendcoin(!sendcoin)
    setcoinreceive(!coinreceive)
  }
  const toggleSend = () => {
    setsendcoin('sendcoin')
    setcoinreceive(!coinreceive)
  }

  return (
    <div>
      
      <div className="step-two-wrapper-grid">
        <div className="step-two-wrapper-grid-one">
          <WalletBank toggleReceive={toggleReceive} toggleSend={toggleSend} sendcoin={sendcoin} coinreceive={coinreceive} />
        </div>
        <div className="step-two-wrapper-grid-two" style={{width: '94%'}}>
          <BuySell>
            <div>Activate Recurring Buy</div>
          </BuySell>
        </div>
        <div className="step-three-wrapper-grid-three">
          <Sender coinreceive={coinreceive} sendcoin={sendcoin} buy={buy} setbuy={setbuy} />
          {/* <SenderTwo /> */}
        </div>
        <div className="step-four-wrapper-grid-four"  style={{width: '94%', marginTop: '460px'}}>
          <RecentTransactions smallheight>
            <div style={{display: "flex", alignItems: 'center', justifyContent: 'center', }}>
              <div>You have no activity yet</div>
            </div>
          </RecentTransactions>
        </div>
      </div>
    </div>
  );
};

export default ToBuy;
