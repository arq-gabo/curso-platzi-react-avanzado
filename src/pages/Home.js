import React from "react";
import { ListOfCategories } from "../components/ListOfCategoryes";
import { ListOfPhotoCards } from "../container/ListOfPhotoCards";
import { Layout } from "../components/Layout";

export const Home = ({ categoryId }) => {
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
