import React, { useEffect } from "react";
import "../Styling/documents.scss"
import Aos from "aos";
import "aos/dist/aos.css";

export default function Documents(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
  <div className="docCard">
      <h1>{props.title}</h1>
      <div className="wrap">
         <img src={props.img} alt={props.title} />
      </div>
  </div>
  )
}
