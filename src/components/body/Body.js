import React from "react";
import InputFrom from "../input/InputFrom";
import InputTo from "../input/InputTo";
import InputPerson from "../input/InputPerson";
import InputDiscount from "../input/InputDiscount";
import Button from "../button/Button";

const Body = () => {
  return (
    <div className="px-10 py-5">
      <div className="flex gap-10 mb-6">
        <label className="flex items-center gap-2 font-semibold">
          <input type="radio" name="myRadio" value="option1" />
          Return
        </label>
        <label className="flex items-center gap-2 font-semibold">
          <input type="radio" name="myRadio" value="option2" />
          One-way
        </label>
        <div className="px-2 border rounded-lg">
          <select className="outline-none">
            <option value="USD">USD</option>
            <option value="VND">VND</option>
          </select>
        </div>
      </div>
      <div className="flex items-center gap-10 mb-8">
        <InputFrom></InputFrom>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#d81920"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
          />
        </svg>
        <InputTo></InputTo>
      </div>
      <div className="flex gap-10">
        <InputPerson></InputPerson>
        <InputDiscount></InputDiscount>
        <div className="flex gap-40">
          <div className="flex items-center gap-3">
            <input type="checkbox" name="" id="" className="w-5 h-5" />
            <p>Find lowest fare</p>
          </div>
          <Button></Button>
        </div>
      </div>
    </div>
  );
};

export default Body;
