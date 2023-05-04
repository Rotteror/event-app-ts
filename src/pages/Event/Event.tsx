import "./event.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  addWishItemToDb,
  addBoughtItemToDb,
} from "../../store/User/userAction";
import { useAppDispatch, useAppSelector } from "../../store";
import { fetctEventDetail } from "../../store/Event/eventActions";
import microCopy from "../../constants/microCopy";
import Loader from "../../components/shared/Loader";
import { formatDateRange, findDigit } from "../../util";
import { auth } from "../../firebase-config";
import { Link } from "react-router-dom";

const {
  wish: { replaceText },
} = microCopy;

const Event = () => {
  // Data and properties
  // initial event detail load!
  // Composobles
  const [quantity, setQuantity] = useState(1);
  const id = useParams().id as string;
  const dispatch = useAppDispatch();

  //Hooks
  useEffect(() => {
    dispatch(fetctEventDetail(id));
  }, []);

  const currentEvent = useAppSelector((state) => state.event.currentEvent);
  const currentUser = useAppSelector((state) => state.user.user.email);

  //Methods
  const addWishTickets = (item: any) => {
    if (auth.currentUser) {
      const wishItem = {
        image: item.images[0]?.url,
        text: item.placeNote || replaceText,
        tickets: quantity,
        eventId: item.id,
        userId: auth.currentUser?.uid,
      };

      dispatch(addWishItemToDb(wishItem));

      setQuantity(1);
    }
  };

  const purchaseTickets = (item: any) => {
    if (auth.currentUser) {
      const boughtItem = {
        image: item.images[0]?.url,
        text: item.placeNote || replaceText,
        tickets: quantity,
        eventId: item.id,
        userId: auth.currentUser?.uid,
      };

      dispatch(addBoughtItemToDb(boughtItem));

      setQuantity(1);
    }
  };

  // Templates
  if (!currentEvent.name)
    return (
      <div>
        <Loader />
      </div>
    );

  // Due the lack of API each event will mapped to specific type ... :@ :/
  const mappedEvent = {
    name: currentEvent.name,
    images: currentEvent.images[0]?.url,
    startDate: formatDateRange(currentEvent.dates.start.localDate),
    localTime: currentEvent.dates.start.localTime,
    statusCode: currentEvent.dates.status.code.toUpperCase(),
    segmentName: currentEvent.classifications[0]?.segment.name,
    genreName: currentEvent.classifications[0]?.genre.name,
    promoterName: currentEvent.promoter.name,
    legalAgeRestriction: currentEvent.ageRestrictions?.legalAgeEnforced
      ? "Yes"
      : "No",
    ticketLimit: currentEvent.ticketLimit?.info
      ? findDigit(currentEvent.ticketLimit.info)
      : 2,
    seatmap:
      currentEvent.seatmap?.staticUrl ||
      "https://maps.ticketmaster.com/maps/geometry/3/event/19005E6EC7A83C0C/staticImage?type=png&systemId=HOST",
    priceRangeMin: "25.00",
    priceRangeMax: "55.00",
  };

  // let ticketLimit: Number = findDigit(currentEvent.ticketLimit.info);

  return (
    <div>
      <div className="container">
        <h1 className="title">{mappedEvent.name}</h1>
        <div className="grid grid--2-cols detail">
          <div className="info-section">
            <div className="img-container">
              <img src={mappedEvent.images} alt="" />
            </div>
            <div className="dates">
              <h4>{formatDateRange(mappedEvent.startDate)}</h4>
              <p className="content-p">{mappedEvent.localTime}</p>
              <p className="content-p">
                <strong>{mappedEvent.statusCode}</strong>
              </p>
            </div>
            <div className="type">
              <h6>
                {mappedEvent.segmentName} /{" " + mappedEvent.genreName}
              </h6>
              <p className="content-p">
                <strong>Promooted By: </strong>
                {mappedEvent.promoterName}
              </p>
              <p className="content-p">
                <strong>Age Restrictions: </strong>
                {mappedEvent.legalAgeRestriction}
              </p>
              <p className="content-p">
                <strong>Ticket Limit:</strong>
                {"" + mappedEvent.ticketLimit}
              </p>
            </div>
          </div>
          <div className="action-section">
            <div className="img-staticUrl">
              <img src={mappedEvent.seatmap} alt="" />
            </div>
            <div className="price-range">
              <p className="content-p">
                <strong>Min:</strong> {mappedEvent.priceRangeMin} USD
              </p>
              <p className="content-p">
                <strong>Max:</strong> {mappedEvent.priceRangeMax} USD
              </p>
              <p className="content-p note">
                {currentEvent?.pleaseNote || "N/A"}
              </p>
            </div>
            {currentUser && (
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
                      prev === mappedEvent.ticketLimit
                        ? mappedEvent.ticketLimit
                        : prev + 1
                    )
                  }
                >
                  +
                </button>
              </div>
            )}
            {currentUser && (
              <div className="action">
                <button
                  onClick={() => purchaseTickets(currentEvent)}
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
            )}
            {!currentUser && (
              <div className="login-container">
                <div className="message">
                  Please log in so you can purchase tickets
                </div>
                <Link className="link-button" to="/login">
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
