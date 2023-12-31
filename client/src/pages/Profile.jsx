import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
} from 'mdb-react-ui-kit';
import profilePhoto from '../assets/profile.png'
import Navbar from '../components/Navbar';

export default function Profile() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [id, setID] = useState();
  const [paymentData, setPaymentData] = useState([])

  //logic for sign in
  axios.defaults.withCredentials = true
  console.log(isLoggedIn)
  let ID = id
  useEffect(() => {
  

    const fetchData = async () => {
      try {
        // Fetch user data
        const userResponse = await axios.get('http://localhost:8000/profile');
        if (userResponse.data.Status === 'Success') {
          setIsLoggedIn(true);
          setName(userResponse.data.name);
          setID(userResponse.data.id);
  
          // Fetch payment details using the user ID
          const paymentResponse = await fetch(`http://localhost:8000/getPaymentDetails/${userResponse.data.id}`);
          // const paymentResponse = await fetch('ttp://localhost:8000/getPaymentDetails' + userResponse.data.id);

          const paymentData = await paymentResponse.json();
          
          if (paymentResponse.status === 200) {
            setPaymentData(paymentData.data);
          } else {
            setIsLoggedIn(false);
          }
        } else {
          setPaymentData([])
          setIsLoggedIn(false);
        }
      } catch (error) {
        // console.error('Error fetching data:', error);
        setIsLoggedIn(false); 
      }
    };
  
    fetchData();

  }, [isLoggedIn]);

  // return (
  //   <div>
  //     {isLoggedIn ? (
  //       <div>
  //         <h2>User Details</h2>
  //         <p>Name: {name}</p>
  //         <p>ID: {id}</p>
  //         <p>Email: {email}</p>

  //         <h2>Payment Details</h2>
  //         {paymentData.length > 0 && 
  //         paymentData.map(data =>
  //           <>
  //         <div>
  //         <span>Amount: </span>
  //         <span>Payment Date: </span>
  //         <span>Title: </span>
  //         <span>Fundraise ID:</span>
  //         </div>
  //         <div>
  //         <span>Amount: {data.amount}</span>
  //         <span>Payment Date: {data.paymentDate}</span>
  //         <span>Title: {data.title}</span>
  //         <span>Fundraise ID: {data.fid}</span>
  //         </div>
  //         </>
  //         )
  //         }
  //       </div>
  //     ) : (
  //       <p>User not logged in or data fetch failed.</p>
  //     )}
  //   </div>
  // );

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <Navbar links={[{ button: true, path: "/", btn_name: "Logout" }]} />
          <section style={{ backgroundColor: 'white' }}>
            <MDBContainer className="py-5">
              <MDBRow >
                <MDBCol>
                  <MDBBreadcrumb className="rounded-3 p-3 mb-4 mt-5" style={{textAlign:'center', background:"#24285b", padding:'5px', color:'white'}}>
                    {/* <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem> */}
                    <h2 >User Profile</h2>
                  </MDBBreadcrumb>
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol lg="4">
                  <MDBCard className="mb-2" style={{ height: '300px' }}>
                    <MDBCardBody className="text-center">
                      <MDBCardImage
                        src={profilePhoto}
                        alt="avatar"
                        className="rounded-circle"
                        style={{ width: '200px', height: '200px', margin: '15px' }}
                        fluid />
                      <p className="mb-1" style={{textAlign:'center', background:"#24285b", padding:'5px', color:'white'}}>Profile Picture</p>
                    </MDBCardBody>
                  </MDBCard>

                  <MDBCard className="mb-4">
                    <MDBCardBody>
                      <MDBRow>
                        <MDBCol sm="4">
                          <MDBCardText>Name</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="8">
                          <MDBCardText className="text-muted">{name}</MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="4">
                          <MDBCardText>User Id</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="8">
                          <MDBCardText className="text-muted">{id}</MDBCardText>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>

                <MDBCol lg="8">
                  <MDBRow style={{ marginBottom: '15px', maxHeight: '300px', minHeight:'210px' }}>
                    <MDBCol md="12">
                      <MDBCard className="mb-4 mb-md-0">
                        <MDBCardBody>
                          <MDBCardText className="mb-4" style={{textAlign:'center', background:"#24285b", padding:'5px', color:'white'}}>Payment History</MDBCardText>

                          <MDBCardText className="mb-1" style={{ fontSize: '.77rem'}}><span style={{padding:'7%'}}>Fundraise Id</span><span style={{padding:'7%'}}>Title</span><span style={{padding:'7%'}}>Amount</span><span style={{padding:'9%'}}>Date</span></MDBCardText>
                          {paymentData.length > 0 && paymentData.map(data =>
                            <MDBCardText className="mb-1" style={{ fontSize: '.77rem'}}><span style={{padding:'10%'}}>{data.fundraiseId}</span><span style={{padding:'9%'}}>{data.title}</span><span style={{padding:'4%'}}>{data.amount}</span><span style={{padding:'5%'}}>{data.paymentDate}</span></MDBCardText>
                          )}
                          
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>

                  </MDBRow>

                  <MDBRow style={{ marginBottom: '2px', maxHeight: '250px' }}>
                    <MDBCol md="12">
                      <MDBCard className="mb-4 mb-md-0">
                        <MDBCardBody >
                          <MDBCardText className="mb-4" style={{textAlign:'center', background:"#24285b", padding:'5px', color:'white'}}>Campaigns Created</MDBCardText>

                          <MDBCardText className="mb-1" style={{ fontSize: '.77rem'}}><span style={{padding:'1%'}}>Fundraise Id</span><span style={{padding:'5%'}}>Title</span><span style={{padding:'5%'}}>Type</span><span style={{padding:'2%'}}>Goal Amount</span><span style={{padding:'7%'}}>Starting Date</span></MDBCardText>
                          {paymentData.length > 0 && paymentData.map(data =>
                            <MDBCardText className="mb-1" style={{ fontSize: '.77rem'}}><span style={{padding:'5%'}}>{data.fundraiseId}</span><span style={{padding:'5%'}}>{data.title}</span><span style={{padding:'5%'}}>{data.type}</span><span style={{padding:'5%'}}>{data.goalAmount}</span><span style={{padding:'5%'}}>{data.startDate}</span></MDBCardText>
                          )}

                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
        </div>
      ) : (
        <p>page not found</p>
      )
      }
    </div>
  );
}