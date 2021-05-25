import React from 'react'
import './style.css'

const RecurringCard = ({logo}) => {
    return (
        <div className="our-card">
          <img src={logo} alt="btc logo" />
          <div style={{color: '#898F99', marginTop : '10px', fontSize: '13px', fontWeight: 'normal', marginBottom: '10px'}}>Name of Plan</div>
          <div>
            <div style={{fontSize: '20px', fontWeight: 'bold', color: '#1A2841'}}>
              115,050 NGN <span style={{color: '#19BE45', fontWeight: 'normal', fontSize: '12px'}}>+2.76%</span>
            </div>
          </div>
        </div>
    )
}

export default RecurringCard
