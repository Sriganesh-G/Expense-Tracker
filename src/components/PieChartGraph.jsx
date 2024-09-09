import React from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

const COLORS = ["#FF9304", "#A000FF", "#FDE006"];

const PieChartGraph = ({ expenseData }) => {
  // aggreegating the expenseData values in order to form pie chart
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

  // Custom label to display percentage inside pie slices
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180);
    const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180);
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        style={{ fontSize: "12px", fontWeight: "bold" }}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  const renderLegend = () => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "10px",
        flexWrap: "wrap",
      }}
    >
      {aggregatedData.map((entry, index) => (
        <div
          key={`legend-${index}`}
          style={{ display: "flex", alignItems: "center", margin: "0 10px" }}
        >
          <div
            style={{
              width: "26px",
              height: "8px",
              backgroundColor: COLORS[index % COLORS.length],
              marginRight: "5px",
            }}
          />
          <span style={{ fontSize: "12px" }}>{entry.name}</span>
        </div>
      ))}
    </div>
  );
  return (
    <div
      style={{
        margin: "5px 0px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <PieChart width={199} height={199}>
        <Pie
          data={aggregatedData}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          labelLine={false} // Removes the line connecting the label to the pie
          label={renderCustomizedLabel} // Custom label rendering function
        >
          {aggregatedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      {renderLegend()}
    </div>
  );
};

export default PieChartGraph;
