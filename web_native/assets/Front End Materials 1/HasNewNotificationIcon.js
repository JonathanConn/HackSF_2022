import * as React from "react"
import Svg, { G, Path, Circle, Defs, ClipPath } from "react-native-svg"

const HasNewNotificationIcon = () => (
  <Svg
    width={28}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <G clipPath="url(#a)" fill="#000">
      <Path d="m25.55 21.879-.264-.234a11.182 11.182 0 0 1-1.953-2.279 9.823 9.823 0 0 1-1.05-3.74v-3.843a8.407 8.407 0 0 0-7.342-8.361V2.419a1.038 1.038 0 0 0-2.077 0v1.019a8.408 8.408 0 0 0-7.256 8.345v3.842a9.823 9.823 0 0 1-1.05 3.741 11.202 11.202 0 0 1-1.921 2.28l-.265.233v2.193H25.55v-2.193ZM11.915 24.889a2.06 2.06 0 0 0 4.084 0h-4.084Z" />
    </G>
    <Circle cx={21.5} cy={6.5} r={5.5} fill="#FF9F76" />
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h28v28H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default HasNewNotificationIcon
