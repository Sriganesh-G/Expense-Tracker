import React, { useState } from "react";
import ReactModal from "react-modal";
import AddBalance from "./AddBalance";

const WalletBalance = ({ balance, setBalance }) => {
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
          Wallet Balance: <span style={{ color: "#9DFF5B" }}>₹{balance}</span>
        </h1>
        <button
          style={{
            fontSize: "16px",
            width: "167.65px",
            height: "38px",
            borderRadius: "15px",
            border: "none",
            color: "#FFFFFF",
            backgroundImage: "linear-gradient(#B5DC52, #89E148)",
            cursor: "pointer",
            marginTop: "15px",
          }}
          onClick={handleOpenModal}
        >
          + Add Income
        </button>
      </div>
      <ReactModal
        className="add-balance"
        isOpen={showModal}
        contentLabel="Add Balance Modal"
        /* onRequestClose={handleCloseModal} */
        /* onRequestClose={handleCloseModal} */ // Optional: allows closing the modal by clicking outside
      >
        <AddBalance
          balance={balance}
          setBalance={setBalance}
          onRequestClose={handleCloseModal}
          showModal={showModal}
          setShowModal={setShowModal}
          onClose={handleCloseModal}
        />
      </ReactModal>
    </div>
  );
};

export default WalletBalance;
