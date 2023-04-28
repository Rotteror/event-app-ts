import "wish.css";

const WishItem = () => {
  return (
      <div className="wrapper">
        <div className="img-container">
          <img src="_blank" alt="" />
        </div>
        <div className="text-event">some text</div>
        <div className="cta-info">
          <p>
            <label>Quantity: 15</label>
          </p>
          <button>Event Details</button>
        </div>
      </div>
  );
};

export default WishItem;
