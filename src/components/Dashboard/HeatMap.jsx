import React, { useState, useRef, useLayoutEffect } from "react";

const HeatMap = ({width}) => {
  const ref = React.useRef();
  const [height, setHeight] = React.useState("0px");
  const onLoad = () => {
    setHeight(ref.current.contentWindow.document.body.scrollHeight + "px");
  };

  return (
    <iframe
      src="https://console-intl.huaweicloud.com/dlv/vision/share/?id=eed82f9d98a0473e9a2e676fd7b78e85&locale=en-us&region=ap-southeast-3"
      width="400vw"
      height="auto"
    />
  );
};

export default HeatMap;
