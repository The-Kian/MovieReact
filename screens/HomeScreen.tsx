import { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import useMovies from "../components/networking/useMovies";
import MovieSearchResult from "../components/ui/MovieSearchResult";
import SearchButton from "../components/ui/SearchButton";

function HomeScreen({}) {
  const { movieData, searchMovies, getMovieDetail } = useMovies();

  const [text, onChangeText] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      searchMovies(text);
    }, 300);

    return () => clearTimeout(handler);
  }, [text]);

  return (
    <View>

      <Text style={styles.title}>Welcome!</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          onSubmitEditing={() => {
            searchMovies(text);
          }}
        />
        <SearchButton onPress={() => searchMovies(text)}>Search</SearchButton>
      </View>
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

export default HomeScreen;

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
