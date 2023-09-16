/* node module imports */
import { createContext } from 'react';

/* interface */
interface CtxProps {
  handleOnOpen?: () => void;
  handleOnClose?: () => void;
  handleOnLoaded?: () => void;
}

/* context */
const VideoOverlayContext = createContext<CtxProps>({});

/* exports */
export default VideoOverlayContext;
