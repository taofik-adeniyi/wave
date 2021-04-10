import React from 'react'

const CryptoList = ({name, symbol, icon, amount, price, percent}) => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px 0'}}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src={icon} alt="btc icon" />
            <div style={{width: '100px', marginLeft: '10px'}}>{name} {symbol}</div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{percent}</div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
              <div> {price} NGN</div>
              <div> {amount} {symbol} </div>
            </div>
          </div>
    )
}

export default CryptoList
