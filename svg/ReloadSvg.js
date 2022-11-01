import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function ReloadSvg(props) {
  return (
    <Svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M4.46562 4.46564C6.40937 2.52189 9.55 2.51251 11.5063 4.43439L10.2188 5.71876C10.0031 5.93438 9.94062 6.25626 10.0562 6.53751C10.1719 6.81876 10.4469 7.00001 10.75 7.00001H14.4844H14.75C15.1656 7.00001 15.5 6.66564 15.5 6.25001V2.25001C15.5 1.94689 15.3188 1.67189 15.0375 1.55626C14.7563 1.44064 14.4344 1.50314 14.2188 1.71876L12.9187 3.01876C10.1812 0.315635 5.77187 0.32501 3.05 3.05001C2.2875 3.81251 1.7375 4.70938 1.4 5.66876C1.21562 6.19063 1.49063 6.75939 2.00938 6.94376C2.52813 7.12813 3.1 6.85314 3.28437 6.33438C3.525 5.65313 3.91562 5.01251 4.46562 4.46564ZM0.5 9.75001V9.98751V10.0094V13.75C0.5 14.0531 0.68125 14.3281 0.9625 14.4438C1.24375 14.5594 1.56562 14.4969 1.78125 14.2813L3.08125 12.9813C5.81875 15.6844 10.2281 15.675 12.95 12.95C13.7125 12.1875 14.2656 11.2906 14.6031 10.3344C14.7875 9.81251 14.5125 9.24376 13.9937 9.05939C13.475 8.87501 12.9031 9.15001 12.7188 9.66876C12.4781 10.35 12.0875 10.9906 11.5375 11.5375C9.59375 13.4813 6.45312 13.4906 4.49687 11.5688L5.78125 10.2813C5.99687 10.0656 6.05937 9.74376 5.94375 9.46251C5.82812 9.18126 5.55312 9.00001 5.25 9.00001H1.5125H1.49063H1.25C0.834375 9.00001 0.5 9.33439 0.5 9.75001Z"
        fill={props.color}
      />
    </Svg>
  );
}
