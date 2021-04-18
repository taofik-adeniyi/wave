import React from 'react'

const ConfirmRecurringBuy = (props) => {
    const { showlast } = props
    return (
        <div>
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
            <button 
                onClick={showlast}
                style={{ width: "100%", marginTop: "50px", cursor: 'pointer' }}>
              Confirm
            </button>
          </div>
        </div>
        </div>
    )
}

export default ConfirmRecurringBuy
