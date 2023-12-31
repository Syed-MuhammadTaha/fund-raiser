import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Card = (fundraiserId) => {

  const [data, setData] = useState({
    title: "",
    imgUrl: "",
    type: "",
    goalAmount: "",
  });
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("/fundraiserInfo");
          setData(response.data[0]);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

  return (
    <div>
      <div className="col">
        <img
          className="flex-shrink-0 fit-cover"
          width="100%"
          height="100%"
          src={data.imgUrl}
        />
        <h5 className="mt-3">{data.title}</h5>
        <span className="badge rounded-pill bg-primary mb-2">
          {data.type}
        </span>

        <div className="progress mt-2 " style={{ height: "5px" }}>
          <div
            className="progress-bar progress-bar-striped progress-bar-animated w-75 "
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <p className="text-muted mb-0">$ {data.goalAmount} raised</p>
      </div>
    </div>
  );
}

export default Card
