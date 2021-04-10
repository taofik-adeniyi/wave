import React from "react";
import Menu from "../../components/Menu";
import EachWallet from "./EachWallet";
import WalletCard from "../../components/WalletCard"
import naira from "../../assets/icons/naira.png"
import btc from "../../assets/icons/btc.png"
import ethereum from "../../assets/icons/ethereum.png"
import tether from "../../assets/icons/tether.png"

const Wallet = () => {
  return (
    <div >
        <Menu />
        <div style={{width: '845px', border: '2px solid yellogreen', margin: '30px auto'}}>

        
        <div>
      
      <div style={{backgroundColor: '#163062', borderRadius: '8px', width: '100%', height: '168px', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div>Combined Wallet Value</div>
        <div>2,000,000 NGN</div>
      </div>

      <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '30px', alignItems: 'center'}}>
        <div>Wallets</div>
        <div>
          <button style={{border: '1px solid #EBECEE', borderRadius: '8px', backgroundColor: '#ffffff', color: '#0059FF', fontFamily: 'SF Pro Text', fontSize: '13px'}}>Recuring buys</button>
        </div>
      </div>

      <div style={{ width: '100%', marginTop: '30px', display: 'flex', flexWrap: 'wrap', gap: '25px 10px'}}>
          <WalletCard sylp="NGN" icon={naira} currency={"Naira"}  balance="115,050" percent="+2.76%" nairaVal="115,050" />
          <WalletCard sylp="BTC" icon={btc} currency={"Bitcoin"}  balance="2.48758" percent="+2.76%" nairaVal="115,050" />
          <WalletCard sylp="ETH" icon={ethereum} currency={"Ethereum"}  balance="14" percent="+2.76%" nairaVal="115,050" />
          <WalletCard sylp="TET" icon={tether} currency={"Tether"}  balance="4,581" percent="+2.76%" nairaVal="115,050" />
      </div>
    </div>
    {/* <EachWallet /> */}
    </div>
    </div>
  );
};

export default Wallet;
