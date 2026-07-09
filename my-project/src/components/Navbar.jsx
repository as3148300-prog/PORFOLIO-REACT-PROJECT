import React from "react";
import { navLinks, navIcons } from "../constents";
import dayjs from "dayjs";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-5 text-white">
      <div className="flex items-center gap-5">
        <img className="h-7" src="/images/logo.svg" alt="logo" />

        <p className="font-bold text-2xl">
          Areeb's Portfolio
        </p>

        <div className="flex gap-8 ml-10">
          {navLinks.map((item) => (
            <h3
              key={item.id}
              className="text-xl cursor-pointer hover:underline"
            >
              {item.name}
            </h3>
          ))}
        </div>
      </div>

      <ul className="flex items-center gap-5">
        {navIcons.map((item) => (
          <li key={item.id}>
            <img className="h-5" src={item.img} alt="" />
          </li>
        ))}

        <time className="font-bold">
          {dayjs().format("ddd MMM D h:mm A")}
        </time>
      </ul>
    </nav>
  );
};

export default Navbar;