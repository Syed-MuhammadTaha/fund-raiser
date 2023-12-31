import React from 'react'

const StartFundraiser = () => {
  return (
    <div className="container py-4 py-xl-5">
      <div className="row mb-5">
        <div className="col-md-8 col-xl-10 text-center mx-auto">
          <h2 className="display-6 fw-bold mb-4">
            Spark Change: Launch Your Fundraiser, Amplify Impact, and Make a
            Difference&nbsp;
            <span className="underline">Today</span>!
          </h2>
        </div>
      </div>
      <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
        <div className="col">
          <div className="card border-0 h-100">
            <div className="card-body d-flex flex-column justify-content-between p-4">
              <div>
                <h4 className="display-5 fw-bold mb-4">Research funding</h4>
              </div>

              <p>
                Fueling Discovery: Contribute to our research funding initiative
                and be a vital part of groundbreaking advancements. Your support
                accelerates progress, turning curiosity into solutions that
                shape a better future for all.
              </p>
              <a className="btn btn-primary" role="button" href="/fundraiser">
                Create Now
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-secondary border-2 h-100">
            <div className="card-body d-flex flex-column justify-content-between p-4">
              <span className="badge bg-secondary position-absolute top-0 end-0 rounded-bottom-left text-uppercase text-primary">
                Most Popular
              </span>
              <div>
                <h4 className="display-5 fw-bold mb-4">Yourself</h4>
              </div>
              <p>
                Empower Possibilities, Unleash Impact: Embark on the Journey of
                Fundraising with Us. Your Initiative, Combined with Community
                Support, Will Create Ripples of Positive Change. Together, Let's
                Build a Brighter Tomorrow!
              </p>
              <a className="btn btn-warning" role="button" href="/fundraiser">
                Create Now
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-0 h-100">
            <div className="card-body d-flex flex-column justify-content-between p-4">
              <div className="pb-4">
                <h4 className="display-5 fw-bold mb-4">Scholarship Funding</h4>
              </div>
              <p>
                Invest in Futures: Contribute to Scholarship Funding and Open
                Doors to Education. Your Support Fuels Ambitions, Turning Dreams
                into Achievements. 
              </p>
              <a className="btn btn-primary" role="button" href="/fundraiser">
                Create Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartFundraiser
