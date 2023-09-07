import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="px-5 md:px-10 fixed top-0 left-0 w-full bg-opacity-10 p-4 backdrop-blur-lg">
      <div className="flex justify-between">
        <div>
          <p>@cjmosquida</p>
        </div>
        <div>
          <ul className=" text-sm flex gap-10 justify-end">
            <li>
              <Link to="/">
                <a href="">Home</a>
              </Link>
            </li>
            <li>
              <Link to="/projects">
                <a href="">Case Studies</a>
              </Link>
            </li>
            {/* <li>
                <a href="">Xperience</a>
              </li>
              <li>
                <a href="">Education</a>
              </li> */}
            <li>
              <Link to="/#contact">
                <a href="">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
