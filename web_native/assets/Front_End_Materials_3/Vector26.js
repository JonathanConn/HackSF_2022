import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={390}
    height={218}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M-56.523 115.236c-64.767 21.581-111.636 113.727-99.581 100.465 12.055-13.263 839.104 0 839.104 0V-28s-70.755 0-127.359 29.51c-56.604 29.509-53.25 38.421-99.582 49.071C388.246 66.17 342.298 24.808 272.62 36.655c-74.952 12.744-81.327 63.403-155.137 78.581-64.625 13.29-113.882-20.033-174.006 0Z"
      fill="#C7ACFE"
      stroke="#000"
      strokeWidth={2}
    />
  </Svg>
)

export default SvgComponent
