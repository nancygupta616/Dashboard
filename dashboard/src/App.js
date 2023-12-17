import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ContentAndFolders from './components/contentandfolder';
import Sidebar from './components/sidebar';

function App() {
  return (
    <>      
      <div className="container-fluid bg-white vh-50">
        <div className="row">
          <div className="col-2 bg-secondary min-vh-100">
            <Sidebar />
          </div>
          <div className="col-3">
            <ContentAndFolders />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
