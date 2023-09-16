# React Click Image Play YouTube Video Component
![Version](https://img.shields.io/github/v/release/sricharankrishnan/react-click-image-play-youtube-video?sort=semver)
![Open Issues](https://img.shields.io/github/issues-raw/sricharankrishnan/react-click-image-play-youtube-video)
![Closed Issues](https://img.shields.io/github/issues-closed-raw/sricharankrishnan/react-click-image-play-youtube-video)
![License](https://img.shields.io/github/license/sricharankrishnan/react-click-image-play-youtube-video)
![Maintenance](https://img.shields.io/maintenance/yes/2023)
<br/>

### About
A open source component/project that integrates into your application and provides a simple/classic overlay to display youtube video embeds. Built with typescript and integrates well with projects that are created with nextjs. Are you looking for this plugin that supports projects built with jQuery? <a href="https://github.com/sricharankrishnan/click-image-play-youtube-video">click here</a>.
<br/><br/>

### Built Using
- ReactJS
- Typescript with relevant interfaces
- Hooks in React
- Uses the createContext and useContext React hooks
- Function Based React Components
- CSS (Cascading Style Sheets)
<br/><br/>

### Prerequisites
This open source plugin is very suitable for projects that are built with nextjs. Additionally, it has also been sproused up with eslint using the AirBnB style. Developers will also need to know how to work with typescript in order for them to work with this plugin. If you like this plugin or this idea and need a pure react and javascript based one, let me know.
<br/><br/>

### Getting Started
Download the required files in this repository. You will need the entire directory in this repository and then import the required component into the location needed for your application to display this for your users. <a href="https://github.com/sricharankrishnan/react-youtube-overlay-component">Go to the repository</a> and download the zip file locally, extract and then place the directory in an appropriate location in your application.
<br/><br/>

### API
- A typescript interface in the index.tsx file, will basically help you understand the requirements to get started. Here are the details:
```javascript
interface FCProps {
  embedLink: string;
  embedTitle: string;
  closeIconSrc: string;
  handleOnOpen?: () => void;
  handleOnClose?: () => void;
  handleOnLoaded?: () => void;
}
```
- <b>embedLink:</b> (madatory prop) String based only, that determines the link of the youtube video that would be placed in the overlay. A link for this is in the pattern of ```https://www.youtube.com/embed/<youtube-video-id>```.
- <b>embedTitle:</b> (mandatory prop) String based only, that determines the title text for the iframe element in the plugin.
- <b>closeIconSrc:</b> (mandatory prop) String based only, that determines the source of the close button icon. Can be both external (example from a CDN) or a static import.
- <b>handleOnOpen:</b> (optional prop) It is of a function type that accepts zero paramaters and has a void return. This is triggered as soon as the main div element is created and the opening starts.
- <b>handleOnClose:</b> (optional prop) It is of a function type that accpets zero parameters and has a void return. This is triggered when users click on the close button within the overlay.
- <b>handleOnLoaded:</b> (optional prop) It is of a function type that accepts zero parameters and has a void return. This is triggered as soon as the iframe element in the overlay has loaded, which is determined by the 'onLoad' event handler.
<br/><br/>

### Usage
This is a very trivial example to help you understand how you could use this plugin in your application. A pattern that you could find using next js for development.

```javascript
/* sample imports */
import React, { useState } from "react";
import ReactYouTubeOverlay from "@/some/directory/path/to/react-youtube-overlay-component";
import styles from "./styles.module.scss";

/* sample component */
function ExamplePageComponent(): JSX.Element {
  const [video, setVideo] = useState<SomeInterfaceType>({});

  function handleOnClick() {
    setVideo(() => {
      return {
        embedLink: "https://www.youtube.com/embed/vVXIK1xCRpY",
        embedTitle: "Audioslave - Show Me How to Live (Official Video)"
      }
    });
  }

  function handleOnClose() {
    setVideo(() => {});
  }

  let shouldShowVideo = Object.keys(video).length > 0;

  return (
    <React.Fragment>
      <button type="button" className={styles.someButtonClass} onClick={handleOnClick}>Play Video</button>
      {
        shouldShowVideo &&
        <ReactYouTubeOverlay
          embedLink={video.embedLink}
          embedTitle={video.embedTitle}
          handleOnClose={handleOnClose}
        />
      }
    </React.Fragment>
  );
}

/* sample export */
export default ExamplePageComponent;
```

- If you have been able to do just this much by following the above example, you should able to open up the overlay, see the video playing. The top right corner of the overlay component has a close (x mark) button that can be used to close the component. Let us now get into the details of the API for this component, which should give you an idea of what you can do for yourself.
<br/><br/>

### Pull Requests/Contributions and Issues
If there are any suggestions that you have, perhaps you would like to make a suggestion or contribution do go ahead and create a pull request. If you do face any issues when using this open source project, please feel free to raise an issue. It would also be great if you could demonstrate the issue with a sample project for me to see and correct.
<br/><br/>

###  Support
If you like this project, I would really appreciate you placing a star on the github project. This would really help encourage me to become a better developer. Speak to your friends and colleagues about this project too if you can and seek their support.
Here is wishing you a nice day and happy coding. Cheers!
