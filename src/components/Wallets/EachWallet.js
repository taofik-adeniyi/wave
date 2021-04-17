import React from "react";

const EachWallet = () => {
  return (
    <div>
      <div>
        <button>Create recurring buy</button>
      </div>
      <div>
        <div>
          <div>Icon</div>
          <div>Bitcoin Wallet</div>
          <div>1.2847578 BTC</div>
          <div>~ 18,450,973 NGN</div>
        </div>
        <div>
          <div>
            <div>icon</div>
            <button>Send</button>
            <div>icon</div>
            <button>Send</button>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div>Buy</div>
          <div>Sell</div>
        </div>
        <div>
          <div>
            <button>NGN</button>
          </div>
          {/* When above clicked below happen */}
          <div>
            <div>NGN</div>
            <div>USD</div>
          </div>
          {/* When above clicked below happen */}
          <div>
            <sup>NGN</sup>
            <div>0</div>
          </div>
        </div>
        <div>
          <div>
            <button>Buy</button>
          </div>
          <div>Balance: 400,000 NGN</div>
          <div>Active recurrent buy</div>
        </div>
      </div>

      <div>
          <div>Send Bitcoin</div>
          <div>
              <div>To Address</div>
              <div>To Waavewallet Account</div>
          </div>
          <div>
              You can send to any Bitcoin address
          </div>
          <div>
              <form>
                  <label>Address</label>
                  <input type="text" placeholder="Enter Bitcoin Address" />
                  <div>
                      <label>Amount in naira</label>
                      <div>Naira Balance: 400,000</div>
                      <div><div>||</div><div>NGN</div></div>
                  </div>
                  <div>Send all</div>
                  <div>
                      <button>Send</button>
                  </div>
              </form>
          </div>
      </div>

      <div>
        <div>
          <div>Recent Transactions</div>
          <div>See more &gt;</div>
        </div>
        <div>You have no activity yet</div>
      </div>
    </div>
  );
};

export default EachWallet;
