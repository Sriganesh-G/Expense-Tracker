import { useState } from "react";
import "../App.css";
const AddExpenses = ({
  balance,
  setBalance,
  expenseData,
  setExpenseData,
  totalExpense,
  setTotalExpense,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "Entertainment",
    date: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    //console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const expenseAmount = Number(formData.price);
    // checking if user spending is less than his balance or not , if spending > balance shows alert
    if (expenseAmount > balance) {
      alert("Insufficient Balance! ");
      return;
    }

    // adding new expense to the expenseData
    setExpenseData([...expenseData, formData]);

    // updating the wallet balance
    setBalance(balance - expenseAmount);

    // updating the expenses
    setTotalExpense(totalExpense + expenseAmount);
    console.log("This is App data inside AddExpense component", expenseData);
    //Close modal after submission
    onClose();
  };

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
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gridTemplateColumns: "253px 253px",
          gridTemplateRows: "73px 73px",
          marginTop: "15px",
          padding: "5px",
          paddingLeft: "5px",
        }}
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={formData.title}
          required
        />

        <input
          type="number"
          placeholder="Price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="Entertainment">Entertainment</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
        </select>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
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
        >
          Add Expense
        </button>
        <button
          type="button"
          onClick={onClose}
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
