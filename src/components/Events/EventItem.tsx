import { EventInterface } from "../../models/index";

const EventItem = (props: EventInterface) => {
  return (
    <div className="event-card">
      <div className="image-wrap">
        <img src={props.images[0].url} alt="" />
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
