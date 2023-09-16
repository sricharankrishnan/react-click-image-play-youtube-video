/* node module imports */
import React, { useContext } from 'react';
import Image from 'next/image';

/* app imports */
import VideoOverlayContext from '../context';
import styles from '../style.module.scss';

/* interface */
interface FCProps {
  onClickHandler: () => void;
}

/* component */
function CloseButton(props: FCProps): JSX.Element {
  const { onClickHandler } = props;
  const { handleOnClose } = useContext(VideoOverlayContext);

  function handleOnClick(): void {
    onClickHandler();
    if (handleOnClose) {
      handleOnClose();
    }
  }

  return (
    <button
      className={styles.closeIcon}
      type="button"
      onClick={handleOnClick}
    >
      <Image
        width={30}
        height={30}
        src="/assets/icons/x-close-icon.svg"
        alt="Close"
        title="Close"
      />
    </button>
  );
}

/* exports */
export default CloseButton;
