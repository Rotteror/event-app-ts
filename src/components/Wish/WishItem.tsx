import "./wishitem.css";
import { useNavigate } from "react-router-dom";

const WishItem = ({ image, text, tickets, eventId }: any) => {
  const navigate = useNavigate();
  const navigateToDetails = (id: string) => {
    navigate(`/event/${id}`);
  };
  return (
    <div className="wrapper">
      <div className="img-container">
        <img src={image} alt="" />
      </div>
      <div className="text-event">{text}</div>
      <div className="cta-info">
        <p className="tickets">
          <strong>Quantity:</strong>
          <label>{tickets}</label>
        </p>
        <button className="cta" onClick={() => navigateToDetails(eventId)}>
          Details
        </button>
      </div>
    </div>
  );
};

export default WishItem;
