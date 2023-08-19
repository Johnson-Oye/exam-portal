import Home from '../Pages/Home';
import Announcement from '../Pages/Announcement';
import Events from '../Pages/Events';
import History from '../Pages/History';
import About from '../Pages/About';
import Layout from '../Pages/Layout';
import { Routes, Route } from 'react-router-dom';

export const AllRoutes = () => {
    return (
    
      <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Layout />} />
          <Route path="/history" element={<History/>} />
          <Route path="/announcement" element={<Announcement/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      
    );
  };