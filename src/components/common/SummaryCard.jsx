import React from "react";

const SummaryCard = ({ value, label }) => {
  return (
    <div className="rounded-xl bg-white p-7 shadow-sm border border-gray-100">
      <h2 className="text-2xl font-semibold text-gray-900">{value}</h2>
      <p className="mt-1 text-sm text-gray-600">{label}</p>
    </div>
  );
};

export default SummaryCard;
