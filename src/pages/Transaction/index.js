import React from "react";
import Menu from "../../components/Menu";
import "./style.css"
import deposit from "../../assets/icons/deposit.png"
import btc from "../../assets/icons/btc.png"
import ethereum from "../../assets/icons/ethereum.png"
import tether from "../../assets/icons/tether.png"
import TransactionList from "../../components/TransactionList"

const index = () => {
  return (
    <div>
      <Menu />
      <div
        style={{ width: "80%", margin: "40px auto" }}
      >
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

        <div style={{borderBottom: '1px solid gray', display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
                <div className="menu">All</div>
                <div className="menu">Naira</div>
                <div className="menu">Bitcoin</div>
                <div className="menu">Ethereum</div>
                <div className="menu">Tether</div>
        </div>

        <TransactionList icon={deposit} tag="Successful" date="14, jan, 2020" type="Deposit" amount="900,908" symb="NGN" />
        <TransactionList icon={btc} tag="Successful" date="14, jan, 2020" type="Deposit" amount="900,908" symb="NGN" />
        <TransactionList icon={tether} tag="Successful" date="14, jan, 2020" type="Deposit" amount="900,908" symb="NGN" />
        <TransactionList icon={deposit} tag="Successful" date="14, jan, 2020" type="Deposit" amount="900,908" symb="NGN" />
        <TransactionList icon={ethereum} tag="Successful" date="14, jan, 2020" type="Deposit" amount="900,908" symb="NGN" />

      </div>
    </div>
  );
};

export default index;
