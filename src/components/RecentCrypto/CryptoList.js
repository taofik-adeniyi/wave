// import React from 'react'

// const CryptoList = ({name, symbol, icon, amount, price, percent}) => {
//     return (
//         <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px 0'}}>
            
//             <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
//               <img src={icon} alt="btc icon" />
//               <div style={{marginLeft: '10px'}}>
//                 <span style={{color: '#1A2841'}}>{name} </span>
//                 <span style={{color: '#B1B4BB'}}>{symbol}</span>
//               </div>
//             </div>
            
//             <div style={{}}>
//               {price}
//             </div>
            
//             <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', color: '#02C076', fontSize: '16px', lineHeight: '19px',}}>
//               <div>{percent}</div>
//             </div>
            
//           </div>
//     )
// }

// export default CryptoList

import React from 'react'


const CryptoList = ({name, symbol, icon, amount, price, percent}) => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', margin: '8px 0 15px 0', borderBottom: '1px solid rgba(0, 0, 0, 0.02)'}}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src={icon} alt="btc icon" />
            <div style={{marginLeft: '10px', fontSize: '16px'}}>
              <span style={{color: '#1A2841'}}>{name}</span>{' '}
              <span style={{color: '#B1B4BB'}}>{symbol}</span>
            </div>
            </div>
            <div style={{color: '#1A2841', fontSize: '16px', lineHeight: '17px', 
            display: 'flex', alignItems: 'center', marginRight: '160px', marginLeft: 'auto'}}>
              {price}
            </div>
            <div 
              style={{
                display: 'flex', 
                color: '#02C076', fontSize: '16px', lineHeight: '19px', 
                opacity: '0.78', justifyContent: 'center', 
                alignItems: 'center'}}>
              {percent}
            </div>
          </div>
    )
}

export default CryptoList

