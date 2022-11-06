import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

const TelegramIcon = ({color}) => (
  <Svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect width={40} height={40} rx={5} fill="#fff" />
    <Path
      d="m32.794 6.885-27.7 11c-.9.3-.8 1.6.1 1.9l7 2.2 2.8 8.8c.2.7 1.1.9 1.6.4l4.1-3.8 7.8 5.7c.6.4 1.4.1 1.6-.6l5.4-23.2c.3-1.7-1.2-3-2.7-2.4Zm-16.2 16.8-.9 5.2-2-7.2 19.5-12.8-16.6 14.8Z"
      fill={color}
    />
  </Svg>
)

export default TelegramIcon
