import React from 'react'
import PayCard from "../PayCard";
import './style.css'

const index = ({depositinput, mastercard, visa, bank, setdepositinput}) => {
    return (
        <>
          <div className="pay-wrapper">
              <input
                type="number"
                placeholder="Enter amount to deposit"
                value={depositinput}
                className="pay-input"
                onChange={(e) => setdepositinput(e.target.value)}
              />
              <PayCard
                master={mastercard}
                masterAlt="mastercard logo"
                visa={visa}
                visaAlt="visa logo"
              />
              <PayCard bank={bank} bankAlt="visa logo" />
            </div>  
        </>
    )
}

export default index
