import React, { useState } from "react";
import "./style.css";
import signal from "../../assets/icons/signal.png";
import copy from "../../assets/icons/copy.png";
import barcode from "../../assets/icons/barcode.png";
import sock from "../../assets/icons/sock.png";

const SenderTwo = () => {
  const [step, setstep] = useState(0);
  const [steper, setsteper] = useState(0);
  const [receive, setreceive] = useState(1);
  return (
    <>
      <div className="wrapper">
        <h1>Sender Bitcoin</h1>
        <div className="address">
          <div>To Address</div>
          <div style={{ borderBottom: "2px solid blue" }}>
            To Wavewallet Account
          </div>
        </div>
        <div className="info" style={{ textAlign: "center" }}>
          You can choose to send to an email address or a phone number
          registered on Wavewallet
        </div>
        <div style={{ textAlign: "center" }}>
          <input type="radio" />
          <label>Email address</label>
          <input type="radio" />
          <label>Phone number</label>
        </div>
        <div className="de-form">
          <form>
            <div>
              <div>
                <label htmlFor="address">Phone number</label>
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
                      <div>
                        <label className="dtext" htmlFor="amount">
                          Amount in BTC
                        </label>{" "}
                      </div>
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "-10px",
                marginBottom: "10px",
              }}
            >
              <div>{steper === 1 && "~34068.52 NGN"}</div>
              <div>Send all</div>
            </div>
            <div className="btn-wrapper" style={{ marginBottom: "20px" }}>
              <button style={{ width: "100%" }}>Send</button>
            </div>
          </form>
        </div>
        <div className="wrapper" style={{ textAlign: "center" }}>
          <h2>Receive Bitcoin</h2>
          <p>
            Share the address below to receive Bitcoin (BTC) into your
            Wavewallet account
          </p>
          <div
            style={{
              background: "#F5F6F6",
              border: "1px solid #EBECEE",
              boxSizing: "border-box",
              borderRadius: "5px",
              display: "flex",
              padding: "10px 20px",
              justifyContent: "center",
            }}
          >
            <div>MDetsoRYtXps2Q7nhK6zyH23J5bannRUWT</div>
            <img src={copy} alt="copy logo" />
          </div>
          <p>Or you can also receive using the QR Code</p>
          <div style={{ margin: "50px 0" }}>
            <img src={barcode} alt="barcode scan" />
          </div>
        </div>
      </div>

      
      <div>
        <h3>Create recurring buy</h3>
        <p>This will help buy on your behalf</p>
        <input
          style={{
            outline: "none",
            width: "90%",
            backgroundColor: "#F5F6F6",
            border: "1px solid #EBECEE",
            borderRadius: "5px",
            marginBottom: "25px",
          }}
          type="text"
          placeholder="Name of plan"
          value=""
          className="dinput"
        />
        <input
          style={{
            outline: "none",
            width: "90%",
            backgroundColor: "#F5F6F6",
            border: "1px solid #EBECEE",
            borderRadius: "5px",
            marginBottom: "25px",
          }}
          type="text"
          placeholder="BTC"
          value=""
          className="dinput"
        />
        <input
          style={{
            outline: "none",
            width: "90%",
            backgroundColor: "#F5F6F6",
            border: "1px solid #EBECEE",
            borderRadius: "5px",
            marginBottom: "25px",
          }}
          type="text"
          placeholder="Amount"
          value=""
          className="dinput"
        />
        <input
          style={{
            outline: "none",
            width: "90%",
            backgroundColor: "#F5F6F6",
            border: "1px solid #EBECEE",
            borderRadius: "5px",
            marginBottom: "25px",
          }}
          type="text"
          placeholder="Select saving frequency"
          value=""
          className="dinput"
        />
        <input
          style={{
            outline: "none",
            width: "90%",
            backgroundColor: "#F5F6F6",
            border: "1px solid #EBECEE",
            borderRadius: "5px",
            marginBottom: "25px",
          }}
          type="text"
          placeholder="Start date"
          value=""
          className="dinput"
        />
        <input
          style={{
            outline: "none",
            width: "90%",
            backgroundColor: "#F5F6F6",
            border: "1px solid #EBECEE",
            borderRadius: "5px",
            marginBottom: "25px",
          }}
          type="text"
          placeholder="End date"
          value=""
          className="dinput"
        />
        <div>
          <button
            style={{
              backgroundColor: "#F5F6F6",
              width: "100%",
              color: "#D8DADD",
            }}
          >
            Buy
          </button>
        </div>


        <div style={{ textAlign: "center" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            Confirm recurring buy
          </div>
          <p>You're creating a recurring buy of </p>
          <div>100,000 NGN</div>
          <div>~ 0.0047 BTC</div>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>Coin</div>
              <div>Bitcoin (BTC)</div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>Price</div>
              <div>100,000 (NGN)</div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>Frequency</div>
              <div>Monthly (BTC)</div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>Start Date</div>
              <div>10-04-2021</div>
            </div>
            <button style={{ width: "100%", marginTop: "50px" }}>
              Confirm
            </button>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <div>Recurring buy created Successfully</div>
        <p>
          You have Successfully craeted a recurring buy for 100,000 NGN worth of
          BTC per month
        </p>
        <img src={sock} alt="sock logo" />
        <button style={{ width: "100%", marginTop: "50px" }}>Continue</button>
      </div>
    </>
  );
};

export default SenderTwo;
