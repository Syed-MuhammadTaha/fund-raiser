import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Card = ({ title, description, image, amount, raised, category, idx, campaign }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <div
      onClick={() => {
        navigate(
          `/${campaign ? "fundraiser" : "drive"}/${
            campaign ? "donate" : "volunteer"
          }/${idx }`
        );
      }}
      className="col"
      style={{ cursor: "pointer" }}
    >
      <div
        className="col"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        style={{
          transform: isHovered ? "scale(1.1)" : "scale(1)",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <img
          className="flex-shrink-0 fit-cover"
          width="100%"
          height="250px"
          src={image}
        />
        <h5 className="mt-3">{title}</h5>

        {campaign ? (
          <div>
            <span className="badge rounded-pill bg-primary mb-2">
              {category}
            </span>
            <div className="progress mt-2 " style={{ height: "5px" }}>
              <div
                className="progress-bar progress-bar-striped progress-bar-animated "
                role="progressbar"
                style={{ width: `${(raised / amount) * 100}%` }}
                aria-valuenow={raised}
                aria-valuemin="0"
                aria-valuemax={amount}
              ></div>
            </div>
            <p className="text-muted mb-0">${raised} raised</p>
          </div>
        ) : (
          <>
            <span className="badge rounded-pill bg-secondary text-dark mb-2">
              {category}
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export default Card
