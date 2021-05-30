import React, { useState } from "react";
import AccountSummaryTwo from "../AccountSummaryTwo";
import RecentTransactions from "../RecentTransactions";
import TransactionList from "../TransactionList";
import Modal from "../Modal";
import BootModal from "../BootModal";
import PayCard from "../PayCard";
import PayMentOption from "../PayMentOption";


import depositimg from "../../assets/icons/deposit.png";

import bank from "../../assets/icons/bank.png";
import mastercard from "../../assets/icons/mastercard.png";
import visa from "../../assets/icons/visa.png";
import redwithdrawal from "../../assets/icons/red-withdrawal.png";
import ToWithdrawFiat from "../ToWithdrawFiat";

const NairaWallet = (props) => {
  const {
    withdraw,
    deposit,
    moreInfo,
    depowith,
    shrecurr,
    closemodal,
    settranslist,
  } = props;
  const [depositinput, setdepositinput] = useState("");
  const [amountowithdraw, setamountowithdraw] = useState("");
  const [accountnumber, setaccountnumber] = useState("");
  const [cashout, setCashout] = useState("");
  const [theerror, settheerror] = useState(true);

  return (
    <>
      <div className="step-three-wrapper">
        <AccountSummaryTwo
          title={"Naira Wallet"}
          amount={"18,000,908"}
          withdrawClick={withdraw}
          depositClick={deposit}
        />
        <RecentTransactions
          moreInfo={moreInfo}
          others={() => (
            <>
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
              {/* <TransactionList
                icon={depositimg}
                tag="failed"
                date="14, jan, 2020"
                type="Deposit"
                amount="900,908"
                symb="NGN"
              /> */}
            </>
          )}
        />

        {depowith == 1 && (
          <BootModal 
            show={true}
            closemodal={false} 
            title={"Deposit"}
          >
            <PayMentOption
              setdepositinput={setdepositinput}
              mastercard={mastercard} 
              visa={visa}
              bank={bank} 
              depositinput={depositinput}
            />
          </BootModal>
        )}

        {depowith == 2 && (
          <BootModal 
            show={true} 
            closemodal={closemodal} 
            title={"Withdraw"}>
              <ToWithdrawFiat 
                cashout={cashout}
                setCashout={setCashout}
                theerror={theerror}
                settheerror={settheerror}
              />
          </BootModal>
        )}

        {
          // translist === 'empty' &&
          depowith === 3 && (
            <BootModal show={shrecurr} closemodal={closemodal} title={"Withdraw"}>
              <div
                style={{
                  padding: "20px",
                }}
              >
                <select
                  style={{
                    outline: "none",
                    width: "100%",
                    height: "50px",
                    backgroundColor: "#F5F6F6",
                    border: "1px solid #EBECEE",
                    borderRadius: "5px",
                    marginBottom: "25px",
                    paddingRight: "20px",
                  }}
                  className="dinput"
                >
                  <option value="Select bank account">
                    Select bank account
                  </option>
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
                  onChange={(e) => setamountowithdraw(e.target.value)}
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

                <input type="checkbox" style={{ marginBottom: "40px" }} />
                <label>Add to beneficiary</label>
                <button
                  onClick={() => {
                    settranslist("empty");
                    settranslist("notempty");
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
            </BootModal>
          )
        }
      </div>
    </>
  );
};

export default NairaWallet;
