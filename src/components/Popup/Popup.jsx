import "./Popup.css";
import userLogo from "./shubham.jpg";

const Popup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>

        <img
          src={userLogo}
          alt="Developer's Photo"
          className="developer-photo"
        />
        <h3 className="popup-title">Developed & Deployed by:</h3>
        <h1 className="developer-name ">Shubham Hari Patil</h1>
        <p className="developer-message ">
          Learned so much during this OJT! This app showcases my independent
          coding and deployment skills
        </p>
        <button className="ok-button " onClick={onClose}>
          Got it!
        </button>
      </div>
    </div>
  );
};

export default Popup;
