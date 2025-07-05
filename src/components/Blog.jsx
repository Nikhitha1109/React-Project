import "../App.css";
import Switerzland from "../assets/switerzland.jpg";
import Paris from "../assets/paris.jpg";
import qutubminar from "../assets/qutubminar.jpg";
import redfort from "../assets/redfort.jpg";
import tajmahal from "../assets/tajmahal.jpg";

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-item">
        <img src={Switerzland} alt="switzerland" />
        <h1>Switzerland</h1>
      </div>

      <div className="blog-item">
        <img src={Paris} alt="Paris" />
        <h1>Paris</h1>
      </div>

      <div className="blog-item">
        <img src={qutubminar} alt="Qutub Minar" />
        <h1>Qutub Minar</h1>
      </div>

      <div className="blog-item">
        <img src={redfort} alt="Red Fort" />
        <h1>Red Fort</h1>
      </div>

      <div className="blog-item">
        <img src={tajmahal} alt="Taj Mahal" />
        <h1>Taj Mahal</h1>
      </div>
    </div>
  );
};

export default Blog;
