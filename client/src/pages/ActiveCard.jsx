import React from 'react'

const ActiveCard = () => {
  return (
    <div onClick={() => console.log("Clicked")}>
      <div className="col">
          <img
            className="flex-shrink-0 fit-cover"
            width="100%"
            height="100%"
            src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
          />
          <h4 className ="mt-3">Lorem libero donec</h4>
          <span className="badge rounded-pill bg-primary mb-2">Scholarship Fund</span>

          <div>
            <p className="fw-bold mb-0">John Smith</p>
            <p className="text-muted mb-0">Erat netus</p>
          </div>
        </div>
    </div>
  );
}

export default ActiveCard
