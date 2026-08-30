import React from 'react';

const Introduction = () => {
  return (
    <div className=" space-y-10 shadow-lg p-5 my-3 rounded-xl bg-lime-900 text-white shadow-gray-400">
      <p className="font-medium">
        <span className="font-bold text-xl">Olams Group services </span>
        Our organization produces and supplies packaged food items throughout
        Africa, meeting regional dietary requirements with budget-friendly and
        nutrient-enhanced solutions. We provide superior-grade, cost-effective
        animal feed and newly-hatched poultry to agricultural producers, thereby
        advancing global food security.
      </p>
      <p className="font-medium">
        Our milling facilities generate 36,000 metric tonnes of rice annually
        for regional distribution, marketed under the names Mama's Pride and
        Mama's Choice.
        </p>
        <p className="font-medium text-xl">DELIVERY POSSIBILITY!!!</p>
        <p className="font-bold text-xl">
          Purchase Permit Order (P.P.O) from Olams Services & Local
        Government Approval.
      </p>

      <div className="space-y-5">
        <p className="font-bold text-xl">
          ⬇️GOODS PURCHASE PARTNERSHIP OPTIONS⬇️
        </p>

        <p className="font-medium text-md">
          Important: <br /> Registration costs are ₦780,780 for Major
          Distributor Status
        </p>
        <p className="font-medium text-md">
          {' '}
          ₦75,780 for Retailer / Farming Operations
        </p>

        <p className="font-medium text-md">
          {' '}
          ₦35,780 for Individual Customer Enrollment.{' '}
        </p>
      </div>

      <div className="space-y-5">
        <p className="font-bold text-xl">⬇️SERVICE PARTNERSHIP OPTIONS⬇️</p>

        <p className="font-medium text-md">
          ₦185,000 For Raw material suppliers Registration,
        </p>
        <p className="font-medium text-md ">
          ₦225,000 For Services Registration,
        </p>

        <p className="font-medium text-md">
          REMINDER: Payment of enrollment charges is mandatory prior to
          initiating form submission and account creation.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
