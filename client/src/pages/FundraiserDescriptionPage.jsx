import React from 'react'

const FundraiserDescriptionPage = ({ onNext, onPrev, setParentData }) => {
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
  
    const setDetails = () => {
        onNext(title, "title");
        onNext(description, "description");
    }

    return (
    <div>
      <h1>Enter the title for your fundraiser</h1>
      <input
        type="text"
        id="title"
        placeholder="Enter the title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <h1>Enter the description of your fundraiser</h1>
      <input
        type="text"
        id="description"
        placeholder="Enter the description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />


    <button onClick={onPrev}>Prev</button>
      <button onClick={setDetails}>Next</button>
    </div>
  )
}

export default FundraiserDescriptionPage
