import React from 'react'
import down from "../../assets/icons/down.png";
import calender from "../../assets/icons/calender.png";

const DateFilter = () => {
    return (
        <>
        <div
        style={{
          borderRadius: "5px",
          backgroundColor: "#F5F6F6",
          padding: "10px",
          display: "flex",
          fontSize: '16px',
          color: '#1A2841',
          fontFamily: 'Proxima Nova',
          cursor: 'pointer'
        }}
      >
        <div>
          <img src={calender} alt="calender" />
        </div>
        <div style={{ margin: "0 10px" }}>23 -30 January, 2021</div>
        <div>
          <img src={down} alt="down key" />
        </div>
      </div>
        </>
    )
}

export default DateFilter
