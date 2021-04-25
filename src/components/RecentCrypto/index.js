import React from 'react'
import './style.css'
import List from '../WalletList/List'
import CryptoList from './CryptoList'
import btc from '../../assets/icons/btc.png'
import ethereum from '../../assets/icons/ethereum.png'
import tether from '../../assets/icons/tether.png'

const index = () => {
    return (
        <div className="recent-crypto-wrapper">
        <div style={{paddingTop: '20px', paddingLeft: '20px', paddingBottom: '20px', color: '#1A2841', fontSize: '14px', fontWeight: 600}}>Cryptocurrencies</div>
        <div style={{background: '#F5F6F6', justifyContent: 'space-between', padding: '10px 5px', letterSpacing: '0.2em', display: 'flex', color: '#1A2841', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase'}}>
          <div style={{paddingLeft: '20px'}}>NAME</div>
          <div>PRICE</div>
          <div style={{paddingRight: '20px'}}>24HRS</div>
        </div>
        <div style={{padding: '0 20px', minHeight: '215px'}}>
        <CryptoList icon={btc} name="Bitcoin" symbol="BTC" amount="1" price={"$33,071.87"} percent="+1.11%" />
        <CryptoList icon={ethereum} name="Ethereum" symbol="ETH" amount="1" price={"$33,007"} percent="+2.76%" />
        <CryptoList icon={tether} name="Tether" symbol="USDT" amount="1" price={"$0.9994"} percent="+2.76%" />
        
        </div>
      </div>
    )
}

export default index
