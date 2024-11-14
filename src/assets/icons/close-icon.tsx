const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="12"
    height="12"
    fill="none"
    viewBox="0 0 12 12"
  >
    <path fill="url(#pattern0_2086_333)" d="M0 0h12v12H0z"></path>
    <defs>
      <pattern
        id="pattern0_2086_333"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use
          xlinkHref="#image0_2086_333"
          transform="matrix(.0053 0 0 .00526 -.35 -.347)"
        ></use>
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="image0_2086_333"
        width="320"
        height="320"
      ></image>
    </defs>
  </svg>
);

export default CloseIcon;
