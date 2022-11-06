import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={390}
    height={425}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M-495.152 144.989c-114.346 28.128-208.006 180.775-185.405 159.557 22.601-21.218 1441.569 118.919 1441.569 118.919L795.764 2.187S674.208-7.84 572.754 35.15c-101.453 42.99-96.961 58.872-178.077 70.715-118.726 17.336-191.764-60.675-313.16-50.07-130.585 11.408-148.76 98.076-277.73 113.855-112.919 13.814-192.791-50.771-298.939-24.661Z"
      fill="#F0E9FF"
      stroke="#000"
      strokeWidth={2}
    />
  </Svg>
)

export default SvgComponent
