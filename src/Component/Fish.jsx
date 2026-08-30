import React from 'react';

function Fish() {
  const products = [
  // Blue Crown Feed
  {
    name: 'Blue Crown Feed',
    sizes: ['42 - 2mm', '42 - 3mm', '42 - 4mm', '40 - 6mm', '38 - 9mm'],
    prices: [12950, 11800, 11450, 10900, 10400],
  },

  // Ex Aqualis Feed
  {
    name: 'Ex Aqualis Feed',
    sizes: ['45 - 2mm', '45 - 3mm', '45 - 4mm', '42 - 6mm', '42 - 9mm'],
    prices: [15800, 15100, 14950, 14250, 14150],
  },

  // Alpha Feed
  {
    name: 'Alpha Feed',
    sizes: ['4mm', '6mm', '8mm'],
    prices: [12650, 11950, 11450],
  },

  // Eco Float Feed
  {
    name: 'Eco Float Feed',
    sizes: ['3mm', '4mm', '6mm', '9mm'],
    prices: [9450, 9150, 8625, 8375],
  },
];


  return (
    <div className="p-5 border rounded-lg shadow-md overflow-x-auto">
      <table className="w-full border-collapse text-sm text-left bg-lime-900 text-white">
        <thead>
          <tr className="bg-lime-900 font-bold border-b text-white rounded-lg">
            <th className="px-4 py-3">PRODUCT CATEGORY</th>
            <th className="px-4 py-3">SIZE</th>
            <th className="px-4 py-3"> NEW PRICE (₦)</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => (
            <React.Fragment key={index}>
              {product.sizes.map((size, idx) => (
                <tr
                  key={idx}
                  className="border-b border-2 hover:bg-lime-800 font-bold"
                >
                  {idx === 0 && (
                    <td
                      rowSpan={product.sizes.length}
                      className="px-4 py-3 font-semibold align-middle"
                    >
                      {product.name}
                    </td>
                  )}
                  <td className="px-4 py-3 text-white">{size}</td>
                  <td className="px-4 py-3 text-white">
                    ₦{product.prices[idx].toLocaleString()}
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Fish;
