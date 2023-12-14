const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 5000;

const mysql = require("mysql2/promise");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Nancy@1466",
  database: "revspire_db",
});

// dummy data

app.use(cors);
app.get("/display-dashboard", (req, res) => {
  console.log("server is running on 5000");
  // const connection = await mysql.createConnection(dbConfig);

  // Check if the viewer user has an associated profile
  // const [associatedProfiles] = await connection.query(
  //   `"Name": ,
  //    "Tags": ,
  //    "Source": ,
  //   "Created By": ,
  // "Created Date": ,
  // "Modified By": ,
  // "Modified Date": ,
  //  "Size"`,
  //   [viewer_id]
  // );

  const dummyData = [
    {
      Name: "Content A",
      Tags: "Tag A, Tag B",
      Source: "Google Drive",
      "Created By": "Nancy",
      "Created Date": "1/1/2022",
      "Modified By": "Teja",
      "Modified Date": "2/1/2022",
      Size: "2 MB",
    },
    {
      Name: "Content A",
      Tags: "Tag A, Tag B",
      Source: "Google Drive",
      "Created By": "Nancy",
      "Created Date": "1/1/2022",
      "Modified By": "Teja",
      "Modified Date": "2/1/2022",
      Size: "2 MB",
    },
  ];

  return res.status(200).json(dummyData);
});




app.post("/view-content-and-folders-sorted", async (req, res) => {
  const viewer_id = req.body.viewer_id;
  let folder_id = req.body.folder_id;
  const sortOption = req.body.sortOption || "type"; // Default sorting option
  const order = req.body.order || "ASC"; // Default sorting order

  // Validate viewer_id field
  if (!viewer_id) {
    console.error("viewer_id field is missing in the request");
    return res.status(400).json({
      success: false,
      message: "The viewer_id field is mandatory in the request body.",
    });
  }

  try {
    // Establish a new database connection
    const connection = await mysql.createConnection(dbConfig);

    // Check if the viewer user has an associated profile
    const [associatedProfiles] = await connection.query(
      `
            SELECT profile 
            FROM user 
            WHERE id = ?`,
      [viewer_id]
    );

    if (!associatedProfiles.length) {
      console.error("No associated profile found for the viewer user");
      return res.status(400).json({
        success: false,
        message: "The viewer user does not have an associated profile.",
      });
    }

    const viewerProfileId = associatedProfiles[0].profile;

    // Check viewer's permissions
    const [permissions] = await connection.query(
      `
            SELECT content_view_all 
            FROM profile 
            WHERE id = ?`,
      [viewerProfileId]
    );

    if (!permissions.length || permissions[0].content_view_all !== 1) {
      console.error("Viewer lacks permission to view content");
      return res.status(403).json({
        success: false,
        message: "Permission denied: Cannot view content.",
      });
    }

    // Handle root folder ID retrieval
    if (!folder_id) {
      const [rootFolder] = await connection.query(`
                SELECT id 
                FROM folder 
                WHERE name = 'root'`);
      if (rootFolder.length) {
        folder_id = rootFolder[0].id;
      } else {
        console.error("Root folder not found");
        return res
          .status(400)
          .json({ success: false, message: "Root folder not found." });
      }
    }

    // Construct queries for fetching folders and content
    let folderQuery = `
        SELECT f.*, 
        CONCAT(creator.first_name, ' ', creator.last_name) AS created_by, 
        CONCAT(updater.first_name, ' ', updater.last_name) AS updated_by,
        parent.name AS parent_folder_name
        FROM folder f
        LEFT JOIN folder parent ON f.parent_folder = parent.id
        LEFT JOIN user AS creator ON f.created_by = creator.id
        LEFT JOIN user AS updater ON f.updated_by = updater.id
        WHERE f.parent_folder = ?`;

    let contentQuery = `
        SELECT c.*, 
        CONCAT(creator.first_name, ' ', creator.last_name) AS created_by, 
        CONCAT(updater.first_name, ' ', updater.last_name) AS updated_by,
        f.name AS folder_name
        FROM content c
        LEFT JOIN folder f ON c.folder = f.id
        LEFT JOIN user AS creator ON c.created_by = creator.id
        LEFT JOIN user AS updater ON c.updated_by = updater.id
        WHERE c.folder = ?`;

    // Execute queries to fetch folders and content
    const [folders] = await connection.query(folderQuery, [folder_id]);
    const [content] = await connection.query(contentQuery, [folder_id]);

    // Close the database connection
    connection.end();

    // Combine and send the response
    const combinedResult = [...folders, ...content];
    res.json({ success: true, items: combinedResult });
  } catch (error) {
    // Log and handle errors
    console.error(
      "Error occurred in /view-content-and-folders-sorted endpoint:",
      error.message
    );
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
