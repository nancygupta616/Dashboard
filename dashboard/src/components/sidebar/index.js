import React from 'react';
import '../../App.css';

function sidebar() {
  return (
    <div className="bg-white sidebar p-2">
      <div className="m-2">
        <i className="bi bi-bootstrap-fill me-3 fs-4"></i>
        <span className="brand-name fs-4">Terroni</span>
      </div>
      <hr className="text-dark" />
      <div className="list-group list-group-flush">
        <a className="list-group-item py-2">
          <i className="bi bi-speedometer2 fs-5 me-3"></i>
          <span className="fs-6">Content Portal</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-table fs-4 me-3"></i>
          <span className="fs-6">Pitch Manager</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-calendar fs-4 me-3"></i>
          <span className="fs-6">Tag Manager</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-users fs-4 me-3"></i>
          <span className='fs-6'>About</span>
        </a>
      </div>
    </div>
  );
}

export default sidebar;