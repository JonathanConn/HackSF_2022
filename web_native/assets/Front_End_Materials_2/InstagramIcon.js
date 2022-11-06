import * as React from "react"
import Svg, { Path } from "react-native-svg"

const InstagramIcon = ({color}) => (
  <Svg
    width={40}
    height={40}
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M19.995 13.33c-3.673 0-6.67 2.998-6.67 6.67 0 3.672 2.997 6.67 6.67 6.67 3.672 0 6.669-2.998 6.669-6.67 0-3.672-2.997-6.67-6.67-6.67ZM39.998 20c0-2.762.025-5.499-.13-8.256-.155-3.202-.886-6.044-3.227-8.385C34.294 1.012 31.457.287 28.255.132 25.493-.024 22.756.002 20 .002c-2.762 0-5.499-.026-8.256.13C8.542.287 5.7 1.017 3.36 3.359 1.012 5.705.287 8.542.132 11.744c-.156 2.762-.13 5.5-.13 8.256 0 2.757-.026 5.499.13 8.256.155 3.202.885 6.044 3.227 8.385 2.346 2.347 5.183 3.072 8.385 3.227 2.762.155 5.499.13 8.256.13 2.761 0 5.498.026 8.255-.13 3.202-.155 6.044-.885 8.386-3.227 2.346-2.346 3.072-5.183 3.227-8.385.16-2.757.13-5.494.13-8.256ZM19.995 30.262A10.247 10.247 0 0 1 9.733 20 10.247 10.247 0 0 1 19.995 9.738 10.247 10.247 0 0 1 30.256 20a10.247 10.247 0 0 1-10.261 10.262Zm10.682-18.548a2.394 2.394 0 0 1-2.397-2.396 2.394 2.394 0 0 1 2.397-2.397 2.394 2.394 0 0 1 2.215 3.314 2.394 2.394 0 0 1-2.215 1.48Z"
      fill={color}
    />
  </Svg>
)

export default InstagramIcon