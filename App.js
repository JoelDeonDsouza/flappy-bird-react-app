import { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import GoldBall from "./Components/GoldenBall/goldBall";
import Obstacles from "./Components/Obstacles/obstacles";

export default function App() {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
  const goldBallLeft = screenWidth / 2;
  const [goldBallBottom, setGoldBallBottom] = useState(screenHeight / 2 + 35);
  const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth);
  const [obstaclesLeftTwo, setObstaclesLeftTwo] = useState(
    screenWidth + screenWidth / 2
  );
  const [obstaclesHeightOne, setObstaclesHeightOne] = useState(0);
  const [obstaclesHeightTwo, setObstaclesHeightTwo] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const obstaclesWidth = 65;
  const obstaclesHeight = 300;
  const gap = 200;
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

  //Jump//
  const jump = () => {
    if (!isGameOver && goldBallBottom < screenHeight) {
      setGoldBallBottom((goldBallBottom) => goldBallBottom + 55);
      console.log("jumped");
    }
  };

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
      setObstaclesHeightOne(-Math.random() * 100);
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
      setObstaclesHeightTwo(-Math.random() * 100);
    }
  }, [obstaclesLeftTwo]);

  //check for hit//
  useEffect(() => {
    if (
      goldBallBottom < obstaclesHeightOne + obstaclesHeight + 30 ||
      (goldBallBottom > obstaclesHeightOne + obstaclesHeight + gap - 30 &&
        obstaclesLeft > screenWidth / 2 - 30 &&
        obstaclesLeft < screenWidth / 2 + 30) ||
      goldBallBottom < obstaclesHeightOne + obstaclesHeight + 30 ||
      (goldBallBottom > obstaclesHeightTwo + obstaclesHeight + gap - 30 &&
        obstaclesLeftTwo > screenWidth / 2 - 30 &&
        obstaclesLeftTwo < screenWidth / 2 + 30)
    ) {
      console.log("Game over");
      gameOver();
    }
  });

  const gameOver = () => {
    clearInterval(gameTimerId);
    clearInterval(obstaclesLeftTimerID);
    clearInterval(obstaclesLeftTimerIDTwo);
    setIsGameOver(true);
  };

  return (
    <TouchableWithoutFeedback onPress={jump}>
      <View style={styles.container}>
        <GoldBall goldBallBottom={goldBallBottom} goldBallLeft={goldBallLeft} />
        <Obstacles
          color={"#B20600"}
          obstaclesHeight={obstaclesHeight}
          randomHeight={obstaclesHeightOne}
          obstaclesWidth={obstaclesWidth}
          obstaclesLeft={obstaclesLeft}
          gap={gap}
        />
        <Obstacles
          color={"#F55353"}
          obstaclesHeight={obstaclesHeight}
          randomHeight={obstaclesHeightTwo}
          obstaclesWidth={obstaclesWidth}
          obstaclesLeft={obstaclesLeftTwo}
          gap={gap}
        />
      </View>
    </TouchableWithoutFeedback>
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
