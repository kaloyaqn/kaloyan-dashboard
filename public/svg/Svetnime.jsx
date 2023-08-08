import React from "react";

function SvetnimeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g clipPath="url(#clip0_5930_3310)">
        <path fill="url(#pattern0)" d="M0 0H24V24H0z"></path>
      </g>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.00781)" xlinkHref="#image0_5930_3310"></use>
        </pattern>
        <clipPath id="clip0_5930_3310">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
        <image
          id="image0_5930_3310"
          width="128"
          height="128"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
  );
}

export default SvetnimeIcon;