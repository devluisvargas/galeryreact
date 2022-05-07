import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { Image } from "../type";

interface ReturnUseFetch {
  images: Image[];
  loading: boolean;
  handleSubmit: (e: any) => void;
}

export const useFetchImages = (): ReturnUseFetch => {
  const [images, setImages] = useState<Array<Image>>([]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const peticion = useCallback(() => {
    const KEY = "u9K_6S5OIwc2bWD45VYjkTmFSjydOoJO_7QdO8imOI8";

    let route = "https://api.unsplash.com";

    if (input !== "") {
      route = `${route}/search/photos/?query=${encodeURI(
        input
      )}&client_id=${KEY}`;
    } else {
      route = `${route}/photos/?client_id=${KEY}`;
    }

    console.log(route);
    setLoading(true);

    fetch(route)
      .then((response) => response.json())
      .then((data) => {
        if (data.results) {
          setImages(data.results as Array<Image>);
        } else {
          setImages(data as Array<Image>);
        }
      });

    setLoading(false);
  }, [input]);

  useEffect(() => {
    peticion();
  }, [peticion]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const text: string = e.target[0].value;
    setInput(text);
  };
  return { images, loading, handleSubmit };
};
