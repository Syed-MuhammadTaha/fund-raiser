import { useNavigate } from "react-router-dom";
import "../App.css";
import logo from '../assets/logo.png';
import { UserContext } from "../../context/userContext";
import React, { useContext, useState, useEffect } from "react";
import Links from "./Links";

export default function Navbar({links}) {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [button, setButton] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(!!user);
  useEffect(() => {
    if (!user && localStorage.getItem("user") == null) {
      setIsLoggedIn(false);
    } else if (localStorage.getItem("user") != null) {
      setIsLoggedIn(!!user);
    }

  }, [user]);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/");
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
                  Hello {user?.FullName}!
                </a>
              </li>
            ) : (
              <></>
            )}
          </ul>
          {isLoggedIn ? (
            <button
              className="btn btn-primary shadow rounded-pill"
              onClick={logout}
              type="button"
            >
              Logout
            </button>
          ) : (
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
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
