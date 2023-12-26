import React from 'react'
import axios from 'axios';
const FormSubmissionPage = ({ submitData }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/fundraiser", submitData)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
      
  };
  return (
    <div>
      <form onSubmit={ handleSubmit}><button type ="submit">Submit</button></form>
      
    </div>
  )
}

export default FormSubmissionPage
