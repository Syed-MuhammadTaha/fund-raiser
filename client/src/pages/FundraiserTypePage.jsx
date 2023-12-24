// FundraiserTypePage.jsx
import React from "react";
import { useState } from "react";
const FundraiserTypePage = ({ onNext }) => {
    const [type, setType] = useState("");
    return (
      
    <div>
      <h1>Select the Type of Fundraiser</h1>
        <select onChange={(e) => setType(e.target.value)}>
            <option value="Yourself">Yourself</option>
                <option value="For Others">For Others</option>
                <option value="Charity">Charity</option>
            </select>
            <button onClick={() =>  onNext(type)}>Next</button>
            
    </div>
  );
};

export default FundraiserTypePage;
