import { View, Pressable, Text } from "react-native";
import { buttonStyles } from "../../constants/styles";

export default function SearchButton(props: {
  children: string;
  onPress: (searchTerm: string) => Promise<void>;
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        buttonStyles.buttons,
        pressed && buttonStyles.buttonPressed,
      ]}
    >
      <View>
        <Text>{props.children}</Text>
      </View>
    </Pressable>
  );
}
