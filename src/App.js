// import logo from './logo.svg';
import './App.css'; //allows the css to apply in this component
import Navbar from './Navbar';
import VideoBackground from './VideoBackground';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <VideoBackground/>
      </header>
    </div>
  );
}

export default App; //allows the usage of this component to be called in other parts
