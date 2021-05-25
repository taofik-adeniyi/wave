import React from "react";
import AccountSummaryTwo from "../../components/AccountSummaryTwo";
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import Menu from "../../components/Menu";
import WalletList from "../../components/WalletList";
import WelcomeText from "../../components/WelcomeText/WelcomeText";
import RecentTransactions from "../../components/RecentTransactions";
import RecentCrypto from "../../components/RecentCrypto";
import BuySell from "../../components/BuySell";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <Menu />
      <MainWrapper>
        <WelcomeText username="John" />
        {/* <div className="grid-container"></div> */}
        {/* <div className="grid-one">
          <div className="grid-one-sub-one">
            <AccountSummaryTwo title={'Your Naira Balance'} amount={'2,000,000'} />
          </div>
          <div className="grid-one-sub-two">
            <BuySell />
          </div>

          <div className="grid-one-sub-three">
            <WalletList />
          </div>
          <div className="grid-one-sub-four">
          </div>
        </div> */}
        <div className="container">
          <div className="one">
            <AccountSummaryTwo title={'Your Naira Balance'} amount={'2,000,000'} />
          </div>
          <div className="two">
            <BuySell />
          </div>
          <div className="three">
            <WalletList />
          </div>
          {/* <div className="four">four</div> */}
        </div>

        <div className="grid-two">
          <div className="grid-two-sub-one">
            <RecentTransactions>
              <div>You have no activity yet</div>
            </RecentTransactions>
          </div>
          <div className="grid-two-sub-two">
            <RecentCrypto />
          </div>
        </div>
      </MainWrapper>
    </div>
  );
};

export default Dashboard;
