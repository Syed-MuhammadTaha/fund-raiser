// FundraiserDetailsPage.jsx
import React from "react";

const FundraiserDetailsPage = ({ onNext, onPrev, setParentData }) => {
    
  return (
    <div>
      <h1>Provide Fundraiser Details</h1>
          {/* Add UI elements for providing fundraiser details */}
        <button onClick={onPrev}>Prev</button>  
          <button onClick={onNext}>Next</button>
        
        
    </div>
  );
};

export default FundraiserDetailsPage;
