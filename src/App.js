import './App.css';
import Landing from './components/landing';

function App() {
  return (
    <div className="App">
        <div>
          <video id="backgroundvideo" autoPlay loop muted>
            <source src={require("./videos/cloud.mp4")} type="video/mp4" />
          </video>
      </div>
      <div className="center-screen Main">
        <Landing/>
      </div>
    </div>
  );
}

export default App;
