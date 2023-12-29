import React from 'react'
import axios from 'axios';

const FundraiserCoverPhotoPage = ({ onNext, onPrev, setParentData }) => {
    const [file, setFile] = React.useState("");
    const upload = () => {
        const formData = new FormData();
        formData.append("image", file);
    }

  return (
    <div>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type='button' onClick={upload}>Upload</button>
        <button onClick={onPrev}>Prev</button>
        <button onClick={()=>onNext(file, "image_url")}>Next</button>
    </div>
  )
}

export default FundraiserCoverPhotoPage
