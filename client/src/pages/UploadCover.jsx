
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Navbar from "../components/Navbar";
import { ArrowLeft } from "react-bootstrap-icons";

function UploadCover({ onNext }) {
  const preset_key = "UploadingCoverImage";
  const cloud_name = "dgz8jg45d";
  const [image, setImage] = useState();
  const [urlImage,setURL] = useState("")
  const [coverPreview, setCoverPreview] = useState(null);
  

  async function submitImage(event) {
    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", preset_key);
      formData.append("cloud_name", cloud_name);
  
      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
        method: "POST",
        body: formData,
      });
  
      const data = await res.json();
  
      setCoverPreview(null);
      toast.success("Image Uploaded Successfully");
      setURL(data.url); // Log the URL here to ensure it's correct
    } catch (err) {
      console.error(err);
    }
  }
  
  

    return (
      <>
        <Navbar links={[{}]} />
        <section className="py-5 mt-5">
          <div className="container">
            <div className="row row-cols-1 d-flex justify-content-center align-items-center">
              <div className="col text-center">
                <h2 className="display-3 fw-bold mb-4">
                  A picture speaks a thousand&nbsp;
                  <span className="underline">Words</span>
                </h2>
                <p className="fs-4 text-muted">
                  Elevate Your Presence with a Captivating Image that Speaks
                  Volumes.
                </p>
                <div className="d-flex mt-5 justify-content-center align-items-center">
                  <div className="w-50 ">
                    <input
                      className="d-block form-control mb-4"
                      type="file"
                      name="image"
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                        setCoverPreview(URL.createObjectURL(e.target.files[0]));
                      }}
                    ></input>
                    <button
                      className="border m-auto w-100 mb-4 p-3 rounded btn btn-primary"
                      onClick={submitImage}
                    >
                      Upload
                    </button>
                  </div>
                  <div className="w-50">
                    <div>
                      {coverPreview && (
                        <img
                          src={coverPreview}
                          alt="preview"
                          style={{ width: "60%", overflow: "hidden" }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="container d-flex justify-content-between mt-5 m-auto fixed-bottom mb-5 px-5">
          <div className="nav-item">
            <a className="nav-link active" href="/">
              <ArrowLeft size={40} />
            </a>
          </div>
          <div className="nav-item">
            <button
              className="btn btn-primary rounded-pill shadow"
                        type="button"
                        
                        onClick={() =>
                            {urlImage === "" ? toast.error("Please upload an image") : 
                            onNext(["imgUrl", urlImage])}}
            >
              Continue
            </button>
          </div>
        </footer>
      </>
    );
}

export default UploadCover;

//Moeez

{/* <div>
  <div>
    <input
      type="file"
      name="image"
      onChange={(e) => {
        setImage(e.target.files[0]);
        setCoverPreview(URL.createObjectURL(e.target.files[0]));
      }}
    ></input>
  </div>
  <button onClick={submitImage}>Upload Image</button>
  <div>
    <h1>Uploaded image will be displayed here</h1>
    <div className="w-100">
      <div>
        {coverPreview && (
          <img src={coverPreview} alt="preview" style={{ height: "200px" }} />
        )}
      </div>
    </div>
  </div>
</div>; */}





// Taha

// import React from 'react'

// const UploadCover = ({onNext}) => {
//     const [cover, setCover] = React.useState("")
//     const [coverPreview, setCoverPreview] = React.useState(null)
//     const [isLoading, setIsLoading] = React.useState(false)
//     const handleImageChange = (e) => {
//         setCover(e.target.files[0])
//         setCoverPreview(URL.createObjectURL(e.target.files[0]))
//     }
//     const uploadImage = async (e) => { 
//         e.preventDefault()
//         setIsLoading(true)
//         try {
//             let imageURL;
//             if (cover && (cover.type === "image/jpeg" || cover.type === "image/png")) {
//                 const image = new FormData()
//                 image.append("file", cover)
//                 image.append("cloud_name", "ddymgf2hz");
//                 image.append("upload_preset", "cover_image")
                
//                 const res = await fetch("https://api.cloudinary.com/v1_1/ddymgf2hz/image/upload", {
//                     method: "POST",
//                     body: image
//                 })
//                 const data = await res.json()
//                 imageURL = data.url.toString()
//                 setCoverPreview(null)
//             }
//             alert(imageURL)
//         } catch(error) {
//             setIsLoading(false)
//         }
//     }

//   return (
//     <div>
//           <h2> Upload to cloud</h2>
//           <div className="card">
//               <form onSubmit={uploadImage}>
//                   <input type="file" accept="image/png, image/jpeg" onChange={handleImageChange} />
//                   {
//                       isLoading ? (
//                           <h3>Uploading Image...</h3>
//                       ) : (
//                           <button type="submit" className="btn btn-primary">
//                               Upload Image
//                           </button> 
//                   )
//               }
//               </form>
//               <div className="w-100">
//                   <div>
//                       {coverPreview && (
//                             <img src={coverPreview} alt="preview" style={{ height: "200px" }} />
//                         )
//                       }
//                   </div>
//         </div>
//         <button onClick={() => onNext()}></button>
             
//           </div>
//     </div>
//   )
// }
