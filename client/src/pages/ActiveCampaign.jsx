import React from 'react'

const ActiveCampaign = () => {
  return (
    <div className="container py-4 py-xl-5">
      <div className="row mb-5">
        <div className="mx-auto">
          <h3>Explore Our Active Campaigns and Be a Catalyst for Good!</h3>
        </div>
      </div>
      <div className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle rounded-pill shadow"
          aria-expanded="false"
          data-bs-toggle="dropdown"
          type="button"
        >
          Filter By{" "}
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">
            Research Funding
          </a>
          <a className="dropdown-item" href="#">
            Sholarship
          </a>
          <a className="dropdown-item" href="#">
            Third Item
          </a>
        </div>
      </div>

      <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3"></div>
    </div>
  );
}

export default ActiveCampaign
