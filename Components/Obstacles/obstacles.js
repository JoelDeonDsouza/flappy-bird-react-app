import React from "react";
import { Text, View } from "react-native";

const Obstacles = ({
  color,
  obstaclesLeft,
  obstaclesWidth,
  obstaclesHeight,
  gap,
  randomHeight,
}) => {
  return (
    <>
      <View
        style={{
          position: "absolute",
          backgroundColor: color,
          width: obstaclesWidth,
          height: obstaclesHeight,
          left: obstaclesLeft,
          bottom: randomHeight + obstaclesHeight + gap,
        }}
      />
      <View
        style={{
          position: "absolute",
          backgroundColor: color,
          width: obstaclesWidth,
          height: obstaclesHeight,
          left: obstaclesLeft,
          bottom: randomHeight,
        }}
      />
    </>
  );
};

export default Obstacles;
