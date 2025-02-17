import React from "react";
import { useNavigate } from "react-router-dom";
import Typography from "../../Typography";

const GoBack: React.FC<React.HtmlHTMLAttributes<HTMLDivElement>> = (props) => {
  const navigation = useNavigate();

  return (
    <div onClick={() => navigation(-1)} {...props}>
      <Typography style={{ opacity: 0.5 }}>Go Back</Typography>
    </div>
  );
};

export default GoBack;
