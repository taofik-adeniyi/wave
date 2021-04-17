import React, { useState } from "react";
import Menu from "../../components/Menu";
import EachWallet from "./EachWallet";
import WalletCard from "../../components/WalletCard";
import naira from "../../assets/icons/naira.png";
import btc from "../../assets/icons/btc.png";
import down from "../../assets/icons/down.png";
import calender from "../../assets/icons/calender.png";
import deposit from "../../assets/icons/deposit.png";
import ethereum from "../../assets/icons/ethereum.png";
import tether from "../../assets/icons/tether.png";
import bank from "../../assets/icons/bank.png";
import mastercard from "../../assets/icons/mastercard.png";
import visa from "../../assets/icons/visa.png";

import "./style.css";
import RecurringCard from "../../components/RecurringCard";
import WalletBank from "../../components/WalletBank";
import BuySell from "../../components/BuySell";
import RecentTransactions from "../../components/RecentTransactions";
import Sender from "../../components/Sender";
import SenderTwo from "../../components/Sender/SenderTwo";
import PayCard from "../../components/PayCard";
import TransactionList from "../../components/TransactionList";
import AccountSummary from "../../components/AccountSummary/AccountSummary";
import Modal from "../../components/Modal";
import ToBuy from "../../components/ToBuy";

const Wallet = () => {
  const [step, setstep] = useState(0);
  const [error, seterror] = useState(true);
  const [depowith, setdepowith] = useState(0)
  const [translist, settranslist] = useState('none')
  const [first, setfirst] = useState(0)
  const showRecurring = () => {
    setstep(1);
  };
  const showCrypto = () => {
    setstep(2);
  };
  const showNaira = () => {
    setstep(3);
  };
  const moreInfo = () => {
    return (
      <div
        style={{
          borderRadius: "8px",
          backgroundColor: "#F5F6F6",
          padding: "10px",
          display: "flex",
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
    );
  };
  const deposit = () => {
    setdepowith(1)
  }
  const withdraw = () => {
    if (translist === 'none') {
      settranslist('empty')
    }else if(translist === 'empty') {
      settranslist('notempty')
    }
    setdepowith(2)
  }
  const closemodal = () => {
    setdepowith(0)
    settranslist(0)
  }
  return (
    <div>
      <Menu />
      {step === 0 && (
        <div className="step-zero-wrapper">
          <div>
            <div
              style={{
                backgroundColor: "#163062",
                borderRadius: "8px",
                width: "100%",
                height: "168px",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>Combined Wallet Value</div>
              <div>2,000,000 NGN</div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "30px",
                alignItems: "center",
              }}
            >
              <div>Wallets</div>
              <div>
                <button
                  onClick={showRecurring}
                  style={{
                    border: "1px solid #EBECEE",
                    borderRadius: "8px",
                    backgroundColor: "#ffffff",
                    color: "#0059FF",
                    fontFamily: "SF Pro Text",
                    fontSize: "13px",
                    cursor: "pointer",
                  }}
                >
                  Recuring buys
                </button>
              </div>
            </div>

            <div
              style={{
                width: "100%",
                marginTop: "30px",
                display: "flex",
                flexWrap: "wrap",
                gap: "25px 10px",
              }}
            >
              <WalletCard
                sylp="NGN"
                icon={naira}
                currency={"Naira"}
                balance="115,050"
                percent="+2.76%"
                nairaVal="115,050"
                clicked={showNaira}
              />
              <WalletCard
                sylp="BTC"
                icon={btc}
                currency={"Bitcoin"}
                balance="2.48758"
                percent="+2.76%"
                nairaVal="115,050"
                clicked={showCrypto}
              />
              <WalletCard
                sylp="ETH"
                icon={ethereum}
                currency={"Ethereum"}
                balance="14"
                percent="+2.76%"
                nairaVal="115,050"
                clicked={showCrypto}
              />
              <WalletCard
                sylp="TET"
                icon={tether}
                currency={"Tether"}
                balance="4,581"
                percent="+2.76%"
                nairaVal="115,050"
                clicked={showCrypto}
              />
            </div>
          </div>
          {/* <EachWallet /> */}
        </div>
      )}
      {step === 1 && (
        <div className="step-one-wrapper">
          <div className="recurring">
            <div>
              <h2>Recurring Buy</h2>
            </div>
            <div>
              <button className="recurring-btn">Create a recurring buy</button>
            </div>
          </div>

          <div className="card-wrapper">
            <RecurringCard logo={btc} />
            <RecurringCard logo={ethereum} />
            <RecurringCard logo={tether} />
            <RecurringCard logo={naira} />
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="step-two-wrapper">
          <ToBuy />
        </div>
      )}
      {step === 3 && (
        <div className="step-three-wrapper">
          <AccountSummary title={"Naira Wallet"} amount={"18,000,908"} withdrawClick={withdraw} depositClick={deposit} />
          <RecentTransactions moreInfo={moreInfo}>
            {
              translist === 'notempty' && 
              <div>
                <TransactionList
              icon={deposit}
              tag="Successful"
              date="14, jan, 2020"
              type="Deposit"
              amount="900,908"
              symb="NGN"
            />
            <TransactionList
              icon={deposit}
              tag="Successful"
              date="14, jan, 2020"
              type="Deposit"
              amount="900,908"
              symb="NGN"
            />
            <TransactionList
              icon={deposit}
              tag="Successful"
              date="14, jan, 2020"
              type="Deposit"
              amount="900,908"
              symb="NGN"
            />
              </div>
            }
            
          </RecentTransactions>
          
          {
            depowith == 1 && 
            <Modal closemodal={closemodal} title={'Deposit'}>
        <div
            style={{
              padding: "20px",
            }}
          >
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
              placeholder="Enter amount to deposit"
              value=""
              className="dinput"
            />
            <PayCard
              master={mastercard}
              masterAlt="mastercard logo"
              visa={visa}
              visaAlt="visa logo"
            />
            <PayCard bank={bank} bankAlt="visa logo" />
          </div>
        </Modal>
          }
        

          {
            translist == 'notempty' &&
            <Modal closemodal={closemodal} title={'Withdraw'}>
              <div
            style={{
              // width: "350px",
              // border: "1px solid gray",
              padding: "20px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              What bank account would you like to make your withdrawal to
            </div>
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
              placeholder="Enter amount to withdraw"
              value=""
              className="dinput"
            />
            {error && (
              <div style={{ color: "#ED2459", marginBottom: "10px" }}>
                You dont have that much in your wallet
              </div>
            )}
            <select
              style={{
                outline: "none",
                width: "100%",
                height: "40px",
                padding: "5px 10px",
                backgroundColor: "#F5F6F6",
                border: "1px solid #EBECEE",
                borderRadius: "5px",
                marginBottom: "25px",
              }}
            >
              <option>Select bank account</option>
              <option>Account three</option>
              <option>Account two</option>
              <option>Account three</option>
            </select>
            <div>
              Can't find your bank account?{" "}
              <a href="#" target="_blank">
                Add new account
              </a>
            </div>
            <div>
              <button
                
                style={{
                  backgroundColor: "#F5F6F6",
                  width: "100%",
                  color: "#D8DADD",
                }}
              >
                Withdraw
              </button>
            </div>
          </div>
            </Modal>
          }


          {
            translist === 'empty' &&
            <Modal closemodal={closemodal} title={'Withdraw'}>
              <div
            style={{
              // width: "350px",
              // border: "1px solid gray",
              padding: "20px",
            }}
          >
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
              placeholder="Select bank account"
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
              placeholder="Enter amount to withdraw"
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
              placeholder="Enter account number"
              value=""
              className="dinput"
            />
            <input type="checkbox" checked />
            <label>Add to beneficiary</label>
            <div>
              <button
              onClick={()=> {
                settranslist('empty')
                settranslist('notempty')
              }}
                style={{
                  backgroundColor: "#F5F6F6",
                  width: "100%",
                  color: "#D8DADD",
                }}
              >
                Withdraw
              </button>
            </div>
          </div>
            </Modal>
          }
        </div>
      )}
      {/* {
          step === 4 && 
          <div>

          </div>
        } */}
    </div>
  );
};

export default Wallet;
