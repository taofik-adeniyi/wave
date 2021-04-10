import React from 'react'
import List from './List'
import './walletlist.css'
import btc from '../../assets/icons/btc.png'
import ethereum from '../../assets/icons/ethereum.png'
import tether from '../../assets/icons/tether.png'

const WalletList = () => {
    return (
        <div className="list-wrapper">
          <div className="row-one">
            <div>Wallets</div>
            <div>See More &gt;</div>
          </div>
          <List icon={btc} name="Bitcoin" symbol="BTC" />
          <List icon={ethereum} name="Ethreum" symbol="ETH" />
          <List icon={tether} name="Tether" symbol="USDT" />
        </div>
    )
}

export default WalletList
