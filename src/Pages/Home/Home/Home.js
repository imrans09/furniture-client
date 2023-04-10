import React from "react";
import HomeProduct from "../HomeProduct/HomeProduct";
import Category from "../Category/Category";
import Carousel from "./Carousel";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const homeProducts = useLoaderData();
  return (
    <div className="container mx-auto mt-10">
      <Carousel/>
      <Category/>
      <HomeProduct homeProducts={homeProducts} />
    </div>
  );
};

export default Home;
