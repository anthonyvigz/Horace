import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.scss";
import Video from "./Video";
import Navbar from "./Components/Navbar";
import Horace from "./Components/Horace";
import Documents from "./Components/Documents";
import Testimonials from "./Components/Testimonials";
import ModalVideo from 'react-modal-video';
import useWindowDimensions from "./Components/WindowDimensions";
import pdf from './Components/HoraceStonehamNarrative.pdf'

function App() {
  const [isOpen, setOpen] = useState(false);
  const { width } = useWindowDimensions();

if (width > 650) {
  return (
    <div className="mainApp">
      <Navbar />
      <ModalVideo 
        channel='vimeo' 
        isOpen={isOpen} 
        videoId="517909039" 
        autoplay={1}
        controls={0}
        showinfo={0}

        onClose={() => setOpen(false)} 
      />
      <Route component={Horace} exact path="/horace" />
      <Route component={Documents} exact path="/documents" />
      <Route component={Testimonials} exact path="/testimonials" />
      <Route component={Video} exact path="/" />
      <div className="linkToVideo">
      <img src="https://i.imgur.com/APUm4Dw.png" alt="willieVid" />+
      <button onClick={() => setOpen(true)} class="play-btn"></button>
      </div>
      <div className="socialMediaIcons">
        <i class="fab fa-instagram"></i>
        <i class="fab fa-facebook"></i>
        <a target="_blank"
            rel="noopener noreferrer" href="mailto: info@horaceinthehall.com"><i class="fas fa-envelope"></i></a>
      </div>
      <h4 className="copyright">
        Horace in the Hall © 2021
      </h4>
    </div>
  )
} else {
  return (
    <div className="mobileMain">
       <img src="https://i.imgur.com/tJv2gbj.png" width="135px" alt="logo" />
       <div className="mobileIcons">
       <a target="_blank"
            rel="noopener noreferrer" href="https://www.instagram.com/horaceinthehall">
        <i class="fab fa-instagram"></i>
        </a>
        <a target="_blank"
            rel="noopener noreferrer" href="mailto: info@horaceinthehall.com">
        <i class="fab fa-facebook"></i>
        </a>
        <a target="_blank"
            rel="noopener noreferrer" href="mailto: info@horaceinthehall.com"><i class="fas fa-envelope"></i></a>
      </div>
      <a href={pdf} rel="noopener noreferrer" target = "_blank" className="storyMobile">
      Here is his story. <i class="fas fa-file-alt"></i>
    </a>
      <h4 className="mobileCopyright">
        Horace in the Hall © 2021
      </h4>
       <h1>To experience the full site, please visit on a desktop browser.</h1>
    </div>
  )
}
}

export default App;
