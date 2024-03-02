import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
const FormSubmissionPage = ({ submitData }) => {
  const handleSubmit = async (e) => {
    await axios.post("/fundraiser", e)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
      
  };
  useEffect(() => { handleSubmit(submitData)},[submitData])
  return (
    <></>
  )
}

export default FormSubmissionPage
