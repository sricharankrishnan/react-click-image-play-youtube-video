/* node module imports */
import React, { memo } from 'react';

/* app imports */
import FrameProps from './frame-props';
import CloseButton from './close-button';
import FrameComponent from './iframe-component';

interface FCProps extends FrameProps {
  closeIconSrc: string;
  onCloseHandler: () => void;
}

/* component */
function BodyComposer(props: FCProps): JSX.Element {
  const { embedLink, embedTitle, onCloseHandler, closeIconSrc } = props;
  return (
    <>
      <CloseButton
        onClickHandler={onCloseHandler}
        src={closeIconSrc}
      />
      <FrameComponent
        embedLink={embedLink}
        embedTitle={embedTitle}
      />
    </>
  );
}

/* exports */
export default memo(BodyComposer);
