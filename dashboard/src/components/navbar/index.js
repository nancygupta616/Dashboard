import React from 'react';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';


function navbar() {
  return (
    <div className="navbar">
      <nav className="navbar navbar-expand-sm navbar-white bg-white pd-5">
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <div className="src">
            <span className="form-control mr-sm-1 d-flex align-items-center search-container">
              <span className="revspire-text">RevSpire Enablement</span>
              <i className="bi bi-search fs-4 me-3"></i>
              <input
                className="form-control"
                type="text"
                placeholder="Search"
              />
            </span>
          </div>

          <ul className="navbar-nav ms-auto mt-1 mt-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Nancy Gupta
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <a className="dropdown-item" href="#">
                  Profile
                </a>
                <a className="dropdown-item" href="#">
                  Setting
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default navbar;
