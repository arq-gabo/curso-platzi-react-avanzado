import React from "react";
import { PhotoCard } from "../PhotoCard";

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {[1, 2, , 4, 5, 6, 7].map((id) => (
        <PhotoCard key={id} />
      ))}
    </ul>
  );
};
