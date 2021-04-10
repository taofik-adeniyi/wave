import React from "react";
import "./style.css";

const index = () => {
  return (
    <div className="buysell-wrapper">
      <div
        style={{
          display: "flex",
          borderTopRightRadius: "8px",
          borderTopLeftRadius: "8px"
        }}
      >
        <div
          style={{
            width: "50%",
            display: "flex",
            background: "#ffffff",
            borderTopLeftRadius: "8px",
            justifyContent: "center",
            alignItems: "center",
            borderTop: "2px solid blue",
          }}
        >
          <div style={{ padding: "22px" }}>Buy</div>
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderTopRightRadius: "8px",
            background: "#F5F6F6",
          }}
        >
          <div>Sell</div>
        </div>
      </div>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div style={{ marginTop: "10px" }}>
          <div
            style={{
              fontWeight: 600,
              color: "#0059FF",
              backgroundColor: "#F0F5FF",
              borderRadius: "36px",
              padding: "8px",
              alignItems: "center",
            }}
          >
            NGN &#8681;
          </div>
        </div>
        {/* When above clicked below happen */}
        {/* <div>
            <div>NGN</div>
            <div>USD</div>
          </div> */}
        {/* When above clicked below happen */}
        
        
      </div>
      <div style={{display: 'flex', marginTop: '20px', marginBottom: '10px', justifyContent: 'center',  padding: '10px'}}>
            <sup>NGN</sup>
            <div style={{fontSize: '60px',  color: 'gray'}}> 0</div>
          </div>
          {/* <div>OR</div> */}
      {/* <div style={{display: 'flex', justifyContent: 'center', fontSize: '24px', padding: '10px'}}>
            <sup>NGN</sup>40,000
          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}>0.000455 BTC</div> */}
      <div style={{textAlign: 'center'}}>
        <input style={{width: '86%', height: '30px', marginTop: '20px', marginBottom: '20px'}} type="text" list="cryptolist" placeholder="Bitcoin (Btc)" />
        <datalist id="cryptolist">
          <option value="Bitcoin (Btc)" />
          <option value="Ethereum (Eth)" />
          <option value="Tether (USDT)" />
        </datalist>
        <div style={{display: 'flex', justifyContent: 'flex-end', margin: '0 7% 10px 0'}}>Balance: 400,000 NGN</div>
        <div>
          <button style={{width: '86%', margin: '5px 0 20px 0'}}>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default index;
