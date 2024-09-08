import { useState } from "react";
import "../App.css";
import { useSnackbar } from "notistack";

const AddBalance = ({
  balance,
  setBalance,
  onClose,
  showModal,
  setShowBalance,
}) => {
  const [addAmountVal, setAddAmountVal] = useState(0);
  const { enqueueSnackbar } = useSnackbar();
  const handleAddIncome = (e) => {
    e.preventDefault();
    setBalance(balance + Number(addAmountVal));
    onClose(); // this will close the module after updating the balance
    enqueueSnackbar("Logged in successfully", { variant: "success" });
  };

  return (
    <div
      style={{
        width: "538px",
        height: "164px",
        borderRadius: "15px",
        color: "black",
        backgroundColor: "#EFEFEF",
        padding: "15px",
        paddingTop: "15px",
      }}
    >
      <h2 style={{ fontSize: "30px" }}>Add Balance</h2>
      <form
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "15px",
          paddingLeft: "15px",
        }}
        onSubmit={handleAddIncome}
      >
        <input
          style={{ width: "217px" }}
          type="number"
          placeholder="Income Amount"
          value={addAmountVal}
          onChange={(e) => {
            e.preventDefault();
            setAddAmountVal(e.target.value);
            console.log(setAddAmountVal);
          }}
        />

        <button
          style={{
            width: "145px",
            height: "51px",
            color: "#FFFFFF",
            backgroundColor: "#F4BB4A",
            borderRadius: "15px",
            border: "0px",
            boxShadow: " rgb(38, 57, 77) 0px 10px 20px -5px",
            cursor: "pointer",
          }}
          type="submit"
        >
          Add Balance
        </button>
        <button
          style={{
            width: "112px",
            height: "51px",
            color: "#black",
            backgroundColor: "#D9D9D9",
            borderRadius: "15px",
            border: "0px",
            boxShadow: " rgb(38, 57, 77) 0px 10px 20px -5px",
            cursor: "pointer",
          }}
          type="button"
          onClick={onClose}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddBalance;
