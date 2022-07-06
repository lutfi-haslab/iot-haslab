import React, {useState} from "react";
import { AreaChart, GaugeChart } from "@carbon/charts-react";
import moment from "moment";

const ChartMod = ({data, chartOptions}) => {
  const [chartEnable, setChartEnable] = useState([0, 0, 0, 0, 1]);

  const [datas, setData] = useState(data);

  let newDataChart = [];
  datas.map((res) => {
    return newDataChart.push({
      group: res.group,
      date: moment(res.date * 1000).format(),
      value: res.value
    });
  });

  const handle30D = () => {
    setChartEnable([1, 0, 0, 0, 0]);
    const filterData1 = data.filter((item) => {
      if (
        moment() &&
        moment(item.date * 1000).isSameOrAfter(moment().subtract(30, "days"))
      ) {
        return item;
      }
    });
    setData(filterData1);
  };
  const handle15D = () => {
    setChartEnable([0, 1, 0, 0, 0]);
    const filterData1 = data.filter((item) => {
      if (
        moment() &&
        moment(item.date * 1000).isSameOrAfter(moment().subtract(15, "days"))
      ) {
        return item;
      }
    });
    setData(filterData1);
  };
  const handle7D = () => {
    setChartEnable([0, 0, 1, 0, 0]);
    const filterData1 = data.filter((item) => {
      if (
        moment() &&
        moment(item.date * 1000).isSameOrAfter(moment().subtract(7, "days"))
      ) {
        return item;
      }
    });
    setData(filterData1);
  };
  const handle1H = () => {
    setChartEnable([0, 0, 0, 1, 0]);
    const filterData1 = data.filter((item) => {
      if (
        moment() &&
        moment(item.date * 1000).isSameOrAfter(moment().subtract(1, "days"))
      ) {
        return item;
      }
    });
    setData(filterData1);
  };
  const handleLive = () => setChartEnable([0, 0, 0, 0, 1]);

  return (
    <div>
      <div className="flex-2 h-[20rem] border-solid border-2 border-gray-400">
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
          <AreaChart data={newDataChart} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default ChartMod;
