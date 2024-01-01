import React from "react";
import Card from "./Card";
import axios from "axios";
import { useEffect } from "react";


const ActiveDrive = () => {
  const [drives, setDrives] = React.useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("drive/true");
        setDrives(response.data.data);
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
        const response = await axios.get(`drive/type/${type}`);
        setDrives(response.data.data);
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
          <h3>
            View Our
            <span className="underline"> Active Drives</span> and Witness Impact
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
            <a className="dropdown-item" onClick={()=>{handleClick("Blood")}}>
              Blood Drives
            </a>
            <a className="dropdown-item" onClick={()=>{handleClick("Clothing")}}>
              Clothing Drives
            </a>
            <a className="dropdown-item" onClick={()=>{handleClick("Plantation")}}>
              Plantation Drives
            </a>
          </div>
        </div>
      </div>

      <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
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
            />
          ))}
      </div>
    </div>
  );
};

export default ActiveDrive;
