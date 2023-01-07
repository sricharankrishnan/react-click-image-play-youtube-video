/* node module imports */
import React, {useEffect, useRef} from "react";

export default function IFrameComponent(props) {
  const frameAllowed = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  const iframeElementRef = useRef();

  useEffect(() => {
    const iframe = iframeElementRef.current;
    const onLoadHandler = (event) => {
      if ("onLoaded" in props && typeof props.onLoaded === "function") {
        props.onLoaded(event);
      }
    };

    iframe.addEventListener("load", onLoadHandler);

    return () => {
      iframe.removeEventListener("unload", onLoadHandler);
      if ("onUnloaded" in props && typeof props.onUnloaded === "function") {
        props.onUnloaded();
      }
    };
  });

  return (
    <iframe ref={iframeElementRef} src={`${props.embedLink}?autoplay=1&mute=0&rel=0`} title={props.embedTitle} frameBorder="0" allow={frameAllowed}allowFullScreen>
    </iframe>
  );
}
