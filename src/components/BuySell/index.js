import React, { useState } from "react";
import "./style.css";
import mark from "../../assets/icons/mark.png"
import leftarrow from "../../assets/icons/leftarrow.png"

const BuySell = () => {
  const [drop, setdrop] = useState(false);
  const [price, setprice] = useState(2);
  const [buy, setbuy] = useState(1);
  const [sell, setsell] = useState(0);
  const [step, setstep] = useState(3)
  const dropShow = () => {
    setdrop(!drop);
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
    setstep()
  }
  const Purchaser = ({title, amount, style}) => {
    return (
      <div  className={`${style && 'bold'}`} style={{justifyContent: 'space-between', display: 'flex'}}>
              <div>{title}</div>
              <div>{amount}</div>
            </div>
    )
  }
  const Back = () => {
    return (
      <div style={{display: 'flex', padding: '15px 0', justifyContent: 'flex-start'}}>
        <img src={leftarrow} alt="left arrow" />
        <div style={{marginLeft: '10px'}}>Back</div>
      </div>
    )
  }
  return (
    <div className="buysell-wrapper">
      {
        step === 1 && 
        <>
        <div className="klose">
        <div className={`buy ${buy > 0 && "clicked"} `}>
          <div onClick={onBuy}>Buy</div>
        </div>
        <div className={`sell ${sell > 0 && "clicked"}`}>
          <div onClick={onSell}>Sell</div>
        </div>
      </div>
      <div className="drupal">
        <div className="drop-wrapper">
          <div className="drop-show" onClick={dropShow}>
            NGN &#8681;
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
        <sup>NGN</sup>
        <div>{price === 0 ? 0 : "40,000"}</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <input
          className="data-list"
          type="text"
          list="cryptolist"
          placeholder="Bitcoin (Btc)"
        />
        <datalist id="cryptolist">
          <option value="Bitcoin (Btc)" />
          <option value="Ethereum (Eth)" />
          <option value="Tether (USDT)" />
        </datalist>
        <div className="balance">Balance: 400,000 NGN</div>
        <div>
          <button className="btn-buy">Buy</button>
        </div>
      </div>
      </>
      }
      {
        step === 2 &&
        <>
          <div style={{paddingLeft: '20px', paddingRight: '20px'}}>
            <div style={{display: 'flex', padding: '10px 20px'}}>Back</div>
            <Back />
            <div style={{textAlign: 'center'}}>
            <div>You are buying</div>
              <h2>0.0025 BTC</h2>
            </div>
            <Purchaser title="Purchaser" amount="N40,000"/>
            <Purchaser title="Fee" amount="N100"/>
            <Purchaser title="Total" amount="N39,900" style={true}/>
            <button style={{width: '100%', marginTop: '20px', marginBottom: '20px'}}>Confirm</button>
          </div>
        </>
      }
      {
        step ===3 &&
        <div style={{textAlign: 'center', paddingLeft: '20px', paddingRight: '20px'}}>
          <Back />
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '120px'}}>
          <img src={mark} alt="approved" />
            </div>
              <h2>Payment Succesfull</h2>
            <div>
              You have Succesfully bought
              </div>
              <div>0.00012BTC</div>
              <button style={{width: '100%', marginTop: '20px', marginBottom: '20px'}}>Done</button>
        </div>
      }
    </div>
  );
};

export default BuySell;
