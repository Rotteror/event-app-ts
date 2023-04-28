import "./header.css";

const Header = () => {
  return (
    <header className="site-header">
      <div className="logo-area primary-heading">
        <a href="/">Web Event App</a>
      </div>
      <div className="primary">
        <ul className="header-menu">
          <li>
            <a href="/">Events</a>
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
            <a href="/wishlist">Profile</a>
          </li>
          <li>
            <a href="/wishlist">Login</a>
          </li>
          <li>
            <a href="/wishlist">Cart</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
