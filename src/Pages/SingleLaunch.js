import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../Loading";

export const SingleLaunch = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [launch, setLaunch] = useState({});

  useEffect(() => {
    const fetchSingleDate = async () => {
      const response = await fetch(
        `https://api.spacexdata.com/v5/launches/${id}`
      );
      const data = await response.json();
      const {
        name,
        date_local,
        details,
        flight_number,
        success,
        links,
        rocket,
      } = data;
      const myRocket = await fetch(
        `https://api.spacexdata.com/v4/rockets/${rocket}`
      );
      const rocketData = await myRocket.json();
      const myObject = {
        name,
        details,
        date: date_local.slice(0, 10),
        number: flight_number,
        success,
        youtube: links.youtube_id,
        article: links.article,
        wikipedia: links.wikipedia,
        rocket: rocketData.name,
      };
      setLaunch(myObject);
      setLoading(false);
    };
    setLoading(true);
    fetchSingleDate();
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <div className="single-page">
      <div className="single-page-tab">
        {launch.youtube ? (
          <iframe
            src={`https://www.youtube.com/embed?v=${launch.youtube}`}
            width="100%"
            height="400px"
          ></iframe>
        ) : (
          <h1> Stream not Available</h1>
        )}
        <div className="header">
          <h2>Name:{launch.name}</h2>
          <p>Date:{launch.date}</p>
          <p>Flight Number:{launch.number}</p>
        </div>
        <p className="details">{launch.details}</p>
        <p>{`Launch successful: ${launch.success ? "Yes" : "No"}`}</p>
        <p className="details">Rocket Name:{launch.rocket}</p>
        <div className="links">
          <a href={launch.article} className="primary-btn">
            Article
          </a>

          <a href={launch.wikipedia} className="primary-btn">
            Wikipedia article
          </a>
        </div>
      </div>
    </div>
  );
};
