import { ImageSourcePropType, ImageURISource, Text, View } from "react-native";
import React, { Component, useState, useEffect } from "react";
import HomeScreen from "../../screens/HomeScreen";

export type MovieType = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};


const APIKEY = "68f33677";
const URL = "https://www.omdbapi.com/";

export default function useMovies() {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchMovies = async (searchTerm: string) => {
    const response = await fetch(`${URL}?apikey=${APIKEY}&s=${searchTerm}`)
      .then((response) => response.json())
      .then((json) => {
        setMovieData(json.Search);
        setLoading(false);
        console.log(json);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getMovieDetail = async (imdbID: string) => {
    const response = await fetch(`${URL}?apikey=${APIKEY}&i=${imdbID}`)
      .then((response) => response.json())
      .then((json) => {
        setMovieData(json.Search);
        setLoading(false);
        console.log(json);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return { movieData, loading, searchMovies, getMovieDetail };
}
