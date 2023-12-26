import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
export default function ResetPassword() {
  const navigate = useNavigate();
  const [redirectUrl, setRedirectUrl] = useState(null);
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
      } else {
        toast.success(data.success);
        setRedirectUrl(data.redirectUrl);
      }
    } catch (error) {}
    //
  };
  useEffect(() => {
    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  }, [redirectUrl]);
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
