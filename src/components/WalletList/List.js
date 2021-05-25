import React from 'react'
import './list.css'

const List = ({icon, name, symbol, percent, amount, value}) => {
    return (
        <div className="lee-wrapper">
          <div className="lee-box-one">
            <img src={icon} alt="btc icon" />
            <div className="lee-name-symbol">
              <span className="lee-name">{name}</span>{' '}
              <span className="lee-symbol">{symbol}</span>
            </div>
          </div>
          <div className="lee-percent">
            {percent}
          </div>
          <div className="lee-ngn-amt">
            <div className="lee-val-ngn">{value} NGN</div>
            <div className="lee-amt">{amount}</div>
          </div>
        </div>
    )
}

export default List
