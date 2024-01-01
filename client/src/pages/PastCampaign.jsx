import React from 'react'
import Card from './Card';
import axios from "axios";
import { useEffect } from "react";
const PastCampaign = () => {
  const [fundraisers, setFundraisers] = React.useState();
  const [drives, setDrives] = React.useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get("fundraise/false");
        setFundraisers(response1.data.data);

        const response2 = await axios.get("drive/false");
        setDrives(response2.data.data);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); 
  const handleClick = (type) => {
    console.log(type +"this is fetched")
    if(type==="Fundraiser"){
      const fetchData = async () => {
        try {
          const response = await axios.get(`fundraise/false`);
          setFundraisers(response.data.data);
          setDrives(null)
        } catch (error) {
          console.error("Error fetching data:", error);
        }
    };
    fetchData();
    }  
    else if(type==="Drives"){
      
      const fetchData = async () => {
        try {
          const response = await axios.get(`drive/false`);
          setDrives(response.data.data);
          setFundraisers(null)
        } catch (error) {
          console.error("Error fetching data:", error);
        }
    };
    fetchData();
    }
  }
  return (
    <div className="container py-4 py-xl-5" id ="past">
      <div className="row mb-5">
        <div className="mx-auto">
          <h3>
            Rewind Through Our Past Campaigns and Celebrate the Difference Made
            Together!
          </h3>
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
            <a className="dropdown-item" onClick={()=>{handleClick("Drives")}} style={{ cursor: 'pointer' }}>
              Drives
            </a>
            <a className="dropdown-item" onClick={()=>{handleClick("Fundraiser")}} style={{ cursor: 'pointer' }}>
              Fundraiser
            </a>
          </div>
        </div>
      </div>

      <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
        {fundraisers &&
          fundraisers.map((fundraiser, idx) => (
            <Card
              campaign={true}
              key={idx}
              title={fundraiser.title}
              description={fundraiser.description}
              image={fundraiser.imgUrl}
              amount={fundraiser.goalAmount}
              raised={fundraiser.currentAmount}
              idx={fundraiser.fundraiseId}
              category={fundraiser.type}
              ended={true}
            />
          ))}

        {drives &&
          drives.map((drive, idx) => (
            <Card
              campaign={false}
              key={idx}
              title={drive.title}
              description={drive.description}
              image={drive.imgUrl}
              category={drive.type}
              idx={drive.driveId}
              ended={true}
            />
          ))}
      </div>
    </div>
  );
}

export default PastCampaign
