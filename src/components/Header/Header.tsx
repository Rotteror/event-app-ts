import "./header.css";
import { useNavigate, Link } from "react-router-dom";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useAppDispatch, useAppSelector } from "../../store";
import { logoutUser } from "../../store/User/userSlice";
import { User } from "../../models/user-administration";
import Badge from "../shared/Badge";
import { useState, useEffect } from "react";

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userInfo = useAppSelector((state) => state.user);
  const currentUserWishlist: any = userInfo.user.wishlist.length;
  const currentUserCartlist: any = userInfo.user.purchases.length;

  const [wishlistItems, setWishlistItems] = useState(currentUserWishlist);
  const [cartlistItems, setCartlistItems] = useState(currentUserCartlist);

  const currentUser: User = useAppSelector((state) => state.user.user);
  const isAuth: boolean = currentUser.email !== "";

  useEffect(() => {
    setWishlistItems(currentUserWishlist);
    setCartlistItems(currentUserCartlist);
  }, [currentUserWishlist, currentUserCartlist]);

  const logoutHandler = async (e: any) => {
    e.preventDefault();

    await signOut(auth);

    dispatch(logoutUser());

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
            <Link to="/">Events</Link>
          </li>
        </ul>
      </div>
      <div className="secondary">
        <ul className="header-menu">
          {isAuth && (
            <>
              <li>Welcome {currentUser.email}</li>
              <li className="container-with-badge">
                <Link to="/wishlist">Wishlist</Link>
                <Badge items={wishlistItems} />
              </li>
              <li className="container-with-badge">
                <Link to="/cart">Cart</Link>
                <Badge items={cartlistItems} />
              </li>
              <li>
                <Link to="/" onClick={logoutHandler}>
                  Logout
                </Link>
              </li>
            </>
          )}
          {!isAuth && (
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
