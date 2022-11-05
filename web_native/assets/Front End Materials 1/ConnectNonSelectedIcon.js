import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

const ConnectNonSelectedIcon = (selected) => (
  <Svg
    width={26}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M7.703 13.708h.35a6.703 6.703 0 0 1 6.704 6.703 4.135 4.135 0 0 1-4.136 4.136H5.135A4.135 4.135 0 0 1 1 20.41a6.703 6.703 0 0 1 6.703-6.703Z"
      stroke={selected ? "#000" : "#8ABCFE"}
      strokeWidth={2}
    />
    <Path
      d="M17.883 13.708h.35a6.703 6.703 0 0 1 6.704 6.703 4.135 4.135 0 0 1-4.136 4.136h-5.485a4.135 4.135 0 0 1-4.136-4.136 6.703 6.703 0 0 1 6.703-6.703Z"
      stroke={selected ? "#000" : "#8ABCFE"}
      strokeWidth={2}
    />
    <Circle cx={8.17} cy={5.705} r={4.252} stroke="#000" strokeWidth={2} />
    <Circle cx={18.803} cy={5.705} r={4.252} stroke="#000" strokeWidth={2} />
  </Svg>
)

export default ConnectNonSelectedIcon
