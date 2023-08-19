import React from "react";
import "./Navbar.index.css";
// import { Link } from "react-router-dom";


function Navbar() {
     return (
    
      <div className='btn'>
      
      <button>
        <a href="/">Home</a>
      </button>
    
      <button>
      <a href="/announcement" target="blank">Announcement</a>
      </button>
      
      <button>
      <a href="/events" target="blank">Events</a>
      </button>
     
      <button>
      <a href="/about" target="blank">About Us</a>
      
      </button>

      <button>
      <a href="/history" target="blank">History</a>
      </button>
      
    </div>  
    
  )
}
export default Navbar