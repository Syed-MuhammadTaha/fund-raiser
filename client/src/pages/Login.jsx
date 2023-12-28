import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const LoginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Success");
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/dashboard");
      }
    } catch (error) {}
    //
  };
  return (
    <div>
      <form onSubmit={LoginUser}>
        <input
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit">Login</button>
        <Link to="/ResetPassword">Forgot Password?</Link>
        <Link to="/register">Register</Link>
      </form>
    </div>
  );
}
