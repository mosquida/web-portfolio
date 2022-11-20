import React, { useState } from "react";

export default function Navigation() {
  const [toggle, setToggle] = useState(true);
  const toggleTrig = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="px-2 sm:px-4 py-2.5 pt-5">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36.714"
            height="36.714"
            viewBox="0 0 36.714 36.714"
            className=" h-2 sm:h-7 pr-3"
          >
            <g id="Group_35" data-name="Group 35" opacity="0.7">
              <path
                id="Path_105"
                data-name="Path 105"
                d="M0,1.147A1.147,1.147,0,0,1,1.147,0H8.031a1.147,1.147,0,0,1,0,2.295H2.295V8.031A1.147,1.147,0,0,1,0,8.031Zm27.535,0A1.147,1.147,0,0,1,28.683,0h6.884a1.147,1.147,0,0,1,1.147,1.147V8.031a1.147,1.147,0,1,1-2.295,0V2.295H28.683a1.147,1.147,0,0,1-1.147-1.147ZM1.147,27.535a1.147,1.147,0,0,1,1.147,1.147v5.737H8.031a1.147,1.147,0,1,1,0,2.295H1.147A1.147,1.147,0,0,1,0,35.567V28.683a1.147,1.147,0,0,1,1.147-1.147Zm34.419,0a1.147,1.147,0,0,1,1.147,1.147v6.884a1.147,1.147,0,0,1-1.147,1.147H28.683a1.147,1.147,0,1,1,0-2.295h5.737V28.683A1.147,1.147,0,0,1,35.567,27.535ZM9.178,9.178h2.295v2.295H9.178Z"
                transform="translate(0 0)"
              />
              <path
                id="Path_106"
                data-name="Path 106"
                d="M13.473,2H2V13.473H13.473ZM4.295,4.295h6.884v6.884H4.295ZM8.884,22.652H6.589v2.295H8.884Z"
                transform="translate(2.589 2.589)"
              />
              <path
                id="Path_107"
                data-name="Path 107"
                d="M13.473,15.473H2V26.946H13.473ZM4.295,17.768h6.884v6.884H4.295ZM22.652,4h2.295V6.295H22.652Z"
                transform="translate(2.589 5.178)"
              />
              <path
                id="Path_108"
                data-name="Path 108"
                d="M10.295,2H21.768V13.473H10.295Zm2.295,2.295v6.884h6.884V4.295ZM8,15.768v4.589h2.295v2.295H8v2.295h4.589V20.357h2.295v4.589h2.295V22.652h4.589V20.357H14.884V15.768Zm4.589,4.589H10.295V18.062h2.295Zm9.178,4.589H19.473v2.295H14.884v2.295h6.884Zm-9.178,4.589V27.241H8v2.295Z"
                transform="translate(10.357 2.589)"
              />
              <path
                id="Path_109"
                data-name="Path 109"
                d="M12,10.295h4.589V8H12Z"
                transform="translate(15.535 10.357)"
              />
            </g>
          </svg>

          <span className="self-center text-sm whitespace-nowrap">
            carljustinemosquida
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={toggleTrig}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={
            toggle
              ? "hidden w-full md:block md:w-auto"
              : "w-full md:block md:w-auto"
          }
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4  rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
            <li>
              <a
                href="#"
                className="text-sm font-light block py-2 pr-4 pl-3  rounded hover:bg-gray-600 md:hover:bg-transparent md:border-0 md:p-0 "
              >
                about
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-light block py-2 pr-4 pl-3  rounded hover:bg-gray-600 md:hover:bg-transparent md:border-0 md:p-0 "
              ></a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-light block py-2 pr-4 pl-3  rounded hover:bg-gray-600 md:hover:bg-transparent md:border-0 md:p-0 "
              >
                portfolio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-light block py-2 pr-4 pl-3  rounded hover:bg-gray-600 md:hover:bg-transparent md:border-0 md:p-0 "
              >
                contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23.676"
            height="32.5"
            viewBox="0 0 23.676 32.5"
            className="h-6"
          >
            <path
              id="Path_110"
              data-name="Path 110"
              d="M15.572,25.857v-7.75m0,0a8.872,8.872,0,0,0,2.214-.279m-2.214.279a8.872,8.872,0,0,1-2.214-.279m5.536,11.039a17.8,17.8,0,0,1-6.643,0m5.536,3.518a21.267,21.267,0,0,1-4.429,0m5.536-6.528v-.283a4.107,4.107,0,0,1,2.226-3.419,11.072,11.072,0,1,0-11.1,0,4.109,4.109,0,0,1,2.228,3.419v.283"
              transform="translate(-3.734 -0.752)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
}
