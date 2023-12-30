// FundraiserWizard.jsx
import React, { useState, useEffect } from "react";
import FundraiserTypePage from "./FundraiserTypePage";
import FundraiserGoalsPage from "./FundraiserGoalsPage";
import FormSubmissionPage from "./FormSubmissionPage";
import UploadCover from "./UploadCover";
import FundraiserDesc from "./FundraiserDesc";

const FundRaiser = () => {
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = (...keyValuePairs) => {
    setData((prevData) => ({
      ...prevData,
      ...Object.fromEntries(keyValuePairs),
    }));
  
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
        <UploadCover onNext={handleNext} onPrev={handlePrev} />
      )}
      {currentPage === 4 && (
        <FundraiserDesc
          onNext={handleNext}
          onPrev={handlePrev}
          submitData={data}
        />
      )}
    </div>
  );
};

export default FundRaiser;
