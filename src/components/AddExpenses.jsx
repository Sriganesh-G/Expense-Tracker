import { useState } from "react";
import "../App.css";
const AddExpenses = ({ balance, setBalance }) => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    date: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
  };
  const handleClick = () => {};
  return (
    <div
      style={{
        width: "538px",
        maxHeight: "300px",
        borderRadius: "15px",
        color: "black",
        backgroundColor: "#EFEFEF",
        padding: "15px",
        paddingTop: "30px",
      }}
    >
      <h2 style={{ fontSize: "30px" }}>Add Expenses</h2>
      <form
        style={{
          display: "grid",
          gridTemplateColumns: "253px 253px",
          gridTemplateRows: "73px 73px",
          marginTop: "15px",
          padding: "5px",
          paddingLeft: "5px",
        }}
      >
        <input type="text" placeholder="Title" />

        <input type="text" placeholder="Price" />
        <select name="Select" id="select">
          <option value="Entertainment">Entertainment</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
        </select>
        <input
          type="date"
          name="date"
          onChange={(e) => {
            e.preventDefault();
            setDateData(e.target.value);
            console.log(dateData);
          }}
        />
        <button
          style={{
            width: "223px",
            height: "51px",
            color: "#FFFFFF",
            backgroundColor: "#F4BB4A",
            borderRadius: "15px",
            border: "0px",
            boxShadow: " rgb(38, 57, 77) 0px 10px 20px -5px",
            cursor: "pointer",
          }}
          onClick={handleClick}
        >
          Add Expense
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
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddExpenses;
