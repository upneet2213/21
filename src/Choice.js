import React, { useState, useEffect } from "react";
import { Loading } from "./Loading";
import { Link } from "react-router-dom";

export const Choice = ({ choice }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    const fetchLaunches = async () => {
      const response = await fetch(
        `https://api.spacexdata.com/v5/launches/${choice}`
      );
      const data = await response.json();
      const myList = choice === "latest" ? [data] : data;
      setLaunches(myList);
      setIsLoading(false);
    };
    setIsLoading(true);
    fetchLaunches();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="grid">
      {launches.map((launch) => {
        return (
          <div key={launch.id} className="grid-item">
            <img
              src={launch.links.patch.small}
              alt="No Picture Available"
              className="grid-image"
            />
            <div className="grid-header">
              <h4>Name: {launch.name}</h4>
              <p>Date: {launch.date_local.slice(0, 10)}</p>
              <p>Flight Number: {launch.flight_number}</p>
            </div>
            <Link to={`/launch/${launch.id}`}>
              <button className="primary-btn">Learn More</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
