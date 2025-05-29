import React, { useState } from "react";
import BackButton from "../components/BackButton";

const CreateTaxRecord = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      taxType: "Income Tax",
      description: "Q1 Corporate Tax",
      period: "Q1 2023",
      amount: 1000000,
      vatPercent: 7.5,
      whtPercent: 2.5,
      dueDate: "2023-04-15",
      status: "Pending",
    },
    {
      id: 2,
      taxType: "VAT",
      description: "March Sales VAT",
      period: "March 2023",
      amount: 500000,
      vatPercent: 7.5,
      whtPercent: 10,
      dueDate: "2023-04-20",
      status: "Pending",
    },
  ]);

  const addRow = () => {
    setRows([
      ...rows,
      {
        id: rows.length + 1,
        taxType: "Income Tax",
        description: "",
        period: "",
        amount: 0,
        vatPercent: 0,
        whtPercent: 0,
        dueDate: "",
        status: "Pending",
      },
    ]);
  };

  const calculateTotals = () => {
    return rows.reduce(
      (totals, row) => {
        const vatAmount = row.amount * (row.vatPercent / 100);
        const grossAmount = row.amount + vatAmount;
        const whtAmount = row.amount * (row.whtPercent / 100);
        const netAmount = grossAmount - whtAmount;

        totals.amount += row.amount;
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
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        <BackButton />
        <h1 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
          Create Tax Record
        </h1>

        <div className="mb-4 md:mb-6">
          <label className="block font-normal mb-1">Tax Authority</label>
          <input
            type="text"
            className="w-full md:w-[500px] border rounded p-2 mt-1"
            placeholder="e.g. Federal Inland Revenue Service"
          />
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[1200px] md:w-full">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="p-2">S/N</th>
                  <th className="p-2">Tax Type</th>
                  <th className="p-2">Description</th>
                  <th className="p-2">Period</th>
                  <th className="p-2">Amount (₦)</th>
                  <th className="p-2">VAT %</th>
                  <th className="p-2">VAT Amount (₦)</th>
                  <th className="p-2">Gross Amount (₦)</th>
                  <th className="p-2">WHT%</th>
                  <th className="p-2">WHT Amount</th>
                  <th className="p-2">Net Amount</th>
                  <th className="p-2">Due Date</th>
                  <th className="p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => {
                  const vatAmount = row.amount * (row.vatPercent / 100);
                  const grossAmount = row.amount + vatAmount;
                  const whtAmount = row.amount * (row.whtPercent / 100);
                  const netAmount = grossAmount - whtAmount;
                  return (
                    <tr key={index} className="border-b">
                      <td className="p-2">{String(row.id).padStart(2, "0")}</td>
                      <td className="p-2">
                        <select
                          value={row.taxType}
                          className="border rounded p-1 w-full"
                        >
                          <option>Income Tax</option>
                          <option>VAT</option>
                          <option>Withholding Tax</option>
                          <option>Property Tax</option>
                          <option>Sales Tax</option>
                        </select>
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={row.description}
                          className="border rounded p-1 w-full"
                          placeholder="Tax description"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={row.period}
                          className="border rounded p-1 w-full"
                          placeholder="e.g. Q1 2023"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="number"
                          value={row.amount}
                          className="border rounded p-1 w-full"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="number"
                          value={row.vatPercent}
                          className="border rounded p-1 w-full"
                        />
                      </td>
                      <td className="p-2">{vatAmount.toLocaleString()}</td>
                      <td className="p-2">{grossAmount.toLocaleString()}</td>
                      <td className="p-2">
                        <input
                          type="number"
                          value={row.whtPercent}
                          className="border rounded p-1 w-full"
                        />
                      </td>
                      <td className="p-2">{whtAmount.toLocaleString()}</td>
                      <td className="p-2">{netAmount.toLocaleString()}</td>
                      <td className="p-2">
                        <input
                          type="date"
                          value={row.dueDate}
                          className="border rounded p-1 w-full"
                        />
                      </td>
                      <td className="p-2">
                        <select
                          value={row.status}
                          className="border rounded p-1 w-full"
                        >
                          <option>Pending</option>
                          <option>Paid</option>
                          <option>Overdue</option>
                        </select>
                      </td>
                    </tr>
                  );
                })}
                {/* Totals Row */}
                <tr className="border-t-2 border-black mt-3 mb-3 font-semibold">
                  <td className="p-2" colSpan="4">
                    Total
                  </td>
                  <td className="p-2">₦{totals.amount.toLocaleString()}</td>
                  <td className="p-2"></td>
                  <td className="p-2">₦{totals.vatAmount.toLocaleString()}</td>
                  <td className="p-2">
                    ₦{totals.grossAmount.toLocaleString()}
                  </td>
                  <td className="p-2"></td>
                  <td className="p-2">₦{totals.whtAmount.toLocaleString()}</td>
                  <td className="p-2">₦{totals.netAmount.toLocaleString()}</td>
                  <td className="p-2" colSpan="2"></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 mb-8">
            <button
              onClick={addRow}
              className="mt-4 px-4 py-2 bg-white border rounded shadow-sm hover:bg-gray-50 flex items-center gap-2"
            >
              <span className="text-2xl">+</span> Add another tax record
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
          <h2 className="font-semibold mb-4">Payment Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm mb-1">Payment Method</label>
              <select className="p-2 border rounded w-full">
                <option>Bank Transfer</option>
                <option>Cheque</option>
                <option>Cash</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Payment Date</label>
              <input type="date" className="p-2 border rounded w-full" />
            </div>
            <div>
              <label className="block text-sm mb-1">Reference Number</label>
              <input
                type="text"
                placeholder="Payment reference"
                className="p-2 border rounded w-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-10">
          <h2 className="font-semibold mb-4">Attachments</h2>
          <div className="border-2 border-dashed rounded-lg p-4 text-center">
            <p className="text-gray-500 mb-2">
              Drag and drop tax documents here or
            </p>
            <button className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200">
              Browse Files
            </button>
          </div>
        </div>

        <button
          type="button"
          className="px-6 py-2 md:px-8 md:py-2 bg-gradient-to-r from-[#384295] to-[#14ADD6] text-white font-medium mt-5 rounded-lg shadow-md hover:shadow-lg transition-all whitespace-nowrap"
        >
          Submit Tax Record
        </button>
      </div>
    </div>
  );
};

export default CreateTaxRecord;
