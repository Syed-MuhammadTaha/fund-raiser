import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
export default function ResetPassword() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
  });
  const ResetPasswordUser = async (e) => {
    e.preventDefault();
    const { email } = data;
    try {
      const { data } = await axios.post("/ResetPassword", {
        email,
      });
      if (data.error) {
        toast.error(data.error);
      } 
      else {
        toast.success(data.success);
        navigate('/login')
      }
    } catch (error) {}
    //
  };
  return (
    <div>
      <form onSubmit={ResetPasswordUser}>
        <input
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <button type="submit">ResetPassword</button>
      </form>
    </div>
  );
}
