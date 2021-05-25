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
import './style.css'

const CryptoList = ({name, symbol, icon, amount, price, percent}) => {
    return (
        <div className="crytolist-wrapper">
            <div className="box-one">
              <img src={icon} alt="btc icon" />
              <div className="name-symbol">
                <span className="thee-name">{name}</span>{' '}
                <span className="thee-symbol">{symbol}</span>
              </div>
            </div>
            <div className="cry-prize">
              {price}
            </div>
            <div className="cry-percent">
              {percent}
            </div>
          </div>
    )
}

export default CryptoList

