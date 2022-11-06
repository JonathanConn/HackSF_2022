import * as React from "react"
import Svg, { Path } from "react-native-svg"

const TriangleUpIcon = (props) => (
  <Svg
    width={13}
    height={8}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M6.5.5 12.13 8H.87L6.5.5Z" fill="#161616" />
  </Svg>
)

export default TriangleUpIcon
