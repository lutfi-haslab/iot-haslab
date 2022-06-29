import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";

const DataRecord = () => {
  return (
    <Layout>
      <div className="flex-row sm:flex flex-wrap space-x-3 space-y-3 justify-center">
        <div className="card w-full sm:w-[30%] bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 clasNames="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <Link to={"/detail"}>
                <button className="btn btn-primary">Buy Now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-full sm:w-[30%] bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 clasNames="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-full sm:w-[30%] bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 clasNames="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-full sm:w-[30%] bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 clasNames="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-full sm:w-[30%] bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 clasNames="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-full sm:w-[30%] bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 clasNames="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DataRecord;
