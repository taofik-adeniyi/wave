import React, { useState } from "react";
import "./style.css";
import signal from "../../assets/icons/signal.png";

const Sender = () => {
  const [step, setstep] = useState(0);
  const [steper, setsteper] = useState(0);
  return (
    <div className="wrapper">
      <h1>Sender</h1>
      <div className="address">
        <div>To Address</div>
        <div>To Wavewallet Account</div>
      </div>
      <div className="info">You can send to any Bitcoin address</div>
      <div className="de-form">
        <form>
          <div>
            <div>
              <label htmlFor="address">Address</label>
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter Bitcoin address"
                value=""
                id="address"
                className="dinput"
              />
            </div>
          </div>
          <div>
            <div>
              <div>
                {step === 0 && (
                  <div className="dtext spaces">
                    <div>
                      <label className="dtext" htmlFor="amount">
                        Amount in Naira
                      </label>
                    </div>
                    <div> Balance: 400,000 NGN</div>
                  </div>
                )}
                {step === 1 && (
                  <div className="dtext spaces">
                    <div><label className="dtext" htmlFor="amount">Amount in BTC</label> </div> 
                    <div>BTC Balance: 2.002BTC</div>
                  </div>
                )}
              </div>
              <input
                type="text"
                placeholder=""
                value=""
                id="amount"
                className="dinput"
              />
              {/* <div>
                <img src={signal} alt="signal logo" />
                BTC
              </div> */}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: '-10px', marginBottom: '10px' }}>
            <div>{steper === 1 && "~34068.52 NGN"}</div>
            <div>Send all</div>
          </div>
          <div className="btn-wrapper" style={{marginBottom: '20px'}}>
            <button style={{width: '100%'}}>Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sender;
