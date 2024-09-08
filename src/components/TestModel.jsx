import React, { useState } from "react";
import ReactModal from "react-modal";
import AddBalance from "./AddBalance";

const TestModel = () => {
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
          Wallet Balance: <span style={{ color: "#9DFF5B" }}>₹5000</span>
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
          {" "}
          + Add Income
        </button>
      </div>

      <ReactModal
        style={{
          width: "538px",
          height: "164px",
          borderRadius: "15px",
          color: "black",
          backgroundColor: "#EFEFEF",
          padding: "15px",
          paddingTop: "15px",
        }}
        isOpen={showModal}
        contentLabel="Minimal Modal Example"
        onRequestClose={handleCloseModal} // Optional: allows closing the modal by clicking outside
      >
        <AddBalance />
      </ReactModal>
    </div>
  );
};

export default TestModel;
