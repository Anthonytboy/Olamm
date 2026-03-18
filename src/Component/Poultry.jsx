import React from 'react';

function Poultry() {
  const products = [
    // Layer Feeds
    {
      name: 'Layer Feeds (SS, SE)',
      sizes: [
        'Chikun Chick Mash',
        'Chikun Chick Pellet',
        'Chikun Grower Mash',
        'Chikun Grower Pellet',
        'Chikun Layer -1 Mash',
        'Chikun Layer -2 Mash',
      ],
       bagsize: [25, 25, 25, 25, 25, 25],
      prices: [12300, 12300, 12300, 12300, 12300, 12300],
    },

    // Broiler Feeds
    {
      name: 'Broiler Feeds (SS, SE)',
      sizes: [
        'Chikun Super Starter Mash',
        'Chikun Super Starter Pellet',
        'Chikun Stater Mash',
        'Chikun Stater Pellet',
        'Chikun Finisher Mash',
        'Ultima Super Starter Pellet',
        'Ultima Stater Pellet',
        'Ultima Finisher Pellet',
      ],
      bagsize: [25, 25, 25, 25, 25, 25, 25, 25, 25],
      prices: [12680, 12650, 12600, 12600, 12650, 16785, 16700, 16785],
    },

    // Super Premium Broiler Feeds
    {
      name: 'Super Premium Broiler Feeds (SS, SE)',
      sizes: [
        'Ultima Plus Super Starter',
        'Ultima Plus Starter',
        'Ultima Plus Finisher',
      ],
      bagsize: [25, 25, 25],
      prices: [16900, 16900, 16900],
    },
  ];

  return (
    <>
    <div className="p-5 border rounded-lg shadow-md overflow-x-auto">
      <table className="w-full border-collapse text-sm text-left text-white">
        <thead>
          <tr className="bg-lime-900 text-white font-bold border-b rounded-lg">
            <th className="px-4 py-3">FEED TYPE</th>
            <th className="px-4 py-3">DESCRIPTION</th>
            <th className="px-4 py-3">BAG SIZE</th>
            <th className="px-4 py-3"> NEW PRICE (₦)</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => (
            <React.Fragment key={index}>
              {product.sizes.map((size, idx) => (
                <tr
                  key={idx}
                  className="border-b border-2 border-gray-500 hover:bg-lime-800 bg-lime-900 font-bold text-white"
                >
                  {idx === 0 && (
                    <td
                      rowSpan={product.sizes.length}
                      className="px-4 py-3 font-semibold align-middle bg-lime-900"
                    >
                      {product.name}
                    </td>
                  )}

                  <td className="px-4 py-3">{size}</td>

                  <td className="px-4 py-3 text-white">{product.bagsize[idx]}kg</td>

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
      </>
  );
};

export default Poultry;
