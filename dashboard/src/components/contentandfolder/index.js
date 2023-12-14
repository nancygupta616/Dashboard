import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../navbar/index";

const ContentAndFolders = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get(
        //   "http://localhost:3000/display-dashboard"
        // );
         
        // setData(response.data); 
        // console.log(response);
        // console.log(response.data);
        // Assuming the response is an array
        data = [
          {
            "Name": "Content A",
            "Tags": "Tag A, Tag B",
            "Source": "Google Drive",
            "Created By": "Nancy",
            "Created Date": "1/1/2022",
            "Modified By": "Teja",
            "Modified Date": "2/1/2022",
            "Size": "2 MB",
          },
          {
            "Name": "Content A",
            "Tags": "Tag A, Tag B",
            "Source": "Google Drive",
            "Created By": "Nancy",
            "Created Date": "1/1/2022",
            "Modified By": "Teja",
            "Modified Date": "2/1/2022",
            "Size": "2 MB",
          },
        ];
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []); // Run only once when the component mounts

  // Render your component with the fetched data
  return (
    <div>
      <div className="px-3">
        <Navbar />
        <div className="container-fluid">
          <div className="col-md-3">
            <button className="btn btn-circle btn-secondary" type="button">
              Add
            </button>
            <div>Root Marketing 2023 Gated Content</div>
            <div className="btn-group dropdown-home">
              <button
                className="btn btn-secondary btn-sm dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Small button
              </button>
              <button
                className="btn btn-secondary btn-sm dropdown-home"
                type="button"
              >
                Small split button
              </button>
            </div>
          </div>
        </div>

        <table className="table table-border">
          <thead>
            <tr>
              <th>Name</th>
              <th>Tags</th>
              <th>Source</th>
              <th>Created By</th>
              <th>Created Date</th>
              <th>Modified By</th>
              <th>Modified Date</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.Name}>
                <td>{item.Name}</td>
                <td>{item.Tags}</td>
                <td>{item.Source}</td>
                <td>{item["Created By"]}</td>
                <td>{item["Created Date"]}</td>
                <td>{item["Modified By"]}</td>
                <td>{item["Modified Date"]}</td>
                <td>{item.Size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContentAndFolders;
