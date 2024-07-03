import React from 'react';


const UsaFlagIcon = (props) => (
    <svg
    width={96}
    height={96}
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect width={96} height={96} fill="url(#pattern0_118_1512)" />
    <defs>
      <pattern
        id="pattern0_118_1512"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#image0_118_1512" transform="scale(0.0104167)" />
      </pattern>
      <image
        id="image0_118_1512"
        width={96}
        height={96}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default UsaFlagIcon;