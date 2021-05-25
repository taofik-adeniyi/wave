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
        <div className="row-one">Crypto Currencies</div>
        <div className="row-two">
          <div className="name">NAME</div>
          <div>PRICE</div>
          <div className="time">24HRS</div>
        </div>
        <div className="lister-wrap">
        <CryptoList icon={btc} name="Bitcoin" symbol="BTC" amount="1" price={"$33,071.87"} percent="+1.11%" />
        <CryptoList icon={ethereum} name="Ethereum" symbol="ETH" amount="1" price={"$33,007"} percent="+2.76%" />
        <CryptoList icon={tether} name="Tether" symbol="USDT" amount="1" price={"$0.9994"} percent="+2.76%" />
        </div>
      </div>
    )
}

export default index
