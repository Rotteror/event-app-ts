import "./event.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../store";
import { fetctEventDetail } from "../../store/eventActions";

import Loader from "../../components/shared/Loader";

const Event = () => {
  // initial event detail load!
  // TODO improve this steps!
  const [loading, setLoading] = useState(true);
  const id = useParams().id as string;

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetctEventDetail(id));
    setLoading(false);
  }, []);

  const currentEvent = useAppSelector((state) => state.event.currentEvent);

  console.log(currentEvent);

  return loading ? (
    <div>
      <Loader />
    </div>
  ) : (
    <div>
      <div className="container">
        <h1>{currentEvent.name}</h1>
        <div className="grid grid--2-cols">
          <div className="info-section">
            <div className="img-container">
              <img src={currentEvent.images[0].url} alt="" />
            </div>
            <div className="dates">
              <h6>{JSON.stringify(currentEvent.dates.start.localDate)}</h6>
              <p className="content-p"> 9:00PM</p>
            </div>
            <div className="dates">
              <h6>27 Aprl 2023</h6>
              <p className="content-p"> 9:00PM</p>
            </div>
            <div className="social-networks">
              <h6>Share With Friends</h6>
              <button>Face</button>
              <button>Tweet</button>
            </div>
          </div>
          <div className="action-section" style={{ background: "green" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Event;
