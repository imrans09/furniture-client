import React from 'react';
import Cart from '../../Shared/Cart/Cart';
import { useLoaderData } from "react-router-dom";

const CategoryProduct = () => {
  const categoryProducts = useLoaderData();
    return (
      <div className="text-gray-600 body-font">
        <h1 className='text-center text-5xl mt-4'>{categoryProducts[0].category_name}</h1>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {categoryProducts.map((product) => (
              <Cart key={product._id} product={product}></Cart>
            ))}
          </div>
        </div>
      </div>
    );
};

export default  CategoryProduct;