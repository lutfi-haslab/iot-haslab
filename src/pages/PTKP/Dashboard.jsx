import React, { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";
import { useAtom } from "jotai";
import { router } from "../../../route";
import { AreaChart, GaugeChart } from "@carbon/charts-react";
import moment from "moment";
import ChartMod from "../../components/ChartMod";
import { chartData, chartData2, chartOptions } from '../../dummy/dashboard';



export const Dashboard = () => {

  let newData = [];
  chartData.map((res, i) => {
    Object.keys(res).slice(3,-1).map((j,i) =>{    
      newData.push({
        group: Object.keys(res).slice(3,-1)[i],
        date: res.date,
        value: Object.values(res).slice(3,-1)[i]
      })
    })
    
  })

  console.log(newData)
 

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
      <div className="flex-1 sm:flex-row flex-col justify-center mx-3 ">
        <ChartMod data={newData} chartOptions={chartOptions} />
        <div className="flex-1 h-[20rem] w-full border-solid border-2 border-gray-400 my-2 flex  justify-center items-center">
          <GaugeChart data={dataGauge} options={optionGauge} />
        </div>
        <div className="flex-1 h-[20rem] border-solid border-2 border-gray-400 my-2 flex  justify-center items-center">
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
