import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View , Image} from "react-native";
import { buttonStyles, resultStyles } from "../../constants/styles";
import { MovieType } from "../networking/useMovies";
import { StyleSheet } from "react-native";


export default function MovieSearchResult(props: {movieData: MovieType
    onPress: (imdbID: string) => Promise<void>
    
}) {
    const navigation = useNavigation()
    return (
          <View style={styles.container}>
            <Text style={buttonStyles.buttonText}>{props.movieData.Title}</Text>
            <Text style={buttonStyles.buttonText}>{props.movieData.Year}</Text>
            <Image 
            style={{width: 300,
            height: 300,}}
            resizeMode='contain'
            source={{
                uri: props.movieData.Poster,

            }}/>
          </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000', // or '#000000' for black
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  