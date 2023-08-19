import { Routes, Route } from "react-router-dom";
import Home from "./../Pages/Home";
import History from "./../Pages/History";
import Announcement from "./../Pages/Announcement";
import Events from "./../Pages/Events";
import About from "./../Pages/About";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
      <Route path="/announcement" element={<Announcement />} />
      <Route path="/events" element={<Events />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default AllRoutes;
