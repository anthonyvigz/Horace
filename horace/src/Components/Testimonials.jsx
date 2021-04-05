import React, { useEffect } from "react";
import "../Styling/testimonials.scss"
import Aos from "aos";
import "aos/dist/aos.css";

export default function Testimonials() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return <div className="testimonials">
            <div data-aos="fade-in"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out" className="textBio">
                <h3>
                April, 2021
                </h3>
                <p>
                My father frequently stated his wish that Horace Stoneham 
                be inducted into the Baseball Hall of Fame. Dad regarded Mr. 
                Stoneham very highly and felt he was a true baseball pioneer 
                who was fair minded, kind, and articulate about his passion for 
                the game and all of its players. 
                </p>
                <p>
                As an owner, Mr. Stoneham had the courage of signing my father and 
                other African American and Latino players during a time in our history 
                when it was not popular to do so. Dad felt Mr. Stoneham was forward 
                thinking, ahead of his time and most assuredly deserving of Induction.
                </p>
                <p>
                It concerned and frustrated Dad that Horace Stoneham hadn’t been 
                inducted into the Baseball Hall of Fame with the other great club 
                owners during my father’s lifetime. It was an event he had long hoped 
                to witness.

                </p>
                <h2>
                <span>- From Monte Irvin's daughter, </span> Patricia Irvin Gordon
                </h2>
             </div>
         </div>
}
