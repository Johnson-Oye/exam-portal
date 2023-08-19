import one from "../Images/one.jpg";
import two from "../Images/two.png";
import Dropdown from "../components/Dropdown";
import Dropsdown from "../components/Dropsdown";

const Home = () => {
  return (
    <>
      <div className="background">
        <img src={one} alt="" />
        <img id="logo" src={two} alt="" />
      </div>
      <h2>GulF Coast International School Ikeja, Lagos</h2>
      <h3>End of the Term Result Checker</h3>

      <div className="details">
        <form>
          <p>NAME:</p> <input type="name" placeholder="Enter your name" />
          <div className="class">
            <Dropsdown />
          </div>
          <div className="session">
            <Dropdown />
          </div>
          <div className="submit">
            <button>Submit</button>
          </div>
          <footer className="footer">
            <img src={two} alt="" />
            <p id="foot">@ 2023 - All Right Reserved</p>
            <p id="foott">
              Contact Web Developer - <a href="#">Oyetunji Oyedeji</a>
            </p>
          </footer>
        </form>
      </div>
    </>
  );
};

export default Home;
