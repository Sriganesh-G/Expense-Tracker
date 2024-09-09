import React, { useState } from "react";
import TransactionItem from "./TransactionItem";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const RecentTransaction = ({
  balance,
  setBalance,
  expenseData,
  setExpenseData,
  totalExpense,
  setTotalExpense,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  //calculating total number of pages , i.e total no% of items / 3
  const totalPages = Math.ceil(expenseData.length / itemsPerPage);

  // getting the items for the current page, i.e (0,3) in our case
  const currentItems = expenseData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };
  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  return (
    <div
      style={{
        height: "auto",
        maxWidth: "740px",
        backgroundColor: "#FFFFFF",
        borderRadius: "15px",
        marginLeft: "20px",
        margin: "10px 0px 10px 0px ",
        padding: "10px 0px 10px 0px",
        color: "black",
        //  padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {currentItems.length > 0 ? (
        currentItems.map((expense, index) => (
          <TransactionItem
            key={index}
            title={expense.title}
            price={expense.price}
            category={expense.category}
            date={expense.date}
            balance={balance}
            setBalance={setBalance}
            expenseData={expenseData}
            setExpenseData={setExpenseData}
            totalExpense={totalExpense}
            setTotalExpense={setTotalExpense}
          />
        ))
      ) : (
        <h3 style={{ padding: "10px 20px" }}>No recent transactions! </h3>
      )}

      {/* pagination section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
          paddingTop: "18px",
        }}
      >
        <button
          style={{
            height: "37px",
            width: "37px",
            backgroundColor: "#F1F1F1",
            color: "black",
            border: "none",
            borderRadius: "15px",
            cursor: "pointer",
          }}
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          <FaArrowLeftLong />
        </button>
        <h3
          style={{
            height: "37px",
            width: "37px",
            backgroundColor: "#43967B",
            color: "white",
            border: "none",
            borderRadius: "15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {currentPage}
        </h3>
        <button
          style={{
            height: "37px",
            width: "37px",
            backgroundColor: "#F1F1F1",
            color: "black",
            border: "none",
            borderRadius: "15px",
            cursor: "pointer",
          }}
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default RecentTransaction;
