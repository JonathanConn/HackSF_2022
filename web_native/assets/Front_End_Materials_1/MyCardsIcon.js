import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

const MyCardsIcon = ({selected}) => (
  <Svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Circle cx={15} cy={15} r={14} stroke={selected ? "#8ABCFE" : "#000" } strokeWidth={2} />
    <Path
      d="m7 26 1.944-4.404A1 1 0 0 1 9.859 21h9.792a1 1 0 0 1 .876.517L23 26"
      stroke={selected ? "#8ABCFE" : "#000" }
      strokeWidth={2}
    />
    <Circle cx={14.5} cy={12.5} r={4.5} stroke={selected ? "#8ABCFE" : "#000" } strokeWidth={2} />
  </Svg>
)

export default MyCardsIcon
