import Navbar from "./Navbar";
import "./About.css";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";

function About() {
  const [isFlipped, setIsFlipped] = useState(false)

  function flipCard() {
    setIsFlipped(!isFlipped);
  }




  return (
    <>
      <div className="background">
        <Navbar />
        {/* Band Section */}
        <h1 className="band-header">The Band</h1>
        <div className="the-band">
          <div>
            <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
              <div className="card" onClick={flipCard}>
                <h1 style={{ textAlign: "center" }}>Hayley Williams</h1>
                <img className="card-image" src="../About-Photos/Hayley_Williams.jpg" alt="Hayley Williams" />
              </div>
              <div className="card card-back" onClick={flipCard}>
                <p>Hayley Williams, born in 1988, is an influential American singer-songwriter recognized for her captivating vocals and leadership as the frontwoman of the band Paramore. Rising to fame with Paramore's chart-topping hits like "Misery Business" and "Ain't It Fun," Williams has showcased versatility and emotional depth in her music. Beyond Paramore, she embarked on solo ventures, releasing the critically acclaimed album "Petals for Armor" in 2020. Williams' dynamic stage presence and candid lyrics resonate with audiences, cementing her status as a prominent figure in alternative rock. Her artistic evolution and unwavering authenticity continue to inspire fans worldwide.</p>
              </div>
            </ReactCardFlip>
          </div>
          <div>
            <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
              <div className="card" onClick={flipCard}>
                <h1 style={{ textAlign: "center" }}>Zac Farro</h1>
                <img className="card-image" src="../About-Photos/Zac_Farro.jpg" alt="Zac Farro" />
              </div>
              <div className="card card-back" onClick={flipCard}>
                <p>Zac Farro, born in 1990, is an accomplished American musician renowned for his drumming prowess and contributions to the band Paramore. As a founding member, Farro's rhythmic style helped define Paramore's sound, contributing to hits like "Decode" and "The Only Exception." Beyond Paramore, he pursued other musical projects, showcasing his versatility and creativity. Farro's passion for percussion and collaborative spirit have earned him admiration within the music industry. His enduring presence in Paramore reflects his integral role in shaping the band's identity, while his diverse musical endeavors continue to captivate audiences worldwide.</p>
              </div>
            </ReactCardFlip>
          </div>
          <div>
            <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
              <div className="card" onClick={flipCard}>
                <h1 style={{ textAlign: "center" }}>Taylor York</h1>
                <img className="card-image" src="../About-Photos/Taylor_York.jpg" alt="Taylor York" />
              </div>
              <div className="card card-back" onClick={flipCard}>
                <p>Taylor York, born in 1989, is a talented American musician celebrated for his role as the guitarist and songwriter for the band Paramore. Joining the group at a young age, York contributed to their signature sound, co-writing hits like "Still Into You" and "Hard Times." With his distinctive guitar riffs and melodic sensibilities, York has been instrumental in Paramore's evolution and success. His musical contributions, characterized by depth and innovation, have earned him widespread recognition and respect in the industry. York's creative vision continues to shape Paramore's sound, reaffirming his status as a vital member of the band and a respected musician in alternative rock.</p>
              </div>
            </ReactCardFlip>
            <div>
            </div>
          </div>
        </div>

        {/*Touring Members*/}
        <h1 className="touring-header">Touring Members</h1>
        <div className="touring-members">
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="card" onClick={flipCard}>
              <h1 style={{ textAlign: "center" }}>Brian Robert Jones</h1>
              <img className="card-image" src="../About-Photos/Brian_Robert_Jones.jpg" alt="Brain Robert Jones" />
            </div>
            <div className="card card-back" onClick={flipCard}>
              <p>Back</p>
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="card" onClick={flipCard}>
              <h1 style={{ textAlign: "center" }}>Joey Mullen</h1>
              <img className="card-image" src="../About-Photos/Joey_Mullen.jpg" alt="Joey Mullen" />
            </div>
            <div className="card card-back" onClick={flipCard}>
              <p>Back</p>
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="card" onClick={flipCard}>
              <h1 style={{ textAlign: "center" }}>Logan MacKenzie</h1>
              <img className="card-image" src="../About-Photos/Logan_MacKenzie.jpg" alt="Logan MackKenzie" />
            </div>
            <div className="card card-back" onClick={flipCard}>
              <p>Back</p>
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="card" onClick={flipCard}>
              <h1 style={{ textAlign: "center" }}>Joey Howard</h1>
              <img className="card-image" src="../About-Photos/Joey_Howard.jpg" alt="Joey Howard" />
            </div>
            <div className="card card-back" onClick={flipCard}>
              <p>Back</p>
            </div>
          </ReactCardFlip>


        </div>
      </div>
    </>
  );
}

export default About;
