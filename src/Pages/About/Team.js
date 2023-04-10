import React from "react";
import { FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
              OUR CREATIVE FORCE
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">
              Meet our team
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="w-[300px] h-[350px]"
                  src="https://t3.ftcdn.net/jpg/02/18/67/08/360_F_218670800_dU9eirrfJkkDdBKqXu5dUk23hsoiMpMp.webp"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-xl mt-3 text-gray-900">
                    Shawn Smith
                  </h2>
                  <h3 className="text-gray-500 mb-3">PRODUCT HEAD</h3>
                  <span className="inline-flex text-xl gap-x-2">
                    <Link to="/">
                      <FaFacebookSquare />
                    </Link>
                    <Link to="/">
                      <FaTwitter />
                    </Link>
                    <Link to="/">
                      <FaLinkedin />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="w-[300px] h-[350px]"
                  src="https://as1.ftcdn.net/v2/jpg/02/75/52/42/1000_F_275524285_W7Wi5CA7kNq5OnzpfrK3M658GOJUJC0g.jpg"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-xl mt-3 text-gray-900">
                    Holden Caulfield
                  </h2>
                  <h3 className="text-gray-500 mb-3">DESIGNER</h3>
                  <span className="inline-flex text-xl gap-x-2">
                    <Link to="/">
                      <FaFacebookSquare />
                    </Link>
                    <Link to="/">
                      <FaTwitter />
                    </Link>
                    <Link to="/">
                      <FaLinkedin />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="w-[300px] h-[350px]"
                  src="https://img.freepik.com/free-photo/successful-businessman_1098-18155.jpg"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-xl mt-3 text-gray-900">
                    Nicolette Ritonni
                  </h2>
                  <h3 className="text-gray-500 mb-3">STORE MANAGER</h3>
                  <span className="inline-flex text-xl gap-x-2">
                    <Link to="/">
                      <FaFacebookSquare />
                    </Link>
                    <Link to="/">
                      <FaTwitter />
                    </Link>
                    <Link to="/">
                      <FaLinkedin />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="w-[300px] h-[350px]"
                  src="https://t4.ftcdn.net/jpg/02/32/87/95/360_F_232879585_VrjtACAFvzHRuEP8fH8K5EhRkOThuS4G.jpg"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-xl mt-3 text-gray-900">
                    Ryan Dhall
                  </h2>
                  <h3 className="text-gray-500 mb-3">ARCHITECT</h3>
                  <span className="inline-flex text-xl gap-x-2">
                    <Link to="/">
                      <FaFacebookSquare />
                    </Link>
                    <Link to="/">
                      <FaTwitter />
                    </Link>
                    <Link to="/">
                      <FaLinkedin />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
