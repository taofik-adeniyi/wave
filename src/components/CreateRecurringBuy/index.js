import React from 'react'

const CreateRecurringBuy = (props) => {
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
          value=""
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
          placeholder="BTC"
          value=""
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
          placeholder="Amount"
          value=""
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
          value=""
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
          value=""
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
          value=""
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
