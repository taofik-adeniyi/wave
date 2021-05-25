import React from 'react'
import List from './List'
import './style.css'
import btc from '../../assets/icons/btc.png'
import ethereum from '../../assets/icons/ethereum.png'
import tether from '../../assets/icons/tether.png'
import SeeMore from '../SeeMore'

const WalletList = () => {
    return (
        <div className="wa-wrapper">
          <div className="wa-row-one">
            <div style={{color: '#1A2841', fontWeight: '600', fontSize: '14px'}}>Wallets</div>
              <SeeMore />
          </div>
          <List icon={btc} value="12,066,707" percent="+2.76%" name="Bitcoin" amount="1 BTC" symbol="BTC" />
          <List icon={ethereum} value="799,490" percent="+1.76%"  amount="2 ETH" name="Ethreum" symbol="ETH" />
          <List icon={tether} value="24,012" amount="50 USDT" percent="+0.76%" name="Tether" symbol="USDT" />
        </div>
    )
}

export default WalletList
