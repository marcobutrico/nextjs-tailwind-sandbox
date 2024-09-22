"use client";
import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { BsChevronExpand } from "react-icons/bs";

const cities = [
  "Santo André",
  "São Bernardo do Campo",
  "São Caetano",
  "Diadema",
  "Mauá",
  "New York City",
  "Berlin",
  "Teeran",
  "Medellín",
  "Madrid",
];

const CustomSelectBox = () => {
  const [selectedCity, setSelectedCity] = useState("São Bernardo do Campo");
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen((prev) => !prev)}
      className="bg-gray-100 flex flex-col justify-center items-center w-fit"
    >
      <div className={'flex flex-row justify-between items-center bg-white'}>
      {/* "flex flex-row justify-between items-center bg-white my-2 p-2 rounded-lg cursor-pointer"> */}
        {selectedCity}
        <BsChevronExpand className="ml-2 text-gray-400" />
      </div>
      <div
        className={`flex flex-col bg-white w-48 my-2 rounded-lg ${
            open ? "opacity-100 h-auto" : "opacity-0 h-0"
         } transition-all duration-200 overflow-hidden absolute top-16 left-0`}
      >
        {cities.map((item) => (
          <div key={item}>
            <AiOutlineCheck />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSelectBox;
