import React, { useEffect } from "react";
import "../Styling/horace.scss"
import Aos from "aos";
import "aos/dist/aos.css";
import pdf from './HoraceStonehamNarrative.pdf'

export default function Horace() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return <div className="mainHorace">
    <a href={pdf} rel="noopener noreferrer" target = "_blank" className="horaceStory">
      Here is his story. <i class="fas fa-file-alt"></i>
    </a>
    <div className="horaceBio">
      <div className="textBio">
        <h4       data-aos="fade-in"
      data-aos-duration="2000"
      data-aos-easing="ease-in-out">
        <span id="horacename">Horace Stoneham</span> is my grandfather. His story and contribution to the 
        game of baseball has been lost to history. You may not know his name, 
        but you live and benefit from his impact and legacy every day. Of the 
        thousands of people who have contributed to the development of baseball, 
        Horace Stoneham is the catalyzing owner in the continuum of baseball's 
        demographic and geographic expansion.
        </h4>
        <h4       data-aos="fade-in"
      data-aos-duration="3000"
      data-aos-easing="ease-in-out">
        He is a baseball man, schooled by the immortal Hall of Famers, 
        yet he brought baseball culturally forward, creating more legendary
        moments, more Hall of Fame players, more places to experience baseball 
        than any other baseball executive.
        </h4>
        <h4       data-aos="fade-in"
      data-aos-duration="5000"
      data-aos-easing="ease-in-out">
        Please help me get Horace In the Hall 
        for the Class of 2022. I would love to hear from you. You can email me at: <span><a target="_blank"
            rel="noopener noreferrer" href="mailto: info@horaceinthehall.com">info@horaceinthehall.com <i class="fas fa-envelope"></i></a></span>
        </h4>
        <h4       data-aos="fade-in"
      data-aos-duration="3000"
      data-aos-easing="ease-in-out">
        I am most grateful, <span>Jaime Rupert</span>
        </h4>
    </div>
  </div>
  </div>
}
