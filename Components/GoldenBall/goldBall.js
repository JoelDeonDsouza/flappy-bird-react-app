import React from "react";
import { Text, View } from "react-native";

const GoldBall = ({ goldBallLeft, goldBallBottom }) => {
  const ballWidth = 55;
  const ballHeight = 55;
  return (
    <View
      style={{
        position: "absolute",
        backgroundColor: "#F0A500",
        width: ballWidth,
        height: ballHeight,
        borderRadius: 100,
        bottom: goldBallBottom - ballHeight / 2,
        left: goldBallLeft - ballWidth / 2,
      }}
    />
  );
};

export default GoldBall;
