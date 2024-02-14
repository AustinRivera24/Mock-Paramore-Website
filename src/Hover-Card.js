// import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
 import { useState } from "react";



function ClickFlipCard() {
    const [isFlipped, setIsFlipped] = useState(false);


const card = {
height: "400px",
width: "300px",
borderRadius: "20px"};

const cardInner = {
    position: "relative",
    width: "100px",
    height: "0",
    paddingBottom: "100%",
    transition: "transform 0.6s",
    transformStyle: "perserve-3d"
};

const cardFront = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    backgroundColor: 'blue', // Example color
  };

  const cardBack = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    backgroundColor: 'red', // Example color
    transform: 'rotateY(180deg)', // Flipping it initially
  };

  const handleHover = () => {
    setIsFlipped(!isFlipped); // Toggle the flip effect on hover
  };




  return (
    <>
    <div style={card} onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <div style={cardInner}>
            <div style={cardFront}>
                <p>Front</p>
            </div>
            <div style={cardBack}>
                <p>Back</p>
            </div>
        </div>
    </div>
    </>
  );
}

export default ClickFlipCard;
