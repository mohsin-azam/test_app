import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';
const ChairSvg = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 18}
    height={props.height || 17}
    fill="none"
    {...props}
  >
    <Rect
      width={177.012}
      height={12.759}
      fill={props.fill || '#CD9D0F'}
      rx={2}
    />
    <Rect
      width={11.908}
      height={2.552}
      x={2.552}
      y={13.61}
      fill={props.fill || '#CD9D0F'}
      rx={1.276}
    />
  </Svg>
);
export default ChairSvg;
