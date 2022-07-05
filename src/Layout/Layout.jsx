import React from "react";
import { Link } from "react-router-dom";
import { FaBeer } from "react-icons/fa";

const Layout = ({ children, route, title }) => {
  const pathname = window.location.pathname;
  return (
    <div className="drawer drawer-side flex bg-gray-100 ">
      <div className="drawer-overlay bg-gray-200 w-20 sm:w-60">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <div className="py-5 px-5 hidden sm:block">
          <h1 className="text-xl font-bold">Internet of Things</h1>
        </div>
        <div className="flex justify-center items-center py-5 sm:hidden">
          <h1 className="text-xl font-bold">IoT</h1>
        </div>
        {/* mobile */}
        <ul className="text-base-content p-2 sm:hidden">
          {route.map((router, i) => {
            return (
              <li
                className={`m-2 flex items-center px-2 py-2 rounded-xl ${
                  pathname == router.path ? "bg-amber-600" : null
                }`}
                key={i}
              >
                <Link to={router.path}>
                  <FaBeer
                    className={`text-[30px] ${
                      pathname == router.path ? "text-white" : "text-black"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
        {/* desktop */}
        <ul className="text-base-content p-2 hidden sm:block">
          {route.map((router, i) => {
            return (
              <Link to={router.path} className="text-black" key={i}>
                <li
                  className={`m-2 flex items-center px-5 py-3 rounded-xl ${
                    pathname == router.path ? "bg-amber-600" : null
                  }`}
                >
                  <div
                    className={`flex flex-row space-x-2 text-xl ${
                      pathname == router.path ? "text-white" : "text-black"
                    }`}
                  >
                    <FaBeer />
                    <p>{router.name}</p>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="drawer-content flex-1 overflow-hidden ">
        <div className="bg-amber-600 w-full h-20 flex items-center justify-center">
          <h1 className="font-bold text-xl">{title}</h1>
        </div>
        <div className="py-6">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
