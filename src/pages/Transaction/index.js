import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Menu from "../../components/Menu";
import "./style.css";
import deposit from "../../assets/icons/deposit.png";
import btc from "../../assets/icons/btc.png";
import ethereum from "../../assets/icons/ethereum.png";
import tether from "../../assets/icons/tether.png";
import cancel from "../../assets/icons/cancel.png";
import TransactionList from "../../components/TransactionList";
import Modal from "../../components/Modal";
import BootModal from "../../components/BootModal";
import NairaTransactionDetails from "../../components/NairaTransactionDetails";
import BtcTransactionDetails from "../../components/BtcTransactionDetails";
import WithdrawalTransactionDetails from "../../components/WithdrawalTransactionDetails";
import DateFilter from "../../components/DateFilter";

import alldata from './data.js'
import nairadata from './ddata.js'
import bitcoindata from './bdata.js'
import NoTransaction from "../../components/NoTransaction";


const Transaction = () => {
  const [step, setstep] = useState(0);
  const [modal, setmodal] = useState(false)
  const [color, setColor] = useState(true)
  const closemodal = () => {
    setstep(0)
  }
  
  const showdeposit = () => {
    setstep(1)
  }
  const showcrypto = () => {
    setstep(2)
  }
  const showwithdrawal = () => {
    setstep(3)
  }
  return (
    <div>
      <Menu />
      <div className="transaction-cover">
        <div className="row-card-one">
          <div className="your-transactions">Your Transactions</div>
          <DateFilter />
        </div>

        <Tabs className="tabs-holder">
          
        <TabList className="tabs-listing">
          <Tab className="menu" style={{color: '#0059FF'}}>All</Tab>
          <Tab className="menu">Naira</Tab>
          <Tab className="menu">Bitcoin</Tab>
          <Tab className="menu">Ethereum</Tab>
          <Tab className="menu">Tether</Tab>
        </TabList>
        
        <TabPanel>
          {
            alldata.map(data => (
            <div onClick={showdeposit} key={data.id}>
              <TransactionList  {...data} icon={deposit} />
            </div>
            ))
          }
        </TabPanel>

        <TabPanel>
        {
          nairadata.map(naira => (
          <div onClick={showdeposit} key={naira.id}>
            <TransactionList  {...naira} icon={deposit} />
          </div>
          ))
        }
        </TabPanel>
       
        <TabPanel>
          {
            bitcoindata.map(bitcoin => (
              <div onClick={showcrypto} key={bitcoin.id}>
                <TransactionList  {...bitcoin} icon={deposit} />
              </div>
              ))
          }
        </TabPanel>

        <TabPanel>
          <div onClick={showcrypto}>
            <TransactionList
              icon={deposit}
              tag="Successful"
              date="14, jan, 2020"
              type="Ethereum"
              amount="900,908"
              symb="NGN"
              curr="1.43 ETH"
            />
          </div>
        </TabPanel>
        <TabPanel>
          <NoTransaction />
        </TabPanel>
        </Tabs>
      </div>

      
      {/* 1 significe fiat deposit */}
      {step === 1 && (
        <BootModal
        show={true}
          cancel={cancel}
          title="Transaction Details"
          closemodal={closemodal}
        >
          <NairaTransactionDetails 
            logo={deposit}
            typeOftrans="Naira Deposit"
            date="14 Jan, 2021, 8:16PM"
            result="Succesful"
            amount="900,908"
            symb="NGN" />
        </BootModal>
      )}
      {/* 2 significe crypto transaction */}
      {step === 2 && (
        <BootModal
        show={true}
          cancel={cancel}
          title="Transaction Details"
          closemodal={closemodal}
        >
          <BtcTransactionDetails 
            logo={btc}
            typeOftrans="Bought BTC"
            date="14 Jan, 2021, 8:16PM"
            result="Succesful"
            amount="0.047"
            symb="BTC"
            crypto
            fiatamount="900,908"
          />
        </BootModal>
      )}
      {/* 3 significe fiat withdrawal */}
      {step === 3 && (
        <BootModal
        show={true}
          cancel={cancel}
          title="Transaction Details"
          closemodal={closemodal}
        >
          <WithdrawalTransactionDetails logo={deposit}
          typeOftrans="Naira Withdrawal"
          date="14 Jan, 2021, 8:16PM"
          result="Succesful"
          amount="900,908"
          symb="NGN"
          withdrawal />
        </BootModal>
      )}
    </div>
  );
};

export default Transaction;
