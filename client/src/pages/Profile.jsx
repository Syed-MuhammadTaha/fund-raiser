import React, {useState, useEffect} from 'react';
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
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [userId, setUserId] = useState('');

    //logic for sign in
    axios.defaults.withCredentials=true
    console.log(isLoggedIn)
    console.log(email)
    useEffect(() => {
        axios.get('http://localhost:8000/profile')
        .then(res => {
        if(res.data.Status === "Success"){
            setIsLoggedIn(true)
            setName(res.data.name)
            setEmail(res.data.email)
            setUserId(res.data.userId)
        }
        else{
            setIsLoggedIn(false)
        }
        })
    }, [isLoggedIn]);

  return (
    <>
    <Navbar links={[{ button: true, path: "/", btn_name: "Logout" }]}/>
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4 mt-5">
              <MDBBreadcrumbItem>
                <a href='#'>Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#">User</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-2" style={{height: '50%'}}>
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={profilePhoto}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '200px', height: '200px', margin: '15px' }}
                  fluid />
                <p className="text-muted mb-1">Profile Picture</p>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="4">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="8">
                    <MDBCardText className="text-muted">{name}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="4">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="8">
                    <MDBCardText className="text-muted">{email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="4">
                    <MDBCardText>Password</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="8">
                    <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="4">
                    <MDBCardText>User Id</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="8">
                    <MDBCardText className="text-muted">{userId}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="8">
            <MDBRow style={{marginBottom:'15px'}}>
              <MDBCol md="12">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4">Payment History</MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

            </MDBRow>

            <MDBRow>
              <MDBCol md="12">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4">Campaigns Created</MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                    </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    </>
  );
}