import React from "react";
import { ListOfCategories } from "../components/ListOfCategoryes";
import { ListOfPhotoCards } from "../container/ListOfPhotoCards";
import { Layout } from "../components/Layout";

const HomePage = ({ categoryId }) => {
  return (
    <Layout
      title="Fotos de Mascotas"
      subtitle="Con petgram encuentas fotos de animales bonitos"
    >
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Layout>
  );
};

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId;
});
