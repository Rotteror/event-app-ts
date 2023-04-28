import "./event.css";

import { useAppDispatch, useAppSelector } from "../../store";
import { fetctEventDetail } from "../../store/eventActions";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Event = () => {
  // initial event detail load!
  // TODO improve this steps!
  const id = useParams().id as string;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetctEventDetail(id));
  }, []);

  const currentEvent = useAppSelector((state) => state.event.currentEvent);

  return (
    <div>
      <p style={{ background: "red" }}>Some text</p>
      <h1>{currentEvent.name}</h1>
      <div className="container">
        <div className="grid grid--2-cols">
          <div className="info-section">
            <div className="img-container">
              <img src='currentEvent.url' alt=''/>
            </div>
            <div className="dates">
              <h6>Date</h6>
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
