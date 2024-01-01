import React from 'react'
import Card from './Card';
import axios from 'axios';
import { useEffect } from 'react';


const ActiveCampaign = () => {
  const [fundraisers, setFundraisers] = React.useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("fundraise/true");
        setFundraisers(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const handleClick = (type) => {
    console.log(type +"this is fetched")
    const fetchData = async () => {
      try {
        const response = await axios.get(`fundraise/type/${type}`);
        setFundraisers(response.data.data);
        console.log(response.data.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
  };
  fetchData();
  }
  return (
    <div className="container py-4 py-xl-5">
      <div className="row mb-5">
        <div className="mx-auto">
          <h3>Explore Our <span className="underline">Active Fundraisers</span> and Be a Catalyst for Good!</h3>
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
            <a className="dropdown-item" onClick={()=>{handleClick("Personal")}} style={{ cursor: 'pointer' }}>
              Personal
            </a>
            <a className="dropdown-item" onClick={()=>{handleClick("Research")}} style={{ cursor: 'pointer' }}>
              Research Funding
            </a>
            <a className="dropdown-item" onClick={()=>{handleClick("Scholarship")}} style={{ cursor: 'pointer' }}>
              Scholarship Funding
            </a>
          </div>
        </div>
      </div>

      <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
        {fundraisers && fundraisers.map((fundraiser,idx) => (
          <Card
            
            campaign={true}
            key={idx}
            title={fundraiser.title}
            description={fundraiser.description}
            image={fundraiser.imgUrl}
            amount={fundraiser.goalAmount}
            raised={fundraiser.currentAmount}
            category={fundraiser.type}
            idx={fundraiser.fundraiseId}
          />
        ))
        }
      </div>
    </div>
  );
}

export default ActiveCampaign
