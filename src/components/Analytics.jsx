import React from "react";
import Laptop from "../assets/laptop.jpg";

export const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] uppercase font-bold">
            data analytics dashboard
          </p>
          <h1 className="text-black font-bold md:text-4xl sm:text-3xl text-2xl py-2">
            Manage Data Analytics Centrally
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            incidunt vel culpa numquam non illo aut a saepe hic. Maxime
            perferendis dolorum ipsa modi dolorem unde, aspernatur facilis!
            Modi, id!
          </p>
          <button className="bg-black w-[200px] rounded-md my-6 py-3 font-medium text-[#00df9a] mx-auto md:mx-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
