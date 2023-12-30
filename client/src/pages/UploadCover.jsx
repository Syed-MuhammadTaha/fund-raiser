import React, { useState } from "react";
import axios from "axios";
function UploadCover() {
  const preset_key = "UploadingCoverImage"
  const cloud_name = "dgz8jg45d"
  const [image,setImage] = useState()
  function submitImage(event){
    const formData = new FormData()
    formData.append("file",image)
    formData.append('upload_preset',preset_key)
    formData.append("cloud_name",cloud_name)
   fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,{
    method:"POST",
    body:formData
   }).then((res)=>res.json())
   .then((formData)=>{
    console.log(formData)
   }).catch((err)=>{console.log(err)})
  }
  return (
    <div>
      <div>
        <input
          type="file"
          name="image"
          onChange={(e)=> setImage(e.target.files[0])}
        ></input>
      </div>
      <button onClick = {submitImage}>Upload Image</button>
      <div>
        <h1>Uploaded image will be displayed here</h1>
      </div>
    </div>
  );
};
export default UploadCover;
