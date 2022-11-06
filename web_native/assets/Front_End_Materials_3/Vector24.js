import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={390}
    height={319}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M343.247 207.962c64.305 31.182 110.839 164.324 98.87 145.161-11.968-19.163-833.117 0-833.117 0V1s70.25 0 126.451 42.638c56.2 42.638 52.87 55.516 98.87 70.904 67.33 22.522 112.95-37.24 182.131-20.122C90.87 112.834 97.2 186.03 170.483 207.962c64.163 19.202 113.069-28.947 172.764 0Z"
      fill="#E2EFFF"
      stroke="#000"
      strokeWidth={2}
    />
  </Svg>
)

export default SvgComponent
