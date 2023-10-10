import { useContext, useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar,
} from "react-native";

import useMovies from "../components/networking/useMovies";
import MovieSearchResult from "../components/ui/MovieSearchResult";

export default function MovieDetailScreen() {
  const { movieData, getMovieDetail } = useMovies();

  return (
    <View>
      <StatusBar />

      <Text style={styles.title}></Text>
      <FlatList
        data={movieData}
        keyExtractor={({ imdbID }) => imdbID}
        renderItem={({ item }) => (
          <MovieSearchResult onPress={getMovieDetail} movieData={item} />
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    zIndex: 1,
    padding: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    padding: 16,
  },
  welcomeText: {
    padding: 6,
  },
  input: {
    flex: 5,
    flexDirection: "row",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "black",
  },
});
