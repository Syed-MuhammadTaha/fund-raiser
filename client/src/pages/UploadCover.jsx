
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

function UploadCover({ onNext }) {
  const preset_key = "UploadingCoverImage";
  const cloud_name = "dgz8jg45d";
  const [image, setImage] = useState();
  const [urlImage,setURL] = useState("")
  const [coverPreview, setCoverPreview] = useState(null);

  function submitImage(event) {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", preset_key);
    formData.append("cloud_name", cloud_name);
    console.log(coverPreview);
    fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((formData) => {
        setCoverPreview(null);
        toast.success("Image Uploaded Successfully");
        setURL(formData.url);
      })
      .then(() => {
        console.log(urlImage);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
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
              <img
                src={coverPreview}
                alt="preview"
                style={{ height: "200px" }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadCover;


