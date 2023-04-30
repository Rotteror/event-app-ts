import "./hero.css";
import { useAppSelector } from "../../store";
import { Attractions } from "../../models";
import HeroSection from "./HeroSection";
import Loader from "../../components/shared/Loader";

const Hero = () => {
  const { attractions } = useAppSelector(
    (state) => state.event.suggestedEvents
  );

  if (attractions.length === 0)
    return (
      <div>
        <Loader />
      </div>
    );

  return (
    <div className="hero-section">
      <div className="hero-wrap">
        <div className="title">
          <h1>Events Calendar</h1>
        </div>
      </div>
      <div className="suggested-events-wrap">
        {attractions.slice(0, 4).map((attraction) => (
          <HeroSection {...attraction} key={attraction.id} />
        ))}
      </div>
    </div>
  );
};

export default Hero;
