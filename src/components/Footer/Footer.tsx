import "./footer.css";

// 2  - &#9312;
// 3  - &#9313;
// 4  - &#9314;

// Comments all <a> tags causing errors: state reactivity, infinity loops, etc

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-grid grid grid--12-cols">
        <div className="menu-column">
          <h6 className="label minor-heading">
            <span className="num">&#9312; </span>
            <span>Links</span>
          </h6>
          <div className="menu-content">
            {/* <ul className="footer-list-menu">
              <li className="footer-menu-item">
                <a href="javascript:void(0)">Events</a>
              </li>
              <li className="footer-menu-item">
                <a href="javascript:void(0)">Gallery</a>
              </li>
              <li className="footer-menu-item">
                <a href="javascript:void(0)">About</a>
              </li>
              <li className="footer-menu-item">
                <a href="javascript:void(0)">Careers</a>
              </li>
            </ul> */}
          </div>
        </div>
        {/* section 2 */}
        <div className="menu-column">
          <h6 className="label minor-heading">
            <span className="num">&#9313; </span>
            <span>Follow</span>
          </h6>
          <div className="menu-content">
            {/* <ul className="footer-list-menu">
              <li className="footer-menu-item">
                <a href="javascript:void(0)">Events</a>
              </li>
              <li className="footer-menu-item">
                <a href="javascript:void(0)">Gallery</a>
              </li>
              <li className="footer-menu-item">
                <a href="javascript:void(0)">About</a>
              </li>
              <li className="footer-menu-item">
                <a href="javascript:void(0)">Careers</a>
              </li>
            </ul> */}
          </div>
        </div>
        {/* section 3 */}
        <div className="menu-column">
          <h6 className="label minor-heading">
            <span className="num">&#9314; </span>
            <span>Contacts</span>
          </h6>
          <div className="menu-content">
            <ul className="footer-list-menu">
              {/* <li className="footer-menu-item">
                <a href="javascript:void(0)">Events</a>
              </li>
              <li className="footer-menu-item">
                <a href="javascript:void(0)">Gallery</a>
              </li>
              <li className="footer-menu-item">
                <a href="javascript:void(0)">About</a>
              </li>
              <li className="footer-menu-item">
                <a href="javascript:void(0)">Careers</a>
              </li> */}
            </ul>
          </div>
        </div>
        {/* section 4 */}
        <div className="newsletter">
          <h6 className="label minor-heading top-letter">
            <span className="num">&#9315; </span>
            <span>NEWSLETTER</span>
          </h6>
          <form className="bottom-letter">
            <div className="input-wrap">
                <div className="email">
                    <span>&#10148;</span>
                    <input placeholder="Enter your email address"  type="email"/>
                    <button type="submit">Subscribe</button>
                </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
