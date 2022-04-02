import React, { useState } from "react";
import Phones from "../Phones/Phones";

const Shop = () => {
  const [searchText, setSearchText] = useState("");
  const [phones, setPhones] = useState([]);

  const getSearchText = (e) => {
    setSearchText(e.target.value);
  };
  const searchPhone = () => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPhones(data.data));
    setSearchText(" ");
  };

  return (
    <div>
      <div className="flex justify-center  mt-5">
        <input
          onKeyUp={getSearchText}
          type="text"
          id="email-adress-icon"
          className="block p-2 pl-10 w-1/3 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Phone"
        />

        <button
          onClick={searchPhone}
          className="relative mt-2 inline-flex items-center justify-center p-0.5 mb-2 mr-2 ml-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Search
          </span>
        </button>
      </div>
      <div className="md:grid grid-cols-4 mt-8">
        {phones.map((phone) => (
          <Phones phone={phone} key={phone.slug}></Phones>
        ))}
      </div>
    </div>
  );
};

export default Shop;
