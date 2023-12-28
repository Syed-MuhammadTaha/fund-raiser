import { useNavigate } from "react-router-dom"
import "../App.css";
import logo from '../assets/logo.png'

export default function navbar() {
  const navigate = useNavigate()
  return (
    <nav
      id="mainNav"
      className="navbar navbar-expand-md fixed-top navbar-shrink py-3 navbar-light"
    >
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src = {logo} style={{width:"100px"}}></img>
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
            <li className="nav-item">
              <a className="nav-link active" href="index.html">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="features.html">
                Donate Now
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="integrations.html">
                Past Campaigns
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contacts.html">
                Volunteer
              </a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="pricing.html">
                Start a fundraiser
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="features.html">
                About Us
              </a>
            </li>
          </ul>
          <a
            className="btn btn-primary shadow rounded-pill"
            role="button"
            onClick={() => navigate("/login")}
          >
            Sign In
          </a>
        </div>
      </div>
    </nav>
  );
}
