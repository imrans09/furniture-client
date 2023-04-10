import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../../Shared/Cart/Cart';

const Product = () => {
    const allProducts = useLoaderData();
    return (
      <div className="mt-12">
        <h1 className="text-center text-4xl font-semibold">
          Our All Product are listed here
        </h1>
        <div>
          <div className="">
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                  {allProducts.map((product) => (
                    <Cart key={product._id} product={product}></Cart>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
};

export default Product;