/* node module imports */
import React, {useState, useEffect, useRef} from "react";

/* app imports */
import "./css/style.scss";
import OverlayIframeComponent from "./components/iframe-component.js";
import closeIcon from "./icons/x-close-icon.svg";

export const ReactYouTubeOverlay = (props) => {
  /* set top vars */
  const [overlayShowState, setOverlayShowState] = useState(false);
  const classString = !overlayShowState ? "videoPlayerOverlay hiddenTransform" : "videoPlayerOverlay";

  try {
    if (!props) {
      throw new Error("ReactYouTubeOverlay - props are missing");
    }
    else if (!props.embedLink || typeof props.embedLink !== "string") {
      throw new Error("ReactYouTubeOverlay - 'embedLink' property missing and must be of string type");
    }
    else if (!props.embedTitle || typeof props.embedLink !== "string") {
      throw new Error("ReactYouTubeOverlay - 'embedTitle' property missing and must be of string type");
    }
    else {
      /* when the opening trigger is clicked */
      const onOpenHandler = () => {
        setOverlayShowState(true);

        if ("onOpening" in props && typeof props.onOpening === "function") {
          props.onOpening();
        }

        setTimeout(() => {
          if ("onOpened" in props && typeof props.onOpened === "function") {
            props.onOpened();
          }
        }, 150);
      };

      /* when the closer in the overlay is clicked */
      const onCloseHandler = () => {
        setOverlayShowState(false);
        props.onClosing();

        setTimeout(() => {
          props.onClosed();
        }, 150);
      };

      /* sending these to the render props children */
      let renderProps = {onOpenHandler, overlayShowState};

      /* render */
      return (
        <React.Fragment>
          <div className={classString}>
            <button id="youtubeOverlayCloser" className="closer" onClick={onCloseHandler}>
              <img src={closeIcon} alt="Close" title="close"/>
            </button>
            { (overlayShowState === true) &&
              <OverlayIframeComponent
                embedLink={props.embedLink}
                embedTitle={props.embedTitle}
                onLoaded={props.onIframeLoaded}
                onUnloaded={props.onIframeUnloaded}
              />
            }
          </div>
          {props.children(renderProps)}
        </React.Fragment>
      );
    }
  }
  catch (error) {
    console.error(error);
    return null;
  }
};
