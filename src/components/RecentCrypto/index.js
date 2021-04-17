import React from 'react'
import List from '../WalletList/List'
import CryptoList from './CryptoList'
import btc from '../../assets/icons/btc.png'
import ethereum from '../../assets/icons/ethereum.png'
import tether from '../../assets/icons/tether.png'

const index = () => {
    return (
        <div className="recent-wrapper">
        <div style={{paddingLeft: '20px'}}>Cryptocurrencies</div>
        <CryptoList icon={btc} name="Bitcoin" symbol="BTC" amount="1" price={"$33,071.87"} percent="+1.11%" />
        <CryptoList icon={ethereum} name="Ethereum" symbol="ETH" amount="1" price="12,000,000" percent="+2.76%" />
        <CryptoList icon={tether} name="Tether" symbol="USDT" amount="1" price="12,000,000" percent="+2.76%" />
      </div>
    )
}

export default index
