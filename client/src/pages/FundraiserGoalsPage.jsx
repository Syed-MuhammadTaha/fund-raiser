// FundraiserDetailsPage.jsx
import React from "react";
import { ArrowLeft } from "react-bootstrap-icons";
import Navbar from "../components/Navbar";
import { toast } from "react-hot-toast";
const FundraiserGoalsPage = ({ onNext, onPrev}) => {
    const [fundraisingGoals, setFundraisingGoals] = React.useState("");
  return (
    <>
      <Navbar links={[{}]} />
      <section className="py-5 mt-5">
        <div className="container">
          <div className="row row-cols-1 d-flex justify-content-center align-items-center mt-5 px-5">
            <div className="col text-center mt-5">
              <h2 className="display-3 fw-bold mb-4">
                How much would you like to&nbsp;
                <span className="underline">Raise</span>?
              </h2>
              <p className="fs-4 text-muted">
                Define Your Fundraiser Goal and Set the Stage for Impactful
                Change. Your Ambition Becomes the Catalyst, Guiding Us Toward
                Milestones that Transform Lives.
              </p>
              <div className="mb-3 w-50 m-auto mt-5">
                <input
                  className="shadow-sm form-control"
                  type="number"
                  name="name"
                  placeholder="Your Fundraiser Goal"
                  onChange={(e) => setFundraisingGoals(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="container d-flex justify-content-between mt-5 m-auto fixed-bottom mb-5">
        <div className="nav-item" onClick={onPrev}>
          <a className="nav-link active">
            <ArrowLeft size={40} />
          </a>
        </div>
        <div className="nav-item">
          <button

            className="btn btn-primary rounded-pill shadow"
            type="button"
            onClick={() => {
              fundraisingGoals === ""
                ? toast.error("Please enter an amount")
                : onNext(["goal", parseInt(fundraisingGoals)]);
            }}
          >
            Continue
          </button>
          
        </div>
      </footer>
    </>
  );
};

export default FundraiserGoalsPage;

