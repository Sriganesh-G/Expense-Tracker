import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const BarChartGraph = ({ expenseData }) => {
  // Aggregate expenses by category
  const aggregatedData = expenseData.reduce((acc, expense) => {
    const { category, price } = expense; // Destructures the category and price from the current expense object.
    const existingCategory = acc.find((item) => item.name === category); // Checks if the category already exists in the accumulator.

    if (existingCategory) {
      // If the category exists, add the current expense's price to the existing value.
      existingCategory.value += parseFloat(price);
    } else {
      // If the category does not exist, create a new entry in the accumulator with the category name and price.
      acc.push({ name: category, value: parseFloat(price) });
    }

    return acc; // Returns the updated accumulator for the next iteration.
  }, []); // Initial accumulator is an empty array.

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={aggregatedData}
          layout="vertical" // Set layout to "vertical" for horizontal bars
          margin={{ top: 30, right: 30, left: 60, bottom: 30 }}
        >
          <XAxis type="number" /> <YAxis dataKey="name" type="category" />{" "}
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartGraph;
