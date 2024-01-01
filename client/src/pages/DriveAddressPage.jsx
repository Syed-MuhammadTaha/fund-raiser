import React from 'react'
import { ArrowLeft } from "react-bootstrap-icons";
import Navbar from "../components/Navbar";
import { toast } from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const DriveAddressPage = ({ onNext, onPrev }) => {
    const [address, setAddress] = React.useState("");
    const [selectedDate, setSelectedDate] = useState(null);
   return (
     <>
       <Navbar links={[{}]} />
       <section className="py-5 mt-5">
         <div className="container">
           <div className="row row-cols-1 d-flex justify-content-center align-items-center px-5">
             <div className="col text-center mt-5">
               <h2 className="display-3 fw-bold mb-4">
                 Additional &nbsp;
                 <span className="underline">Details</span>
               </h2>
               <p className="fs-4 text-muted">
                 Specify Your Drive and Set the Stage for Impactful Change. Your
                 Ambition Becomes the Catalyst, Guiding Us Toward Milestones
                 that Transform Lives.
               </p>
               <div className="mb-3 w-50 m-auto mt-5">
                 <input
                   className="shadow-sm form-control mb-3"
                   type="text"
                   name="name"
                   placeholder="Your Address"
                   onChange={(e) => setAddress(e.target.value)}
                 />
                 <DatePicker
                   selected={selectedDate}
                   onChange={(date) => setSelectedDate(date)}
                   className="shadow-sm form-control mb-3"
                   placeholderText="Select an end date"
                 />
               </div>
             </div>
           </div>
         </div>
       </section>
       <footer className="container d-flex justify-content-between mt-5 m-auto fixed-bottom mb-5">
         <div className="nav-item" onClick={onPrev}>
           <a className="nav-link active">
             <ArrowLeft size={40} />
           </a>
         </div>
         <div className="nav-item">
           <button
             className="btn btn-primary rounded-pill shadow"
             type="button"
             onClick={() => {
               address === ""
                 ? toast.error("Please Enter Complete Details ")
                 : onNext(
                     ["location", address],
                     [
                       "endDate",
                       selectedDate
                         .toISOString()
                         .slice(0, 19)
                         .replace("T", " "),
                     ]
                   );
             }}
           >
             Continue
           </button>
         </div>
       </footer>
     </>
   );
};

export default DriveAddressPage
