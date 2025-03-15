import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ data, type, dataKey }) {
  if (!data || data.length === 0) {
    return (
      <p className="text-red-500 text-center">
        No data available for this graph.
      </p>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      {type === "line" ? (
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mass" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
        </LineChart>
      ) : type === "bar" ? (
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Bar dataKey={dataKey} fill="#82ca9d" />
        </BarChart>
      ) : (
        <ScatterChart>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mass" />
          <YAxis dataKey={dataKey} />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter name="Exoplanets" data={data} fill="#ff7300" />
        </ScatterChart>
      )}
    </ResponsiveContainer>
  );
}
