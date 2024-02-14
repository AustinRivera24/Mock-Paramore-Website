// import logo from './logo.svg';
// import './App.css'; //allows the css to apply in this component
// import Navbar from './Navbar';
// import VideoBackground from './VideoBackground';
// import ImageOverlay from './ImageOverlay';
import { Outlet } from "react-router-dom";
// import MusicAndVideos from './Music+Videos';
// import {BroswerRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App; //allows the usage of this component to be called in other parts
