import "./events.css";
import EventItem from "./EventItem";
import { useAppSelector } from "../../store";
import { EventInterface } from "../../models";

const Events = () => {
  const { events } = useAppSelector((state) => state.event);
  const { filteredEvents } = useAppSelector((state) => state.event);

  const items = filteredEvents.length === 0 ? events : filteredEvents;

  return (
    <div className="container">
      <div className="event-container">
        {items.map((event: EventInterface) => (
          <EventItem {...event} key={event.id} />
        ))}
      </div>
    </div>
  );
};

export default Events;
