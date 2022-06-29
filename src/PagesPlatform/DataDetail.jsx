import React from "react";
import Layout from "../Layout/Layout";

const DataDetail = () => {
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Director",
      selector: (row) => row.director,
      sortable: true,
    },
    {
      name: "Genres",
      selector: (row) => row.genres,
      sortable: true
    },
    {
      name: "Year",
      selector: (row) => row.year,
      sortable: true,
    },
  ];

  const data = [
    {
      "title": "Beetlejuice",
      "year": "1988",
      "genres": ["Comedy", "Fantasy"],
      "director": "Tim Burton",
    },
    {
      id: 2,
      "title": "The Cotton Club",
      "year": "1984",
      "runtime": "127",
      "genres": ["Crime", "Drama", "Music"],
      "director": "Francis Ford Coppola",
    },
  ];

  const tableData = {
    columns,
    data,
  };

  return (
    <Layout>
      <div>
       
      </div>
    </Layout>
  );
};

export default DataDetail;
