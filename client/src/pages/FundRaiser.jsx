// FundraiserWizard.jsx
import React, { useState, useEffect } from "react";
import FundraiserTypePage from "./FundraiserTypePage";
import FundraiserGoalsPage from "./FundraiserGoalsPage";
import FormSubmissionPage from "./FormSubmissionPage";

const FundRaiser = () => {
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = (data, key) => {
    setData(prevData => ({
      ...prevData,
      [key]: data
    }))
  
    setCurrentPage(currentPage + 1);

  };

  const handlePrev = () => {
    if (currentPage === 1) { return; }
    setCurrentPage(currentPage - 1);
  }


  useEffect(() => {
    console.log(data);
  })

  return (
    <div>
      {currentPage === 1 && <FundraiserTypePage onNext={handleNext} />}
      {currentPage === 2 && (
        <FundraiserGoalsPage onNext={handleNext} onPrev={handlePrev} />
      )}
      {currentPage === 3 && (
        <FormSubmissionPage submitData={data} />
      )}
    </div>
  );
};

export default FundRaiser;
