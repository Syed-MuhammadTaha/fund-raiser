import React from 'react'
import volunteer from '../assets/volunteer.png'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
const Volunteer = ({loginDetail}) => {
  const navigate =useNavigate()
  const handleClick= ()=>{
    if(loginDetail){
        navigate("/createvolunteer")
    }
    else{
      toast.error('Please Log in')
      navigate('/login')
    }
  }
  return (
    <div>
      <section className="py-4 py-xl-5" id="volunteer">
        <div className="container">
          <div className="bg-primary border rounded border-0 border-primary overflow-hidden">
            <div className="row g-0">
              <div className="col-md-6 d-flex flex-column justify-content-center">
                <div className="text-white p-4 p-md-5">
                  <h2 className="fw-bold mb-3">
                    Impact Through Action: Volunteer on Drives, where Your
                    Commitment Elevates Every Donation Drive to New <span className ="text-secondary">Heights</span>!
                  </h2>
                  <p className="mb-4">
                    Be the driving force behind change! Join our dedicated
                    volunteers on donation drives, where your time becomes a
                    catalyst for positive impact. Together, let's make a
                    meaningful difference in the lives of those in need. Join us
                    and be the change!
                  </p>
                  <div className="my-3">
                    <a className="btn btn-secondary mt-2 rounded-pill" role="button" onClick={handleClick}>
                      Create a Drive
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 order-first order-md-last"
                style={{ minHeight: 250 }}
              >
                <img
                  className="w-100 h-100 fit-contain pt-5 pt-md-0"
                  src={volunteer}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Volunteer
