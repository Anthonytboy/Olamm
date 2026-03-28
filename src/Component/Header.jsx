import React from 'react';
import Logo from '../assets/Logo.jpg';
const Header = () => {
  return (
    <>
      <header className="mb-10 ">
        <div className="pt-5 bg-lime-900 p-2 pb-10">
          <img src={Logo} alt="" className="mx-auto" />
        </div>

        <div className=" space-y-10 shadow-md p-5 bg-lime-900 text-white md:p-10 mt-2 rounded-lg">
          <h1 className="text-4xl font-bold  text-center">
            Olamplus Intergated Services
          </h1>
          <p className="text-md font-bold">
            Kindly remember that a purchase permit application is required
            prior to making any purchases. To proceed, you must submit a
            purchase permit request which will authorize your purchasing
            privileges and evaluation. 
          </p>

          <div className="text-white mx-auto space-y-10 ">
            <h2 className="font-bold text-md ">
              WE OFFER FIVE DISTINCT REGISTRATION CATEGORIES:
            </h2>
            <p className="grid w-mx space-y-5 text-sm font-bold ">
              <span className="">
                1. Major Distributorship Registration (PERMANENT AND FULL ACCESS
                TO THE COMPANY) ₦780,780 only. MINIMUM ORDER QUANTITY (600
                Bags){' '}
              </span>
              <span>
                2. Retailer / Farmers Registration (VALID FOR 2 YEARS) ₦75,780
                MINIMUM ORDER QUANTITY (100 Bags){' '}
              </span>
              <span>
                3. End User Registration (ONE TIME PURCHASE) ₦35,780 Only.
                MINIMUM ORDER QUANTITY ( 50 Bags){' '}
              </span>
              <span>4. Raw Materials Supplier Registration, ₦185,000</span>
              <span>5. Services Registration, ₦225,000</span>
            </p>
            <p className="text-md font-bold text-white">
              After submitting your purchase permit application, approval
              requires 24 hours before access is granted. Upon completion, you
              will receive a payment receipt along with your approved purchase
              permit documentation from our office.
            </p>

            <p className="text-md font-bold text-white ">
              Goods will be shipped within 3 days following confirmation of
              your deposit payment, which will be itemized in your pro-forma
              invoice. Should any product concerns arise, you may request a
              refund, substitute delivery, or product swap up to 9 days from the
              delivery date.
            </p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
