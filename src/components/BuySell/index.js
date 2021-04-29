import React, { useState } from "react";
import "./style.css";
import mark from "../../assets/icons/mark.png"
import leftarrow from "../../assets/icons/leftarrow.png"
import downarrow from "../../assets/icons/downarrow.png"
import doubledown from "../../assets/icons/doubledown.png"

const BuySell = () => {
  const [drop, setdrop] = useState(false);
  const [price, setprice] = useState(0);
  const [buy, setbuy] = useState(1);
  const [sell, setsell] = useState(0);
  const [step, setstep] = useState(1)
  const [toggle, setToggle] = useState(true)
  const dropShow = () => {
    setdrop(!drop);
  };
  const handleToggle = () => {
    setToggle(!toggle);
  }
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
      <div className={`${style && 'bold'}`} style={{justifyContent: 'space-between', display: 'flex', fontSize: '14px', margin: '0 30px 10px 30px'}}>
        <div style={{color: '#898F99', marginBottom: '10px'}}>{title}</div>
        <div style={{color: '#1A2841', marginBottom: '10px'}}>{amount}</div>
      </div>
    )
  }
  const Back = () => {
    return (
      <div onClick={()=> setstep(1)} style={{display: 'flex', cursor: 'pointer', padding: '25px 0', marginBottom: '20px', alignItems: 'center', justifyContent: 'flex-start'}}>
        <img src={leftarrow} style={{width: '7.78px', height: '12px'}} alt="left arrow" />
        <div style={{marginLeft: '10px', color: '#626977', fontSize: '12px'}}>Back</div>
      </div>
    )
  }
  return (
    <div className="buysell-wrapper">
      {
        step === 1 && 
        <>
        <div className="klose">
        <div onClick={handleToggle} className={`buy ${!toggle && "clicked"} `}>
          <div>Buy</div>
        </div>
        <div onClick={handleToggle} className={`sell ${toggle && "clicked"}`}>
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
        <div style={{fontSize: '18px'}}>NGN</div>
        <div style={{fontSize: '54px'}}>{price === 0 ? 0 : "40,000"}</div>
      </div>
      <div>
        <div className="okay">
            <div>Bitcoin (Btc)</div>
            <img src={doubledown} alt="double down" style={{width: '10px', height: '6px', marginRight: '20px'}} />
        </div>
        <div style={{marginBottom: '30px'}} className="balance">
          <span style={{color: '#898F99'}}>Balance: </span>
          <span style={{color: '#1A2841', paddingLeft: '5px'}}>400,000 NGN</span>
        </div>
        
        <div className="okaytwo" onClick={() => setstep(2)}>
            {toggle ? 'Sell' : 'Buy'}
        </div>
      </div>
      </>
      }
      {
        step === 2 &&
        <>
          <div style={{paddingLeft: '20px', paddingRight: '20px'}}>
            <Back />
            <div style={{textAlign: 'center'}}>
            <div style={{fontSize: '16px', color: '#898F99', marginBottom: '35px'}}>You are buying</div>
              <div style={{fontSize: '27px', fontWeight: 'bold', color: '#1A2841', marginBottom: '40px'}}>0.0025 BTC</div>
            </div>
            <div style={{marginBottom: '60px'}}>
            <Purchaser title="Purchase cost" amount="N40,000"/>
            <Purchaser title="Fee" amount="N100"/>
            <Purchaser title="Total" amount="N39,900" style={true} />
            </div>
            <button style={{width: '100%', cursor: 'pointer'}} onClick={() => setstep(3)}>Confirm</button>
          </div>
        </>
      }
      {
        step === 3 &&
        <div style={{textAlign: 'center', paddingLeft: '20px', paddingRight: '20px'}}>
          <Back />
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90px',marginTop: '20px', marginBottom: '40px'}}>
          <img src={mark} alt="approved" />
            </div>
              <div style={{fontSize: '18px', color: '#1A2841', fontWeight: 600, marginBottom: '20px'}}>Payment Succesfull</div>
            <div style={{fontSize: '16px', color: '#626977', marginBottom: '50px'}}>
              You have Succesfully bought<br />
              {/* </div> */}
              0.00012BTC</div>
              <button onClick={() => setstep(1)} style={{cursor: 'pointer', width: '100%', marginTop: '20px', marginBottom: '20px'}}>Done</button>
        </div>
      }
    </div>
  );
};

export default BuySell;
