import React from 'react'
import Tag from '../Tag'
import './style.css'

const index = ({icon, tag, date, type, amount, symb, curr}) => {
    return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '25px 0 40px 0', cursor: 'pointer' }}>
            <div style={{display: 'flex'}}>
                <img src={icon} alt="deposit icon" />
            <div style={{marginLeft: '10px'}}>
            <div style={{display: 'flex'}}>
            <div style={{fontWeight: 500, color: '#1A2841', fontSize: '16px'}}>{type}</div>
            <Tag tag={tag} />
            </div>
            <div style={{display: 'flex', color: '#898F99', fontSize: '14px', textTransform: 'capitalize'}}>{date}</div>
            </div>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                {curr && <div style={{marginBottom: '5px', fontWeight: 600, fontSize: '16px', color: '#1A2841'}}>{curr}</div>}
                <div style={{color: '#898F99', fontSize: '14px'}} > {!curr ? <strong style={{fontSize: '16px', color: '#1A2841'}}>{amount} NGN</strong> : `${amount} NGN`} </div>
            </div>
        </div>
    )
}

export default index
