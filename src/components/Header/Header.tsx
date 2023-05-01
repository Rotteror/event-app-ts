import "./header.css";
import { useNavigate, Link } from "react-router-dom";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useAppDispatch, useAppSelector } from "../../store";
import { logoutUser } from "../../store/User/userSlice";

const Header = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const isLoggedIn = auth.currentUser?.uid;
  const isAuth = useAppSelector((state) => state.user.user);

  const logoutHandler = async (e: any) => {
    e.preventDefault();

    await signOut(auth);

    dispatch(logoutUser())

    navigate("/");
  };

  return (
    <header className="site-header">
      <div className="logo-area primary-heading">
      <Link to="/">Event Web App</Link>
      </div>
      <div className="primary">
        <ul className="header-menu">
          <li>
            <Link to="/events">Events</Link>
          </li>
        </ul>
      </div>
      <div className="secondary">
        <ul className="header-menu">
          {isLoggedIn && (
            <>
              <li>Welcome {isAuth.email}</li>
              <li>
                <Link to="/wishlist">Wishlist</Link>
              </li>
              <li>
                <Link to="/" onClick={logoutHandler}>
                  Logout
                </Link>
              </li>
            </>
          )}
          {!isLoggedIn && (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
