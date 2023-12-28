import React from 'react'
import Card from './Card';

const ActiveCampaign = () => {
  return (
    <div className="container py-4 py-xl-5">
      <div className="row mb-5">
        <div className="mx-auto">
          <h3>Explore Our Active Campaigns and Be a Catalyst for Good!</h3>
        </div>
      </div>
      <div className="row mb-5 d-flex justify-content-between">
        <div className="dropdown w-25">
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
              Personal
            </a>
            <a className="dropdown-item" href="#">
              Research Funding
            </a>
            <a className="dropdown-item" href="#">
              Sholarship Funding
            </a>
          </div>
        </div>
        <div className="w-50 d-flex justify-content-end">
          <button
            className="btn btn-outline-primary rounded-pill"
            type="submit"
          >
            See More
          </button>
        </div>
      </div>

      <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default ActiveCampaign
