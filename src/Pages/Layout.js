import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>

          <Link to="/">Home</Link>
          <Link to="/announcement">Announcement</Link>
          <Link to="/events">Events</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/history">history</Link>
  </>

  )
}

export default Layout


