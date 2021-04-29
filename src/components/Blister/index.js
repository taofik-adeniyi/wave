import React from 'react'

const index = ({oya, ofe}) => {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: '15px' }}>
            <div style={{fontSize: '14px', color: '#898F99'}}>{oya}</div>
            <div style={{color: '#1A2841'}}>{ofe}</div>
            </div>
        </>
    )
}

export default index
