import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function LocationSvg(props) {
  return (
    <Svg
      width="15"
      height="20"
      viewBox="0 0 15 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M8.42578 19.5259C10.4297 17.0181 15 10.9399 15 7.52588C15 3.38525 11.6406 0.0258789 7.5 0.0258789C3.35938 0.0258789 0 3.38525 0 7.52588C0 10.9399 4.57031 17.0181 6.57422 19.5259C7.05469 20.1235 7.94531 20.1235 8.42578 19.5259ZM7.5 10.0259C6.12109 10.0259 5 8.90479 5 7.52588C5 6.14697 6.12109 5.02588 7.5 5.02588C8.87891 5.02588 10 6.14697 10 7.52588C10 8.90479 8.87891 10.0259 7.5 10.0259Z"
        fill={props.color}
      />
    </Svg>
  );
}
