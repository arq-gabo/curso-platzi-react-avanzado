import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Title, SubTitle, Div } from "./styles";

export const Layout = ({ children, title, subtitle }) => {
  return (
    <Fragment>
      <Helmet>
        {title && <title>{title} | PetGram </title>}
        {subtitle && <meta name="description" content={subtitle} />}
      </Helmet>
      <Div>
        {title && <Title>{title}</Title>}
        {subtitle && <SubTitle>{subtitle}</SubTitle>}
        {children}
      </Div>
    </Fragment>
  );
};
