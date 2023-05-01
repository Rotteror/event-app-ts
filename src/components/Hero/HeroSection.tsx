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
            <p className="p-content">{attraction.name}</p>
            <br />
            <p className="p-content">{attraction.type}</p>
          </h4>
          <div className="event-content">
            <p className="p-content">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores facilis numquam nisi non reiciendis ullam consectetur
              architecto eos quos aperiam.
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default HeroSection;
