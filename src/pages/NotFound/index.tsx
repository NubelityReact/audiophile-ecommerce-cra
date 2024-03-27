import React from "react";
import Typography from "../../components/Typography";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <Typography>Not found</Typography>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <Link to="/">Return to home </Link>
      </div>
    </div>
  );
};

export default NotFound;
