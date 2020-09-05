import React from "react";
import { ListOfCategories } from "./components/ListOfCategoryes";
import { GlobalStyle } from "./GlobalStyles";

export const App = () => (
  <div>
    <GlobalStyle />
    <ListOfCategories />
  </div>
);
