import React from 'react'
import impact from '../assets/impact.png'
const Impact = () => {
  return (
    <div>
      <section>
        <div className="container py-4 py-xl-5">
          <div className="row gy-4 gy-md-0">
            <div className="col-md-6 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
              <div>
                <img
                  className="rounded img-fluid fit-cover"
                  style={{ minHeight: 300 }}
                  src={impact}
                  width={800}
                />
              </div>
            </div>
            <div className="col">
              <div style={{ maxWidth: 450 }}>
                <h3 className="fw-bold pb-md-4">
                  Every Contribution Counts: Trace the Impact, Measure the&nbsp;
                  <span className="underline">Change</span>
                </h3>
                <p className="text-muted py-4 py-md-0">
                  Experience transparency like never before! Our robust tracking
                  system allows you to witness the tangible impact of your
                  contributions. From the number of students assisted to the
                  funds raised and essential items collected, your generosity is
                  transforming lives.
                </p>
                <div className="row gy-4 row-cols-2 row-cols-md-2">
                  <div className="col">
                    <div>
                      <span className="fs-2 fw-bold text-primary bg-secondary">
                        100000+
                      </span>
                      <p className="fw-normal text-muted">Dollars raised</p>
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <span className="fs-2 fw-bold text-primary bg-secondary">
                        5+
                      </span>
                      <p className="fw-normal text-muted">
                        Researchers assisted
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <span className="fs-2 fw-bold text-primary bg-secondary">
                        100+
                      </span>
                      <p className="fw-normal text-muted">
                        Items donated
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <span className="fs-2 fw-bold text-primary bg-secondary">
                        13+
                      </span>
                      <p className="fw-normal text-muted">
                        Students Helped
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Impact
