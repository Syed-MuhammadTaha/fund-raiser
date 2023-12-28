import React from 'react'

export default function Home() {
  return (
    <header className="pt-5">
      <div className="container pt-4 pt-xl-5">
        <div className="row pt-5">
          <div className="col-md-8 text-center text-md-start mx-auto">
            <div className="text-center">
              <h1 className="display-4 fw-bold mb-5">
                Tools for teams that work&nbsp;
                <span className="underline">together</span>.
              </h1>
              <p className="fs-5 text-muted mb-5">
                Metus quisque ultricies vehicula proin, magna nullam.
              </p>
              <form
                className="d-flex justify-content-center flex-wrap"
                method="post"
                data-bs-theme="light"
              >
                <div className="shadow-lg mb-3">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="shadow-lg mb-3">
                  <button className="btn btn-primary" type="submit">
                    Subscribe{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-lg-10 mx-auto">
            <div className="text-center position-relative">
              <img
                className="img-fluid"
                src="illustrations/meeting.svg"
                style={{ width: 800 }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
