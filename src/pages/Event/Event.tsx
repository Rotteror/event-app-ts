import "./event.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { addWishList } from "../../store/User/userSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import { fetctEventDetail } from "../../store/Event/eventActions";
import microCopy from "../../constants/microCopy";
import Loader from "../../components/shared/Loader";
import { formatDateRange, findDigit } from "../../util";
const {
  wish: { replaceText },
} = microCopy;

const Event = () => {
  // Data and properties
  // initial event detail load!
  // TODO improve this steps!
  // Composobles
  const [quantity, setQuantity] = useState(1);
  const id = useParams().id as string;
  const dispatch = useAppDispatch();

  //Hooks
  useEffect(() => {
    dispatch(fetctEventDetail(id));
  }, []);

  const currentEvent = useAppSelector((state) => state.event.currentEvent);

  //Methods
  const addWishTickets = (item: any) => {
    //
    const wishItem = {
      image: item.images[0]?.url,
      text: item.placeNote || replaceText,
      tickets: quantity,
      eventId: item.id,
    };
    dispatch(addWishList(wishItem));
  };
  const purchaseTickets = (quantity: number) => {
    //
    console.log(quantity);
  };

  // Templates
  if (!currentEvent.name)
    return (
      <div>
        <Loader />
      </div>
    );

  let ticketLimit: Number = findDigit(currentEvent.ticketLimit.info);

  return (
    <div>
      <div className="container">
        <h1 className="title">{currentEvent.name}</h1>
        <div className="grid grid--2-cols detail">
          <div className="info-section">
            <div className="img-container">
              <img src={currentEvent.images[0]?.url} alt="" />
            </div>
            <div className="dates">
              <h4>{formatDateRange(currentEvent.dates.start.localDate)}</h4>
              <p className="content-p">{currentEvent.dates.start.localTime}</p>
              <p className="content-p">
                <strong>{currentEvent.dates.status.code.toUpperCase()}</strong>
              </p>
            </div>
            <div className="type">
              <h6>
                {currentEvent.classifications[0]?.segment.name} /
                {" " + currentEvent.classifications[0]?.genre.name}
              </h6>
              <p className="content-p">
                <strong>Promooted By: </strong>
                {currentEvent.promoter.name}
              </p>
              <p className="content-p">
                <strong>Age Restrictions: </strong>
                {currentEvent.ageRestrictions.legalAgeEnforced ? "Yes" : "No"}
              </p>
              <p className="content-p">
                <strong>Ticket Limit:</strong>
                {currentEvent.ticketLimit.info}
              </p>
            </div>
          </div>
          <div className="action-section">
            <div className="img-staticUrl">
              <img src={currentEvent.seatmap.staticUrl} alt="" />
            </div>
            <div className="price-range">
              <p className="content-p">
                <strong>Min:</strong> {currentEvent.priceRanges[0]?.min} USD
              </p>
              <p className="content-p">
                <strong>Max:</strong> {currentEvent.priceRanges[0]?.max} USD
              </p>
              <p className="content-p note">
                {currentEvent?.pleaseNote || null}
              </p>
            </div>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev: any) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button
                onClick={() =>
                  setQuantity((prev: any) =>
                    prev === ticketLimit ? ticketLimit : prev + 1
                  )
                }
              >
                +
              </button>
            </div>
            <div className="action">
              <button
                onClick={() => purchaseTickets(quantity)}
                className="cta-button"
              >
                Purchase
              </button>
              <button
                onClick={() => addWishTickets(currentEvent)}
                className="cta-button"
              >
                Add to Wish List
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
