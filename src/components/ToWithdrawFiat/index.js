import React from 'react'
import './style.css'

const ToWithdrawFiat = ({cashout, setCashout, theerror, settheerror}) => {
    return (
        <>
            <div className="the-wrap">
              <div className="head-title">
                What bank account would you like to make your withdrawal to
              </div>
              <input
                type="number"
                placeholder="Enter amount to withdraw"
                value={cashout}
                className={`inkk ${theerror ? "herro" : null}`}
                onChange={(e) => setCashout(e.target.value)}
              />
              {theerror && (
                <div className="much">
                  You dont have that much in your wallet
                </div>
              )}
              <select>
                <option>Select bank account</option>
                <option>Account three</option>
                <option>Account two</option>
                <option>Account three</option>
              </select>
              <div className="new-bank">
                Can't find your bank account?{" "}
                <a href="#kio" target="_blank">
                  Add new account
                </a>
              </div>
              <div>
                <button
                  className={`my-with-btn ${cashout.length > 0 ? "btn-pointer" : null}`}>
                  Withdraw
                </button>
              </div>
            </div>   
        </>
    )
}

export default ToWithdrawFiat
