import { useState } from "react";
import ReactModal from "react-modal";
import AddExpenses from "./AddExpenses";

const Expenses = ({ balance, setBalance }) => {
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

  return (
    <div
      style={{
        width: "355.41px",
        height: "181px",
        backgroundColor: "#9B9B9B",
        margin: "10px",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "30px" }}>
          Expenses: <span style={{ color: "#F4BB4A" }}>₹500</span>
        </h1>
        <button
          style={{
            fontSize: "16px",
            width: "167.65px",
            height: "38px",
            borderRadius: "15px",
            border: "none",
            color: "#FFFFFF",
            backgroundImage: "linear-gradient(#FF9595, #FF4747, #FF3838)",
            cursor: "pointer",
            marginTop: "15px",
          }}
          onClick={handleOpenModal}
        >
          + Add Expense
        </button>
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
        <AddExpenses balance={balance} setBalance={setBalance} />
      </ReactModal>
    </div>
  );
};

export default Expenses;
