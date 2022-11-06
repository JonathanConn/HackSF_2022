import * as React from "react"
import Svg, { Path } from "react-native-svg"

const HomeIcon = ({selected}) => (
  <Svg
    width={28}
    height={29}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    
  >
    <Path
      d="M2 28h6.517a1 1 0 0 0 1-1v-6a1 1 0 0 1 1-1h6.966a1 1 0 0 1 1 1v6a1 1 0 0 0 1 1H26a1 1 0 0 0 1-1V12.464a1 1 0 0 0-.354-.764l-12-10.153a1 1 0 0 0-1.292 0l-12 10.153a1 1 0 0 0-.354.764V27a1 1 0 0 0 1 1Z"
      stroke={selected ? "#8ABCFE" : "#000" }
      strokeWidth={2}
    />
  </Svg>
)

export default HomeIcon
