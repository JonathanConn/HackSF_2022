import * as React from "react"
import Svg, { Path } from "react-native-svg"

const TriangleDownIcon = (props) => (
  <Svg
    width={13}
    height={8}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M6.5 7.5 12.13 0H.87L6.5 7.5Z" fill="#161616" />
  </Svg>
)

export default TriangleDownIcon
