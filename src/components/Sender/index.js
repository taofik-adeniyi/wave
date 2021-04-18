import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./style.css";
import signal from "../../assets/icons/signal.png";
import sock from "../../assets/icons/sock.png";
import BuyCoin from "../BuyCoin"

const Sender = (props) => {
  const [step, setstep] = useState(0);
  const [steper, setsteper] = useState(0);
  const { buy, buysell } = props

  return (
    <>
    {
      !buy ? <div className="wrapper">
      <div style={{color: '#1A2841', fontSize: '14px', fontWeight: 600, padding: '10px 0 15px 30px'}}>Send Bitcoin</div>
      <Tabs>
      <TabList className="address">
        <Tab>To Address</Tab>
        <Tab>To Wavewallet Account</Tab>
      </TabList>
      <TabPanel >
        <div className="info">
        You can send to any Bitcoin address
        </div>
      </TabPanel>
      
      <TabPanel>
      <div className="info" style={{textAlign: 'center', padding: '0 40px'}}>You can choose to send to an email address or a phone number registered on Wavewallet</div>
      <div style={{textAlign: 'center'}}>
          <input type="radio" /><label>Email address</label>
          <input type="radio" /><label>Phone number</label>
      </div>
      </TabPanel>
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
      </Tabs>
      
    </div> :
    <BuyCoin /> 
    }
    
      


      
    </>
  );
};

export default Sender;
