import React from 'react'
import RecurringCard from '../RecurringCard'
import btc from '../../assets/icons/btc.png'
import ethereum from '../../assets/icons/ethereum.png'
import tether from '../../assets/icons/tether.png'
import naira from '../../assets/icons/naira.png'

import './style.css'

const RecurringList = ({handleRecurringBuy}) => {
    return (
        <div className="cover">
          <div className="occur">
            <div>
              <div className="rec-title">Recurring Buy</div>
            </div>
            <div>
              <button className="btn-for-recurr" onClick={handleRecurringBuy}>Create a recurring buy</button>
            </div>
          </div>

          <div className="thee-wrapper">
            <RecurringCard logo={btc} />
            <RecurringCard logo={ethereum} />
            <RecurringCard logo={tether} />
            <RecurringCard logo={naira} />
          </div>
        </div>
    )
}

export default RecurringList
