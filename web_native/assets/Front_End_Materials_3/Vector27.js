import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={390}
    height={301}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M343.247 130.117c64.305 36.027 110.839 189.855 98.87 167.714-11.968-22.14-833.117 0-833.117 0V-109s70.25 0 126.451 49.263c56.2 49.262 52.87 64.14 98.87 81.92 67.33 26.021 112.95-43.026 182.131-23.248C90.87 20.209 97.2 104.778 170.483 130.117c64.163 22.186 113.069-33.444 172.764 0Z"
      fill="#F0E9FF"
      stroke="#000"
      strokeWidth={2}
    />
  </Svg>
)

export default SvgComponent
