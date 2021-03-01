import React, { useEffect } from "react";
import "../Styling/horace.scss"
import Aos from "aos";
import "aos/dist/aos.css";

export default function Horace() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return <div className="mainHorace">
    <div className="horaceBio">
      <img       data-aos="fade-in"
      data-aos-duration="700"
      data-aos-easing="ease-in-out" src="https://i.imgur.com/5o4wMMG.jpg" width="600" alt="horaceAndWillie" />
      <div className="textBio">
        <h4       data-aos="fade-in"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out">
        Horace Stoneham is the single constant executive in the
        continuum of the expansion 
        of baseball's demographic and geographic diversity.
        </h4>
        <h4       data-aos="fade-in"
      data-aos-duration="1550"
      data-aos-easing="ease-in-out">
        He is a baseball man,  schooled by the immortal hall of famers 
        of baseball...to bring baseball culturally forward, creating 
        more legendary moments, more hall of fame players, that define
         our national pastime today as it did 100 years ago than any 
         other beaseball executive.
        </h4>
        <h4       data-aos="fade-in"
      data-aos-duration="1900"
      data-aos-easing="ease-in-out">
        Horace's relevance not only for baseball, but for his 
        economic impact along with being a driving force at the
         forefront of integrating baseball across cultures, from 
         the negro leagues, Latin America and Japan, he  belongs in 
         Cooperstown, as the Giant among leagends that have emanated
          from his vision for the future of baseball. We live that
           vision today in Baseball. 
        </h4>
        <h4       data-aos="fade-in"
      data-aos-duration="2500"
      data-aos-easing="ease-in-out">
        Horace Stoneham, a baseball man, ahead of his time.
        </h4>
    </div>
  </div>
  </div>
}
