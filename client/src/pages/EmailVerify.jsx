// EmailVerify.jsx
import { useEffect, useState ,Fragment} from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const EmailVerify = () => {
  const {id,expirationTimestamp} = useParams();
  const [validUrl, VerifyUrl] = useState(null);

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const url=`https://fund-raiser-production.up.railway.app/verify/${id}/${expirationTimestamp}`
        const {data} = await axios.get(url)
        console.log(data)
        VerifyUrl(true)
      } catch (error) {
        console.log(error)
        VerifyUrl(false)
      }
    };

    verifyEmail();
  }, [id,expirationTimestamp]);

  return (
    <Fragment>
      {validUrl ? (
				<div >
					<h1>Email verified successfully</h1>
					<Link to="/login">
						<button>Login</button>
					</Link>
				</div>
			) : (
				<h1>404 Not Found</h1>
			)}
		</Fragment>
  );
};

export default EmailVerify;
