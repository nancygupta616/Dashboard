import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../navbar/index";

const ContentAndFolders = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/data");
        setData(response.data.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  // Render your component with the fetched data
  return (
    <div>
      <div className="px-3">
        <Navbar />
        <div className="container-fluid">
          <div className="col-md-3">
            <button className="circle" type="button">
              Add
            </button>
            <div class="single-row">
              <div>Root</div>
              <div>Marketing</div>
              <div>2023</div>
              <div>Gated</div>
              <div>Content</div>
            </div>
            <div className="btn-group dropdown-home">
              <button
                className="round-button btn-sm dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort
              </button>
              <button
                className="round-button btn-sm dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Filter
              </button>
            </div>
          </div>
        </div>

        <table className="table table-border">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Source</th>
              <th>Folder</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Created By</th>
              <th>Updated By</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.source}</td>
                <td>{item.folder}</td>
                <td>{item.created_at}</td>
                <td>{item.updated_at}</td>
                <td>{item.created_by}</td>
                <td>{item.updated_by}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContentAndFolders;
