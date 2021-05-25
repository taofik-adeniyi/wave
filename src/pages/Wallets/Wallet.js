import React, { useState } from "react";
import Menu from "../../components/Menu";
import EachWallet from "./EachWallet";
import WalletCard from "../../components/WalletCard";
import naira from "../../assets/icons/naira.png";
import btc from "../../assets/icons/btc.png";

import depositimg from "../../assets/icons/deposit.png";
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
import DateFilter from "../../components/DateFilter";
import CreateRecurringBuy from "../../components/CreateRecurringBuy";
import ConfirmRecurringBuy from "../../components/ConfirmRecurringBuy";
import RecurringCreatedSuccess from "../../components/RecurringCreatedSuccess";
import redwithdrawal from "../../assets/icons/red-withdrawal.png";
import RecurringList from "../../components/RecurringList";


const Wallet = () => {
  const [step, setstep] = useState(0);
  const [theerror, settheerror] = useState(true);
  const [depowith, setdepowith] = useState(0)
  const [translist, settranslist] = useState('none')
  const [first, setfirst] = useState(0)
  const [shrecurr, setshrecurr] = useState(false)
  const [recusuccess, setrecusuccess] = useState(false)
  const [confirmrecuuringbuy, setconfirmrecuuringbuy] = useState(false)
  const [last, setlast] = useState(false)
  const [depositinput, setdepositinput] = useState('')
  const [amountowithdraw, setamountowithdraw] = useState('')
  const [accountnumber, setaccountnumber] = useState('')
  const [bankaccount, setBankAccount] = useState(true)
  const [cashout, setCashout] = useState('')
  

  const handleRecurringBuy = () => {
    setshrecurr(!shrecurr)
  }

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
      <DateFilter />
    );
  };

  const deposit = () => {
    setdepowith(1)
  }

  const withdraw = () => {
    if(bankaccount){
      setdepowith(2)
    }else {
      setdepowith(3)
    }
  }

  const closemodal = () => {
    setdepowith(0)
    settranslist(0)
  }

  const confirm = () => {
    console.log('clicke on buysss');
    setshrecurr(!shrecurr)
    setconfirmrecuuringbuy(!confirmrecuuringbuy)
  }

  const showsuccess = () => {
    setconfirmrecuuringbuy(!setconfirmrecuuringbuy)
  }

  const complete = () => {
    setshrecurr(false)
    setrecusuccess(false)
    setconfirmrecuuringbuy(false)
    setlast(false)
  }

  const showlast = () => {
    setshrecurr(false)
    setrecusuccess(false)
    setconfirmrecuuringbuy(false)
    setlast(true)
  }

  return (
    <div>
      <Menu />
      {step === 0 && (
        <div className="step-zero-wrapper">
          <div>
            <div className="card-one">
              <div style={{fontSize: '14px', color: "#8AC8E6"}}>Combined Wallet Value</div>
              <div style={{color: '#FFFFFF', fontSize: '24px', fontWeight: 'bold', marginTop: '10px'}}>2,000,000 NGN</div>
            </div>

            <div className="card-two">
              <div>Wallets</div>
              <div>
                <button onClick={showRecurring} className="btn-recurring">
                  Recuring buys
                </button>
              </div>
            </div>

            <div className="card-wrapper">
              <WalletCard
                sylp="NGN"
                icon={naira}
                currency={"Naira"}
                balance="115,050 NGN"
                percent="+2.76%"
                nairaVal="115,050"
                clicked={showNaira}
              />
              <WalletCard
                sylp="BTC"
                icon={btc}
                currency={"Bitcoin"}
                balance="2.48758 BTC"
                percent="+2.76%"
                nairaVal="115,050"
                clicked={showCrypto}
              />
              <WalletCard
                sylp="ETH"
                icon={ethereum}
                currency={"Ethereum"}
                balance="14 ETH"
                percent="+2.76%"
                nairaVal="115,050"
                clicked={showCrypto}
              />
              <WalletCard
                sylp="TET"
                icon={tether}
                currency={"Tether"}
                balance="4,581 TET"
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
        <RecurringList handleRecurringBuy={handleRecurringBuy} />
      )}
      {step === 2 && (
        
        <div className="step-two-wrapper">
          <div style={{display: 'flex', justifyContent: 'flex-end', padding: '0 0 20px 0'}}>
            <button
              onClick={handleRecurringBuy}
              style={{
                cursor: 'pointer',
                borderRadius: '8px', padding: '10px 20px', minWidth: '190px', backgroundColor: '#FFFFFF', border: '1px solid #D8DADD', color: '#0059FF', fontSize: '13px'}}>
              Create a recurring buy
            </button>
          </div>
          <ToBuy  />
        </div>
      )}

          {
            shrecurr && <Modal closemodal={closemodal} title={'Create recurring buy'}>
              <CreateRecurringBuy confirm={confirm}  />
            </Modal>
          }

          {
            confirmrecuuringbuy &&
            <Modal closemodal={closemodal} title="Confirm Recurring Buy">
              <ConfirmRecurringBuy showlast={showlast} />
            </Modal>
          }

          {
            last && <Modal closemodal={closemodal}>
              <RecurringCreatedSuccess complete={complete} />
            </Modal>
          }

      {step === 3 && (
        <div className="step-three-wrapper">
          <AccountSummary title={"Naira Wallet"} amount={"18,000,908"} withdrawClick={withdraw} depositClick={deposit} />
          <RecentTransactions moreInfo={moreInfo} others={()=> (
            <div>
            <TransactionList
          icon={depositimg}
          tag="Successful"
          date="14, jan, 2020"
          type="Deposit"
          amount="900,908"
          symb="NGN"
        />
        <TransactionList
          icon={depositimg}
          tag="Successful"
          date="14, jan, 2020"
          type="Deposit"
          amount="900,908"
          symb="NGN"
        />
        <TransactionList
          icon={redwithdrawal}
          tag="Successful"
          date="14, jan, 2020"
          type="Withdrawal"
          amount="900,908"
          symb="NGN"
        />
        <TransactionList
          icon={depositimg}
          tag="failed"
          date="14, jan, 2020"
          type="Deposit"
          amount="900,908"
          symb="NGN"
        />
          </div>
          )} />
          
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
              type="number"
              placeholder="Enter amount to deposit"
              value={depositinput}
              className="dinput"
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
        </Modal>
          }
        

          {
            depowith == 2 &&
            <Modal closemodal={closemodal} title={'Withdraw'}>
              <div
            style={{
              padding: "20px 20px 0 20px",
            }}
          >
            <div style={{ 
              textAlign: "center", 
              fontSize: '14px', 
              color: '#626977',
              width: '80%', 
              padding: '0 30px 20px 30px' }}>
              What bank account would you like to make your withdrawal to
            </div>
            <input
              type="number"
              placeholder="Enter amount to withdraw"
              value={cashout}
              className={`theeinput ${theerror ? 'classy-error' : null}`}
              onChange={(e) => setCashout(e.target.value)}
            />
            {theerror && (
              <div style={{ fontSize: '14px', color: "#ED2459", marginBottom: "20px" }}>
                You dont have that much in your wallet
              </div>
            )}
            <select
              style={{
                outline: "none",
                width: "100%",
                height: "50px",
                padding: "5px 10px",
                backgroundColor: "#F5F6F6",
                border: "1px solid #EBECEE",
                borderRadius: "5px",
                marginBottom: "15px",
              }}
            >
              <option>Select bank account</option>
              <option>Account three</option>
              <option>Account two</option>
              <option>Account three</option>
            </select>
            <div style={{fontSize: '14px', color: '#3B4455', marginBottom: '30px'}}>
              Can't find your bank account?{" "}
              <a href="#kio" target="_blank">
                Add new account
              </a>
            </div>
            <div>
              <button className={`my-with-btn ${cashout.length > 0 ? 'btn-pointer' : null}`}>
                Withdraw
              </button>
            </div>
          </div>
            </Modal>
          }


          {
            // translist === 'empty' &&
            depowith === 3 &&
            <Modal closemodal={closemodal} title={'Withdraw'}>
              <div
            style={{
            
              padding: "20px",
            }}
          >
            
            <select style={{
                outline: "none",
                width: "100%",
                height: "50px",
                backgroundColor: "#F5F6F6",
                border: "1px solid #EBECEE",
                borderRadius: "5px",
                marginBottom: "25px",
                paddingRight: '20px',
              }} className="dinput" >
              <option value="Select bank account">Select bank account</option>
              <option>GT Bank</option>
              <option>Acsess</option>
              <option>Zenith</option>
              <option>FCMB</option>
            </select>
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
              placeholder="Enter amount to withdraw"
              value={amountowithdraw}
              onChange={(e)=> setamountowithdraw(e.target.value)}
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
              placeholder="Enter account number"
              value={accountnumber}
              onChange={(e) => setaccountnumber(e.target.value)}
              className="dinput"
              maxLength="10"
            />
                  
            <input type="checkbox" style={{marginBottom: "40px"}}/>
            <label>Add to beneficiary</label>
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
            </Modal>
          }
        </div>
      )}
    </div>
  );
};

export default Wallet;
