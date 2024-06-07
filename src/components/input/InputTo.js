import React from "react";

const InputTo = () => {
  return (
    <div className="border w-[400px] flex items-center gap-2 rounded-lg border-[#333]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-8"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
      <div className="relative flex flex-col">
        <label className="absolute left">To</label>
        <input
          type="text"
          placeholder="To"
          className="flex flex-1 pt-6 pl-2 border-r-2 outline-none h-14 w-[240px]"
        />
      </div>
      <div className="flex flex-col items-start">
        <span className="text-[12px]">Return date</span>
        <span>08/06/2024</span>
      </div>
    </div>
  );
};

export default InputTo;
