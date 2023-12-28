import { useNavigate } from "react-router-dom"
import "../App.css";


export default function navbar() {
  const navigate = useNavigate()
  return (
    <nav
      id="mainNav"
      className="navbar navbar-expand-md fixed-top navbar-shrink py-3 navbar-light"
    >
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <span>Faryaad</span>
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
                Active Campaigns
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="integrations.html">
                Past Campaigns
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pricing.html">
                Raise Now
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contacts.html">
                About Us
              </a>
            </li>
          </ul>
          <a
            className="btn btn-primary shadow"
            role="button"
            onClick={() => navigate('/login') }
          >
            Sign In
          </a>
        </div>
      </div>
    </nav>
  );
}
