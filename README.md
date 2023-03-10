# React Click Image Play YouTube Video Component
![Version](https://img.shields.io/github/v/release/sricharankrishnan/react-click-image-play-youtube-video?sort=semver)
![Open Issues](https://img.shields.io/github/issues-raw/sricharankrishnan/react-click-image-play-youtube-video)
![Closed Issues](https://img.shields.io/github/issues-closed-raw/sricharankrishnan/react-click-image-play-youtube-video)
![License](https://img.shields.io/github/license/sricharankrishnan/react-click-image-play-youtube-video)
![Maintenance](https://img.shields.io/maintenance/yes/2023)
<br/>

### About
A React component that can be integrated into your application code, to help display and play youtube video embeds inside a popup overlay that takes over your entire screen. The overlay is triggered with a click event that is bound to any valid HTML element (for example a button) and is not just restricted to buttons only.

If you would like to see how this works, a demo project at <a href="https://codesandbox.io/s/react-youtube-overlay-component-demo-pg8kiw">this demo codesandbox</a> is available for you. 

Are you looking for this plugin that supports projects built with jQuery? <a href="https://github.com/sricharankrishnan/click-image-play-youtube-video">click here</a>.
<br/><br/>

### Built Using
- ReactJS
- Hooks in React
- Function Based React Components
- CSS (Cascading Style Sheets)
<br/><br/>

### Prerequisites
The demonstration for this particular component will use the '__Render Props__' pattern of building and displaying user interfaces in react. If you are not familiar with the render prop pattern, kindly checkout [React Render Props Article](https://www.robinwieruch.de/react-render-props/) for more information. Additionally, you should ideally be aware of basic functional component life-cycles and how data is generally passed between parent and child components in react.
<br/><br/>

### Getting Started
Download the required files in this repository. You will need the entire directory in this repository and then import the required component into the location needed for your application to display this for your users. <a href="https://github.com/sricharankrishnan/react-youtube-overlay-component">Go to the repository</a> and download the zip file locally, extract and then place the directory in an appropriate location in your application.
<br/><br/>

### Usage
- Import the component into your required file like shown below.
```javascript
import {ReactYouTubeOverlay} from "@some/path/to/this/directory/react-youtube-overlay-component/index.js"
```

- In the component, you'll need to create a props object that would be consumsed by the Overlay component.
```javascript
export default function YourAppComponent() {
  const overlayProps = {
    embedLink: "https://www.youtube.com/embed/vVXIK1xCRpY",
    embedTitle: "Audioslave - Show Me How to Live (Official Video)"
  };
  
  //... [rest of your code]...
}
```

- Create the instance of the overlay component in your application and use the render props pattern in react to bring in the trigger element that would be used for opening the overlay.
```javascript
export default function YourAppComponent() {  
  const overlayProps = {
    embedLink: "https://www.youtube.com/embed/vVXIK1xCRpY",
    embedTitle: "Audioslave - Show Me How to Live (Official Video)"
  };
  
  return (
    <React.Fragment>
      <ReactYouTubeOverlay {...overlayProps}>
        {
          (props) => {
            return (
              <button type="button" onClick={props.onOpenHandler}>Click Me</button>
            )
          }
        }
      </ReactYouTubeOverlay>
    </React.Fragment>
  )
}
```

- If you have been able to do just this much by following the above example, you should able to open up the overlay, see the video playing. The top right corner of the overlay component has a close (x mark) button that can be used to close the component. Let us now get into the details of the API for this component, which should give you an idea of what you can do for yourself.
<br/><br/>

### Component APIs
The following presents the details of the APIs avaialble for this component. Broadly speaking, some portions of the overlay props are mandatory, while the others are optional giving you an opportunity to do more things as and when certain events occur during the interaction.

- (String) __overlayProps.embedLink__ (*Mandatory*): This property is used to carry the url of the youtube embed. The value of the embed is same as the what you get when you click on the share option, select embed and then copy the url value from the displayed iframe tag.

- (String) __overlayProps.embedTitle__ (*Mandatory*): This property is used to carry the title of the embed being displayed. You can for example, copy the title of the text that is displayed under the youtube video and place that here.

- (Method) __overlayProps.onOpening__ (*Optional*): This method will get triggered just as soon as the user clicks on the trigger element. If you wish to do someting just while the overlay is being requested, you can use this method.

- (Method) __overlayProps.onOpened__ (*Optional*): This method is triggered when the overlay's opening animation is complete and is being displayed on your screen.

- (Method) __overlayProps.onClosing__ (*Optional*): This method is triggered when a user clicks on the close button in the overlay and when the closing animation has just started. 

- (Method) __overlayProps.onClosed__ (*Optional*): This method is triggered when the closing animation has completed for the overlay. During this stage, the iframe element inside the overlay is removed completely as well.

- (Method) __overlayProps.onIframeLoaded__ (*Optional*): This method is triggered when in the iframe element inside the overlay component has completely loaded. This is triggered upon the 'on load' event listener for the iframe element.

- (Method) __overlayProps.onIframeUnloaded__ (*Optional*): This method is triggered when the 'on unload' event occurs for the iframe element. This is being triggered inside a useEffect hook and is a part of the unmounting process for the iframe element.
<br/><br/>

### Pull Requests/Contributions and Issues
If there are any suggestions that you have, perhaps you would like to make a suggestion or contribution do go ahead and create a pull request. If you do face any issues when using this open source project, please feel free to raise an issue. It would also be great if you could demonstrate the issue with a sample project for me to see and correct.
<br/><br/>

###  Support
If you like this project, I would really appreciate you placing a star on the github project. This would really help encourage me to become a better developer. Speak to your friends and colleagues about this project too if you can and seek their support.
Here is wishing you a nice day and happy coding. Cheers!
