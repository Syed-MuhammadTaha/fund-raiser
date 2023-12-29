import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!user);
   useEffect(() => {
    if(!user && localStorage.getItem("user")==null){
      console.log(localStorage.getItem("user"))
      setIsLoggedIn(false);
    }
    else if (localStorage.getItem("user")!=null){
      console.log(localStorage.getItem("user"))
      setIsLoggedIn(!!user);}
  }, [user,navigate]);
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/");
  };

  const goToLogin = () => {
    navigate("/login");
  };
  const renderLoggedInContent = () => (
    <>
      <h2>WELCOME, {user?.FullName}</h2>
      <button className="logout-button" type="button" onClick={logout}>
        Logout
      </button>
    </>
  );

  const renderLoggedOutContent = () => (
    <>
      <p>Please log in to view this content.</p>
      <button className="action-button" type="button" onClick={goToLogin}>
        Login
      </button>
    </>
  );

  return (
    <div>
      <h1>Dashboard</h1>
      {isLoggedIn ? renderLoggedInContent() : renderLoggedOutContent()}
    </div>
  );
}
