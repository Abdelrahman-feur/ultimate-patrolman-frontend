import React from "react";

interface props {
  paymentHistory: {
    id: number;
    date: string;
    delayPerDays: number;
    status: string;
    value: string;
  };
}

const HistoryItem = ({ paymentHistory }: props) => {
  return (
    <tr className="animation cursor-pointer bg-cardbg border h-16 text-neutral-400">
      <td>{paymentHistory.id}</td>
      <td>{paymentHistory.date}</td>
      <td>{paymentHistory.delayPerDays}</td>
      <td
        className={
          paymentHistory.status.toLowerCase() === "failed"
            ? "text-red"
            : "text-correct"
        }
      >
        {paymentHistory.status}
      </td>
      <td>{paymentHistory.value}</td>
    </tr>
  );
};

export default HistoryItem;
