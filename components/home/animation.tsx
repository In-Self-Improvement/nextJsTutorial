import React from "react";
import Lottie from "react-lottie-player";

export default function Animation() {
  const lottieJson = require("/public/animation.json");
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: `100%`, height: `100%` }}
    />
  );
}
