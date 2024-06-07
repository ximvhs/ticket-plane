import React from "react";

const InputDiscount = () => {
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
          d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
        />
      </svg>

      <div className="flex flex-col justify-start w-full items-starth-14">
        <input
          type="text"
          placeholder="Promation code"
          className="w-full h-12 rounded-lg outline-none"
        />
      </div>
    </div>
  );
};

export default InputDiscount;
