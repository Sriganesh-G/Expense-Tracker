import { useState } from "react";
import "./App.css";
import AddBalance from "./components/AddBalance";
import AddExpenses from "./components/AddExpenses";
import TestModel from "./components/TestModel";
import ExpenseTrackerDetails from "./components/ExpenseTrackerDetails";
import ReactModal from "react-modal";
import RecentTransaction from "./components/RecentTransaction";

function App() {
  const [balance, setBalance] = useState(5000);
  const [totalExpense, setTotalExpense] = useState(0);
  const [expenseData, setExpenseData] = useState([]);

  return (
    <div
      style={{ backgroundColor: "#3b3b3b", color: "#ffffff", height: "100vh" }}
    >
      <h2>Expense Tracker</h2>
      <ExpenseTrackerDetails
        balance={balance}
        setBalance={setBalance}
        expenseData={expenseData}
        setExpenseData={setExpenseData}
        totalExpense={totalExpense}
        setTotalExpense={setTotalExpense}
      />
      <div>
        <h2 style={{ fontStyle: "italic" }}>Recent Transaction</h2>
        <RecentTransaction expenseData={expenseData} />
      </div>
    </div>
  );
}

export default App;
