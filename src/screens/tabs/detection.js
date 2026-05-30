import { View, Text, StyleSheet } from "react-native";

export default function Detection() {
  return (
    <View style={styles.container}>
      <Text>Detection Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
