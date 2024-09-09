import { useEffect, useState } from "react";
import "./App.css";
import AddBalance from "./components/AddBalance";
import AddExpenses from "./components/AddExpenses";
import TestModel from "./components/TestModel";
import ExpenseTrackerDetails from "./components/ExpenseTrackerDetails";
import ReactModal from "react-modal";
import RecentTransaction from "./components/RecentTransaction";
import { BarChart } from "recharts";
import BarChartGraph from "./components/BarChartGraph";

function App() {
  // Initialize state from localStorage if available, otherwise use default values
  const [balance, setBalance] = useState(() => {
    const savedBalance = localStorage.getItem("balance");
    return savedBalance ? parseFloat(savedBalance) : 5000; // Default balance
  });
  // setting the totalExpense in localStorage
  const [totalExpense, setTotalExpense] = useState(() => {
    const savedTotalExpense = localStorage.getItem("totalExpense");
    return savedTotalExpense ? parseFloat(savedTotalExpense) : 0; // Default total expense
  });
  //here we are getting data from localstorage if available

  const [expenseData, setExpenseData] = useState(() => {
    const savedExpenses = localStorage.getItem("expenseData");
    // Check if savedExpenses is valid before parsing
    try {
      return savedExpenses ? JSON.parse(savedExpenses) : [];
    } catch (error) {
      console.error("Failed to parse expense data from localStorage:", error);
      return [];
    }
  });

  // Store balance in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("balance", balance);
  }, [balance]);

  // Store totalExpense in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("totalExpense", totalExpense);
  }, [totalExpense]);
  // here we are storing the data in localStorage whenever expenseData change
  useEffect(() => {
    localStorage.setItem("expenseData", JSON.stringify(expenseData));
  }),
    [expenseData];

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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "20px", // Adds space between the two divs
          marginTop: "20px", // Adds some space between the header and the divs
        }}
      >
        <div
          className="recentTransaction"
          style={{
            height: "346px",
            maxWidth: "740px",
            backgroundColor: "#FFFFFF",
            borderRadius: "15px",
            marginLeft: "20px",
            color: "black",
            flex: 1, // Allows this div to take up available space
            padding: "20px", // Padding inside the div
            boxSizing: "border-box", // Ensures padding is included in width calculation
          }}
        >
          <h2 style={{ fontStyle: "italic" }}>Recent Transaction</h2>
          <RecentTransaction
            balance={balance}
            setBalance={setBalance}
            expenseData={expenseData}
            setExpenseData={setExpenseData}
            totalExpense={totalExpense}
            setTotalExpense={setTotalExpense}
            style={{
              flex: 1, // Allows this div to take up available space
              // height: "346px",
              backgroundColor: "#FFFFFF",
              borderRadius: "15px",
              padding: "20px", // Padding inside the div
              color: "black",
              boxSizing: "border-box", // Ensures padding is included in width calculation
            }}
          />
        </div>
        <div
          className="topExpenses"
          style={{
            flex: 1, // Allows this div to take up available space
            height: "346px",
            backgroundColor: "#FFFFFF",
            borderRadius: "15px",
            padding: "20px", // Padding inside the div
            color: "black",
            boxSizing: "border-box", // Ensures padding is included in width calculation
          }}
        >
          <h2 style={{ fontStyle: "italic" }}>Top Expenses</h2>
          <BarChartGraph expenseData={expenseData} />
        </div>
      </div>
    </div>
  );
}

export default App;
