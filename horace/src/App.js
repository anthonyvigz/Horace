import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.scss";
import Video from "./Video";
import Navbar from "./Components/Navbar";
import Horace from "./Components/Horace";
import Documents from "./Components/Documents";
import Testimonials from "./Components/Testimonials";
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
      <Route component={Testimonials} exact path="/testimonials" />
      <Route component={Video} exact path="/" />
      <div className="linkToVideo">
      <img src="https://i.imgur.com/APUm4Dw.png" alt="willieVid" />+
      <button onClick={() => setOpen(true)} class="play-btn"></button>
      </div>
      <div className="socialMediaIcons">
        <i class="fab fa-instagram"></i>
        <i class="fab fa-facebook"></i>
      </div>
      <h4 className="copyright">
        Horace in the Hall © 2021
      </h4>
    </div>
  );
}

export default App;
