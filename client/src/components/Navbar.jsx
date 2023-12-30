import { useNavigate } from "react-router-dom";
import "../App.css";
import logo from '../assets/logo.png';
import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Links from "./Links";

export default function Navbar({links}) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name,setName] = useState('')
  //logic for sign in
  axios.defaults.withCredentials=true
  console.log(isLoggedIn)
  useEffect(() => {
    axios.get('http://localhost:8000/profile')
    .then(res => {
      if(res.data.Status === "Success"){
        setIsLoggedIn(true)
        setName(res.data.name)
      }
      else{
        setIsLoggedIn(false)
      }
    })
  }, [isLoggedIn]);

  
  const logout = () => {
    axios.get('http://localhost:8000/logout').then(res=>{
    if(res.data.Status === "Success"){
      
      location.reload(true)
      toast.success("Succesfully logged out");
      
    }
    }).catch(err=> console.log(err))
  };

  return (
    <nav
      id="mainNav"
      className="navbar navbar-expand-md fixed-top navbar-shrink py-3 navbar-light"
    >
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={logo} style={{ width: "100px" }} alt="Logo"></img>
        </a>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navcol-1"
        >
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon" />
        </button>
        <div id="navcol-1" className="collapse navbar-collapse">

          <ul className="navbar-nav mx-auto">
            <Links hrefs={links} />


            {isLoggedIn ? (
              <li className="nav-item ">
                <a className="nav-link active" href="features.html">
                  Hello {name}!
                </a>
              </li>
            ) : (
              <></>
            )}
          </ul>
          {isLoggedIn ? (
            links[links.length - 1].button === true ? (
            <button
              className="btn btn-primary shadow rounded-pill"
              onClick={logout}
              type="button"
            >
              Logout
            </button>):(<></>)
          ) : (
              links[links.length - 1].button === true ? (
            <button
              className="btn btn-primary shadow rounded-pill"
              onClick={() =>
                navigate({
                  pathname: links[links.length - 1].path,
                  state: { from: window.location.pathname },
                })
              }
              type="button"
            >
              {links[links.length - 1].btn_name}
            </button>):(<></>)
          )}
        </div>
      </div>
    </nav>
  );
}
