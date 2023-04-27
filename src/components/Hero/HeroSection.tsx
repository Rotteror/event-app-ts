const HeroSection = () => {
  return (
    <div className="event-section" style={{ zIndex: 6 }}>
      <div className="overlay"></div>
      <a className="event-link" href="_blank">
        <div className="event">
          <h6>Data: 04.05.23</h6>
          <h4>
            <span>Title: Some Title</span>
            <br />
            <span>Category: Digital Category</span>
          </h4>
          <div className="event-content">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content... It is a long established fact that a
              reader will be distracted by the readable content...
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default HeroSection;
