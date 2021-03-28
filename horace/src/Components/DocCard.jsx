import React from "react";
import { motion } from "framer-motion";
import "../Styling/documents.scss"

export default function DocCard(props) {
  // variants for word animation
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -55 },
  };
  return (
    <motion.div
      variants={item}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="imgBlock"
    >
            <a
            target="_blank"
            rel="noopener noreferrer"
            href={props.link}
          >
      <div className="wrap">
        <img width="300" src={props.img} alt={props.title} />
      </div>
      </a>
      <a
            target="_blank"
            rel="noopener noreferrer"
            href={props.link}
          >
      <div className="overlay">
        <div className="pieceInfo">
          <h4 className="workTitle">{props.title}</h4>
        </div>
      </div>
      </a>
    </motion.div>
  );
}