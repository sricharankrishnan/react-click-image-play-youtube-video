/* node module imports */
import React, { useState, useEffect } from 'react';

/* app imports */
import VideoOverlayContext from './context';
import MainDiv from './components/main-div';
import BodyComposer from './components';

/* eslint-disable react/require-default-props -- interface */
interface FCProps {
  embedLink: string;
  embedTitle: string;
  handleOnClose?: () => void;
  handleOnOpen?: () => void;
  handleOnLoaded?: () => void;
}
/* eslint-enable react/require-default-props -- interface */

/* component */
function ReactYouTubeOverlay(props: FCProps): JSX.Element | null {
  const {
    embedLink, embedTitle, handleOnClose, handleOnOpen, handleOnLoaded,
  } = props;
  const [createOverlay, setCreateOverlay] = useState<boolean>(false);
  const [showState, setShowState] = useState<boolean>(false);

  function onCloseHandler() {
    setShowState(() => false);
    setTimeout(() => {
      setCreateOverlay(() => false);
    }, 250);
  }

  const bodyProps = {
    embedLink,
    embedTitle,
    onCloseHandler,
  };
  const ctxProps = {
    handleOnClose,
    handleOnOpen,
    handleOnLoaded,
  };

  /* on initial load */
  useEffect(() => {
    setCreateOverlay(() => true);
  }, [embedLink, embedTitle]);

  /* on creating the element in the dom and opening starts */
  useEffect(() => {
    if (createOverlay) {
      setTimeout(() => {
        setShowState(() => true);
      }, 120);
    }
  }, [createOverlay]);

  /* eslint-disable no-else-return */
  if (!createOverlay && !showState) {
    return null;
  } else if (createOverlay && showState) {
    return (
      <VideoOverlayContext.Provider value={ctxProps}>
        <MainDiv show>
          <BodyComposer {...bodyProps} />
        </MainDiv>
      </VideoOverlayContext.Provider>
    );
  } else {
    return (
      <VideoOverlayContext.Provider value={ctxProps}>
        <MainDiv show={false}>
          <BodyComposer {...bodyProps} />
        </MainDiv>
      </VideoOverlayContext.Provider>
    );
  }
  /* eslint-enable no-else-return */
}

/* exports */
export default ReactYouTubeOverlay;
