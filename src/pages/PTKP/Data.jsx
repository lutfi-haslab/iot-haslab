import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import { router } from "../../../route";
import { CSVLink } from "react-csv";
import moment from "moment";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TableFooter
} from "@mui/material";

let datas = [
  {
    id: 1,
    pH: "7",
    temp: "35",
    tds: "120",
    tss: "3.5",
    unix: "1654815637",
  },
  {
    id: 2,
    pH: "7.2",
    temp: "35",
    tds: "110",
    tss: "3.5",
    unix: "1655247637",
  },
  {
    id: 3,
    pH: "7",
    temp: "35",
    tds: "120",
    tss: "3.5",
    unix: "1655679637",
  },
  {
    id: 4,
    pH: "7.2",
    temp: "35",
    tds: "110",
    tss: "3.5",
    unix: "1656111637",
  },
  {
    id: 5,
    pH: "7",
    temp: "35",
    tds: "120",
    tss: "3.5",
    unix: "1656457237",
  },
  {
    id: 6,
    pH: "7.2",
    temp: "35",
    tds: "110",
    tss: "3.5",
    unix: "1656802837",
  },
  {
    id: 7,
    pH: "7.2",
    temp: "35",
    tds: "110",
    tss: "3.5",
    unix: "1657062932",
  },
  {
    id: 8,
    pH: "7.2",
    temp: "35",
    tds: "110",
    tss: "3.5",
    unix: "1657322132",
  },
  {
    id: 9,
    pH: "7.2",
    temp: "35",
    tds: "110",
    tss: "3.5",
    unix: "1657494932",
  },
  {
    id: 10,
    pH: "7.2",
    temp: "35",
    tds: "110",
    tss: "3.5",
    unix: "1657667732",
  },
  {
    id: 11,
    pH: "7.2",
    temp: "35",
    tds: "110",
    tss: "3.5",
    unix: "1657840532",
  },
  {
    id: 12,
    pH: "7.2",
    temp: "35",
    tds: "110",
    tss: "3.5",
    unix: "1658013332",
  },
  {
    id: 13,
    pH: "7.2",
    temp: "35",
    tds: "110",
    tss: "3.5",
    unix: "1658358932",
  },
];


export const Data = () => {
  const [selected, setSelected] = useState([1, 0, 0, 0]);
  const [data, setData] = useState(datas);
  const [downloadData, setDownloadData] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleAll = () => {
    setSelected([1, 0, 0, 0]);
    setDownloadData([]);
    setData(datas);
  };
  const handle30D = () => {
    setSelected([0, 1, 0, 0]);
    setDownloadData([]);
    const filterData1 = datas.filter((item) => {
      if (
        moment() &&
        moment(item.unix * 1000).isSameOrAfter(moment().subtract(30, "days"))
      ) {
        return item;
      }
    });
    if(filterData1.length > 0){
      setData(filterData1);
    } else {
      setData(datas);
    }
  };
  const handle15D = () => {
    setSelected([0, 0, 1, 0]);
    setDownloadData([]);
    const filterData1 = datas.filter((item) => {
      if (
        moment() &&
        moment(item.unix * 1000).isSameOrAfter(moment().subtract(15, "days"))
      ) {
        return item;
      }
    });
    if(filterData1.length > 0){
      setData(filterData1);
    } else {
      setData(datas);
    }
  };
  const handle7D = () => {
    setSelected([0, 0, 0, 1]);
    setDownloadData([]);
    const filterData1 = datas.filter((item) => {
      if (
        moment() &&
        moment(item.unix * 1000).isSameOrAfter(moment().subtract(7, "days"))
      ) {
        return item;
      }
    });
    if(filterData1.length > 0){
      setData(filterData1);
    } else {
      setData(datas);
    }
  };

  let key = Object.keys(data[0]);
  data.map((res, i) => {
    let val = Object.values(res).slice(1, -1);
    let valDate = Object.values(res).reverse();
    downloadData.push({
      id: i + 1,
      [key]: val,
      dates: moment(valDate[0] * 1000).format(),
    });
  });


  return (
    <Layout route={router.init.ptkp} title="PTKP SPARING IoT Platform">
      <div className="flex flex-row justify-between m-5">
        <CSVLink
          data={downloadData}
          filename={"download.csv"}
          className="btn btn-primary"
          target="_blank"
        >
          Download me
        </CSVLink>
        <div>
          <p>Filter Dates:</p>
          <button
            className={`btn btn-sm rounded-none flex-1 ${
              selected[0] ? "bg-blue-500" : "bg-gray-500"
            }`}
            onClick={handleAll}
          >
            All
          </button>
          <button
            className={`btn btn-sm rounded-none flex-1 ${
              selected[1] ? "bg-blue-500" : "bg-gray-500"
            }`}
            onClick={handle30D}
          >
            30D
          </button>
          <button
            className={`btn btn-sm rounded-none flex-1 ${
              selected[2] ? "bg-blue-500" : "bg-gray-500"
            }`}
            onClick={handle15D}
          >
            15D
          </button>
          <button
            className={`btn btn-sm rounded-none flex-1 ${
              selected[3] ? "bg-blue-500" : "bg-gray-500"
            }`}
            onClick={handle7D}
          >
            7D
          </button>
        </div>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                { data.length > 0 ? 
                Object.keys(data[0]).map((res, i) => {
                  return (
                    <TableCell key={i}>{Object.keys(data[0])[i].toUpperCase()}</TableCell>
                  );
                }): <TableCell>No Data</TableCell>}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.length > 0 ? (rowsPerPage > 0
                ? data.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : data
              ).map((res, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>{i + 1}</TableCell>
                    {Object.values(res)
                      .slice(1, -1)
                      .map((j, item) => {
                        return <TableCell key={item.id}>{j}</TableCell>;
                      })}
                    <TableCell>{moment(res.unix * 1000).format()}</TableCell>
                  </TableRow>
                );
              }): <TableRow><TableCell>No Data</TableCell></TableRow>}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[10, 20, 30, { label: "All", value: -1 }]}
                  colSpan={3}
                  count={data.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </div>
    </Layout>
  );
};
