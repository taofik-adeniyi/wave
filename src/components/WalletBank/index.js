import React, { useState } from 'react'
import qrcode from "../../assets/icons/qrcode.png";
import send from "../../assets/icons/send.png";
import btc from "../../assets/icons/btc.png";
import './style.css'

const WalletBank = (props) => {
  const { toggle, handleReceive, handleSend } = props

    return (
        <div className="first-compo">
        <div className="compo-one">
        <div className="compo-one-chd">
            <img className="img-coin" src={btc} alt="btc" />
            </div>
          <div className="auto">
            <div className="title">Bitcoin Wallet</div>
            <div className="digit-coin">1.2947578 BTC</div>
            <div className="digit">~18,450,973 NGN</div>
          </div>
        </div>
        <div className="d-btn">
            <div 
              className={`boton ${toggle === 0 ? 'bgg' : 'not-checked'}`} 
              onClick={handleSend}>
              <div>
              <img src={send} alt="btc logo" />
              </div>
              <div className="snd-txt">Send</div>
            </div>
            <div 
              className={`boton  ${toggle === 1 ? 'bgg': 'not-checked'}`}
               onClick={handleReceive}>
              <div><img src={qrcode} alt="btc logo" /></div>
              <div className="snd-txt" >Receive</div>
            </div>
        </div>
      </div>
    )
}

export default WalletBank
