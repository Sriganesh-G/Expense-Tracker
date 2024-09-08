import React, { useEffect, useState } from "react";
import { IoPizzaOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { IoGiftSharp } from "react-icons/io5";
import { FaPersonWalkingLuggage } from "react-icons/fa6";

// Mapping object for categories to icons
const iconMapping = {
  Entertainment: IoGiftSharp,
  Travel: FaPersonWalkingLuggage,
  Food: IoPizzaOutline,
};

const TransactionItem = ({ title, price, category, date }) => {
  // Get the appropriate icon component based on the category
  const IconComponent = iconMapping[category] || IoPizzaOutline; // Default to IoPizzaOutline if no match

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 25px 10px 25px",
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
            fontSize: "25px",
            color: "white",
            padding: "5px",
            height: "37px",
            width: "37px",
            border: "none",
            cursor: "pointer",
          }}
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
        />
      </div>
    </div>
  );
};

export default TransactionItem;
