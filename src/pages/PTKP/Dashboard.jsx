import React, { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";
import { useAtom } from "jotai";
import { router } from "../../../route";
import { AreaChart, GaugeChart } from "@carbon/charts-react";
import moment from "moment";
import ChartMod from "../../components/ChartMod";
import { chartData, chartData2, chartOptions } from "../../dummy/dashboard";
import { userData } from "../../dummy/user";

let newData = [];

export const Dashboard = () => {
  let userProject = [];

  userData.map((res) => {
    res.project.map((item) => {
      console.log(item.nama);
      userProject.push(item.nama);
    });
  });
  console.log(userProject);

  const [optionGauge] = useState({
    title: "Temperature",
    resizable: true,
    height: "15rem",
    width: "85%",
    gauge: {
      type: "semi",
      status: "danger",
    },
  });

  const [dataGauge] = useState([
    {
      group: "value",
      value: 100,
    },
  ]);

  return (
    <Layout route={router.init.ptkp} title="PTKP SPARING IoT Platform">
      <div className="flex-row sm:flex-col justify-center mx-3 mt-10">
        <div className="sm:flex">
          {userProject.map((res, i) => {
            return (
              <div className=" h-[20rem] border-solid border-2 border-gray-400 my-2 flex  justify-center items-center mt-10 ml-10">
                <GaugeChart data={dataGauge} options={optionGauge} />
              </div>
            );
          })}
        </div>
        <div className="sm:flex">
          {userProject.map((res, i) => {
            return (
              <ChartMod
                data={chartData}
                projectId={userProject[i]}
                chartOptions={chartOptions}
              />
            );
          })}
        </div>
        <div className="h-[20rem] border-solid border-2 border-gray-400 my-2 flex  justify-center items-center mt-10 ml-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.4320010115925!2d107.48857715111994!3d-6.838698195033419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e35b747cc1cb%3A0x970e26fdd55d6895!2sPT%20Kertas%20Padalarang!5e0!3m2!1sen!2sid!4v1656604116659!5m2!1sen!2sid"
            width="95%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};
