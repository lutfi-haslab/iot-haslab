import React, { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";
import { useAtom } from "jotai";
import { router } from "../../../route";
import { AreaChart, GaugeChart } from "@carbon/charts-react";

export const Dashboard = () => {
  const [chart30D, set30D] = useState(false);
  const [chart15D, set15D] = useState(false);
  const [chart7D, set7D] = useState(false);
  const [chart1H, set1H] = useState(false);
  const [chartLive, setLive] = useState(true);
  const [chartEnable, setChartEnable] = useState([0, 0, 0, 0, 1]);

  const [options] = useState({
    title: "Temp",
    legend: {
      enabled: false,
    },
    bounds: {
      upperBoundMapsTo: "max",
      lowerBoundMapsTo: "min",
    },
    axes: {
      bottom: {
        mapsTo: "date",
        scaleType: "time",
      },
      left: {
        mapsTo: "value",
        scaleType: "linear",
      },
    },
    curve: "curveNatural",
    height: "17rem",
    width: "95%",
  });

  const [optionGauge] = useState({
    title: "Temperature",
    resizable: true,
    height: "17rem",
    width: "95%",
    gauge: {
      type: "semi",
      status: "danger",
    },
  });
  const [data] = useState([
    {
      group: "Dataset 1",
      date: "2018-12-31T17:00:00.000Z",
      value: 100,
      min: 20,
      max: 300,
    },
    {
      group: "Dataset 1",
      date: "2019-01-04T17:00:00.000Z",
      value: 120,
      min: 20,
      max: 300,
    },
    {
      group: "Dataset 1",
      date: "2019-01-07T17:00:00.000Z",
      value: 200,
      min: 20,
      max: 300,
    },
    {
      group: "Dataset 1",
      date: "2019-01-12T17:00:00.000Z",
      value: 100,
      min: 20,
      max: 300,
    },
    {
      group: "Dataset 1",
      date: "2019-01-18T17:00:00.000Z",
      value: 100,
      min: 20,
      max: 300,
    },
  ]);
  const [dataGauge] = useState([
    {
      group: "value",
      value: 100,
    },
  ]);

  const handle30D = () => setChartEnable([1, 0, 0, 0, 0]);
  const handle15D = () => setChartEnable([0, 1, 0, 0, 0]);
  const handle7D = () => setChartEnable([0, 0, 1, 0, 0]);
  const handle1H = () => setChartEnable([0, 0, 0, 1, 0]);
  const handleLive = () => setChartEnable([0, 0, 0, 0, 1]);

  return (
    <Layout route={router.init.ptkp} title="PTKP SPARING IoT Platform">
      <div className="flex sm:flex-row flex-col justify-center mx-3 ">
        <div className="flex-1 h-[20rem] border-solid border-2 border-gray-400 sm:w-[20rem] m-2">
          <div className="flex mx-2 mt-2">
            <button
              className={`btn btn-sm rounded-none flex-1 ${
                chartEnable[0] ? "bg-blue-500" : "bg-gray-500"
              }`}
              onClick={handle30D}
            >
              30 D
            </button>
            <button
              className={`btn btn-sm rounded-none flex-1 ${
                chartEnable[1] ? "bg-blue-500" : "bg-gray-500"
              }`}
              onClick={handle15D}
            >
              15 D
            </button>
            <button
              className={`btn btn-sm rounded-none flex-1 ${
                chartEnable[2] ? "bg-blue-500" : "bg-gray-500"
              }`}
              onClick={handle7D}
            >
              7 D
            </button>
            <button
              className={`btn btn-sm rounded-none flex-1 ${
                chartEnable[3] ? "bg-blue-500" : "bg-gray-500"
              }`}
              onClick={handle1H}
            >
              1 H
            </button>
            <button
              className={`btn btn-sm rounded-none flex-1 ${
                chartEnable[4] ? "bg-blue-500" : "bg-gray-500"
              }`}
              onClick={handleLive}
            >
              LIVE
            </button>
          </div>
          <div>
            <AreaChart data={data} options={options} />
          </div>
        </div>
        <div className="flex-1 h-[20rem] border-solid border-2 border-gray-400 sm:w-[20rem] m-2 flex  justify-center items-center">
          <GaugeChart data={dataGauge} options={optionGauge} />
        </div>
        <div className="flex-1 h-[20rem] border-solid border-2 border-gray-400 sm:w-[20rem] m-2 flex  justify-center items-center">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.4320010115925!2d107.48857715111994!3d-6.838698195033419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e35b747cc1cb%3A0x970e26fdd55d6895!2sPT%20Kertas%20Padalarang!5e0!3m2!1sen!2sid!4v1656604116659!5m2!1sen!2sid" width="95%" height="100%" ></iframe>
        </div>
      </div>
    </Layout>
  );
};
