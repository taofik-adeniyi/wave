import React from 'react'


const List = ({icon, name, symbol}) => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px 0'}}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src={icon} alt="btc icon" />
            <div style={{width: '100px', marginLeft: '10px'}}>{name} {symbol}</div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>+2.76%</div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
              <div>12,000,000 NGN</div>
              <div>1 BTC</div>
            </div>
          </div>
    )
}

export default List
