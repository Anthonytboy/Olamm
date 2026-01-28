import photo from '../assets/photo_2025-12-11_09-41-11.jpg';
import Photo from '../assets/Photo.jpg';
import goats from '../assets/goats.jpg';
import white from '../assets/white.jpg';
import DeliveryTruck from './DeliveryTruck';

function Chicken() {
  return (
    <>
      <DeliveryTruck />
      <div className=" items-center grid sm:grid-cols-2 md:grid-cols-2 gap-10 md:gap-20 px-5 md:px-0 max-w-6xl w-full mx-auto my-10 shadow-lg shadow-gray-500 mx-4 ">
        <div className="rounded-xl p-4 ">
          <img
            src={photo}
            alt=""
            className=" size-100 object-contain mx-auto"
          />

          <h1 className="text-center text-2xl font-medium">Eggs Available at Farm Price</h1>

          <ul className="text-black font-medium space-y-5 text-center pt-5">
            <li>
              DOC broilers <span className="text-green-600">Contact For Price</span>
            </li>
            <li>
              DOC pullets/layers <span className="text-green-600">Contact For </span>
            </li>
            <li>
              DOC noilers <span className="text-green-600">Contact For </span>
            </li>
            <li>
              DOC foreign turkey <span className="text-green-600">Contact For </span>
            </li>
            <li>
              DOC local turkey <span className="text-green-600">Contact For </span>
            </li>
          </ul>
        </div>

        <div className="rounded-xl p-4 ">
          <img
            src={Photo}
            alt=""
            className=" size-100 object-contain mx-auto"
          />

          <ul className="text-black font-medium space-y-5 text-center pt-5">
            <p className="text-2xl font-medium">
              {' '}
              Eggs available at wholesale / Farm Prices{' '}
             Note <span>bulk orders</span>
            </p>
            <li>
              Jumbo Eggs <span className="text-green-600">Contact For Price</span>
            </li>
            <li>
              Medium Eggs <span className="text-green-600">Contact For Price</span>
            </li>
            <li>
              Small Eggs <span className="text-green-600">Contact For Price</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-20 justify-center items-center  sm:flex-row max-w-xl shadow-lg py-4 my-10 shadow-gray-500 rounded-xl p-4 text-center mx-auto">
          <div className='space-y-5'>
            <h1 className="text-lg text-green-600 font-bold">
              Kalahari Hybrid Goat
            </h1>

            <img
              src={goats}
              alt="goat"
              className=" object-contain mx-auto "
            />
          </div>

          <div className='space-y-5'>
            <h1 className="text-lg text-green-600 font-bold ">Boar Goat</h1>

            <img
              src={white}
              alt="goat"
              className=" object-contain mx-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Chicken;
