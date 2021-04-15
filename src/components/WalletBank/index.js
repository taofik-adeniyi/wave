import React from 'react'
import qrcode from "../../assets/icons/qrcode.png";
import send from "../../assets/icons/send.png";
import btc from "../../assets/icons/btc.png";
import './style.css'

const WalletBank = () => {
    return (
        <div className="first-compo">
        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
        <div style={{marginLeft: '20px'}}>
            <img style={{width: '55px'}} src={btc} alt="btc" />
            </div>
          <div style={{marginLeft: '15px', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex', flexDirection: 'column'}}>
            <div style={{fontSize: '14px', paddingBottom: '5px', color: '#3B4455'}}>Bitcoin Wallet</div>
            <div style={{color: '#1A2841', paddingBottom: '5px', fontWeight: '700', fontSize: '24px'}}>1.2947578 BTC</div>
            <div style={{fontSize: '14px', color: '#898F99'}}>-18,450,973 NGN</div>
          </div>
        </div>
        <div style={{display: 'flex', margin: '20px 0', padding: '0 20px 0 0', justifyContent: 'space-between'}}>
            <div className="boton">
              <div>
              <img src={send} alt="btc logo" />
              </div>
              <div style={{paddingTop: '5px'}}>Send</div>
            </div>
            <div className="boton not-checked" >
              <div><img src={qrcode} alt="btc logo" /></div>
              <div style={{paddingTop: '5px'}}>Receive</div>
            </div>
        </div>
      </div>
    )
}

export default WalletBank