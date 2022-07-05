import React, {useState} from "react";
import Layout from "../../Layout/Layout";
import { router } from "../../../route";
import { AreaChart } from "@carbon/charts-react";

export const Data = () => {
  const [options] = useState({
    "title": "Area (time series)",
    "axes": {
      "bottom": {
        "title": "2019 Annual Sales Figures",
        "mapsTo": "date",
        "scaleType": "time"
      },
      "left": {
        "mapsTo": "value",
        "title": "Conversion rate",
        "scaleType": "linear"
      }
    },
    "height": "400px"
  })
  const [data] = useState([
    {
      "group": "Dataset 1",
      "date": "2018-12-31T17:00:00.000Z",
      "value": 0
    },
    {
      "group": "Dataset 1",
      "date": "2019-01-05T17:00:00.000Z",
      "value": 57312
    },
    {
      "group": "Dataset 1",
      "date": "2019-01-07T17:00:00.000Z",
      "value": 21432
    },
    {
      "group": "Dataset 1",
      "date": "2019-01-14T17:00:00.000Z",
      "value": 70323
    },
    {
      "group": "Dataset 1",
      "date": "2019-01-18T17:00:00.000Z",
      "value": 21300
    },
    {
      "group": "Dataset 2",
      "date": "2018-12-31T17:00:00.000Z",
      "value": 50000
    },
    {
      "group": "Dataset 2",
      "date": "2019-01-04T17:00:00.000Z",
      "value": 15000
    },
    {
      "group": "Dataset 2",
      "date": "2019-01-07T17:00:00.000Z",
      "value": 20000
    },
    {
      "group": "Dataset 2",
      "date": "2019-01-12T17:00:00.000Z",
      "value": 39213
    },
    {
      "group": "Dataset 2",
      "date": "2019-01-18T17:00:00.000Z",
      "value": 61213
    },
    {
      "group": "Dataset 3",
      "date": "2019-01-01T17:00:00.000Z",
      "value": 10
    },
    {
      "group": "Dataset 3",
      "date": "2019-01-05T17:00:00.000Z",
      "value": 37312
    },
    {
      "group": "Dataset 3",
      "date": "2019-01-07T17:00:00.000Z",
      "value": 51432
    },
    {
      "group": "Dataset 3",
      "date": "2019-01-12T17:00:00.000Z",
      "value": 40323
    },
    {
      "group": "Dataset 3",
      "date": "2019-01-18T17:00:00.000Z",
      "value": 31300
    }
  ]);

  return (
    <Layout route={router.init.ptkp} title="PTKP SPARING IoT Platform">
      	<AreaChart
			data={data}
			options={options} />
    </Layout>
  );
};
