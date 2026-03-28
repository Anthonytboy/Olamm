import photo from '../assets/photo_2025-12-11_09-41-11.jpg';
import Photo from '../assets/Photo.jpg';
import goats from '../assets/goats.jpg';
import white from '../assets/white.jpg';
import DeliveryTruck from './DeliveryTruck';

function Chicken() {
  return (
    <>
     
      <div className=" items-center grid sm:grid-cols-4 md:grid-cols-4 gap-10 md:gap-20 px-5 md:px-0 max-w-6xl w-full mx-auto my-10 shadow-lg shadow-gray-500 mx-4 pb-5">
        <div className="rounded-xl p-4 ">
          <img
            src={photo}
            alt=""
            className=" size-100 object-contain mx-auto"
          />

          <h1 className="text-center text-2xl font-bold uppercase">
            (Doc Available){' '}
          </h1>

          <ul className="text-black font-medium space-y-5 text-left items-center mx-auto pt-5">
            <li>
              1: DOC broilers{' '}
              <span className="text-green-600">Contact For Price</span>
            </li>
            <li>
              2: DOC pullets/layers{' '}
              <span className="text-green-600">Contact For Price </span>
            </li>
            <li>
              3: DOC noilers <span className="text-green-600">Contact For Price </span>
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

        <div className="rounded-xl p-4 ">
          <img
            src={Photo}
            alt=""
            className=" size-100 object-contain mx-auto"
          />

          <ul className="text-black font-medium space-y-5 text-left items-center mx-auto pt-5">
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
        </div>

        <div className="rounded-xl p-4 ">
            <img src={goats} alt="goat" className="object-contain mx-auto" size={70} />
             <h1 className="text-lg text-black font-bold">
              Kalahari Hybrid Goat
            </h1>
          </div>

        
          
      
       
        </div>

          <div className="rounded-xl p-4">
            <h1 className="text-lg text-black font-bold ">Boar Goat</h1>

            <img src={white} alt="goat" className=" object-contain mx-auto" size={70} />
          </div>
      </div>

        <DeliveryTruck />
    </>
  );
}

export default Chicken;
