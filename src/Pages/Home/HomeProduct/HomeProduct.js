import React from 'react';
import Cart from '../../Shared/Cart/Cart';
import { Link } from 'react-router-dom';


const HomeProduct = ({ homeProducts }) => {
  
  return (
    <div className="mt-24">
      <div className="text-center">
        <p>FIND ALL FOR YOUR SURROUNDING STYLES</p>
        <h1 className="text-4xl font-semibold mt-2 mb-4">
          Furniture for the new age
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          aperiam, <br /> id rerum expedita facere repellendus excepturi
          similique quae delectus doloribus accusantiumv <br /> cum eaque iste
          ratione doloremque eos. Illo, culpa eligendi?
        </p>
      </div>
      <div className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {homeProducts.map((product) => (
              <Cart key={product._id} product={product}></Cart>
            ))}
          </div>
        </div>
      </div>
      <div className='text-center'>
        <Link to="/product" className="text-white">
          <button className="bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-sky-500 rounded text-lg mt-6">
            Contract
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeProduct;