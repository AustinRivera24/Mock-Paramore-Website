import Navbar from "./Navbar";
import VideoBackground from "./VideoBackground";
import ImageOverlay from "./ImageOverlay";
import "./App.css";

function Altogether() {
  return (
    <div>
      <Navbar customStyle="bottom" />
      <VideoBackground />
      <ImageOverlay />
    </div>
  );
}

export default Altogether;
