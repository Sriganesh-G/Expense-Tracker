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
      {expenseData.length > 0 ? (
        expenseData.map((expense, index) => (
          <TransactionItem
            key={index}
            title={expense.title}
            price={expense.price}
            category={expense.category}
            date={expense.date}
          />
        ))
      ) : (
        <h3 style={{ padding: "10px 20px" }}>No recent transactions! </h3>
      )}
    </div>
  );
};

export default RecentTransaction;
