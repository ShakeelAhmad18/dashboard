import React, { useState } from "react";
import BackButton from "../components/BackButton";

const CreateVoucher = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      class: "Consultancy service",
      description: "FARS",
      qty: 1,
      unitPrice: 1000000,
      vatPercent: 7.5,
      whtPercent: 2.5,
    },
    {
      id: 2,
      class: "Consultancy service",
      description: "Tax Service",
      qty: 1,
      unitPrice: 500000,
      vatPercent: 7.5,
      whtPercent: 10,
    },
  ]);

  const addRow = () => {
    setRows([
      ...rows,
      {
        id: rows.length + 1,
        class: "Consultancy service",
        description: "",
        qty: 1,
        unitPrice: 0,
        vatPercent: 0,
        whtPercent: 0,
      },
    ]);
  };

  const calculateTotals = () => {
    return rows.reduce(
      (totals, row) => {
        const amount = row.qty * row.unitPrice;
        const vatAmount = amount * (row.vatPercent / 100);
        const grossAmount = amount + vatAmount;
        const whtAmount = amount * (row.whtPercent / 100);
        const netAmount = grossAmount - whtAmount;

        totals.amount += amount;
        totals.vatAmount += vatAmount;
        totals.whtAmount += whtAmount;
        totals.netAmount += netAmount;
        totals.grossAmount += grossAmount;

        return totals;
      },
      { amount: 0, vatAmount: 0, whtAmount: 0, netAmount: 0, grossAmount: 0 }
    );
  };

  const totals = calculateTotals();

  return (
    <div className="min-h-screen p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <BackButton />
        <h1 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
          Payment Voucher
        </h1>

        <div className="mb-4 md:mb-6">
          <label className="block font-normal mb-1">Subject</label>
          <input
            type="text"
            className="w-full md:w-[500px] border rounded p-2 mt-1"
            placeholder="Enter subject"
          />
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[1200px] md:w-full">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="p-2">S/N</th>
                  <th className="p-2">Class</th>
                  <th className="p-2">Description</th>
                  <th className="p-2">QTY</th>
                  <th className="p-2">Unit Price (₦)</th>
                  <th className="p-2">Amount (₦)</th>
                  <th className="p-2">VAT %</th>
                  <th className="p-2">VAT Amount (₦)</th>
                  <th className="p-2">Gross Amount (₦)</th>
                  <th className="p-2">WHT%</th>
                  <th className="p-2">WHT Amount</th>
                  <th className="p-2">Net Amount</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => {
                  const amount = row.qty * row.unitPrice;
                  const vatAmount = amount * (row.vatPercent / 100);
                  const grossAmount = amount + vatAmount;
                  const whtAmount = amount * (row.whtPercent / 100);
                  const netAmount = grossAmount - whtAmount;
                  return (
                    <tr key={index} className="border-b">
                      <td className="p-2">{String(row.id).padStart(2, "0")}</td>
                      <td className="p-2">{row.class}</td>
                      <td className="p-2">{row.description}</td>
                      <td className="p-2">{row.qty}</td>
                      <td className="p-2">{row.unitPrice.toLocaleString()}</td>
                      <td className="p-2">{amount.toLocaleString()}</td>
                      <td className="p-2">{row.vatPercent}%</td>
                      <td className="p-2">{vatAmount.toLocaleString()}</td>
                      <td className="p-2">{grossAmount.toLocaleString()}</td>
                      <td className="p-2">{row.whtPercent}%</td>
                      <td className="p-2">{whtAmount.toLocaleString()}</td>
                      <td className="p-2">{netAmount.toLocaleString()}</td>
                    </tr>
                  );
                })}
                {/* Totals Row */}
                <tr className="border-t-2 border-black mt-3 mb-3 font-semibold">
                  <td className="p-2" colSpan="4">
                    Total
                  </td>
                  <td className="p-2"></td>
                  <td className="p-2">₦{totals.amount.toLocaleString()}</td>
                  <td className="p-2"></td>
                  <td className="p-2">₦{totals.vatAmount.toLocaleString()}</td>
                  <td className="p-2">
                    ₦{totals.grossAmount.toLocaleString()}
                  </td>
                  <td className="p-2"></td>
                  <td className="p-2">₦{totals.whtAmount.toLocaleString()}</td>
                  <td className="p-2">₦{totals.netAmount.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 mb-8">
            <button
              onClick={addRow}
              className="mt-4 px-4  py-2 bg-white border rounded shadow-sm hover:bg-gray-50 flex items-center gap-2"
            >
              <span className="text-2xl">+</span> Add another row
            </button>
          </div>
        </div>

        <div className="mt-8 md:mt-10">
          <p className="text-sm md:text-base">
            Net amount in words:{" "}
            <span className="inline-block border-b border-dashed min-w-[300px] md:min-w-[875px]">
              &nbsp;
            </span>
          </p>
        </div>

        <div className="mt-8 md:mt-10">
          <h2 className="font-semibold mb-4">Beneficiary Payment Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Enter name"
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Enter number"
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Enter bank name"
              className="p-2 border rounded"
            />
          </div>
        </div>

        <button
          type="button"
          className="px-6 py-2 md:px-8 md:py-2 bg-gradient-to-r from-[#384295] to-[#14ADD6] text-white font-medium mt-5 rounded-lg shadow-md hover:shadow-lg transition-all whitespace-nowrap"
        >
          Submit Payment Voucher
        </button>
      </div>
    </div>
  );
};

export default CreateVoucher;
