import './App.css'
import {Toaster} from 'react-hot-toast'
import {Routes,Route} from 'react-router-dom'
import Home from '../src/pages/Home'
import Login from '../src/pages/Login'
import Register from '../src/pages/Register'
import EmailVerify from './pages/EmailVerify'
import FundRaiser from './pages/FundRaiser'
import ResetPassword from './pages/ResetPassword'
import ForgotPassword from './pages/ForgotPassword'
import NotFound from './pages/NotFound'
import axios from 'axios'
import { UserContextProvider } from '../context/userContext'
import Donate from './pages/Donate'
axios.defaults.baseURL = "http://localhost:8000";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import CheckoutSuccess from './pages/CheckoutSuccess'

// connect to local host
axios.defaults.withCredentials = true
function App() {

  return (
    <>
      <UserContextProvider>
        <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/verify/:id/:expirationTimestamp"
            element={<EmailVerify />}
          />
          <Route path="/fundraiser" element={<FundRaiser />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
          <Route
            path="/ForgotPassword/:id/:token"
            element={<ForgotPassword />}
          />

          <Route path="/fundraiser/donate/:fid" element={<Donate />} />
          
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App
