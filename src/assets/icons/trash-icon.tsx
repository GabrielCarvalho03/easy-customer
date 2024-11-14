import * as React from "react";

const TrashIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
  >
    <path fill="url(#pattern0_2086_31)" d="M0 0h20v20H0z"></path>
    <defs>
      <pattern
        id="pattern0_2086_31"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#image0_2086_31" transform="scale(.00313)"></use>
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="image0_2086_31"
        width="320"
        height="320"
      ></image>
    </defs>
  </svg>
);

export default TrashIcon;
