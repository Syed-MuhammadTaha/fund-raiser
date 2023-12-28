import React from 'react'

const Card = () => {
  return (
    <div onClick={() => console.log("Clicked")}>
      <div className="col">
        <img
          className="flex-shrink-0 fit-cover"
          width="100%"
          height="100%"
          src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
        />
        <h5 className="mt-3">Lorem libero donec</h5>
        <span className="badge rounded-pill bg-primary mb-2">
          Scholarship Fund
        </span>

        <div className="progress mt-2 " style={{ height: "5px" }}>
          <div
            className="progress-bar progress-bar-striped progress-bar-animated w-75 "
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <p className="text-muted mb-0">$40,000 raised</p>
      </div>
    </div>
  );
}

export default Card
