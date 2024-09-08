import React from "react";
import TransactionItem from "./TransactionItem";

const RecentTransaction = ({ expenseData }) => {
  return (
    <div
      style={{
        height: "346px",
        maxWidth: "740px",
        backgroundColor: "#FFFFFF",
        borderRadius: "15px",
        marginLeft: "20px",
        color: "black",
      }}
    >
      <TransactionItem /* key={index} */ expenseData />
    </div>
  );
};

export default RecentTransaction;
