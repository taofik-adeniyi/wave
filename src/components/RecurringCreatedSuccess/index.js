import React from 'react'
import sock from '../../assets/icons/sock.png'

const RecurringCreatedSuccess = ({complete}) => {
    return (
        <div>
            <div style={{ textAlign: "center", marginTop: '50px' }}>
        <div>Recurring buy created Successfully</div>
        <p>
          You have Successfully craeted a recurring buy for 100,000 NGN worth of
          BTC per month
        </p>
        <img src={sock} alt="sock logo" />
        <button 
            onClick={complete}
        style={{ width: "100%", marginTop: "50px", cursor: 'pointer' }}>Continue</button>
      </div>
        </div>
    )
}

export default RecurringCreatedSuccess
