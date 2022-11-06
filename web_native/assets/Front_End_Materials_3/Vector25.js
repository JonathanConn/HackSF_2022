import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={390}
    height={461}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M-570.419 269.349c-113.978 40.431-196.458 213.064-175.244 188.217 21.214-24.847 1476.663 0 1476.663 0V1S606.484 1 506.872 56.285c-99.613 55.285-93.71 71.982-175.244 91.934-119.34 29.203-200.198-48.285-322.82-26.089-131.901 23.875-143.119 118.782-273.011 147.219-113.727 24.898-200.411-37.532-306.216 0Z"
      fill="#8ABCFE"
      stroke="#000"
      strokeWidth={2}
    />
  </Svg>
)

export default SvgComponent
