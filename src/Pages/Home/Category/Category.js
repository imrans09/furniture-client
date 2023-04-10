import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://furniture-mu.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <div className="text-center">
        <p>CATEGORY</p>
        <h1 className="text-2xl font-semibold mt-2 mb-4">
          Shop your desire furniture by category
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 mt-10">
        {categories.map((category) => (
          <Link to={`/category-products/${category.id}`} key={category._id}>
            <div className="w-28 h-36 flex flex-col border border-solid p-2">
              <img className="w-24" src={category.img} alt="" />
              <h1 className="text-center">{category.name}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
