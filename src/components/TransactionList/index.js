import React from 'react'
import Tag from '../Tag'
import './style.css'

const index = ({icon, tag, date, type, amount, symb}) => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px 20px', cursor: 'pointer' }}>
            <div style={{display: 'flex'}}>
                <img src={icon} alt="deposit icon" />
            <div style={{marginLeft: '10px'}}>
            <div style={{display: 'flex'}}>
            <div>{type}</div>
            <Tag tag={tag} />
            </div>
            <div style={{display: 'flex'}}>{date}</div>
            </div>
            </div>

            <div>{amount} {symb}</div>
        </div>
    )
}

export default index
