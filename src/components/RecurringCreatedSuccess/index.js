import React from "react";
import sock from "../../assets/icons/sock.png";

const RecurringCreatedSuccess = ({ complete }) => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "27px", color: "#1A2841", fontWeight: "bold" }}>
          Recurring buy created Successfully
        </div>
        <div style={{ color: "#3B4455", fontSize: '16px', padding: '20px 50px', lineHeight: '24px' }}>
          You have Successfully created a recurring buy for 100,000 NGN worth of BTC per month
        </div>
        <img src={sock} alt="sock logo" />
        <button
          onClick={complete}
          style={{ width: "100%", marginTop: "50px", cursor: "pointer" }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default RecurringCreatedSuccess;
