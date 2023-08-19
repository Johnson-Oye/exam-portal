import "./App.css";
import Dropsdown from "./Dropsdown";
import Dropdown from "./Dropdown";
import Term from "./Academic";
import "./Academic.index.css";
import "./Dropdown.index.css";
import "./Dropsdown.index.css";
import one from "./Images/one.jpg";
import two from "./Images/two.png";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Events from "./Pages/Events";
import Announcement from "./Pages/Announcement";
import History from "./Pages/History";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route, } from 'react-router-dom';





function App() {
  return (
    
    <div>
      
      <Navbar />
      
    <div className="background">
      <img src={one} />
      <img id="logo" src={two} />
    </div>
    <h2>GulF Coast International School Ikeja, Lagos</h2>
      <h3>End of the Term Result Checker</h3>

      <div className='details'>
      <form>
      <p>NAME:</p> <input type='name' placeholder='Enter your name' />
      
      <div className="class">
      <Dropsdown />
      </div>
      <div className="session">
      <Dropdown />
      </div>

      <div className="Term">
      <Term />
      </div>
      <div className="submit">
      <button>Submit</button>
      </div>
      <footer className="footer">
      <img src={two} />
      <p id="foot">@ 2023 - All Right Reserved</p>
      <p id="foott">Contact Web Developer - <a href="#">Oyetunji Oyedeji</a></p>
      </footer>
      </form>
      </div>
      </div>
   
    
  );
}

export default App;
