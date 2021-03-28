import React, { useEffect } from "react";
import "../Styling/documents.scss"
import Aos from "aos";
import "aos/dist/aos.css";
import { docCards } from "./docCards";
import DocCard from './DocCard';

export default function Documents() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
  <div className="mainDocuments">
      {docCards.map(card => {
          return (
          <DocCard img={card.imgUrl} link={card.link} title={card.title} />
          )
      })}
  </div>
  )
}
