import "./App.css";
//import MainCard from "./components/MainCard";
import AllButtons from "./components/AllButtons";
import Nav from "./components/Nav";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header_img">
          <Nav />
          <h1>Video Recommendation</h1>
        </div>
        <img
          className="logo"
          src="https://play-lh.googleusercontent.com/dxWyx6Ze2ITl99bO08My8hhbUGtedAnlyzwoohxLbxhgeC0pO5rKq1K7g4i5mWgaAg=w240-h480-rw"
          alt="video pic"
        ></img>
        <p id="#About" className="About">
          This is video Recommendation App. please feel free to browse and watch
          your favourite videos. you can also add your favourite videos and
          delete them if you dont like them. you can also like and dislike
          videos. if you have any question ,please fill the form below and
          contact me. Thank you and enjoy!!!
        </p>
      </header>

      <AllButtons />
      <Contact />
    </div>
  );
}

export default App;
