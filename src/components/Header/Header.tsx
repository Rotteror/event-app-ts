import "./header.css";

const Header = () => {
  return (
    <header className="site-header">
      <div className="logo-area primary-heading">
        <a href="_blank">Web Event App</a>
      </div>
      <div className="primary">
        <ul className="header-menu">
          <li>Events</li>
          <li>Gallery</li>
          <li>Create Event</li>
        </ul>
      </div>
      <div className="secondary">
        <ul className="header-menu">
          <li>Search</li>
          <li>Login</li>
          <li>Cart</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
