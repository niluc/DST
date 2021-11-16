import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={23}
      height={19}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M21.754 15.833v1.056c0 1.161-1.088 2.111-2.417 2.111H2.417C1.076 19 0 18.05 0 16.889V2.11C0 .95 1.076 0 2.417 0h16.92c1.33 0 2.417.95 2.417 2.111v1.056H10.877c-1.341 0-2.417.95-2.417 2.11v8.445c0 1.161 1.076 2.111 2.417 2.111h10.877zm-10.877-2.11h12.086V5.277H10.877v8.444zm4.834-2.64c-1.003 0-1.813-.707-1.813-1.583s.81-1.583 1.813-1.583 1.813.707 1.813 1.583-.81 1.583-1.813 1.583z"
        fill="currentColor"
      />
    </Svg>
  );
}

export default SvgComponent;
