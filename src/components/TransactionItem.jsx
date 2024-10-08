import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { IoPizzaOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { IoGiftSharp } from "react-icons/io5";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import AddExpenses from "./AddExpenses";

// Mapping object for categories to icons
const iconMapping = {
  Entertainment: IoGiftSharp,
  Travel: FaPersonWalkingLuggage,
  Food: IoPizzaOutline,
};

const TransactionItem = ({
  title,
  price,
  category,
  date,
  balance,
  setBalance,
  expense,
  expenseData,
  setExpenseData,
  totalExpense,
  setTotalExpense,
}) => {
  // State hook to manage modal visibility
  const [showModal, setShowModal] = useState(false);

  // Function to open the modal
  const handleOpenModal = () => {
    setShowModal(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Get the appropriate icon component based on the category
  const IconComponent = iconMapping[category] || IoPizzaOutline; // Default to IoPizzaOutline if no match

  const handleRemoveItem = () => {
    // Filter out the item by title (assuming title is unique, as you mentioned)
    const priceNumber = parseFloat(price);

    // Update the state in the parent component
    const updatedExpenses = expenseData.filter(
      (expense) => expense.title !== title
    );

    // Update balance and total expense
    const updatedBalance = balance + priceNumber; // Add back to balance
    const updatedTotalExpense = totalExpense - priceNumber; // Subtract from total expense

    // Set the updated state
    setExpenseData(updatedExpenses);
    setBalance(updatedBalance);
    setTotalExpense(updatedTotalExpense);

    // Update localStorage
    localStorage.setItem("expenseData", JSON.stringify(updatedExpenses));
    localStorage.setItem("balance", updatedBalance);
    localStorage.setItem("totalExpense", updatedTotalExpense);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "5px 25px 20px 25px",
        borderBottom: "1px solid black",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <IconComponent
          style={{
            border: "0px solid black",
            borderRadius: "50px",
            backgroundColor: "#D9D9D9",
            fontSize: "24px",
            color: "#676767",
            height: "38px",
            width: "38px",
            padding: "5px",
            cursor: "pointer",
          }}
        />
        <div style={{ margin: "0px 20px" }}>
          <p style={{ fontSize: "16px" }}>{title}</p>
          <p>{date}</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px 20px",
          gap: "10px",
        }}
      >
        <h6 style={{ fontSize: "16px", fontWeight: "bold" }}>₹{price}</h6>
        <IoIosCloseCircleOutline
          style={{
            border: "1px solid black",
            borderRadius: "15px",
            backgroundColor: "#FF3E3E",
            fontSize: "25px",
            color: "white",
            padding: "5px",
            height: "37px",
            width: "37px",
            cursor: "pointer",
            border: "none",
          }}
          onClick={handleRemoveItem}
        />
        <MdEdit
          style={{
            border: "1px solid black",
            borderRadius: "15px",
            backgroundColor: "#F4BB4A",
            fontSize: "25px",
            color: "white",
            padding: "5px",
            height: "37px",
            width: "37px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={handleOpenModal}
        />
      </div>
      <ReactModal
        style={{
          content: {
            width: "588px",
            height: "400px",
            borderRadius: "15px",
            color: "black",
            backgroundColor: "#EFEFEF",
            padding: "15px",
            paddingTop: "15px",
            position: "sticky",
            top: "18%",
            left: "30%",
          },
        }}
        isOpen={showModal}
        contentLabel="Add Expense Modal"
        /*   onRequestClose={handleCloseModal}  */ // Optional: allows closing the modal by clicking outside
      >
        <AddExpenses
          balance={balance}
          setBalance={setBalance}
          expenseData={expenseData}
          setExpenseData={setExpenseData}
          totalExpense={totalExpense}
          setTotalExpense={setTotalExpense}
          onClose={handleCloseModal} // Pass the close modal function
        />
      </ReactModal>
    </div>
  );
};

export default TransactionItem;
