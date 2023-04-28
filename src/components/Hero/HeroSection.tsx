import { useState } from "react";
import { Attractions } from "../../models/suggest";

const HeroSection = (attraction: Attractions) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const colorHeroEvent = {
    color: isHover ? "#f7f7f7" : "#94a3b8",
  };

  return (
    <div className="event-section">
      <a className="event-link" href={attraction.url} target="_blank">
        <div
          style={colorHeroEvent}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="event"
        >
          <h6>Data: TBD</h6>
          <h4>
            <span>{attraction.name}</span>
            <br />
            <span>{attraction.type}</span>
          </h4>
          <div className="event-content">
            <p>Some Text Must be added here.......</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default HeroSection;
