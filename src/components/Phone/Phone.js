import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Phone = () => {
  let { phoneId } = useParams();
  const [phone, setPhone] = useState({});

  useEffect(() => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPhone(data.data));
  }, [phoneId]);

  return (
    <div className="flex justify-center mt-10 pb-7">
      <div>
        <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={phone.image}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {phone.name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
