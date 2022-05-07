import React from "react";
import { Image } from "../type";

interface Props {
  image: Image;
}

export const Card = ({ image }: Props) => {
  return (
    <div>
      <div className="card m-2" style={{ width: "15rem" }}>
        <img src={image.urls.regular} className="card-img-top" alt="..." />
      </div>
    </div>
  );
};
