import React from 'react'

const Card = ({title, description,image,amount,raised,category}) => {
  return (
    <div onClick={() => console.log("Clicked")}>
      <div className="col">
        <img
          className="flex-shrink-0 fit-cover"
          width="100%"
          height="100%"
          src={image}
        />
        <h5 className="mt-3">{title}</h5>
        <span className="badge rounded-pill bg-primary mb-2">
          {category}
        </span>

        <div className="progress mt-2 " style={{ height: "5px" }}>
          <div
            className="progress-bar progress-bar-striped progress-bar-animated "
            role="progressbar"
            style={{ width: `${(raised / amount) * 100}%` }}
            aria-valuenow={raised }
            aria-valuemin="0"
            aria-valuemax={amount}
          ></div>
        </div>
        <p className="text-muted mb-0">${raised} raised</p>
      </div>
    </div>
  );
}

export default Card
