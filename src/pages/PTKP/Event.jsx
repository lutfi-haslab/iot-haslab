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
];

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export const Event = () => {
  const [selected, setSelected] = useState([1, 0, 0, 0]);
  const [data, setData] = useState(datas);
  const [downloadData, setDownloadData] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(2);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

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
    setData(filterData1);
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

    setData(filterData1);
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

    setData(filterData1);
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

  // const columns = []
  // key.map((res) => {
  //   columns.push({
  //     field: res,
  //     headerName: res
  //   })
  // })
  // console.log(columns)

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
                {Object.keys(data[0]).map((res, i) => {
                  return (
                    <TableCell key={i}>{Object.keys(data[0])[i].toUpperCase()}</TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
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
              })}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[2, 5, 15, { label: "All", value: -1 }]}
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
