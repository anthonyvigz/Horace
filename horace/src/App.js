import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.scss";
import Video from "./Video";
import Navbar from "./Components/Navbar";
import Horace from "./Components/Horace";
import Documents from "./Components/Documents";
import ModalVideo from 'react-modal-video'

function App() {
  const [isOpen, setOpen] = useState(false)

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
      <Route component={Video} exact path="/" />
      <div className="linkToVideo">
      <img src="https://i.imgur.com/APUm4Dw.png" alt="willieVid" />+
      <a onClick={() => setOpen(true)} class="play-btn"></a>
      </div>
    </div>
  );
}

export default App;
