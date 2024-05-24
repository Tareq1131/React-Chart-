import React from "react";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const productSales = [
  {
    name: "Jan",
    product1: 4000,
    product2: 2400,
  },
  {
    name: "Feb",
    product1: 3000,
    product2: 2210,
  },
  {
    name: "Mar",
    product1: 2000,
    product2: 2290,
  },
  {
    name: "Apr",
    product1: 2780,
    product2: 2000,
  },
  {
    name: "May",
    product1: 1890,
    product2: 2181,
  },
  {
    name: "Jun",
    product1: 2390,
    product2: 2500,
  },
  {
    name: "July",
    product1: 2890,
    product2: 2500,
  },
  {
    name: "Aug",
    product1: 2390,
    product2: 2500,
  },
];
export default function AreaChart11() {
  return (
    <div>
      <ResponsiveContainer width="100%" height="100%"></ResponsiveContainer>
      <AreaChart
        width={800}
        height={500}
        data={productSales}
        margin={{ right: 30 }}
      >
        <YAxis />
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="8 8" />

        <Tooltip />
        <Legend />

        {/* <Area dataKey="product1" /> */}
        {/* <Area type="monotone" dataKey="product1" /> */}
        {/* <Area type="monotone" dataKey="product1" fill="#3b82f6" /> */}

        <Area type="monotone" dataKey="product1" fill="#3b82f6" stackId="2" />

        <Area type="monotone" dataKey="product2" fill="#63df2a" stackId="2" />
      </AreaChart>
    </div>
  );
}
