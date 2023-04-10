import React from 'react';
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from 'react-icons/ai';

const Cart = ({ product }) => {
  const { _id, img, category_name, product_name, price } = product;
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link
        to="/booking"
        className="block relative h-48 rounded overflow-hidden"
      >
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={img}
        />
      </Link>
      <div className="mt-4 flex justify-between items-center">
        <div>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            {category_name}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {product_name}
          </h2>
          <p className="mt-1">$ {price}</p>
        </div>
        <Link to={`/booking/${_id}`}>
          <div className="flex items-center gap-x-2">
            <span className="font-semibold">Buy</span>
            <AiOutlineArrowRight />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Cart;