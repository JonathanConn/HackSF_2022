import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

const SvgComponent = ({color}) => (
  <Svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect width={40} height={40} rx={5} fill="#fff" />
    <Path
      d="M21.994 18.006a5.642 5.642 0 0 0-7.977 0l-3.99 3.988a5.642 5.642 0 0 0 7.979 7.979L20 27.979"
      stroke={color}
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18.005 21.994a5.642 5.642 0 0 0 7.978 0l3.99-3.988a5.642 5.642 0 0 0-7.979-7.98L20 12.022"
      stroke={color}
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default SvgComponent
