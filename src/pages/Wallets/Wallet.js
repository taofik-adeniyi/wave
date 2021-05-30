import React, { useState } from "react";
import Menu from "../../components/Menu";
import EachWallet from "./EachWallet";

import "./style.css";

import TransactionList from "../../components/TransactionList";
import AccountSummary from "../../components/AccountSummary/AccountSummary";
import Modal from "../../components/Modal";
import BootModal from "../../components/BootModal";
import ToBuy from "../../components/ToBuy";
import DateFilter from "../../components/DateFilter";
import CreateRecurringBuy from "../../components/CreateRecurringBuy";
import ConfirmRecurringBuy from "../../components/ConfirmRecurringBuy";
import RecurringCreatedSuccess from "../../components/RecurringCreatedSuccess";
import RecurringList from "../../components/RecurringList";
import AccountSummaryTwo from "../../components/AccountSummaryTwo";
import ListOfWallet from "../../components/ListOfWallet";
import NairaWallet from "../../components/NairaWallet";

const Wallet = () => {
  const [step, setstep] = useState(0);
  const [depowith, setdepowith] = useState(0);
  const [translist, settranslist] = useState("none");
  const [first, setfirst] = useState(0);
  const [shrecurr, setshrecurr] = useState(false);
  const [recusuccess, setrecusuccess] = useState(false);
  const [confirmrecuuringbuy, setconfirmrecuuringbuy] = useState(false);
  const [last, setlast] = useState(false);
  const [bankaccount, setBankAccount] = useState(true);

  const handleRecurringBuy = () => {
    setshrecurr(!shrecurr);
  };

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
    return <DateFilter />;
  };

  const deposit = () => {
    setdepowith(1);
  };

  const withdraw = () => {
    if (bankaccount) {
      setdepowith(2);
    } else {
      setdepowith(3);
    }
  };

  const closemodal = () => {
    setdepowith(0);
    settranslist(0);
  };

  const confirm = () => {
    console.log("clicke on buysss");
    setshrecurr(!shrecurr);
    setconfirmrecuuringbuy(!confirmrecuuringbuy);
  };

  const showsuccess = () => {
    setconfirmrecuuringbuy(!setconfirmrecuuringbuy);
  };

  const complete = () => {
    setshrecurr(false);
    setrecusuccess(false);
    setconfirmrecuuringbuy(false);
    setlast(false);
  };

  const showlast = () => {
    setshrecurr(false);
    setrecusuccess(false);
    setconfirmrecuuringbuy(false);
    setlast(true);
  };

  return (
    <div>
      <Menu />
      {step === 0 && (
        <ListOfWallet
          showRecurring={showRecurring}
          showCrypto={showCrypto}
          showNaira={showNaira}
        />
      )}

      {step === 1 && <RecurringList handleRecurringBuy={handleRecurringBuy} />}

      {/* Displays the recurring buys you have created when you click on Recurring buy */}

      {step === 2 && (
        <div className="step-two-wrapper">
          <div className="step-two-box-one">
            <button onClick={handleRecurringBuy} className="creator">
              Create a recurring buy
            </button>
          </div>
          <ToBuy />
        </div>
      )}

      {/* Modals pertaining to recurring buys */}
      {shrecurr && (
        <BootModal
          show={shrecurr}
          closemodal={handleRecurringBuy}
          title={"Create recurring buy"}
        >
          <CreateRecurringBuy confirm={confirm} />
        </BootModal>
      )}

      {confirmrecuuringbuy && (
        <BootModal
          show={shrecurr}
          closemodal={closemodal}
          title="Confirm Recurring Buy"
        >
          <ConfirmRecurringBuy showlast={showlast} />
        </BootModal>
      )}

      {last && (
        <BootModal show={shrecurr} closemodal={closemodal}>
          <RecurringCreatedSuccess complete={complete} />
        </BootModal>
      )}


      {/* Displays the naira wallet when you click on the fiat card */}
      {step === 3 && (
        <NairaWallet
          withdraw={withdraw}
          deposit={deposit}
          moreInfo={moreInfo}
          depowith={depowith}
          shrecurr={shrecurr}
          closemodal={closemodal}
          settranslist={settranslist}
        />
      )}
    </div>
  );
};

export default Wallet;
