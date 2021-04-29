import React from 'react'


const List = ({icon, name, symbol, percent, amount, value}) => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px 0'}}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src={icon} alt="btc icon" />
            <div style={{width: '100px', marginLeft: '10px', fontSize: '16px'}}>
              <span style={{color: '#1A2841'}}>{name}</span>{' '}
              <span style={{color: '#B1B4BB'}}>{symbol}</span>
            </div>
            </div>
            <div style={{display: 'flex', color: '#02C076', fontSize: '16px', lineHeight: '19px', opacity: '0.78', marginLeft: '210px', marginRight: 'auto', justifyContent: 'center', alignItems: 'center'}}>
              {percent}
            </div>
            <div style={{display: 'flex', gap: '8px', flexDirection: 'column', alignItems: 'flex-end'}}>
              <div style={{color: '1A2841', fontSize: '14px'}}>{value} NGN</div>
              <div style={{color: '#898F99', fontSize: '14px', lineHeight: '17px'}}>{amount}</div>
            </div>
          </div>
    )
}

export default List
