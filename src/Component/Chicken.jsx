import photo from '../assets/photo_2025-12-11_09-41-11.jpg';
import Photo from '../assets/Photo.jpg';
import goats from '../assets/goats.jpg';
import white from '../assets/white.jpg';
import DeliveryTruck from './DeliveryTruck';

function Chicken() {
  return (
    <>
      <div className="items-center grid  shadow-lg shadow-gray-500">
        <div className="py-4 mx-auto items-center ">
          <img src={photo} alt="" className=" size-50 object-fill " />

          <ul className="text-black font-medium space-y-5">
            <h1 className="text-center text-2xl font-bold uppercase">
              (Doc Available){' '}
            </h1>
            <li>
              1: DOC broilers{' '}
              <span className="text-green-600">Contact For Price</span>
            </li>
            <li>
              2: DOC pullets/layers{' '}
              <span className="text-green-600">Contact For Price </span>
            </li>
            <li>
              3: DOC noilers{' '}
              <span className="text-green-600">Contact For Price </span>
            </li>
            <li>
              4: DOC foreign turkey{' '}
              <span className="text-green-600">Contact For Price</span>
            </li>
            <li>
              5: DOC local turkey{' '}
              <span className="text-green-600">Contact For Price </span>
            </li>
          </ul>
        </div>

        <div className="py-4 flex flex mx-auto item-center">
          <ul className="text-black font-medium space-y-5">
            <p className="text-2xl font-bold uppercase">
              (Eggs available at farm Price)
            </p>
            <li>
              1: Jumbo Eggs{' '}
              <span className="text-green-600">Contact For Price</span>
            </li>
            <li>
              2: Medium Eggs{' '}
              <span className="text-green-600">Contact For Price</span>
            </li>
            <li>
              3: Small Eggs{' '}
              <span className="text-green-600">Contact For Price</span>
            </li>
          </ul>
          <img src={Photo} alt="" className=" size-50 object-fill " />
        </div>
        <div className="py-4 flex items-center mx-auto gap-5">
          <div>
            <h1 className="text-lg text-black font-bold">
              Kalahari Hybrid Goat
            </h1>
            <img
              src={goats}
              alt="goat"
              className="object-fill mx-auto size-74"
            />
          </div>
          <div>
            <h1 className="text-lg text-black font-bold ">Boar Goat</h1>
            <img
              src={white}
              alt="goat"
              className="object-fill mx-auto size-74"
            />
          </div>
        </div>
      </div>

      <DeliveryTruck />
    </>
  );
}

export default Chicken;
