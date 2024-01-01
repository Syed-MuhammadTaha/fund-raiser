import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook from React Router
import success  from "../assets/success.png";

const CheckoutSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Set a delay of 3000 milliseconds (3 seconds) before navigating to "/"
    const delay = setTimeout(() => {
      navigate("/");
    }, 4000);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(delay);
  }, [navigate]);

  return (
    <section className="py-5 mt-5">
      <div className="container">
        <div className="row row-cols-1 d-flex justify-content-center align-items-center">
          <div className="col-md-10 text-center">
            <img
              className="img-fluid w-50"
              src={success}
              alt="Success Illustration"
            />
          </div>
          <div className="col text-center">
            <h2 className="display-3 fw-bold mb-4">Checkout Success</h2>
            <p className="fs-4 text-muted">Thank you for donating!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSuccess;
