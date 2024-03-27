import React from "react";
import { useParams } from "react-router-dom";
import { ICategoryParams } from "../../customTypes/pages.params";
import Typography from "../../components/Typography";

const Category = () => {
  const params = useParams<ICategoryParams>();

  const categoryName = params.name ?? "";
  return (
    <div>
      <Typography>{categoryName}</Typography>
    </div>
  );
};

export default Category;
