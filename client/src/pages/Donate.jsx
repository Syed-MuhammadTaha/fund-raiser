
import Navbar from '../components/Navbar';
import React, {useState,useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import {loadStripe} from '@stripe/stripe-js'
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import axios from 'axios';
export default function Donate() {
    const [amount,setAmount]=useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [name,setName] = useState('')
    const [id,setID] = useState()
    const {fid} = useParams();
    const navigate = useNavigate()
  //logic for sign in 
  axios.defaults.withCredentials=true
  console.log(isLoggedIn)
  console.log(fid)
  useEffect(() => {
    axios.get('http://localhost:8000/profile')
    .then(res => {
      if(res.data.Status === "Success"){
        setIsLoggedIn(true)
        setName(res.data.name)
        setID(res.data.id)
      }
      else{
        setIsLoggedIn(false)
      }
    })
  }, [isLoggedIn]);
    const handlePayment =()=>{
      if(isLoggedIn){
        axios.post("/donate/create-checkout-session",
        {amount,id,fid}).then((res)=>{
            if(res.data.url){
                window.location.href=res.data.url
            }
        }).catch((err)=>console.log(err.message))
      }
      else{
        toast.error("Please Log In")
        navigate("/login")
      }
    }
    return (
    <div>
      <Navbar links={[{}]}/>
    <input
                    className="shadow-sm form-control"
                    type="text"
                    name="Amount"
                    placeholder="Amount"
                    onChange={(e) => setAmount(e.target.value)}
                  />
      <button onClick={handlePayment}>Donate Now</button>
    </div>
  )
}
