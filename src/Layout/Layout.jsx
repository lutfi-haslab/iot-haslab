import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="drawer drawer-side flex">
      <div className="drawer-overlay border-r-2 w-20 sm:w-60">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <div className="w-full p-5">
          <img src="../assets/iot-logo.jpeg" alt="" srcset="" />
        </div>
        {/* mobile */}
        <ul className="flex -mt-[10px] menu bg-base-100 text-base-content visible sm:invisible">
          <li className="self-center">
            <Link to={"/detail"}>
              <ion-icon name="apps-outline" size="large"></ion-icon>
            </Link>
          </li>
          <li className="self-center">
            <a>
              <ion-icon name="apps-outline" size="large"></ion-icon>
            </a>
          </li>
          <li className="self-center">
            <a>
              <ion-icon name="apps-outline" size="large"></ion-icon>
            </a>
          </li>
        </ul>
        {/* desktop */}
        <ul className="flex -mt-[170px] menu bg-base-100 text-base-content invisible sm:visible">
          <li className="">
            <Link to={"/detail"}>
              <ion-icon name="apps-outline" size="large"></ion-icon>
              LMS
            </Link>
          </li>
          <li className="">
            <a>
              <ion-icon name="apps-outline" size="large"></ion-icon>
              IoT/Dashboard
            </a>
          </li>
          <li className="">
            <a>
              <ion-icon name="apps-outline" size="large"></ion-icon>
              IoT/Records
            </a>
          </li>
          <li className="">
            <a>
              <ion-icon name="apps-outline" size="large"></ion-icon>
              Blog
            </a>
          </li>
        </ul>
      </div>
      <div className="drawer-content flex-1">
        <div className="bg-red-300 w-full h-20 flex items-center justify-center">
          <h1 className="font-bold text-xl">Internet of Things Platform</h1>
        </div>
        <div className="py-6">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
