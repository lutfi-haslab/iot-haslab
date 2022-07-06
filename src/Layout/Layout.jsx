import React from "react";
import { Link } from "react-router-dom";
import { FaBeer } from "react-icons/fa";

const Layout = ({ children, route, title }) => {
  const pathname = window.location.pathname;
  return (
    <div className="bg-gray-100">
      <div className="fixed drawer bg-gray-200 w-[15%] md:w-[20%] items-start">
        <div className="hidden md:block">
          <div className="flex justify-center py-10">
            <h1 className="text-xl font-bold">Internet of Things</h1>
          </div>
          {/* desktop */}
          <div className="py-5">
            <ul className="text-base-content hidden md:block">
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
        </div>
        <div className="flex flex-col md:hidden">
          <div className="flex justify-center  py-10">
            <h1 className="text-xl font-bold">IoT</h1>
          </div>
          {/* mobile */}
          <div className="flex justify-center">
            <ul className="text-base-content md:hidden">
              {route.map((router, i) => {
                return (
                  <li
                    className={`flex items-center px-4 py-2 rounded-xl ${
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
          </div>
        </div>
      </div>
      <div className="ml-[20%] ">
        <div className="bg-amber-600 w-full h-20 flex items-center justify-center">
          <h1 className="font-bold text-xl">{title}</h1>
        </div>
        <div className="py-6">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
