import React from "react";
import Blister from "../Blister"

const ConfirmRecurringBuy = (props) => {
  const { showlast } = props;

  

  return (
    <div>
      <div style={{ padding: "10px 30px" }}>
        <div
          style={{
            display: "flex",
            marginTop: "25px",
            justifyContent: "center",
            alignItems: "center",
            color: "#898F99",
            fontSize: '16px'
          }}
        >
          You're creating a recurring buy of
        </div>
        <div style={{ marginBottom: '40px', display: "flex", marginTop: "20px", justifyContent: "center", alignItems: "center", color: "#3B4455", flexDirection: "column"}}>
          <div style={{color: "#1A2841", fontSize: "27px", fontWeight: "bold"}}>100,000 NGN</div>
          <div style={{marginTop: '10px', fontSize: '16px'}}>~ 0.0047 BTC</div>
        </div>
        <div>
          <Blister oya="Coin"  ofe="Bitcoin (BTC)" />
          <Blister oya="Price"  ofe="100,000 (NGN)" />
          <Blister oya="Frequency"  ofe="Monthly (BTC)" />
          <Blister oya="Start Date"  ofe="10-04-2021" />
          <button
            onClick={showlast}
            style={{ width: "100%", marginTop: "50px", cursor: "pointer" }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRecurringBuy;
