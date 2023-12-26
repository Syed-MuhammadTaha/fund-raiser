import React from "react";
import { useEffect, useState, Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    password: "",
  });
  const { id, token } = useParams();
  const ChangePass = async (e) => {
    // not to automatically load
    e.preventDefault();
    const { password } = data;
    try {
      const { data } = await axios.post(`/ForgotPassword/${id}/${token}`, {
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        // empty object reset input field
        setData({});
        toast.success(data.success);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={ChangePass}>
      <input
        type="password"
        placeholder="New Password"
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      <button type="submit">Change Password</button>
    </form>
  );
};

export default ForgotPassword;
