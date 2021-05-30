import React from 'react'

import btc from "../../assets/icons/btc.png";
import ethereum from "../../assets/icons/ethereum.png";
import tether from "../../assets/icons/tether.png";

import WalletCard from "../../components/WalletCard";
import naira from "../../assets/icons/naira.png";

import './style.css'

const index = ({showRecurring, showCrypto, showNaira}) => {
    return (
        <div>
            <div className="step-zero-wrapper">
          <div>
            <div className="card-one">
              <div style={{fontSize: '14px', color: "#8AC8E6"}}>Combined Wallet Value</div>
              <div style={{color: '#FFFFFF', fontSize: '24px', fontWeight: 'bold', marginTop: '10px'}}>2,000,000 NGN</div>
            </div>

            <div className="card-two">
              <div>Wallets</div>
              <div>
                <button onClick={showRecurring} className="btn-recurring">
                  Recuring buys
                </button>
              </div>
            </div>

            <div className="card-wrapper">
              <WalletCard
                sylp="NGN"
                icon={naira}
                currency={"Naira"}
                balance="115,050 NGN"
                percent="+2.76%"
                nairaVal="115,050"
                clicked={showNaira}
              />
              <WalletCard
                sylp="BTC"
                icon={btc}
                currency={"Bitcoin"}
                balance="2.48758 BTC"
                percent="+2.76%"
                nairaVal="115,050"
                clicked={showCrypto}
              />
              <WalletCard
                sylp="ETH"
                icon={ethereum}
                currency={"Ethereum"}
                balance="14 ETH"
                percent="+2.76%"
                nairaVal="115,050"
                clicked={showCrypto}
              />
              <WalletCard
                sylp="TET"
                icon={tether}
                currency={"Tether"}
                balance="4,581 TET"
                percent="+2.76%"
                nairaVal="115,050"
                clicked={showCrypto}
              />
            </div>
          </div>
          {/* <EachWallet /> */}
        </div>
        </div>
    )
}

export default index
