import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!user);

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/');
  };
  const goToLogin = () => {
    navigate('/login');
  };
  return (
    <div>
      <h1>Dashboard</h1>
      {isLoggedIn ? (
        <>
          <h2>WELCOME, {user?.FullName}</h2>
          <button type='button' onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <p>Please log in to view this content.</p>
          <button type='button' onClick={goToLogin}>
            Login
          </button>
        </>
      )}
    </div>
  );
}