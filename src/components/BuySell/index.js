import React, { useState } from "react";
import "./style.css";
import mark from "../../assets/icons/mark.png";
import leftarrow from "../../assets/icons/leftarrow.png";
import downarrow from "../../assets/icons/downarrow.png";
import doubledown from "../../assets/icons/doubledown.png";

const BuySell = () => {
  const [drop, setdrop] = useState(false);
  const [price, setprice] = useState(0);
  const [buy, setbuy] = useState(1);
  const [sell, setsell] = useState(0);
  const [step, setstep] = useState(1);
  const [toggle, setToggle] = useState(1);
  const dropShow = () => {
    setdrop(!drop);
  };
  const handleToggle = () => {
    setToggle(1);
  };
  const handleBuy = () => {
    setToggle(2);
  };
  const handleSell = () => {
    setToggle(!false);
    console.log(">>>>>>>>", toggle);
  };
  const onBuy = () => {
    setbuy(1);
    setsell(0);
  };
  const onSell = () => {
    setsell(1);
    setbuy(0);
  };
  const setStep = () => {
    setstep();
  };
  const Purchaser = ({ title, amount, style }) => {
    return (
      <div
        className={`${style && "bold"}`}
        style={{
          justifyContent: "space-between",
          display: "flex",
          fontSize: "14px",
          margin: "0 30px 10px 30px",
        }}
      >
        <div style={{ color: "#898F99", marginBottom: "10px" }}>{title}</div>
        <div style={{ color: "#1A2841", marginBottom: "10px" }}>{amount}</div>
      </div>
    );
  };
  const Back = () => {
    return (
      <div
        onClick={() => setstep(1)}
        style={{
          display: "flex",
          cursor: "pointer",
          padding: "25px 0",
          marginBottom: "20px",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <img
          src={leftarrow}
          style={{ width: "7.78px", height: "12px" }}
          alt="left arrow"
        />
        <div style={{ marginLeft: "10px", color: "#626977", fontSize: "12px" }}>
          Back
        </div>
      </div>
    );
  };
  return (
    <div className="buysell-wrapper">
      {step === 1 && (
        <>
          <div className="klose">
            <div
              onClick={handleToggle}
              className={`buy ${toggle === 1 && "clicked"} `}
            >
              <div>Buy</div>
            </div>
            <div
              onClick={handleBuy}
              className={`sell ${toggle === 2 && "clicked"}`}
            >
              <div>Sell</div>
            </div>
          </div>
          <div className="drupal">
            <div className="drop-wrapper">
              <div className="drop-show" onClick={dropShow}>
                <span>NGN</span> <img src={downarrow} alt="down arrow" />
              </div>
              {drop && (
                <div className="drop-container">
                  <div>BTC</div>
                  <hr />
                  <div>NGN</div>
                </div>
              )}
            </div>
          </div>
          <div className={`price-wrapper ${price > 0 && "price-color"}`}>
            <div style={{ fontSize: "18px" }}>NGN</div>
            <div style={{ fontSize: "54px" }}>{price === 0 ? 0 : "40,000"}</div>
          </div>
          <div style={{ marginBottom: "50px" }}>
            <div className="okay">
              <div>Bitcoin (Btc)</div>
              <img
                src={doubledown}
                alt="double down"
                style={{ width: "10px", height: "6px", marginRight: "20px" }}
              />
            </div>
            <div style={{ marginBottom: "30px" }} className="balance">
              <span style={{ color: "#898F99" }}>Balance: </span>
              <span style={{ color: "#1A2841", paddingLeft: "5px" }}>
                400,000 NGN
              </span>
            </div>

            <button className="btn-sell" onClick={() => setstep(2)}>
              {toggle ? "Sell" : "Buy"}
            </button>
          </div>
        </>
      )}
      {step === 2 && (
        <>
          <div className="confirm-wrapper">
            <Back />
            <div style={{ textAlign: "center" }}>
              <div className="confirm-title">
                You are buying
              </div>
              <div className="confirm-btc">
                0.0025 BTC
              </div>
            </div>
            <div style={{ marginBottom: "60px" }}>
              <Purchaser title="Purchase cost" amount="N40,000" />
              <Purchaser title="Fee" amount="N100" />
              <Purchaser title="Total" amount="N39,900" style={true} />
            </div>
            <button onClick={() => setstep(3)} className="confirm-btn">
              Confirm
            </button>
          </div>
        </>
      )}
      {step === 3 && (
        <>
          <div className="done-wrapper">
            <Back />
            <div className="done-row-one">
              <img src={mark} alt="approved" />
            </div>
            <div className="passed-title">
              Payment Succesfull
            </div>
            <div className="passed">
              You have Succesfully bought <br />0.00012BTC
            </div>
            <button onClick={() => setstep(1)} className="btn-done">
              Done
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default BuySell;
