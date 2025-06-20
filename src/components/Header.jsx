import React, { useState } from "react";
import { Link } from "react-router";
import { NavLink, ProductMenuItems } from "../constants";
import ProductCart from "./ProductCart";
import clsx from "clsx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="relative z-20 flex h-[90px] bg-[#151515]">
      <div className="relative container flex items-center justify-between border-b border-gray-600 md:justify-start md:gap-[42px] lg:justify-between">
        <Link>
          <img
            src="src/assets/shared/desktop/logo.svg"
            alt=""
            height={25}
            width={143}
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="max-lg:hidden">
          <ul className="flex gap-[34px]">
            {NavLink.map(({ label, path }) => (
              <li key={label}>
                <Link className="text-sm leading-6 font-bold tracking-[2px] text-white uppercase">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:ml-auto lg:ml-0">
          <Link>
            <img src="src/assets/shared/desktop/icon-cart.svg" alt="" />
          </Link>
        </div>

        <div className="md: -order-1 lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
            <img src="src/assets/shared/tablet/icon-hamburger.svg" alt="" />
          </button>
        </div>

        {/* MENU SMALL DEVICE */}
        {/* <div
          className={clsx(
            "absolute inset-x-0 top-full -translate-x-full transition-all duration-700 ease-in-out max-lg:px-6 max-md:px-6 max-sm:px-4 md:translate-x-0 md:-translate-y-full md:px-10 lg:hidden",
            isOpen
              ? "translate-x-0 opacity-100 md:translate-y-0"
              : "pointer-events-none opacity-0",
          )}
        > */}
        <div
          className={clsx(
            "pointer-events-none absolute inset-x-0 top-full overflow-hidden max-lg:px-6 max-md:px-6 max-sm:px-4 md:px-10 lg:hidden",
            isOpen && "pointer-events-auto",
          )}
        >
          <ul
            className={clsx(
              "grid h-full -translate-x-full grid-cols-1 gap-y-[68px] pt-[84px] pb-[35px] opacity-0 transition-all duration-700 ease-in-out md:translate-x-0 md:-translate-y-full md:grid-cols-3 md:gap-x-[10px] md:gap-y-0 md:pt-[108px] md:pb-[67px] lg:grid-cols-4 lg:gap-x-[30px]",
              isOpen
                ? "pointer-events-auto translate-x-0 opacity-100 md:translate-y-0"
                : "pointer-events-none opacity-0",
            )}
          >
            {ProductMenuItems.map((item) => (
              <li key={item.image} className="h-full">
                <ProductCart {...item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
