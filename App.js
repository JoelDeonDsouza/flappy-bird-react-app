import { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import GoldBall from "./Components/GoldenBall/goldBall";

export default function App() {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
  const goldBallLeft = screenWidth / 2;
  const [goldBallBottom, srtGoldBallBottom] = useState(screenHeight / 2);

  return (
    <View style={styles.container}>
      <GoldBall />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
