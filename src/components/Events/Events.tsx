import "./events.css";
import EventItem from "./EventItem";
import { useAppSelector } from "../../store";
import { EventInterface } from "../../models";

const Events = () => {
  const { events } = useAppSelector((state) => state.event);

  return (
    <div className="container">
      <div className="event-container">
        {events.map((event: EventInterface) => (
          <EventItem {...event} key={event.id} />
        ))}
      </div>
    </div>
  );
};

export default Events;
