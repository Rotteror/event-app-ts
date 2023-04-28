import { EventInterface } from "../../models/index";
import { useNavigate } from "react-router-dom";

const EventItem = (props: EventInterface) => {
  const navigate = useNavigate();
  const navigateToDetails = (id: string) => {
    navigate(`/event/${id}`);
  };

  return (
    <div onClick={() => navigateToDetails(props.id)} className="event-card">
      <div className="image-wrap">
        <img src={props.images[0]?.url} alt="" />
      </div>
      <div className="event-titles">
        <h3>
          <span>{props.name}</span>
          <span>{props.type}</span>
        </h3>
      </div>
      <div className="event-content">
        <p>{props.promoter.name}</p>
        <p>{props.promoter.description}</p>
      </div>
    </div>
  );
};

export default EventItem;
