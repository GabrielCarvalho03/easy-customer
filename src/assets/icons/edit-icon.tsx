import * as React from "react";

const EditIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
  >
    <path fill="url(#pattern0_2086_30)" d="M0 0h20v20H0z"></path>
    <defs>
      <pattern
        id="pattern0_2086_30"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#image0_2086_30" transform="scale(.00313)"></use>
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="image0_2086_30"
        width="320"
        height="320"
      ></image>
    </defs>
  </svg>
);

export default EditIcon;