import React from "react";

const productImages = {
  pen: "https://media.istockphoto.com/id/1406248473/photo/blue-office-pen-on-white-background.jpg?s=1024x1024&w=is&k=20&c=nCuT6MMI7vEnSgaTrATx02ON4AE4O7pScsVNOE_ovH4=",
  paper:
    "https://media.istockphoto.com/id/93272354/photo/a-picture-of-a-bundle-of-newspapers.jpg?s=1024x1024&w=is&k=20&c=U5d45DRBquuYMcaaBb5xIFkH9rR4VBVWu7YjIIkwG8M=",
  detergent:
    "https://media.istockphoto.com/id/636282540/photo/variety-house-cleaning-product-on-wood-table.jpg?s=1024x1024&w=is&k=20&c=499O2LFZDlFjs7409af32YdVU5hpiFZ3WkaJ1JY7uLg=",
  clips:
    "https://media.istockphoto.com/id/158424129/vector/binder-clips.jpg?s=1024x1024&w=is&k=20&c=DKyxJrL72YeoQPbdhchFIp4lxbZ8Nkv4PLgGJd0k60Y=",
  notepad:
    "https://media.istockphoto.com/id/1449128535/vector/a-notebook-with-a-horizontal-spring-coil-lies-on-top-of-another-notebook-notepad-with-a.jpg?s=1024x1024&w=is&k=20&c=-haOQeTo09dr_gdfTLxihxWoFH_6GVXRzakvKdlyRVc=",
  airFreshener:
    "https://media.istockphoto.com/id/155802734/photo/an-air-freshener-plugged-in-the-kitchen.jpg?s=1024x1024&w=is&k=20&c=F5H5KQ0njnCar_RPxURenmm_Um83E_usrgKvhwK2tY4=",
  stapler:
    "https://media.istockphoto.com/id/1132723958/photo/detail-of-female-hands-holding-a-stapler-and-filling-it-with-the-staples-hands-holding.jpg?s=1024x1024&w=is&k=20&c=PFKYf3siWTe3c4excNxhrMkYxdcFeaGAjtXZaJ_dJ8c=",
};

const InventotyList = () => {
  const stockData = [
    {
      id: "01",
      productName: "Pen",
      productId: "45656787",
      category: "Stationaries",
      qtyPurchased: "50pcs",
      unitPrice: "N100.00",
      totalAmount: "N5,000.00",
      inStock: "40pcs",
      supplier: "Big Ben's Store",
      status: "2 functioning",
      image: productImages.pen,
    },
    {
      id: "02",
      productName: "A4 Paper",
      productId: "69956787",
      category: "Stationaries",
      qtyPurchased: "20pcs",
      unitPrice: "N3,000.00",
      totalAmount: "N60,000.00",
      inStock: "0pcs",
      supplier: "Big Ben's Store",
      status: "All functioning",
      image: productImages.paper,
    },
    {
      id: "03",
      productName: "Liquid wash",
      productId: "36426787",
      category: "Detergent",
      qtyPurchased: "35pcs",
      unitPrice: "N5,000.00",
      totalAmount: "N175,000.00",
      inStock: "10pcs",
      supplier: "Quality wash",
      status: "All functioning",
      image: productImages.detergent,
    },
    {
      id: "04",
      productName: "Paper clips",
      productId: "45656787",
      category: "Stationaries",
      qtyPurchased: "45pcs",
      unitPrice: "N200.00",
      totalAmount: "N9,000.00",
      inStock: "10pcs",
      supplier: "Big Ben's Store",
      status: "All functioning",
      image: productImages.clips,
    },
    {
      id: "05",
      productName: "Notepads",
      productId: "36426787",
      category: "Stationaries",
      qtyPurchased: "100pcs",
      unitPrice: "N2,000.00",
      totalAmount: "N200,000.00",
      inStock: "45pcs",
      supplier: "Big Ben's Store",
      status: "All functioning",
      image: productImages.notepad,
    },
    {
      id: "06",
      productName: "Air freshner",
      productId: "36420021",
      category: "Detergent",
      qtyPurchased: "10pcs",
      unitPrice: "N1,000.00",
      totalAmount: "N10,000.00",
      inStock: "0pcs",
      supplier: "Quality wash",
      status: "All functioning",
      image: productImages.airFreshener,
    },
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "All functioning":
      case "All functioning":
        return " text-[#10A142]";
      case "2 functioning":
        return " text-[#ED3237]";
      case "low in stock":
        return " text-[#F29425]";
      default:
        return " text-gray-800";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 rounded-xl shadow-md bg-white">
      <h1 className="text-2xl font-bold mb-6">Stock List</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="py-3 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                S/N
              </th>
              <th className="py-3 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th className="py-3 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product Name
              </th>
              <th className="py-3 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product ID
              </th>
              <th className="py-3 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="py-3 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                QTY Purchased
              </th>
              <th className="py-3 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Unit Price
              </th>
              <th className="py-3 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Amount
              </th>
              <th className="py-3 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                In-Stock
              </th>
              <th className="py-3 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Supplier
              </th>
              <th className="py-3 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {stockData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="py-4 px-4 border-b text-sm text-gray-900 whitespace-nowrap">
                  {item.id}
                </td>
                <td className="py-4 px-4 border-b">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img
                      className="h-10 w-10 rounded-md object-cover"
                      src={item.image}
                      alt={item.productName}
                    />
                  </div>
                </td>
                <td className="py-4 px-4 border-b text-sm text-gray-900 whitespace-nowrap">
                  {item.productName}
                </td>
                <td className="py-4 px-4 border-b text-sm text-gray-900 whitespace-nowrap">
                  {item.productId}
                </td>
                <td className="py-4 px-4 border-b text-sm text-gray-900 whitespace-nowrap">
                  {item.category}
                </td>
                <td className="py-4 px-4 border-b text-sm text-gray-900 whitespace-nowrap">
                  {item.qtyPurchased}
                </td>
                <td className="py-4 px-4 border-b text-sm text-gray-900 whitespace-nowrap">
                  {item.unitPrice}
                </td>
                <td className="py-4 px-4 border-b text-sm text-gray-900 whitespace-nowrap">
                  {item.totalAmount}
                </td>
                <td className="py-4 px-4 border-b text-sm text-gray-900 whitespace-nowrap">
                  {item.inStock}
                </td>
                <td className="py-4 px-4 border-b text-sm text-gray-900 whitespace-nowrap">
                  {item.supplier}
                </td>
                <td className="py-4 px-4 border-b whitespace-nowrap">
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventotyList;
