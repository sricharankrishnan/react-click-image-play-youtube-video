/* node module imports */
import React, { useContext, useEffect } from 'react';

/* app imports */
import VideoOverlayContext from '../context';
import styles from '../style.module.scss';

/* interface */
interface FCProps {
  children: React.ReactNode;
  show: boolean;
}

/* component */
function MainDiv(props: FCProps): JSX.Element {
  const { show, children } = props;
  const { handleOnOpen } = useContext(VideoOverlayContext);

  /* eslint-disable react-hooks/exhaustive-deps -- depends only on 'show' */
  useEffect(() => {
    if (show) {
      if (handleOnOpen) {
        handleOnOpen();
      }
    }
  }, [show]);
  /* eslint-enable react-hooks/exhaustive-deps -- depends only on 'show' */

  if (show) {
    return (
      <div className={styles.videoPlayerOverlay}>
        { children }
      </div>
    );
  }
  return (
    <div className={`${styles.videoPlayerOverlay} ${styles.hiddenTransform}`} />
  );
}

/* exports */
export default MainDiv;
