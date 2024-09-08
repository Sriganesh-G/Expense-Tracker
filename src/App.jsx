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
  const [expenseData, setExpenseData] = useState([
    {
      title: "Samosa",
      price: 20,
      category: ["Entertainment", "Food", "Travel"],
      date: null,
    },
  ]);

  return (
    <div
      style={{ backgroundColor: "#3b3b3b", color: "#ffffff", height: "100vh" }}
    >
      <h2>Expense Tracker</h2>
      <ExpenseTrackerDetails balance={balance} setBalance={setBalance} />
      <div>
        <h2 style={{ fontStyle: "italic" }}>Recent Transaction</h2>
        <RecentTransaction />
      </div>
    </div>
  );
}

export default App;
