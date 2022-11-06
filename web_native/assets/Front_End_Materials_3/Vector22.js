import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={390}
    height={356}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M72.874 207.962C8.492 239.144-38.098 372.286-26.116 353.123c11.984-19.163 834.116 0 834.116 0V1s-70.334 0-126.602 42.638-52.934 55.516-98.989 70.904c-67.411 22.522-113.085-37.24-182.349-20.122-74.507 18.414-80.844 91.61-154.215 113.542-64.241 19.202-113.205-28.947-172.97 0Z"
      fill="#C7ACFE"
      stroke="#000"
      strokeWidth={2}
    />
  </Svg>
)

export default SvgComponent
