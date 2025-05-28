import React, { useState } from 'react'
import BackButton from '../components/BackButton'
import { FiPlus, FiUpload } from 'react-icons/fi';

const UpdateStock = () => {

    const [formData, setFormData] = useState({
      productName: "",
      category: "",
      unitPrice: "",
      supplier: "",
      productId: "",
      qtyPurchased: "",
      totalAmount: "",
      photo: null,
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const handleFileChange = (e) => {
      setFormData((prev) => ({
        ...prev,
        photo: e.target.files[0],
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission
      console.log(formData);
    };
    

  return (
    <div className="min-h-screen">
      <BackButton />
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Add New Item</h1>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Side - Image Upload (Full Height) */}
            <div className="w-full lg:w-2/5">
              <div className="h-full border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col">
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Upload photo
                </label>
                <div className="flex-grow flex flex-col items-center justify-center text-center">
                  {formData.photo ? (
                    <div className="relative w-full h-48">
                      <img
                        src={URL.createObjectURL(formData.photo)}
                        alt="Preview"
                        className="w-full h-full object-contain rounded-md"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, photo: null }))
                        }
                        className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-sm hover:bg-gray-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <>
                      <FiUpload className="w-12 h-12 text-gray-400 mb-4" />
                      <p className="text-sm text-gray-500 mb-1">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        Allowed format: JPG, JPEG, and PNG
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Max file size: 2MB
                      </p>
                    </>
                  )}
                </div>
                <input
                  type="file"
                  className="hidden"
                  id="file-upload"
                  accept=".jpg,.jpeg,.png"
                  onChange={handleFileChange}
                />
                <label
                  htmlFor="file-upload"
                  className="mt-6 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer text-center"
                >
                  {formData.photo ? "Change Image" : "Choose File"}
                </label>
              </div>
            </div>
            {/* Right Side - Form Fields (Two columns on large screens) */}
            <div className="w-full lg:w-3/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Product Name */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Product name
                  </label>
                  <input
                    type="text"
                    name="productName"
                    value={formData.productName}
                    onChange={handleChange}
                    placeholder="Enter product name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Furniture">Furniture</option>
                  </select>
                </div>

                {/* Unit Price */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Unit price
                  </label>
                  <input
                    type="number"
                    name="unitPrice"
                    value={formData.unitPrice}
                    onChange={handleChange}
                    placeholder="Enter amount"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Supplier */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Supplier
                  </label>
                  <input
                    type="text"
                    name="supplier"
                    value={formData.supplier}
                    onChange={handleChange}
                    placeholder="Enter supplier name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Product ID */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Product ID
                  </label>
                  <input
                    type="text"
                    name="productId"
                    value={formData.productId}
                    onChange={handleChange}
                    placeholder="Enter ID"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* QTY Purchased */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    QTY purchased
                  </label>
                  <input
                    type="number"
                    name="qtyPurchased"
                    value={formData.qtyPurchased}
                    onChange={handleChange}
                    placeholder="Enter quantity"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Total Amount */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Total amount
                  </label>
                  <input
                    type="text"
                    name="totalAmount"
                    value={formData.totalAmount}
                    onChange={handleChange}
                    placeholder="Amount"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Add Item Button - Centered below both sections */}
          <div className="mt-8 flex justify-start">
            <button
              type="submit"
              className="px-42 py-3 bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center"
            >
              Add item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateStock
