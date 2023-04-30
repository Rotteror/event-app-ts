import "./header.css";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="site-header">
      <div className="logo-area primary-heading">
        <a href="/">Web Event App</a>
      </div>
      <div className="primary">
        <ul className="header-menu">
          <li>
          <Link to="/events">Events</Link>
          </li>
          <li>
            <a href="/wishlist">Gallery</a>
          </li>
          <li>
            <a href="/wishlist">Create Event</a>
          </li>
        </ul>
      </div>
      <div className="secondary">
        <ul className="header-menu">
          <li>
            <a href="/wishlist">Search</a>
          </li>
          <li>
            <Link to="/wishlist">Wishlist</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
