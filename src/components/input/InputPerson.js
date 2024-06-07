import React from "react";

const InputPerson = () => {
  return (
    <div className="pl-2 border w-[400px] flex items-center gap-2 rounded-lg border-[#333]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>

      <div className="relative flex items-end w-full h-full">
        <p className="absolute top-0 text-left">Passenger</p>
        <select className="flex-1 w-full rounded-lg outline-none">
          <option value="someOption">1 adults</option>
          <option value="otherOption">2 adult</option>
        </select>
      </div>
    </div>
  );
};

export default InputPerson;
