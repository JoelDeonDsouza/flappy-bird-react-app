import { useState, useEffect } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import GoldBall from "./Components/GoldenBall/goldBall";
import Obstacles from "./Components/Obstacles/obstacles";

export default function App() {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
  const goldBallLeft = screenWidth / 2;
  const [goldBallBottom, setGoldBallBottom] = useState(screenHeight / 2);
  const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth);
  const [obstaclesLeftTwo, setObstaclesLeftTwo] = useState(
    screenWidth + screenWidth / 2
  );
  const obstaclesWidth = 65;
  const obstaclesHeight = 300;
  const gap = 190;
  const gravity = 3;
  let gameTimerId;
  let obstaclesLeftTimerID;
  let obstaclesLeftTimerIDTwo;

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

  //Begin obstacles
  useEffect(() => {
    if (obstaclesLeft > -obstaclesWidth) {
      obstaclesLeftTimerID = setInterval(() => {
        setObstaclesLeft((obstaclesLeft) => obstaclesLeft - 6);
      }, 36);
      return () => {
        clearInterval(obstaclesLeftTimerID);
      };
    } else {
      setObstaclesLeft(screenWidth);
    }
  }, [obstaclesLeft]);

  //Another Obstacle
  useEffect(() => {
    if (obstaclesLeftTwo > -obstaclesWidth) {
      obstaclesLeftTimerIDTwo = setInterval(() => {
        setObstaclesLeftTwo((obstaclesLeftTwo) => obstaclesLeftTwo - 6);
      }, 36);
      return () => {
        clearInterval(obstaclesLeftTimerIDTwo);
      };
    } else {
      setObstaclesLeftTwo(screenWidth);
    }
  }, [obstaclesLeftTwo]);

  return (
    <View style={styles.container}>
      <GoldBall goldBallBottom={goldBallBottom} goldBallLeft={goldBallLeft} />
      <Obstacles
        color={"#B20600"}
        obstaclesHeight={obstaclesHeight}
        obstaclesWidth={obstaclesWidth}
        obstaclesLeft={obstaclesLeft}
        gap={gap}
      />
      <Obstacles
        color={"#F8CB2E"}
        obstaclesHeight={obstaclesHeight}
        obstaclesWidth={obstaclesWidth}
        obstaclesLeft={obstaclesLeftTwo}
        gap={gap}
      />
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
