// FundraiserDetailsPage.jsx
import React from "react";

const FundraiserDetailsPage = ({ onNext, onPrev, setParentData }) => {
    const [fundraisingGoals, setFundraisingGoals] = React.useState("");
  return (
    <div>
      <h1>Provide Fundraiser Details</h1>
      <input
        type="text"
        id="fundraisingGoals"
        placeholder="Enter your fundraising goals..."
        value={fundraisingGoals}
        onChange={(e) => setFundraisingGoals(e.target.value)}
      />
      <button onClick={onPrev}>Prev</button>
      <button onClick={() => onNext(fundraisingGoals, "goal")}>Next</button>
    </div>
  );
};

export default FundraiserDetailsPage;
