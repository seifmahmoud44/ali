import Cookies from "js-cookie";
import React from "react";

const Navbar = ({ dark, setDark }) => {
  return (
    <div className="">
      <div className="w-[80%] m-auto flex justify-between items-center h-20">
        <h1 className="text-3xl font-bold dark:text-blue-600">Ali Test</h1>
        <button
          onClick={() => {
            setDark(!dark);
            Cookies.set("dark", !dark);
          }}
          className="text-xl bg-blue-600 rounded-md p-2 text-white "
        >
          {`${Cookies.get("dark") === "true" ? "light" : "dark"}`}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
