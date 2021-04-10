import React from 'react'
import './style.css'

const index = ({icon, tag, date, type, amount, symb}) => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px 20px' }}>
            <div style={{display: 'flex'}}>
                <img src={icon} alt="deposit icon" />
            <div style={{marginLeft: '10px'}}>
            <div style={{display: 'flex'}}>
            <div>{type}</div>
            <div style={{marginLeft: '10px', backgroundColor: '#E2FFEE', borderRadius: '4px', padding: '5px 15px', color: '#299C59', fontFamily: 'SF Pro Text', fontSize: '12px'}}>{tag}</div>
            </div>
            <div style={{display: 'flex'}}>{date}</div>
            </div>
            </div>

            <div>{amount} {symb}</div>
        </div>
    )
}

export default index
