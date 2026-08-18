import React from 'react';
import Image from '../assets/Image.png';
import Image2 from '../assets/Image2.gif';

const Payment = () => {
  return (
    <>
      <div className=" hidden shadow-md shadow-gray-500 rounded-xl p-4 ">
        <h1 className="text-xl pb-10 font-bold text-center ">
          PAYMENT ACCOUNT INFORMATION PROVIDED BELOW{' '}
        </h1>
        <img
          src={Image}
          alt=""
          className="object-center mx-auto w-40 animate-bounce"
        />
      </div>

      <div className=" text-center shadow-md shadow-gray-500 rounded-xl p-4 bg-lime-900 text-white ">
        <h1 className="text-xl pb-10 font-bold">
          {' '}
          Verified Payment Details From OLAMPLUS NIGERIA BUSINESS UNIT
        </h1>
        <h2 className="text-lg pb-4 font-medium">
          Remit Registration Fees To The Authorized Account Listed Below
        </h2>

        <div className="text-lg pb-2 text-center space-y-5 py-5 my-10 rounded-lg mx-auto">
          <h1 className="text-3xl font-bold py-4 uppercase">
            Official Financial secretary's account details
          </h1>
          <p className="text-lg pb-2 font-medium">
            Account Name:{' '}
            <span className="font-bold  uppercase"> Sarah Itohan</span>
          </p>
          <p className="text-lg pb-2 font-bold">
            Account Number: <span className=" uppercase">0012003571</span>
          </p>
          <p className="text-lg pb-2 font-bold">
            Bank Name:{' '}
            <span className=" uppercase">Bank Of Agriculture PLC </span>
            <h1 className="text-3xl font-bold py-4 text-black">
              Olamgroups authorized account details for registration
            </h1>
          </p>
        </div>

        <div className="hidden text-lg pb-2 font-semibold text-center space-y-5 mx-auto shadow-lg shadow-gray-800 rounded-lg py-5 my-10">
          <h1 className="text-3xl font-bold py-4 text-black">
            Olamgroups authorized account details for registration
          </h1>
          <p>
            Bank Name:{' '}
            <span className="font-bold uppercase "> First Bank </span>
          </p>
          <p>
            Account Number:{' '}
            <span className="font-bold uppercase "> 3221097378</span>
          </p>
          <p>
            Account Name:{' '}
            <span className="font-bold uppercase "> Nwoga Oliver</span>
          </p>
        </div>

        <p className="text-lg pb-2 font-semibold">
          Following payment, please complete all registration form fields
          accurately and attach all required supporting documentation before
          finalizing submission. Our support team will contact you within 24
          hours to validate your application and guide you through the
          subsequent steps.
        </p>
      </div>

      <div className="shadow-md shadow-gray-500 rounded-xl p-4 text-center mt-4 ">
        <h1 className="text-xl pb-10 font-medium">VERIFIED COMPANY </h1>
        <img
          src={Image2}
          alt=""
          className="object-center mx-auto w-40 animate-bounce"
        />
      </div>
    </>
  );
};

export default Payment;
