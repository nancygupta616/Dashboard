import React from 'react';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';


function navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-white bg-white">
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <span className="form-control mr-sm-2" type="text">
          <input
            className="form-control"
            type="text"
            placeholder="Search"
          />
        </span>

        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
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
  );
}

export default navbar;
