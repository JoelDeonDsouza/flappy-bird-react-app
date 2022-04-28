import { useState, useEffect } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import GoldBall from "./Components/GoldenBall/goldBall";

export default function App() {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
  const goldBallLeft = screenWidth / 2;
  const [goldBallBottom, setGoldBallBottom] = useState(screenHeight / 2);
  const gravity = 3;
  let gameTimerId;

  //GoldenBall movement
  useEffect(() => {
    if (goldBallBottom > 0) {
      gameTimerId = setInterval(() => {
        setGoldBallBottom((goldBallBottom) => goldBallBottom - gravity);
      }, 36);
      return () => {
        clearInterval(gameTimerId);
      };
    }
  }, [goldBallBottom]);

  // console.log(goldBallBottom);

  return (
    <View style={styles.container}>
      <GoldBall goldBallBottom={goldBallBottom} goldBallLeft={goldBallLeft} />
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
