import React from 'react'
import Navbar from '../components/Navbar'
import { ArrowLeft } from "react-bootstrap-icons"
import { useState } from 'react'

const VolunteerTypePage = ({onNext}) => {
    const [type, setType] = useState("Blood");
    const [activeButton, setActiveButton] = useState("Blood");

    const handleButtonClick = (clickedType) => {
      setType(clickedType);
      setActiveButton(clickedType);
    };

  return (
    <>
      <Navbar links={[{}]} />
      <section className="py-5 mt-5">
        <div className="container">
          <div className="row row-cols-1 d-flex justify-content-center align-items-center">
            <div className="col text-center">
              <h2 className="display-3 fw-bold mb-4">
                Tell us about your&nbsp;
                <span className="underline">drive</span>
              </h2>
              <p className="fs-4 text-muted">
                This information helps us get to know you and your drive
                needs.
              </p>
              <h2 className="mt-5 mb-4"> Select drive Type</h2>
              <button
                onClick={() => handleButtonClick("Blood")}
                className={`border w-50 m-auto mb-4 p-3 rounded btn ${
                  activeButton === "Blood"
                    ? "btn-primary"
                    : "btn-outline-primary"
                } d-block`}
              >
                Blood Drive
              </button>
              <button
                onClick={() => handleButtonClick("Plantation")}
                className={`border w-50 m-auto mb-4 p-3 rounded btn ${
                  activeButton === "Plantation"
                    ? "btn-primary"
                    : "btn-outline-primary"
                } d-block`}
              >
                Plantation Drive
              </button>
              <button
                onClick={() => handleButtonClick("Clothing")}
                className={`border w-50 m-auto mb-4 p-3 rounded btn ${
                  activeButton === "Clothing"
                    ? "btn-primary"
                    : "btn-outline-primary"
                } d-block`}
              >
                Clothing Drive
              </button>
            </div>
          </div>
        </div>
      </section>
      <footer className="container d-flex justify-content-between mt-5 m-auto fixed-bottom mb-5 px-5">
        <div className="nav-item">
          <a className="nav-link active" href="/">
            <ArrowLeft size={40} />
          </a>
        </div>
        <div className="nav-item">
          <button
            className="btn btn-primary rounded-pill shadow"
            type="button"
            onClick={() => onNext(["type", type])}
          >
            Continue
          </button>
        </div>
      </footer>
    </>
  );
}

export default VolunteerTypePage
