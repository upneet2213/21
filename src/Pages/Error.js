import React from "react";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div>
      <h1>There's been an error. Go back to home page :)</h1>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};
