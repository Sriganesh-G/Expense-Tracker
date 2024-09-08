import Expenses from "./Expenses";
import PieChart from "./PieChart";
import WalletBalance from "./WalletBalance";
import React, { useState } from "react";
import Modal from "react-modal";
import AddBalance from "./AddBalance";

// Set the app element for accessibility
Modal.setAppElement("#root");

const ExpenseTrackerDetails = ({
  balance,
  setBalance,
  expenseData,
  setExpenseData,
  totalExpense,
  setTotalExpense,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "#626262",
        margin: "2px 20px",
        height: "269px",
        maxWidth: "100%",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: "0px 0px",
      }}
    >
      <WalletBalance balance={balance} setBalance={setBalance} />
      <Expenses
        balance={balance}
        setBalance={setBalance}
        expenseData={expenseData}
        setExpenseData={setExpenseData}
        totalExpense={totalExpense}
        setTotalExpense={setTotalExpense}
      />
      <PieChart />
    </div>
  );
};

export default ExpenseTrackerDetails;
