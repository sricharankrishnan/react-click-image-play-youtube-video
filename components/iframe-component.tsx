/* node module imports */
import React, { useContext } from 'react';

/* app imports */
import VideoOverlayContext from '../context';
import FrameProps from './frame-props';

/* component */
function FrameComponent(props: FrameProps): JSX.Element {
  const { embedLink, embedTitle } = props;
  const frameAllowed = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  const { handleOnLoaded } = useContext(VideoOverlayContext);

  function onLoaded(): void {
    if (handleOnLoaded) {
      handleOnLoaded();
    }
  }

  return (
    <iframe
      onLoad={onLoaded}
      src={`${embedLink}?autoplay=1&mute=0&rel=0`}
      title={embedTitle}
      frameBorder="0"
      allow={frameAllowed}
      allowFullScreen
    />
  );
}

/* exports */
export default FrameComponent;
