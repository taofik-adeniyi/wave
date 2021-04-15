import React, { useState } from "react";
import Menu from "../../components/Menu";
import "./style.css";
import deposit from "../../assets/icons/deposit.png";
import btc from "../../assets/icons/btc.png";
import ethereum from "../../assets/icons/ethereum.png";
import tether from "../../assets/icons/tether.png";
import cancel from "../../assets/icons/cancel.png";
import TransactionList from "../../components/TransactionList";
import Modal from "../../components/Modal";

const Transaction = () => {
  const [step, setstep] = useState(0);
  return (
    <div>
      <Menu />
      <div style={{ width: "80%", margin: "40px auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "5px 20px",
          }}
        >
          <h1>Transactions</h1>
          <div
            style={{
              borderRadius: "8px",
              backgroundColor: "gray",
              padding: "10px",
            }}
          >
            23 -30 January, 2021
          </div>
        </div>

        <div
          style={{
            borderBottom: "1px solid gray",
            display: "flex",
            flexDirection: "row",
            marginBottom: "10px",
          }}
        >
          <div className="menu">All</div>
          <div className="menu">Naira</div>
          <div className="menu">Bitcoin</div>
          <div className="menu">Ethereum</div>
          <div className="menu">Tether</div>
        </div>

        <TransactionList
          icon={deposit}
          tag="Successful"
          date="14, jan, 2020"
          type="Deposit"
          amount="900,908"
          symb="NGN"
        />
        <TransactionList
          icon={btc}
          tag="Successful"
          date="14, jan, 2020"
          type="Deposit"
          amount="900,908"
          symb="NGN"
        />
        <TransactionList
          icon={tether}
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
          icon={ethereum}
          tag="Successful"
          date="14, jan, 2020"
          type="Deposit"
          amount="900,908"
          symb="NGN"
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "400px",
          }}
        >
          <div
            style={{
              fontFamily: "Proxima Nova",
              fontSize: "16px",
              color: "#898F99",
            }}
          >
            You haven't done any transaction on Tether yet
          </div>
          <button style={{ marginTop: "20px" }}>Wallet</button>
        </div>
      </div>
      {/* 1 significe fiat deposit */}
      {step === 1 && (
        <Modal
          cancel={cancel}
          title="Transaction Details"
          logo={deposit}
          typeOftrans="Naira Deposit"
          date="14 Jan, 2021, 8:16PM"
          result="Succesful"
          amount="900,908"
          symb="NGN"
        />
      )}
      {/* 2 significe crypto transaction */}
      {step === 2 && (
        <Modal
          cancel={cancel}
          title="Transaction Details"
          logo={btc}
          typeOftrans="Bought BTC"
          date="14 Jan, 2021, 8:16PM"
          result="Succesful"
          amount="0.047"
          symb="BTC"
          crypto
          fiatamount="900,908"
        />
      )}
      {/* 3 significe fiat withdrawal */}
      {step === 3 && (
        <Modal
          cancel={cancel}
          title="Transaction Details"
          logo={deposit}
          typeOftrans="Naira Withdrawal"
          date="14 Jan, 2021, 8:16PM"
          result="Succesful"
          amount="900,908"
          symb="NGN"
          withdrawal
        />
      )}
    </div>
  );
};

export default Transaction;
