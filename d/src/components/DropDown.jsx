import { useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const DropDown = () => {
  const [open, setOpen] = useState(false);

  const data = [
    { id: 1, name: "English", path: "/english" },
    { id: 2, name: "Portuguese", path: "/portuguese" },
    { id: 3, name: "French", path: "/french" },
  ];

  return (
    <div className="flex flex-col gap-2 relative w-40 z-20">
      <button
        className="flex justify-between text-gray-500 font-bold border-[1px] border-gray-300 bg-transparent hover:bg-gray-300 focus:ring-1 focus:outline-none focus:ring-gray-300  rounded-lg text-sm px-5 py-2.5 text-center items-center transition-all duration-300 ease-in-out"
        type="button"
        onClick={() => setOpen(!open)}
      >
        {data[0]?.name}
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div
        id="dropdown"
        className={`${
          open ? "flex animate-show" : "hidden"
        } z-1 justify-center bg-gray-200 rounded-lg shadow w-full absolute top-[50px] left-[0px]`}
      >
        <ul className="flex flex-col text-sm  text-gray-700 w-full py-2">
          {data.map((el) => (
            <li key={el.id} className={`${open ? "animate-show" : ""} px-2`}>
              <Link
                to={el.path}
                className="grid place-content-center capitalize font-semibold text-gray-900 py-2 hover:bg-gray-300 cursor-pointer transition-all duration-300 ease-in-out rounded-lg drop-shadow-none t-n"
              >
                {el.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
