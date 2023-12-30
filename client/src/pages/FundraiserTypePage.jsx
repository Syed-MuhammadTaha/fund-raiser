// FundraiserTypePage.jsx
import React, { useState } from "react";
import { ArrowLeft } from "react-bootstrap-icons";
import Navbar from "../components/Navbar";

const FundraiserTypePage = ({ onNext }) => {
  const [type, setType] = useState("Personal");
  const [activeButton, setActiveButton] = useState("Personal");

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
                <span className="underline">fundraiser</span>
              </h2>
              <p className="fs-4 text-muted">
                This information helps us get to know you and your fundraising
                needs.
              </p>
              <h2 className="mt-5 mb-4"> Select fundraiser Type</h2>
              <button
                onClick={() => handleButtonClick("Personal")}
                className={`border w-50 m-auto mb-4 p-3 rounded btn ${
                  activeButton === "Personal"
                    ? "btn-primary"
                    : "btn-outline-primary"
                } d-block`}
              >
                Personal Fundraiser
              </button>
              <button
                onClick={() => handleButtonClick("Scholarship")}
                className={`border w-50 m-auto mb-4 p-3 rounded btn ${
                  activeButton === "Scholarship"
                    ? "btn-primary"
                    : "btn-outline-primary"
                } d-block`}
              >
                Scholarship Funding
              </button>
              <button
                onClick={() => handleButtonClick("Research")}
                className={`border w-50 m-auto mb-4 p-3 rounded btn ${
                  activeButton === "Research"
                    ? "btn-primary"
                    : "btn-outline-primary"
                } d-block`}
              >
                Research Funding
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
            onClick={() => onNext(type, "type")}
          >
            Continue
          </button>
        </div>
      </footer>
    </>
  );
};

export default FundraiserTypePage;
