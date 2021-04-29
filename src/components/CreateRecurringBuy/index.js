import React, { useState } from 'react'

const CreateRecurringBuy = (props) => {
  const [nameofplan, setnameofplan] = useState('')
  const [dcrypto, setdcrypto] = useState('')
  const [amount, setamount] = useState('')
  const [frequency, setfrequency] = useState('')
  const [startdate, setstartdate] = useState('')
  const [enddate, setenddate] = useState('')
    const { confirm  } = props
    return (
        <div>
            <div>
        <p style={{textAlign: 'center'}}>This will help buy on your behalf</p>
        <input
          style={{
            outline: "none",
            width: "90%",
            backgroundColor: "#F5F6F6",
            border: "1px solid #EBECEE",
            borderRadius: "5px",
            marginBottom: "25px",
          }}
          type="text"
          placeholder="Name of plan"
          value={nameofplan}
          onChange={(e) => setnameofplan(e.target.value)}
          className="dinput"
        />
        <input
          style={{
            outline: "none",
            width: "90%",
            backgroundColor: "#F5F6F6",
            border: "1px solid #EBECEE",
            borderRadius: "5px",
            marginBottom: "25px",
          }}
          type="number"
          placeholder="BTC"
          value={dcrypto}
          onChange={(e) => setdcrypto(e.target.value)}
          className="dinput"
        />
        <input
          style={{
            outline: "none",
            width: "90%",
            backgroundColor: "#F5F6F6",
            border: "1px solid #EBECEE",
            borderRadius: "5px",
            marginBottom: "25px",
          }}
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setamount(e.target.value)}
          className="dinput"
        />
        <input
          style={{
            outline: "none",
            width: "90%",
            backgroundColor: "#F5F6F6",
            border: "1px solid #EBECEE",
            borderRadius: "5px",
            marginBottom: "25px",
          }}
          type="text"
          placeholder="Select saving frequency"
          value={frequency}
          onChange={(e) => setfrequency(e.target.value)}
          className="dinput"
        />
        <input
          style={{
            outline: "none",
            width: "90%",
            backgroundColor: "#F5F6F6",
            border: "1px solid #EBECEE",
            borderRadius: "5px",
            marginBottom: "25px",
          }}
          type="text"
          placeholder="Start date"
          value={startdate}
          onChange={(e) => setstartdate(e.target.value)}
          className="dinput"
        />
        <input
          style={{
            outline: "none",
            width: "90%",
            backgroundColor: "#F5F6F6",
            border: "1px solid #EBECEE",
            borderRadius: "5px",
            marginBottom: "25px",
          }}
          type="text"
          placeholder="End date"
          value={enddate}
          onChange={(e) => setenddate(e.target.value)}
          className="dinput"
        />
        <div>
          <button
          onClick={confirm}
            style={{
              backgroundColor: "#F5F6F6",
              width: "100%",
              color: "#D8DADD",
              cursor: 'pointer'
            }}
          >
            Buy
          </button>
        </div>
        </div>
        </div>
    )
}

export default CreateRecurringBuy
