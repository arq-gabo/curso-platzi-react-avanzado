import React, { Fragment } from "react";
import { ListOfCategories } from "../components/ListOfCategoryes";
import { ListOfPhotoCards } from "../container/ListOfPhotoCards";

export const Home = ({ categoryId }) => {
  return (
    <Fragment>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Fragment>
  );
};
